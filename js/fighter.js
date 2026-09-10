// ===== NEON KUMITE : fighter (state machine + combat) =====
import * as THREE from 'three';
import { MOVES, BALANCE } from './config.js';
import { buildRig, Animator } from './anim.js';

export function lerpAngle(a,b,t){
  let d=(b-a)%(Math.PI*2);
  if(d>Math.PI)d-=Math.PI*2; if(d<-Math.PI)d+=Math.PI*2;
  return a+d*Math.min(1,t);
}
const _v1=new THREE.Vector3(), _v2=new THREE.Vector3();

const HITTABBLE = ['idle','dash','attack','block','hit','launch','crush','parry','taunt'];
const ATTACK_CLIP = { jab:'jab', jab2:'jab2', straight:'straight', kick:'kick', kickhigh:'kickhigh',
  heavy:'heavy', sweep:'sweep', airatk:'airatk', grab:'grab', super:'super' };

export class Fighter {
  constructor(scene, def, opts={}){
    this.scene=scene; this.def=def;
    this.label=opts.label||'1P';
    this.rig=buildRig(def.palette, def.body);
    scene.add(this.rig.group);
    this.anim=new Animator(this.rig);
    this.pos=this.rig.group.position;
    this.vel=new THREE.Vector3();
    this.yaw=0;
    this.maxhp=Math.round(def.hp); this.atkMul=def.atk; this.defMul=def.def; this.spdMul=def.spd;
    this.cmd={mx:0,mz:0,punch:false,kick:false,heavy:false,grab:false,super:false,jump:false,dash:false,block:false,taunt:false,sweepKick:false};
    this.reset(0,0,0);
  }
  reset(x,z,yaw,keepHP=false){
    this.pos.set(x,0,z); this.vel.set(0,0,0); this.yaw=yaw;
    this.rig.group.rotation.set(0,yaw,0);
    if(!keepHP){ this.hp=this.maxhp; }
    this.meter=0; this.stam=BALANCE.maxStam;
    this.state='idle'; this.tState=0; this.stun=0;
    this.airborne=false; this.vy=0;
    this.atk=null; this.hasHit=false; this.whiffed=false; this.hitIdx=0;
    this.blockHeld=false; this.blockTap=0; this.wasBlock=false;
    this.dashT=0; this.dashDir=new THREE.Vector3(); this.backdash=false;
    this.tGrab=0; this.throwVec=new THREE.Vector3(); this.grabber=null;
    this.wallCd=0; this.flash=0; this.landCd=0;
    this.comboDealt=0; this.comboDmg=0; this.comboTaken=0; this.comboTakenDmg=0; this.comboTimer=0;
    this.stamDelay=0; this.crushT=0; this.downT=0; this.wakeT=0; this.koT=0;
    this.dealtTotal=0; this.maxCombo=0;
    this.anim.play('idle',0.2);
    this.rig.setFlash(0);
    this.syncRig();
  }
  // ---- 状態遷移 ----
  faceFoe(foe, rate=12, dt=0.016){
    _v1.subVectors(foe.pos,this.pos); _v1.y=0;
    if(_v1.lengthSq()<0.0001) return;
    this.yaw=lerpAngle(this.yaw, Math.atan2(_v1.x,_v1.z), rate*dt);
  }
  fwd(out){ return out.set(Math.sin(this.yaw),0,Math.cos(this.yaw)); }
  distTo(foe){ _v1.subVectors(foe.pos,this.pos); _v1.y=0; return _v1.length(); }
  isHittable(){ return HITTABBLE.includes(this.state); }
  canAct(){ return (this.state==='idle') && this.landCd<=0; }
  grounded(){ return !this.airborne; }

  tryStartBlock(){
    if(this.state!=='idle') return;
    this.state='block'; this.tState=0; this.stun=0;
    this.anim.play('block',0.06);
  }
  startAttack(id){
    const mv=MOVES[id]; if(!mv) return false;
    if(id==='super'){ if(this.meter<100) return false; this.meter=0; }
    this.state='attack'; this.tState=0; this.atkT=0;
    this.atk=mv; this.atkId=id; this.hasHit=false; this.whiffed=false; this.hitIdx=0;
    this.anim.play(ATTACK_CLIP[id]||'jab', 0.05);
    return true;
  }
  startDash(dx,dz){
    if(this.stam<8) return false;
    this.stam-=BALANCE.dashStam; this.stamDelay=BALANCE.stamRegenDelay;
    this.state='dash'; this.tState=0; this.dashT=0;
    this.backdash=false;
    this.dashDir.set(dx,0,dz).normalize();
    this.yaw=Math.atan2(dx,dz);
    this.anim.play('dash',0.05);
    return true;
  }
  startStepBack(){
    if(this.stam<8) return false;
    this.stam-=BALANCE.dashStam*0.8; this.stamDelay=BALANCE.stamRegenDelay;
    this.state='dash'; this.tState=0; this.dashT=0; this.backdash=true;
    this.fwd(this.dashDir).multiplyScalar(-1);
    this.anim.play('step',0.04);
    return true;
  }
  startJump(){
    if(this.airborne||this.state!=='idle') return false;
    this.airborne=true; this.vy=7.4;
    this.anim.play('jump',0.08);
    return true;
  }
  startTaunt(){
    if(this.state!=='idle'||this.airborne) return;
    this.state='taunt'; this.tState=0; this.anim.play('taunt',0.1);
    this.addMeter(8);
  }

  addMeter(v){ this.meter=Math.min(BALANCE.maxMeter,this.meter+v); }
  heal(v){ this.hp=Math.min(this.maxhp,this.hp+v); }

  stagger(dur){
    this.state='crush'; this.tState=0; this.crushT=dur;
    this.anim.play('crush',0.05);
  }

  // ---- 被弾 ----
  takeHit(mv, attacker, env){
    if(!this.isHittable()) return 'miss';
    if(this.state==='dash' && this.dashT<0.12) return 'miss'; // 回避無敵
    if(this.state==='grabbed') return 'miss';
    // 向き判定 (防御は相手に向いている必要)
    _v1.subVectors(attacker.pos,this.pos); _v1.y=0; _v1.normalize();
    this.fwd(_v2);
    const facing = _v1.dot(_v2); // 1=正対
    const blocking = this.state==='block' && facing>0.35 && !this.airborne;

    if(blocking && mv.unblockable){ /* 投げは通る */ }
    else if(blocking){
      // パリィ判定
      if(this.blockTap>0){
        attacker.stagger(0.95*env.diffReact||0.95);
        attacker.anim.addImpulse(0,-0.15);
        this.anim.play('parry',0.03);
        this.state='parry'; this.tState=0;
        this.addMeter(12);
        env.onParry(this,attacker);
        return 'parry';
      }
      const chip=Math.max(1,Math.round(mv.dmg*BALANCE.chipRatio*attacker.atkMul/this.defMul));
      this.hp=Math.max(0,this.hp-chip);
      this.stam-=BALANCE.blockStamBase+mv.dmg*0.7; this.stamDelay=BALANCE.stamRegenDelay;
      this.stun=Math.max(this.stun,mv.blockstun);
      this.fwd(_v2); this.vel.addScaledVector(_v1,-mv.kb*0.9);
      this.anim.addImpulse(0,-0.12);
      attacker.addMeter(mv.meter*0.5); this.addMeter(BALANCE.meterOnBlock*0.5);
      attacker.hasHit=true; // 単発技の多重ヒット防止 (連係は継続可)
      env.onBlock(this,attacker,mv,chip);
      if(this.hp<=0){ env.onKO(this,attacker,'chip'); return 'ko'; }
      if(this.stam<=0){ this.stam=0; this.stagger(1.0); env.onCrush(this); return 'crush'; }
      return 'block';
    }

    // 投げ
    if(mv.unblockable){
      if(this.airborne) return 'miss';
      this.takeGrab(attacker,env,mv);
      return 'grab';
    }

    // ヒット (カウンター判定: 出し際に喰らうと痛い)
    const inStartup = this.state==='attack' && this.atkT < (this.atk?this.atk.startup+0.08:0);
    const counter = inStartup ? BALANCE.counterBonus : 1;
    const airScale = (this.airborne||this.state==='launch') ? BALANCE.juggleScale : 1;
    const raw = mv.dmg*attacker.atkMul*counter*airScale*(env.dmgMul||1)/this.defMul;
    const dmg = Math.max(1,Math.round(raw));
    this.hp=Math.max(0,this.hp-dmg);
    this.flash=1;
    // コンボ計算
    if(this.state==='hit'||this.state==='launch'||this.state==='crush'||this.state==='parry'){
      attacker.comboDealt++; attacker.comboDmg+=dmg;
      this.comboTaken++; this.comboTakenDmg+=dmg; this.comboTimer=2.5;
    } else {
      attacker.comboDealt=1; attacker.comboDmg=dmg;
      this.comboTaken=1; this.comboTakenDmg=dmg; this.comboTimer=2.5;
    }
    attacker.maxCombo=Math.max(attacker.maxCombo,attacker.comboDealt);
    attacker.dealtTotal+=dmg;
    attacker.addMeter(mv.meter*BALANCE.meterOnDealt*0.14+dmg*0.12);
    this.addMeter(dmg*0.10);
    attacker.hasHit=true;

    if(this.hp<=0){ env.onKO(this,attacker,counter>1?'counter':'hit'); return 'ko'; }

    const dir=_v1.clone().multiplyScalar(-1); // 攻撃者→自分
    if(mv.launch){
      this.state='launch'; this.tState=0;
      this.airborne=true; this.vy=mv.launch[0];
      this.vel.set(dir.x*mv.launch[1],0,dir.z*mv.launch[1]);
      this.anim.play('launch',0.04);
      env.onLaunch(this,attacker,mv,dmg,counter>1);
      return 'launch';
    }
    if(mv.down){
      this.state='launch'; this.tState=0;
      this.airborne=true; this.vy=3.6;
      this.vel.set(dir.x*3.4,0,dir.z*3.4);
      this.anim.play('launch',0.04);
      env.onHit(this,attacker,mv,dmg,counter>1);
      return 'downhit';
    }
    this.state='hit'; this.tState=0;
    this.stun=mv.hitstun;
    this.vel.set(dir.x*mv.kb,0,dir.z*mv.kb);
    this.anim.play(mv.type==='low'?'hitL':'hitH',0.03);
    this.anim.addImpulse(0,-0.1);
    env.onHit(this,attacker,mv,dmg,counter>1);
    return 'hit';
  }

  takeGrab(attacker,env,mv){
    _v1.subVectors(this.pos,attacker.pos); _v1.y=0; _v1.normalize();
    this.state='grabbed'; this.tState=0; this.tGrab=0;
    this.grabber=attacker;
    this.throwVec.set(_v1.x*(mv.launch?mv.launch[1]:4.5), mv.launch?mv.launch[0]:5.5, _v1.z*(mv.launch?mv.launch[1]:4.5));
    this.anim.play('grabbed',0.05);
    attacker.hasHit=true;
    const dmg=Math.max(1,Math.round(mv.dmg*attacker.atkMul*(env.dmgMul||1)/this.defMul));
    this.hp=Math.max(0,this.hp-dmg);
    this.flash=1;
    attacker.comboDealt=1; attacker.comboDmg=dmg; attacker.dealtTotal+=dmg;
    this.comboTaken=1; this.comboTakenDmg=dmg; this.comboTimer=2.5;
    attacker.addMeter(mv.meter*0.14+dmg*0.12); this.addMeter(dmg*0.10);
    env.onGrab(this,attacker,mv,dmg);
    if(this.hp<=0){ env.onKO(this,attacker,'throw'); }
  }

  releaseGrab(){
    this.state='launch'; this.tState=0;
    this.airborne=true;
    this.vy=this.throwVec.y; this.vel.set(this.throwVec.x,0,this.throwVec.z);
    this.anim.play('launch',0.05);
  }

  // ---- メイン更新 ----
  update(dt, foe, env){
    this.tState+=dt; this.wallCd-=dt; this.landCd-=dt; this.comboTimer-=dt;
    if(this.comboTimer<=0){ this.comboTaken=0; this.comboTakenDmg=0; }
    if(this.blockTap>0) this.blockTap-=dt;
    if(this.flash>0){ this.flash=Math.max(0,this.flash-dt*6); this.rig.setFlash(this.flash); }
    // スタミナ回復
    this.stamDelay-=dt;
    if(this.stamDelay<=0) this.stam=Math.min(BALANCE.maxStam,this.stam+BALANCE.stamRegen*dt);

    const c=this.cmd;
    const wishX=c.mx, wishZ=c.mz;
    const wishLen=Math.hypot(wishX,wishZ);

    switch(this.state){
      case 'intro': {
        if(this.tState>1.2){ this.state='idle'; this.anim.play('idle',0.15); }
        break;
      }
      case 'idle': {
        this.faceFoe(foe,10,dt);
        // ガード
        if(c.block && this.grounded()){
          if(!this.wasBlock) this.blockTap=0.20; // 押し立て=パリィ受付
          this.tryStartBlock();
          this.wasBlock=true; break;
        }
        this.wasBlock=c.block;
        const spd=4.35*this.spdMul;
        if(this.grounded()){
          const k=Math.min(1,wishLen);
          this.vel.x=wishX*spd*k; this.vel.z=wishZ*spd*k;
        } else {
          this.vel.x+= (wishX*3.4*this.spdMul-this.vel.x)*Math.min(1,dt*4);
          this.vel.z+= (wishZ*3.4*this.spdMul-this.vel.z)*Math.min(1,dt*4);
        }
        // アクション
        if(c.jump){ if(this.startJump()) env.sfx('jump',this); }
        else if(c.dash){
          if(wishLen>0.2){ if(this.startDash(wishX/wishLen,wishZ/wishLen)) env.sfx('dash',this); }
          else { if(this.startStepBack()) env.sfx('dash',this); }
        }
        else if(c.super){ if(this.startAttack('super')) env.onSuperStart(this,foe); }
        else if(c.grab){ this.startAttack('grab'); }
        else if(c.heavy){ this.startAttack(this.grounded()?'heavy':'airatk'); }
        else if(c.punch){ this.startAttack(this.grounded()?'jab':'airatk'); }
        else if(c.kick){ this.startAttack(this.grounded()?(c.sweepKick?'sweep':'kick'):'airatk'); }
        else if(c.taunt){ this.startTaunt(); }
        break;
      }
      case 'dash': {
        this.dashT+=dt;
        const dur=this.backdash?0.26:0.20;
        const sp=(this.backdash?9.5:12.5)*this.spdMul*(1-this.dashT/dur*0.45);
        this.vel.set(this.dashDir.x*sp,0,this.dashDir.z*sp);
        if(this.dashT>=dur){ this.state='idle'; this.backdash=false; this.anim.play('idle',0.12);
          this.vel.multiplyScalar(0.3); }
        break;
      }
      case 'attack': {
        this.atkT+=dt;
        const mv=this.atk;
        // 起こし中は相手を追う (必殺は全段追尾)
        if(this.atkT<mv.startup||this.atkId==='super') this.faceFoe(foe,this.atkId==='super'?10:6,dt);
        // 踏み込み (必殺ヒット後はブレーキ)
        const lungeEnd=mv.active[1];
        const braking=this.atkId==='super'&&this.hasHit;
        if(this.atkT<lungeEnd && this.grounded() && !braking){
          const win=Math.max(0.05,lungeEnd-mv.startup*0.4);
          const f=(mv.lunge||0)/win;
          this.fwd(_v1);
          // 必殺はホーミング
          if(this.atkId==='super'&&this.atkT>0.3&&this.atkT<0.9){
            _v2.subVectors(foe.pos,this.pos); _v2.y=0;
            const d=_v2.length();
            if(d>1.6){ _v2.normalize(); this.vel.set(_v2.x*11,0,_v2.z*11); }
            else { this.vel.set(_v1.x*f*0.4,0,_v1.z*f*0.4); }
          } else {
            const shape=Math.sin(Math.min(1,this.atkT/Math.max(0.05,lungeEnd))*Math.PI);
            this.vel.x=_v1.x*f*(0.4+0.6*shape); this.vel.z=_v1.z*f*(0.4+0.6*shape);
          }
        } else if(this.grounded()){ this.vel.multiplyScalar(Math.max(0,1-dt*8)); }
        // 空振り音
        if(!this.whiffed&&this.atkT>=mv.startup){ this.whiffed=true; env.sfx('whiff',this); }
        // 判定
        if(mv.hits){
          // 多段: hitGapごとに判定
          const t0=mv.active[0];
          while(this.hitIdx<mv.hits && this.atkT>=t0+this.hitIdx*mv.hitGap){
            env.tryHit(this,foe,mv,{hitIdx:this.hitIdx});
            this.hitIdx++;
          }
        } else if(!this.hasHit && this.atkT>=mv.active[0] && this.atkT<=mv.active[1]){
          env.tryHit(this,foe,mv,{});
        }
        // チェーン受付
        const ch=mv.chain||{};
        const wantP=c.punch?'punch':(c.kick?'kick':null);
        if(wantP&&ch[wantP]&&this.hasHit&&this.atkT>mv.active[1]-0.06){
          this.startAttack(ch[wantP]); break;
        }
        if(this.atkT>=mv.dur){ this.state='idle'; this.tState=0; this.anim.play('idle',0.12); }
        break;
      }
      case 'block': {
        this.faceFoe(foe,12,dt);
        this.stun-=dt;
        this.vel.multiplyScalar(Math.max(0,1-dt*10));
        if(!c.block&&this.stun<=0){ this.state='idle'; this.anim.play('idle',0.08); }
        break;
      }
      case 'parry': {
        if(this.tState>0.4){ this.state='idle'; this.anim.play('idle',0.08); }
        break;
      }
      case 'hit': {
        this.stun-=dt;
        this.vel.multiplyScalar(Math.max(0,1-dt*(this.grounded()?5:0.4)));
        if(this.stun<=0){ this.state='idle'; this.tState=0; this.anim.play('idle',0.10); }
        break;
      }
      case 'launch': {
        // 空中: 物理に任せる
        break;
      }
      case 'grabbed': {
        this.tGrab+=dt;
        // 掴んだ相手の前に吸着
        if(this.grabber){
          this.grabber.fwd(_v1);
          this.pos.set(
            this.grabber.pos.x+_v1.x*1.1,
            Math.min(1.0,this.tGrab*3)*0.9,
            this.grabber.pos.z+_v1.z*1.1);
          this.yaw=lerpAngle(this.yaw,this.grabber.yaw,dt*8);
        }
        if(this.tGrab>0.42){ this.releaseGrab(); env.sfx('thrown',this); }
        break;
      }
      case 'down': {
        this.downT-=dt;
        this.vel.multiplyScalar(Math.max(0,1-dt*8));
        if(this.downT<=0){ this.state='wakeup'; this.tState=0; this.wakeT=0.42; this.anim.play('wakeup',0.06); }
        break;
      }
      case 'wakeup': {
        this.wakeT-=dt;
        if(this.wakeT<=0){ this.state='idle'; this.anim.play('idle',0.1); }
        break;
      }
      case 'crush': {
        this.crushT-=dt;
        this.vel.multiplyScalar(Math.max(0,1-dt*6));
        if(this.crushT<=0){ this.state='idle'; this.anim.play('idle',0.12); }
        break;
      }
      case 'taunt': {
        if(this.tState>1.0){ this.state='idle'; this.anim.play('idle',0.12); }
        break;
      }
      case 'ko': case 'win': {
        this.vel.multiplyScalar(Math.max(0,1-dt*6));
        break;
      }
    }

    // ---- 物理 ----
    if(this.airborne){
      this.vy-=22*dt;
      this.pos.x+=this.vel.x*dt; this.pos.z+=this.vel.z*dt;
      this.pos.y+=this.vy*dt;
      if(this.pos.y<=0){
        this.pos.y=0; this.airborne=false; this.landCd=0.10;
        const hard=this.vy<-9;
        this.vy=0;
        if(this.state==='launch'){
          this.state='down'; this.downT=0.85; this.anim.play('down',0.05);
          env.onLandDown(this,hard);
        } else {
          if(this.state==='attack'){ /* 空中攻撃→着地 */ this.state='idle'; this.anim.play('idle',0.1); }
          else if(this.state==='idle'){ this.anim.play('land',0.03); this.anim.play('idle',0.15); }
          env.sfx('land',this);
          this.vel.multiplyScalar(0.4);
        }
      }
    } else {
      this.pos.x+=this.vel.x*dt; this.pos.z+=this.vel.z*dt;
    }

    // アリーナ壁
    if(env.arenaR){
      const dx=this.pos.x-env.arenaX||0, dz=this.pos.z-env.arenaZ||0;
      // (env.arenaX未定義時は0扱いのため上の式は NaN 対策で下で再計算)
      const px=this.pos.x-(env.arenaX||0), pz=this.pos.z-(env.arenaZ||0);
      const d=Math.hypot(px,pz), maxR=env.arenaR-0.55;
      if(d>maxR){
        const nx=px/d, nz=pz/d;
        this.pos.x=(env.arenaX||0)+nx*maxR; this.pos.z=(env.arenaZ||0)+nz*maxR;
        const sp=Math.hypot(this.vel.x,this.vel.z);
        const dot=this.vel.x*nx+this.vel.z*nz;
        if(dot>0){ this.vel.x-=nx*dot*1.6; this.vel.z-=nz*dot*1.6; }
        if(this.state==='launch'&&sp>3.5&&this.wallCd<=0){
          this.wallCd=1.0; env.onWallSplat(this);
        }
      }
    }

    this.syncRig();
    // アニメ更新
    const hSpeed=Math.hypot(this.vel.x,this.vel.z);
    this.anim.update(dt, this.grounded()?hSpeed:0, this.grounded());
    if(this.state==='down'&&this.downT===undefined) this.downT=0.85;
  }

  syncRig(){
    this.rig.group.rotation.y=this.yaw;
  }
  limbPos(name,out){
    const map={handR:'handTipR',handL:'handTipL',footR:'footTipR',footL:'footTipL'};
    const o=this.rig.j[map[name]||'handTipR'];
    return o?o.getWorldPosition(out):out.copy(this.pos);
  }
  chestPos(out){ return this.rig.chestW.getWorldPosition(out); }
}
