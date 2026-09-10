// ===== NEON KUMITE : game core (input/camera/AI/HUD/flow) =====
import * as THREE from 'three';
import { CHARACTERS, STAGES, DIFFICULTY, MOVES, BALANCE, loadSettings, saveSettings, VERSION } from './config.js';
import { Fighter } from './fighter.js';
import { Effects, buildStage } from './world.js';
import { AudioSys } from './audio.js';

const $=(id)=>document.getElementById(id);
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const _v=new THREE.Vector3(), _v2=new THREE.Vector3(), _v3=new THREE.Vector3();

// ================= 入力 =================
class Input {
  constructor(game){
    this.g=game;
    this.held=new Set(); this.pressed=new Set();
    this.mdx=0; this.mdy=0; this.locked=false; this.drag=false; this.lx=0; this.ly=0;
    this.wheel=0;
    this.padPrev=[[],[]];
    this.stick={x:0,y:0}; this.touchHeld=new Set(); this.touchPressed=new Set();
    this.lastW=0;
    this.init();
  }
  init(){
    addEventListener('keydown',(e)=>{
      if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Slash','Quote'].includes(e.code)) e.preventDefault();
      if(e.repeat) return;
      this.held.add(e.code); this.pressed.add(e.code);
      if(e.code==='KeyW'){ const n=performance.now()/1000; if(n-this.lastW<0.30) this.pressed.add('__dashF'); this.lastW=n; }
      this.g.onKeyEdge(e.code);
    });
    addEventListener('keyup',(e)=>{ this.held.delete(e.code); });
    addEventListener('blur',()=>{ this.held.clear(); });
    const cv=$('cv');
    cv.addEventListener('mousedown',(e)=>{
      if(this.g.state==='fight'||this.g.state==='intro'){
        try{ const p=cv.requestPointerLock&&cv.requestPointerLock(); if(p&&p.catch)p.catch(()=>{}); }catch(err){}
      }
      this.drag=true; this.lx=e.clientX; this.ly=e.clientY;
      const c=e.button===0?'__m0':(e.button===2?'__m2':'__m1');
      this.held.add(c); this.pressed.add(c);
    });
    addEventListener('mouseup',(e)=>{
      this.drag=false;
      const c=e.button===0?'__m0':(e.button===2?'__m2':'__m1');
      this.held.delete(c);
    });
    addEventListener('mousemove',(e)=>{
      if(document.pointerLockElement===cv){ this.mdx+=e.movementX; this.mdy+=e.movementY; }
      else if(this.drag){ this.mdx+=e.clientX-this.lx; this.mdy+=e.clientY-this.ly; this.lx=e.clientX; this.ly=e.clientY; }
    });
    document.addEventListener('pointerlockchange',()=>{ this.locked=document.pointerLockElement===cv; });
    cv.addEventListener('contextmenu',(e)=>e.preventDefault());
    addEventListener('wheel',(e)=>{ this.wheel+=Math.sign(e.deltaY); },{passive:true});
    // タッチ
    if('ontouchstart' in window) this.initTouch();
  }
  initTouch(){
    const stick=$('stick'), knob=$('stick-knob');
    let sid=null, cx=0, cy=0;
    const setKnob=(dx,dy)=>{ knob.style.transform=`translate(${dx}px,${dy}px)`; };
    stick.addEventListener('touchstart',(e)=>{ e.preventDefault(); const t=e.changedTouches[0]; sid=t.identifier;
      const r=stick.getBoundingClientRect(); cx=r.left+r.width/2; cy=r.top+r.height/2; },{passive:false});
    stick.addEventListener('touchmove',(e)=>{ e.preventDefault();
      for(const t of e.changedTouches){ if(t.identifier===sid){
        let dx=t.clientX-cx, dy=t.clientY-cy; const l=Math.hypot(dx,dy)||1, m=Math.min(l,44);
        dx=dx/l*m; dy=dy/l*m; setKnob(dx,dy); this.stick.x=dx/44; this.stick.y=dy/44; } } },{passive:false});
    const end=(e)=>{ for(const t of e.changedTouches){ if(t.identifier===sid){ sid=null; setKnob(0,0); this.stick.x=0; this.stick.y=0; } } };
    stick.addEventListener('touchend',end); stick.addEventListener('touchcancel',end);
    document.querySelectorAll('.tbtn').forEach(b=>{
      const a=b.dataset.a;
      b.addEventListener('touchstart',(e)=>{ e.preventDefault(); this.touchHeld.add(a); this.touchPressed.add(a); this.g.onTouchEdge(a); },{passive:false});
      b.addEventListener('touchend',(e)=>{ e.preventDefault(); this.touchHeld.delete(a); },{passive:false});
    });
  }
  pollPads(){
    const out=[null,null];
    try{
      const gps=navigator.getGamepads?navigator.getGamepads():[];
      let pi=0;
      for(const gp of gps){ if(gp&&gp.connected&&pi<2) out[pi++]=gp; }
    }catch(e){}
    return out;
  }
  // カメラ回転量を消費して返す
  consumeCam(){
    const pads=this.pollPads(); this._pads=pads;
    if(this.g.mode==='versus'){ this.mdx=0; this.mdy=0; this.wheel=0; return {dx:0,dy:0,w:0}; }
    let dx=this.mdx, dy=this.mdy; this.mdx=0; this.mdy=0;
    const H=this.held;
    if(H.has('ArrowLeft'))dx-=9; if(H.has('ArrowRight'))dx+=9;
    if(H.has('ArrowUp'))dy-=7; if(H.has('ArrowDown'))dy+=7;
    const gp=pads[0];
    if(gp){
      const rx=gp.axes[2]||0, ry=gp.axes[3]||0;
      if(Math.abs(rx)>0.15)dx+=rx*22; if(Math.abs(ry)>0.15)dy+=ry*16;
    }
    const w=this.wheel; this.wheel=0;
    return {dx,dy,w};
  }
  padEdge(pi,btn){
    const gp=(this._pads||[])[pi]; if(!gp) return false;
    const v=gp.buttons[btn]&&gp.buttons[btn].pressed;
    const was=this.padPrev[pi][btn];
    this.padPrev[pi][btn]=v;
    return v&&!was;
  }
  padHeld(pi,btn){ const gp=(this._pads||[])[pi]; return !!(gp&&gp.buttons[btn]&&gp.buttons[btn].pressed); }
  // ファイター用コマンド生成 (P1: pi=0)
  cmdP1(camYaw,me,foe,versus=false){
    const H=this.held,P=this.pressed,T=this.touchHeld,TP=this.touchPressed;
    const gp=(this._pads||[])[0];
    let ix=0,iz=0;
    if(H.has('KeyW'))iz+=1; if(H.has('KeyS'))iz-=1;
    if(H.has('KeyA'))ix-=1; if(H.has('KeyD'))ix+=1;
    ix+=this.stick.x; iz-=this.stick.y;
    if(gp){ ix+=gp.axes[0]||0; iz-=(gp.axes[1]||0);
      if(gp.buttons[14]&&gp.buttons[14].pressed)ix-=1; if(gp.buttons[15]&&gp.buttons[15].pressed)ix+=1;
      if(gp.buttons[12]&&gp.buttons[12].pressed)iz+=1; if(gp.buttons[13]&&gp.buttons[13].pressed)iz-=1;
    }
    const l=Math.hypot(ix,iz); if(l>1){ix/=l;iz/=l;}
    const sy=Math.sin(camYaw),cy=Math.cos(camYaw);
    const cmd={ mx:ix*cy+iz*sy, mz:-ix*sy+iz*cy,
      punch:P.has('KeyJ')||P.has('__m0')||TP.has('punch')||this.padEdge(0,2),
      kick:P.has('KeyK')||P.has('__m2')||TP.has('kick')||this.padEdge(0,1),
      heavy:P.has('KeyL')||P.has('KeyF')||TP.has('heavy')||this.padEdge(0,3),
      grab:P.has('KeyE')||P.has('KeyG')||TP.has('grab')||this.padEdge(0,5),
      super:P.has('KeyR')||P.has('KeyQ')||TP.has('super')||this.padEdge(0,7),
      jump:P.has('Space')||TP.has('jump')||this.padEdge(0,0),
      dash:P.has('ShiftLeft')||(!versus&&P.has('ShiftRight'))||P.has('__dashF')||TP.has('dash')||this.padEdge(0,6),
      block:H.has('KeyC')||H.has('ControlLeft')||T.has('block')||this.padHeld(0,4),
      taunt:P.has('KeyT')||this.padEdge(0,8),
      sweepKick:false };
    // 後退+K=足払い
    if(cmd.kick&&me&&foe){
      _v.subVectors(foe.pos,me.pos); _v.normalize();
      const dot=cmd.mx*_v.x+cmd.mz*_v.z;
      if(dot<-0.25) cmd.sweepKick=true;
    }
    return cmd;
  }
  cmdP2(camYaw,me,foe){
    const H=this.held,P=this.pressed;
    let ix=0,iz=0;
    if(H.has('ArrowUp'))iz+=1; if(H.has('ArrowDown'))iz-=1;
    if(H.has('ArrowLeft'))ix-=1; if(H.has('ArrowRight'))ix+=1;
    const gp=(this._pads||[])[1]||(this._pads||[])[0];
    const pi=(this._pads||[])[1]?1:0;
    if(gp&&pi===1){ ix+=gp.axes[0]||0; iz-=(gp.axes[1]||0); }
    const l=Math.hypot(ix,iz); if(l>1){ix/=l;iz/=l;}
    const sy=Math.sin(camYaw),cy=Math.cos(camYaw);
    const cmd={ mx:ix*cy+iz*sy, mz:-ix*sy+iz*cy,
      punch:P.has('Numpad1')||P.has('Comma')||this.padEdge(pi,2),
      kick:P.has('Numpad2')||P.has('Period')||this.padEdge(pi,1),
      heavy:P.has('Numpad3')||P.has('Slash')||this.padEdge(pi,3),
      grab:P.has('Numpad5')||P.has('Semicolon')||this.padEdge(pi,5),
      super:P.has('Numpad6')||P.has('Quote')||this.padEdge(pi,7),
      jump:P.has('Numpad0')||P.has('Backslash')||this.padEdge(pi,0),
      dash:P.has('ControlRight')||P.has('NumpadEnter')||this.padEdge(pi,6),
      block:H.has('ShiftRight')||H.has('NumpadDecimal')||this.padHeld(pi,4),
      taunt:false, sweepKick:false };
    if(cmd.kick&&me&&foe){
      _v.subVectors(foe.pos,me.pos); _v.normalize();
      if(cmd.mx*_v.x+cmd.mz*_v.z<-0.25) cmd.sweepKick=true;
    }
    return cmd;
  }
  endFrame(){ this.pressed.clear(); this.touchPressed.clear(); }
}

// ================= AI =================
export class Brain {
  constructor(diffKey,personality){
    this.setDiff(diffKey); this.p=personality;
    this.thinkT=0; this.plan={mode:'approach',until:0};
    this.strafe=1; this.strafeT=0; this.blockHold=0; this.execT=0; this.queued=null;
  }
  setDiff(k){ this.dk=k; this.d=DIFFICULTY[k]; }
  reset(){ this.thinkT=0; this.blockHold=0; this.queued=null; this.plan={mode:'approach',until:0}; }
  update(dt,me,foe,dummyMode=null){
    const c=me.cmd;
    c.mx=0;c.mz=0;c.punch=false;c.kick=false;c.heavy=false;c.grab=false;c.super=false;
    c.jump=false;c.dash=false;c.block=false;c.taunt=false;c.sweepKick=false;
    if(me.state==='ko'||me.state==='win'||me.state==='intro') return;
    // ダミー
    if(dummyMode){
      if(dummyMode==='guard'){
        const fAtk=foe.state==='attack';
        c.block = fAtk||me.distTo(foe)<2.5;
      } else if(dummyMode==='random'){
        this.thinkT-=dt;
        if(this.thinkT<=0){ this.thinkT=0.5+Math.random()*0.8;
          const r=Math.random();
          this.plan.mode=r<0.3?'hold':(r<0.55?'back':(r<0.8?'side':'jump'));
          this.strafe=Math.random()<0.5?-1:1;
        }
        this.applyPlanMove(c,me,foe,dt,true);
        if(this.plan.mode==='jump')c.jump=true;
      }
      return;
    }
    const D=this.d, P=this.p;
    const d=me.distTo(foe);
    _v.subVectors(foe.pos,me.pos);_v.y=0;_v.normalize();
    const fx=_v.x,fz=_v.z;
    // 連続処理: コンボ繋ぎ
    if(me.state==='attack'&&me.hasHit&&Math.random()<D.comboCh){
      const mv=me.atk;
      if(mv&&me.atkT>mv.active[1]-0.12&&mv.chain){
        if(mv.chain.punch)c.punch=true; else if(mv.chain.kick)c.kick=true;
      }
    }
    // 対空・起き攻め
    this.thinkT-=dt; this.strafeT-=dt; this.blockHold-=dt;
    if(this.thinkT<=0){
      this.thinkT=D.think*(0.7+Math.random()*0.6)+D.react*0.4;
      const foeAtk=foe.state==='attack';
      const foeRec=foeAtk&&foe.atk&&foe.atkT>foe.atk.active[1];
      const foeWhiff=foeRec;
      const r=Math.random();
      const aggro=clamp(P.aggro*D.aggroMul*(me.hp<25?1.25:1)*(foe.hp<20?1.2:1),0,1);
      // ガード判断
      if(foeAtk&&foe.atkT<foe.atk.startup+0.05&&d<3.2&&r<D.blockCh&&me.grounded()){
        this.plan={mode:'block',until:0.35+Math.random()*0.3}; this.blockHold=this.plan.until;
      }
      // パニッシュ
      else if(foeWhiff&&d<3.0&&r<D.punishCh){ this.plan={mode:'punish',until:0.3}; }
      // 距離別
      else if(d>5.5){
        this.plan={mode:(r<P.dashUse&&me.stam>25)?'dashin':'approach',until:0.5};
      }
      else if(d<1.5){
        const rr=Math.random();
        if(foe.state==='block'&&rr<0.5) this.plan={mode:'grab',until:0.3};
        else if(rr<aggro) this.plan={mode:'attack',until:0.4};
        else if(rr<aggro+0.18) this.plan={mode:'back',until:0.35};
        else if(rr<aggro+0.3) this.plan={mode:'grab',until:0.3};
        else this.plan={mode:'block',until:0.4};
      }
      else if(d<3.2){
        const rr=Math.random();
        if(rr<aggro*0.75) this.plan={mode:'attack',until:0.4};
        else if(rr<aggro*0.75+0.2){ this.plan={mode:'side',until:0.5}; if(Math.random()<0.4)this.strafe*=-1; }
        else this.plan={mode:'approach',until:0.4};
      }
      else {
        const rr=Math.random();
        if(rr<0.55) this.plan={mode:'approach',until:0.5};
        else if(rr<0.75){ this.plan={mode:'side',until:0.6}; if(Math.random()<0.5)this.strafe*=-1; }
        else this.plan={mode:'block',until:0.3};
      }
      // 必殺
      if(me.meter>=100&&d<4.5&&d>1.2&&Math.random()<P.superUse*0.4) this.plan={mode:'super',until:0.4};
      if(this.strafeT<=0){ this.strafeT=1+Math.random()*2; if(Math.random()<0.35)this.strafe*=-1; }
    }
    // 実行
    const m=this.plan.mode;
    if(m==='block'||this.blockHold>0){ c.block=true; }
    if(me.state!=='idle') return;
    switch(m){
      case 'approach': c.mx=fx; c.mz=fz; break;
      case 'dashin': c.mx=fx; c.mz=fz; if(d>3.5)c.dash=true; break;
      case 'back': c.mx=-fx; c.mz=-fz; if(Math.random()<0.02)c.dash=true; break;
      case 'side': c.mx=-fz*this.strafe+fx*0.25; c.mz=fx*this.strafe+fz*0.25; break;
      case 'attack': {
        c.mx=fx*0.6; c.mz=fz*0.6;
        if(d<2.6){ const r=Math.random();
          if(r<0.42)c.punch=true; else if(r<0.7)c.kick=true; else if(r<0.85)c.heavy=true; else c.grab=true;
        }
        break; }
      case 'punish': {
        c.mx=fx; c.mz=fz;
        if(d<2.8){ if(Math.random()<0.4)c.heavy=true; else if(Math.random()<0.5)c.kick=true; else c.punch=true; }
        break; }
      case 'grab': c.mx=fx*0.5; c.mz=fz*0.5; if(d<2.2)c.grab=true; break;
      case 'super': c.mx=fx*0.3; c.mz=fz*0.3; if(d<4.2)c.super=true; break;
    }
  }
  applyPlanMove(c,me,foe,dt,isDummy){
    _v.subVectors(foe.pos,me.pos);_v.y=0;_v.normalize();
    const m=this.plan.mode;
    if(m==='back'){c.mx=-_v.x;c.mz=-_v.z;}
    else if(m==='side'){c.mx=-_v.z*this.strafe;c.mz=_v.x*this.strafe;}
    else if(m==='hold'){c.block=true;}
  }
}

// ================= ゲーム =================
export class Game {
  constructor(){
    this.state='boot'; this.paused=false;
    this.settings=loadSettings();
    this.audio=new AudioSys();
    this.f1=null; this.f2=null; this.brain2=null;
    this.mode='arcade'; this.stageDef=STAGES[0]; this.stage=null;
    this.sel={p1:0,p2:1,stage:0,diff:this.settings.diff};
    this.wins=[0,0]; this.round=1; this.timer=BALANCE.roundTime;
    this.fightOn=false; this.timers=[]; this.stateT=0;
    this.freeze=0; this.timeScale=1; this.tsTarget=1; this.slowT=0;
    this.trauma=0; this.camMode=this.settings.cam||'third';
    this.camYaw=Math.PI; this.camPitch=0.08; this.camDist=4.4; this.lastMouseT=-9;
    this.lookSm=new THREE.Vector3(); this.lookInit=false;
    this.ko=null; this.matchTime=0;
    this.combo=[{n:0,dmg:0,last:-9},{n:0,dmg:0,last:-9}];
    this.ghostBar=[1,1]; this.ghostDelay=[0,0];
    this.survWins=0; this.ladder=0; this.ladderFoes=[];
    this.fovKick=0; this.stepT=[0,0]; this.ghostT=[0,0];
    this.dmgPool=[]; this.dmgI=0;
    this.fpPunch={l:0,r:0};
  }

  boot(){
    $('t-ver').textContent='v'+VERSION;
    this.load_fill(10,'描画エンジン起動...');
    // renderer
    const q=this.qualityDef();
    try {
      this.renderer=new THREE.WebGLRenderer({canvas:$('cv'),antialias:q.antialias,powerPreference:'high-performance'});
    } catch(e1) {
      try {
        this.renderer=new THREE.WebGLRenderer({canvas:$('cv'),antialias:false});
      } catch(e2) {
        throw new Error('WebGLの初期化に失敗しました。このブラウザ/端末では3D表示が使えません。ハードウェアアクセラレーションをONにしてお試しください。');
      }
    }
    this.renderer.setSize(innerWidth,innerHeight);
    this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,q.pixelRatio));
    this.renderer.toneMapping=THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure=1.12;
    this.renderer.shadowMap.enabled=this.settings.shadow;
    this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    this.scene=new THREE.Scene();
    this.camera=new THREE.PerspectiveCamera(55,innerWidth/innerHeight,0.08,220);
    this.scene.add(this.camera);
    // lights
    this.hemi=new THREE.HemisphereLight(0x8fb8ff,0x1a0f2a,0.75); this.scene.add(this.hemi);
    this.sun=new THREE.DirectionalLight(0xffffff,1.6);
    this.sun.position.set(8,14,6); this.sun.castShadow=this.settings.shadow;
    this.sun.shadow.mapSize.set(q.shadow,q.shadow);
    this.sun.shadow.camera.left=-14; this.sun.shadow.camera.right=14;
    this.sun.shadow.camera.top=14; this.sun.shadow.camera.bottom=-14;
    this.sun.shadow.camera.far=40; this.sun.shadow.bias=-0.002;
    this.scene.add(this.sun);
    this.rim=new THREE.DirectionalLight(0x00f0ff,0.5); this.rim.position.set(-8,6,-10); this.scene.add(this.rim);
    this.flashStorm=new THREE.DirectionalLight(0xaaccff,0); this.flashStorm.position.set(0,20,0); this.scene.add(this.flashStorm);
    // fx + input
    this.fx=new Effects(this.scene);
    this.fx.setBudget({low:0.45,med:0.8,high:1}[this.settings.quality]);
    this.input=new Input(this);
    this.buildFPGloves();
    this.buildDmgPool();
    this.load_fill(45,'ステージ構築...');
    // menu demo scene
    this.buildStage(STAGES[0]);
    this.buildFighters(CHARACTERS[0],CHARACTERS[3]);
    this.f1.reset(-2.5,0,Math.PI/2); this.f2.reset(2.5,0,-Math.PI/2);
    this.f1.state='idle'; this.f2.state='idle';
    this.applySettings(false);
    this.wireUI();
    addEventListener('resize',()=>this.onResize());
    addEventListener('pointerdown',()=>this.audio.init());
    this.load_fill(80,'ファイナライズ...');
    this.showScreen('s-title');
    this.state='title';
    this.audio.init();
    this.audio.startBGM('title');
    this.load_fill(100,'完了');
    setTimeout(()=>{ const l=$('loader'); if(!l) return; l.style.opacity=0; l.style.pointerEvents='none'; setTimeout(()=>l.remove(),600); },350);
    this.last=performance.now();
    requestAnimationFrame((t)=>this.loop(t));
  }
  load_fill(p,tx){ $('load-fill').style.width=p+'%'; if(tx)$('load-tx').textContent=tx; }
  qualityDef(){ return {low:{pixelRatio:1,shadow:512,antialias:false},med:{pixelRatio:1.5,shadow:1024,antialias:true},high:{pixelRatio:2,shadow:2048,antialias:true}}[this.settings.quality]; }

  // ---------- シーン構築 ----------
  buildStage(def){
    if(this.stage){ this.scene.remove(this.stage.group);
      this.stage.group.traverse(o=>{ if(o.isMesh||o.isPoints||o.isSprite){ o.geometry&&o.geometry.dispose&&o.geometry.dispose();
        const m=o.material; if(m){ (Array.isArray(m)?m:[m]).forEach(mm=>{ mm.map&&mm.map.dispose&&mm.map.dispose(); mm.dispose&&mm.dispose(); }); } } });
    }
    this.stageDef=def;
    this.stage=buildStage(def.id,def);
    this.scene.add(this.stage.group);
    if(this.stage.dyn) this.stage.dyn.flashLight=this.flashStorm;
    this.scene.fog=new THREE.Fog(def.fog,18,85);
    if(this.fighterEnv) this.fighterEnv.arenaR=def.radius;
    // ステージ別ライト
    if(def.id==='sunset_roof'){ this.sun.color.set(0xffb070); this.sun.intensity=1.7; this.hemi.intensity=0.6; }
    else if(def.id==='storm_ring'){ this.sun.color.set(0x9db8ff); this.sun.intensity=1.0; this.hemi.intensity=0.7; }
    else { this.sun.color.set(0xcfe6ff); this.sun.intensity=1.5; this.hemi.intensity=0.75; }
  }
  buildFighters(d1,d2){
    if(this.f1){
      for(const f of [this.f1,this.f2]){
        this.scene.remove(f.rig.group);
        f.rig.group.traverse(o=>{ if(o.isMesh&&o.geometry) o.geometry.dispose(); });
        Object.values(f.rig.mats).forEach(m=>{ m.dispose&&m.dispose(); });
      }
    }
    this.f1=new Fighter(this.scene,d1,{label:'1P'});
    this.f2=new Fighter(this.scene,d2,{label:'2P'});
    this.f1.isCPU=false; this.f2.isCPU=true;
    this.brain2=new Brain(this.sel.diff,d2.ai);
    this.fighterEnv={
      arenaR:this.stage?this.stage.radius:9.5, arenaX:0, arenaZ:0, dmgMul:1,
      sfx:(n,f)=>this.playSfx(n,f),
      tryHit:(a,d,m,o)=>this.tryHit(a,d,m,o),
      onHit:(d,a,m,dmg,c)=>this.cbHit(d,a,m,dmg,c),
      onBlock:(d,a,m,chip)=>this.cbBlock(d,a,m,chip),
      onParry:(d,a)=>this.cbParry(d,a),
      onCrush:(d)=>this.cbCrush(d),
      onLaunch:(d,a,m,dmg,c)=>this.cbLaunch(d,a,m,dmg,c),
      onGrab:(d,a,m,dmg)=>this.cbGrab(d,a,m,dmg),
      onKO:(d,a,how)=>this.cbKO(d,a,how),
      onLandDown:(d,hard)=>this.cbLandDown(d,hard),
      onWallSplat:(d)=>this.cbWall(d),
      onSuperStart:(a,f)=>this.cbSuperStart(a,f),
    };
  }
  buildFPGloves(){
    this.fpG=new THREE.Group();
    const mk=(sx)=>{
      const g=new THREE.Group();
      const skin=new THREE.MeshStandardMaterial({color:0xe8b88a,roughness:0.7});
      const gl=new THREE.MeshStandardMaterial({color:0xff2d95,roughness:0.5});
      const arm=new THREE.Mesh(new THREE.CapsuleGeometry(0.055,0.22,4,8),skin); arm.rotation.x=1.1; arm.position.set(0,-0.05,0.14); g.add(arm);
      const fist=new THREE.Mesh(new THREE.BoxGeometry(0.11,0.12,0.12),gl); g.add(fist);
      g.position.set(0.30*sx,-0.26,-0.55); g.rotation.set(0.2,0.1*-sx,0);
      this.fpG.add(g); return g;
    };
    this.fpL=mk(-1); this.fpR=mk(1);
    this.fpG.visible=false;
    this.camera.add(this.fpG);
  }
  buildDmgPool(){
    const layer=$('dmg-layer');
    for(let i=0;i<24;i++){
      const d=document.createElement('div'); d.className='dmgnum'; d.style.display='none';
      layer.appendChild(d);
      this.dmgPool.push({el:d,life:0,pos:new THREE.Vector3(),vy:0});
    }
  }

  // ---------- UI 配線 ----------
  wireUI(){
    const A=this.audio, click=(id,fn)=>$(id).addEventListener('click',()=>{A.init();A.uiOk();fn();});
    click('btn-start',()=>{ this.showScreen('s-mode'); this.state='mode'; });
    click('m-arcade',()=>this.toSelect('arcade'));
    click('m-survival',()=>this.toSelect('survival'));
    click('m-versus',()=>this.toSelect('versus'));
    click('m-training',()=>this.toSelect('training'));
    click('m-help',()=>this.showScreen('s-help'));
    click('m-settings',()=>{ this.syncSettingsUI(); this.showScreen('s-settings'); this._setBack='s-mode'; });
    click('m-back',()=>{ this.showScreen('s-title'); this.state='title'; });
    click('btn-help-back',()=>{ this.showScreen(this.mode==='none'?'s-mode':'s-mode'); });
    click('btn-set-back',()=>this.showScreen(this._setBack||'s-mode'));
    click('btn-select-back',()=>{ this.showScreen('s-mode'); this.state='mode'; });
    click('btn-fight',()=>this.onFightPressed());
    click('btn-resume',()=>this.togglePause(false));
    click('btn-restart',()=>{ this.togglePause(false); this.startMatch(this.lastOpts); });
    click('btn-quit',()=>{ this.togglePause(false); this.quitToMode(); });
    click('btn-rematch',()=>{ $('s-result').classList.add('hidden'); this.startMatch(this.lastOpts); });
    click('btn-reselect',()=>{ this.quitToSelect(); });
    click('btn-retitle',()=>{ this.quitToMode(); this.showScreen('s-title'); this.state='title'; this.audio.startBGM('title'); });
    // settings
    $('set-vol').addEventListener('input',(e)=>{ this.settings.vol=+e.target.value; $('p-vol').value=this.settings.vol; this.applyAudio(); saveSettings(this.settings); });
    $('p-vol').addEventListener('input',(e)=>{ this.settings.vol=+e.target.value; $('set-vol').value=this.settings.vol; this.applyAudio(); saveSettings(this.settings); });
    $('set-mute').addEventListener('change',(e)=>{ this.settings.mute=e.target.checked; this.applyAudio(); saveSettings(this.settings); });
    $('set-quality').addEventListener('change',(e)=>{ this.settings.quality=e.target.value; saveSettings(this.settings); this.applyQuality(); });
    $('set-shadow').addEventListener('change',(e)=>{ this.settings.shadow=e.target.checked; saveSettings(this.settings); this.applyQuality(); });
    $('set-shake').addEventListener('change',(e)=>{ this.settings.shake=e.target.checked; saveSettings(this.settings); });
    $('set-cam').addEventListener('change',(e)=>{ this.settings.cam=e.target.value; saveSettings(this.settings); });
    $('set-diff').addEventListener('change',(e)=>{ this.settings.diff=e.target.value; saveSettings(this.settings); });
    // training dummy
    document.querySelectorAll('#dummy-row .pill').forEach(b=>b.addEventListener('click',()=>{
      document.querySelectorAll('#dummy-row .pill').forEach(x=>x.classList.remove('on')); b.classList.add('on');
      this.dummyMode=b.dataset.dummy; A.uiOk();
    }));
    document.querySelectorAll('[data-tact]').forEach(b=>b.addEventListener('click',()=>{
      A.uiOk(); const a=b.dataset.tact;
      if(a==='reset'){ this.resetPositions(); }
      if(a==='meter'){ this.f1.meter=100; this.f2.meter=100; }
      if(a==='heal'){ this.f1.hp=this.f1.maxhp; this.f2.hp=this.f2.maxhp; }
    }));
  }
  showScreen(id){
    document.querySelectorAll('.screen').forEach(s=>s.classList.add('hidden'));
    if(id) $(id).classList.remove('hidden');
  }
  syncSettingsUI(){
    $('set-vol').value=this.settings.vol; $('p-vol').value=this.settings.vol;
    $('set-mute').checked=this.settings.mute;
    $('set-quality').value=this.settings.quality; $('set-shadow').checked=this.settings.shadow;
    $('set-shake').checked=this.settings.shake; $('set-cam').value=this.settings.cam;
    $('set-diff').value=this.settings.diff;
  }
  applySettings(withAudio=true){
    this.applyQuality();
    if(withAudio) this.applyAudio();
  }
  applyQuality(){
    const q=this.qualityDef();
    this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,q.pixelRatio));
    this.renderer.shadowMap.enabled=this.settings.shadow;
    this.sun.castShadow=this.settings.shadow;
    const sz=q.shadow;
    if(this.sun.shadow.mapSize.x!==sz){ this.sun.shadow.mapSize.set(sz,sz);
      if(this.sun.shadow.map){ this.sun.shadow.map.dispose(); this.sun.shadow.map=null; } }
    this.fx.setBudget({low:0.45,med:0.8,high:1}[this.settings.quality]);
  }
  applyAudio(){ this.audio.setVol(this.settings.vol/100); this.audio.setMute(this.settings.mute); }
  toast(tx,ms=1800){
    const t=$('toast'); t.textContent=tx; t.classList.remove('hidden');
    clearTimeout(this._toastT); this._toastT=setTimeout(()=>t.classList.add('hidden'),ms);
  }

  // ---------- 選択画面 ----------
  toSelect(mode){
    this.mode=mode; this.state='select';
    const titles={arcade:'VS CPU — 刺客選択',survival:'サバイバル — 闘士選択',versus:'2P対戦 — 闘士選択',training:'修行 — 闘士選択'};
    $('sel-title').textContent=titles[mode];
    $('p2-wrap').classList.toggle('hidden',mode!=='versus');
    $('diff-wrap').style.display=(mode==='versus'||mode==='training')?'none':'';
    this.sel.diff=this.settings.diff;
    this.buildCharRow('char-row','p1');
    if(mode==='versus') this.buildCharRow('p2-row','p2');
    // stage pills
    const sr=$('stage-row'); sr.innerHTML='';
    STAGES.forEach((s,i)=>{ const b=document.createElement('button'); b.className='pill'+(i===this.sel.stage?' on':'');
      b.textContent=s.name; b.title=s.desc;
      b.addEventListener('click',()=>{ this.audio.uiMove(); this.sel.stage=i;
        sr.querySelectorAll('.pill').forEach((x,j)=>x.classList.toggle('on',j===i)); });
      sr.appendChild(b); });
    // diff pills
    const dr=$('diff-row'); dr.innerHTML='';
    Object.keys(DIFFICULTY).forEach(k=>{ const b=document.createElement('button');
      b.className='pill'+(k===this.sel.diff?' on':''); b.textContent=DIFFICULTY[k].name;
      b.addEventListener('click',()=>{ this.audio.uiMove(); this.sel.diff=k;
        dr.querySelectorAll('.pill').forEach(x=>x.classList.remove('on')); b.classList.add('on'); });
      dr.appendChild(b); });
    if(this.f1){ this.letterbox(false); this.speedlines(false);
      this.f1.reset(-2.5,0,Math.PI/2); this.f2.reset(2.5,0,-Math.PI/2); }
    this.showScreen('s-select');
  }
  buildCharRow(rowId,who){
    const row=$(rowId); row.innerHTML='';
    CHARACTERS.forEach((c,i)=>{
      const d=document.createElement('div');
      d.className='char-card'+(this.sel[who]===i?' sel':'');
      d.style.setProperty('--c',c.color);
      const stat=(l,v)=>`<div><em>${l}</em><div class="statbar"><i style="width:${v*20}%"></i></div></div>`;
      d.innerHTML=`<div class="char-kanji">${c.kanji}</div><div class="char-name">${c.name}</div>
        <div class="char-style">${c.style}</div>
        ${rowId==='char-row'?`<div class="char-desc">${c.desc}</div>
        <div class="char-stats">${stat('攻撃',c.stats.pow)}${stat('速度',c.stats.spd)}${stat('耐久',c.stats.sta)}</div>`:''}`;
      d.addEventListener('click',()=>{ this.audio.uiMove(); this.sel[who]=i;
        row.querySelectorAll('.char-card').forEach((x,j)=>x.classList.toggle('sel',j===i)); });
      row.appendChild(d);
    });
  }
  onFightPressed(){
    if(this.mode==='versus'&&this.sel.p1===this.sel.p2){ this.toast('2Pは別のファイターを選んでください'); return; }
    const opts={ mode:this.mode, p1:this.sel.p1, p2:this.sel.p2, stage:this.sel.stage, diff:this.sel.diff };
    this.showScreen(null);
    this.startMatch(opts);
  }

  // ---------- 試合進行 ----------
  startMatch(opts){
    this.lastOpts=Object.assign({},opts);
    this.mode=opts.mode;
    this.showScreen(null);
    $('hud').classList.remove('hidden');
    $('touch').classList.toggle('hidden',!('ontouchstart' in window));
    $('surv-info').classList.toggle('hidden',opts.mode!=='survival');
    $('train-info').classList.toggle('hidden',opts.mode!=='training');
    this.buildStage(STAGES[opts.stage]);
    // arcade ladder
    if(opts.mode==='arcade'&&this.ladderFoes.length===0){
      const pool=[0,1,2,3].filter(i=>i!==opts.p1);
      for(let i=pool.length-1;i>0;i--){ const j=(Math.random()*(i+1))|0; [pool[i],pool[j]]=[pool[j],pool[i]]; }
      this.ladderFoes=pool.slice(0,3); this.ladder=0;
    }
    let p2char=opts.p2;
    if(opts.mode==='arcade') p2char=this.ladderFoes[this.ladder]??opts.p2;
    if(opts.mode==='survival'&&this.survFoe!==undefined&&this._survCont){ p2char=this.survFoe; }
    else if(opts.mode==='survival'){ p2char=(opts.p1+1+((Math.random()*3)|0))%4; this.survWins=0; }
    this._survCont=false;
    this.buildFighters(CHARACTERS[opts.p1],CHARACTERS[p2char]);
    this.f2.isCPU=(opts.mode!=='versus');
    let dk=opts.diff;
    if(opts.mode==='survival') dk=['easy','normal','normal','hard','hard','master'][Math.min(5,this.survWins)];
    if(opts.mode==='arcade') dk=['normal','hard','master'][Math.min(2,this.ladder)];
    this.brain2.setDiff(dk); this.brain2.reset();
    this.dummyMode='stand';
    this.matchDiff=dk;
    // HUD名
    $('name1').textContent=CHARACTERS[opts.p1].name;
    $('name2').textContent=CHARACTERS[p2char].name;
    $('tag1').textContent='1P'; $('tag1').className='ptag p1';
    $('tag2').textContent=opts.mode==='versus'?'2P':'CPU'; $('tag2').className='ptag p2';
    this.wins=[0,0]; this.round=1; this.matchTime=0;
    this.camMode=(opts.mode==='versus')?'dual':(this.settings.cam||'third');
    this.fx.clear();
    this.letterbox(false); this.speedlines(false);
    this.freeze=0; this.tsTarget=1; this.timeScale=1; this.trauma=0;
    this.resetPositions();
    // versus splash
    $('vs-kanji1').textContent=CHARACTERS[opts.p1].kanji;
    $('vs-name1').textContent=CHARACTERS[opts.p1].name;
    $('vs-style1').textContent=CHARACTERS[opts.p1].style;
    $('vs-kanji2').textContent=CHARACTERS[p2char].kanji;
    $('vs-name2').textContent=CHARACTERS[p2char].name;
    $('vs-style2').textContent=CHARACTERS[p2char].style;
    $('vs-stage').textContent='— '+STAGES[opts.stage].name+' —';
    $('vs-sub').textContent={arcade:`刺客 ${this.ladder+1}/3 · ${DIFFICULTY[dk].name}`,survival:`連勝 ${this.survWins} · ${DIFFICULTY[dk].name}`,
      versus:'LOCAL 2P BATTLE',training:'TRAINING'}[opts.mode];
    $('versus').classList.remove('hidden');
    this.audio.stopBGM(); this.audio.superFlash();
    this.state='versus'; this.stateT=0; this.timers.length=0;
    this.after(2.3,()=>{ $('versus').classList.add('hidden'); this.startRound(); });
    this.updatePips();
  }
  resetPositions(){
    const R=this.stage.radius;
    this.f1.reset(-R*0.38,0,Math.PI/2,true); this.f2.reset(R*0.38,0,-Math.PI/2,true);
    this.f1.state='idle'; this.f2.state='idle';
    this.f1.anim.play('idle',0.2); this.f2.anim.play('idle',0.2);
    this.fx.clear();
  }
  startRound(){
    const R=this.stage.radius;
    this.f1.reset(-R*0.38,0,Math.PI/2); this.f2.reset(R*0.38,0,-Math.PI/2);
    if(this.mode==='survival'&&this._survHeal!=null){
      this.f1.hp=Math.min(this.f1.maxhp,this._survHeal); this._survHeal=null;
    }
    this.f1.state='intro'; this.f2.state='intro'; this.f1.tState=0; this.f2.tState=0;
    this.f1.anim.play('intro',0.3); this.f2.anim.play('intro',0.3);
    this.timer=this.mode==='training'?Infinity:BALANCE.roundTime;
    this._lastTick=99;
    this.ko=null; this.fightOn=false; this.combo=[{n:0,dmg:0,last:-9},{n:0,dmg:0,last:-9}];
    this.ghostBar=[1,1]; this.state='intro'; this.stateT=0; this.timers.length=0;
    this.camYaw=Math.atan2(this.f2.pos.x-this.f1.pos.x,this.f2.pos.z-this.f1.pos.z);
    this.lookInit=false;
    this.audio.startBGM(this.stageDef.bgm);
    $('round-label').textContent=this.mode==='training'?'修行':('R'+this.round);
    this.banner(`ROUND ${this.round}`,1.4);
    this.audio.count(false);
    this.after(1.5,()=>{ this.announce('READY…','構えろ','small',0.9); this.audio.announce(); });
    this.after(2.4,()=>{ this.announce('FIGHT!','闘え','fight',0.8); this.audio.count(true); this.audio.punch(0.6);
      this.fightOn=true; this.flash(0.25); });
  }
  after(t,fn){ this.timers.push({t,fn}); }
  quitToMode(){
    this.letterbox(false); this.speedlines(false);
    this.freeze=0; this.tsTarget=1; this.timeScale=1; this.trauma=0; this.timers.length=0;
    this.showScreen('s-mode'); this.state='mode';
    $('hud').classList.add('hidden'); $('touch').classList.add('hidden');
    $('versus').classList.add('hidden');
    this.ladderFoes=[]; this.survWins=0;
    this.buildStage(STAGES[0]);
    this.buildFighters(CHARACTERS[0],CHARACTERS[3]);
    this.f1.reset(-2.5,0,Math.PI/2); this.f2.reset(2.5,0,-Math.PI/2);
    this.audio.startBGM('title');
  }
  quitToSelect(){ this.ladderFoes=[]; this.toSelect(this.mode); $('hud').classList.add('hidden'); $('touch').classList.add('hidden'); }

  // ---------- 判定解決 ----------
  tryHit(att,def,mv,opt={}){
    if(!this.fightOn||this.ko) return;
    if(def.hp<=0) return;
    // 距離・角度
    _v.subVectors(def.pos,att.pos); _v.y=0;
    const dist=_v.length(); _v.normalize();
    att.fwd(_v2);
    const ang=Math.acos(clamp(_v.dot(_v2),-1,1))*180/Math.PI;
    const range=mv.range+(def.state==='launch'?0.5:0);
    if(dist>range||ang>mv.arc/2){
      // 必殺の吸い込み (近距離なら引き寄せ)
      if(mv.cinematic&&opt.hitIdx===0&&dist<range+2.5){
        _v3.subVectors(att.pos,def.pos);_v3.y=0;_v3.normalize();
        def.pos.addScaledVector(_v3,Math.min(2.0,dist-range+1.2));
        return;
      }
      return;
    }
    // 多段は最終段に打ち上げ
    let mvEff=mv;
    if(mv.hits){
      const last=opt.hitIdx===mv.hits-1;
      mvEff=Object.assign({},mv,{ dmg:last?12:7, launch:last?mv.launch:null, kb:last?mv.kb||4:0.6,
        hitstun:last?0.5:0.35 });
    }
    const idx=att===this.f1?0:1;
    this.fighterEnv.dmgMul=att.isCPU?DIFFICULTY[this.matchDiff].dmgMul:1;
    const res=def.takeHit(mvEff,att,this.fighterEnv);
    if(mv.cinematic&&(res==='hit'||res==='launch')){
      att.fwd(_v2);
      _v3.copy(att.pos).addScaledVector(_v2,1.25); _v3.y=def.pos.y;
      def.pos.lerp(_v3,0.65);
      if(def.state==='hit'||def.state==='launch') def.vel.multiplyScalar(0.25);
    }
    if(res!=='miss') this.onAnyHit(att,def,res);
  }
  onAnyHit(att,def,res){
    // ダメージ数値・コンボ表示は各コールバックで
  }

  // ---------- ヒット系コールバック ----------
  sparkPos(att,def,limb,out){
    att.limbPos(limb||'handR',out);
    def.chestPos(_v3);
    out.lerp(_v3,0.45);
    return out;
  }
  cbHit(def,att,mv,dmg,counter){
    this.sparkPos(att,def,mv.limb,_v);
    const power=dmg>=13?3:(dmg>=8?2:1);
    this.fx.hitSpark(_v,new THREE.Color(CHARACTERS.find(c=>c.name===att.def.name)?.color||0xffcc44).getHex(),power,_v2.subVectors(def.pos,att.pos).normalize());
    this.audio.punch(power*0.5); if(dmg>=12)this.audio.kick(0.7);
    this.freeze=Math.max(this.freeze,power*0.028+0.03);
    this.addShake(power*0.14);
    this.spawnDmg(def,counter?`${dmg} COUNTER!`:dmg,counter?'counter':'hit',counter?34:24);
    this.bumpCombo(att===this.f1?0:1,dmg);
    if(counter) this.flash(0.15);
    if(mv.launcher) this.flash(0.12);
  }
  cbLaunch(def,att,mv,dmg,counter){
    this.sparkPos(att,def,mv.limb,_v);
    this.fx.hitSpark(_v,0xffd166,3,_v2.set(0,1,0));
    this.fx.ring(_v,{color:0xffd166,maxR:2.5,dur:0.4});
    this.audio.heavyHit();
    this.freeze=Math.max(this.freeze,0.12);
    this.addShake(0.5);
    this.spawnDmg(def,counter?`${dmg} COUNTER!`:dmg+'!',counter?'counter':'hit',32);
    this.bumpCombo(att===this.f1?0:1,dmg);
    this.flash(0.18);
  }
  cbBlock(def,att,mv,chip){
    def.chestPos(_v); _v.y+=0.1;
    this.fx.blockSpark(_v);
    this.audio.block();
    this.freeze=Math.max(this.freeze,0.03);
    this.addShake(0.08);
    this.spawnDmg(def,chip,'chip',16);
    const i=att===this.f1?0:1; this.combo[i]={n:0,dmg:0,last:-9};
  }
  cbParry(def,att){
    def.chestPos(_v);
    this.fx.parrySpark(_v);
    this.audio.parry();
    this.freeze=Math.max(this.freeze,0.20);
    this.addShake(0.35);
    this.flash(0.3);
    this.spawnDmg(def,'PARRY!','parry',30);
    this.slowMo(0.3,0.5);
  }
  cbCrush(def){
    def.chestPos(_v);
    this.audio.crush();
    this.fx.ring(_v,{color:0xff5252,maxR:2.5,dur:0.5});
    this.spawnDmg(def,'GUARD CRUSH','crush',26);
    this.addShake(0.3);
  }
  cbGrab(def,att,mv,dmg){
    def.chestPos(_v);
    this.fx.hitSpark(_v,0xff9f1c,2,null);
    this.audio.grab();
    this.freeze=Math.max(this.freeze,0.08);
    this.addShake(0.3);
    this.spawnDmg(def,dmg+' 投げ','hit',26);
    this.bumpCombo(att===this.f1?0:1,dmg);
  }
  cbKO(def,att,how){
    if(this.ko) {
      // 同時KOチェック
      if(att.hp<=0&&this.ko.loser===att){ this.ko.draw=true; }
      return;
    }
    this.ko={loser:def,winner:att,how,t:0,draw:false};
    def.hp=0;
    def.state='ko'; def.tState=0; def.anim.play('ko',0.08);
    def.vel.set((Math.random()-0.5)*3,0,(Math.random()-0.5)*3);
    def.chestPos(_v);
    this.fx.shockwave(_v,0xff6a00,1.4);
    this.audio.ko();
    this.freeze=0.35;
    this.slowMo(0.22,1.6);
    this.addShake(1.0);
    this.flash(0.5);
    this.letterbox(true);
    this.fightOn=false;
  }
  cbLandDown(def,hard){
    _v.copy(def.pos);_v.y=0.15;
    this.fx.dust(_v,hard?14:8);
    if(hard){ this.audio.land(); this.addShake(0.2); this.fx.ring(_v,{color:0xffffff,maxR:1.6,dur:0.3,flat:true}); }
  }
  cbWall(def){
    def.chestPos(_v);
    this.fx.hitSpark(_v,0x9ff3ff,2,null);
    this.audio.heavyHit();
    this.addShake(0.4);
    this.freeze=Math.max(this.freeze,0.08);
    const dmg=4;
    def.hp=Math.max(0,def.hp-dmg);
    this.spawnDmg(def,dmg+' 壁','wall',22);
    def.vel.multiplyScalar(-0.5); def.vy=Math.max(def.vy,2.5);
    if(def.hp<=0) this.cbKO(def,def===this.f1?this.f2:this.f1,'wall');
  }
  cbSuperStart(att,foe){
    this.flash(0.4); this.audio.superFlash();
    this.fx.aura(att,new THREE.Color(CHARACTERS.find(c=>c.name===att.def.name)?.color||0x00f0ff).getHex(),1.4);
    this.fx.ring(att.pos,{color:0xffffff,maxR:4,dur:0.5,flat:true});
    this.letterbox(true); this.speedlines(true);
    this.fovKick=12;
    this.slowMo(0.55,0.45);
    this.after(1.7,()=>{ this.letterbox(false); this.speedlines(false); });
    att.chestPos(_v); this.spawnDmg(att,'秘奥義!', 'super',30);
  }
  playSfx(n,f){
    const A=this.audio;
    if(n==='whiff')A.whiff(0.8+Math.random()*0.4);
    else if(n==='jump')A.jump();
    else if(n==='dash'){ A.dash(); _v.copy(f.pos);_v.y=0.2; this.fx.dust(_v,6,0x9ff3ff,0.4); this.fx.ghost(f,0x00f0ff,0.3); }
    else if(n==='land'){ A.land(); _v.copy(f.pos);_v.y=0.1; this.fx.dust(_v,5); }
    else if(n==='thrown'){ A.thrown(); }
  }

  // ---------- HUD ----------
  announce(main,sub='',style='',dur=1.0){
    const m=$('an-main'),s=$('an-sub');
    m.className=''; s.className='';
    void m.offsetWidth;
    m.textContent=main; m.className='show '+style;
    s.textContent=sub; if(sub)s.className='show';
    clearTimeout(this._anT);
    this._anT=setTimeout(()=>{ m.classList.add('hide'); s.classList.remove('show'); },dur*1000);
  }
  banner(tx,dur=1.5){
    const b=$('banner'); b.textContent=tx; b.classList.remove('hidden');
    clearTimeout(this._bnT); this._bnT=setTimeout(()=>b.classList.add('hidden'),dur*1000);
  }
  flash(op=0.4){
    const f=$('flash'); f.style.transition='none'; f.style.opacity=op;
    requestAnimationFrame(()=>{ f.style.transition='opacity .3s'; f.style.opacity=0; });
  }
  letterbox(on){ $('letterbox').classList.toggle('on',on); }
  speedlines(on){ $('speedlines').style.opacity=on?1:0; }
  addShake(v){ if(this.settings.shake) this.trauma=Math.min(1,this.trauma+v); }
  bumpCombo(i,dmg){
    const now=this.stateT, c=this.combo[i];
    if(now-c.last<1.1){ c.n++; c.dmg+=dmg; } else { c.n=1; c.dmg=dmg; }
    c.last=now;
    const el=$(i===0?'combo1':'combo2');
    if(c.n>=2){ el.classList.remove('hidden','pop'); void el.offsetWidth; el.classList.add('pop');
      el.querySelector('.cn').textContent=c.n; el.querySelector('.cd').textContent=c.dmg+' DMG'; }
  }
  spawnDmg(fighter,text,cls,size=24){
    const o=this.dmgPool[this.dmgI]; this.dmgI=(this.dmgI+1)%this.dmgPool.length;
    fighter.chestPos(o.pos); o.pos.x+=(Math.random()-0.5)*0.5; o.pos.y+=0.4;
    o.life=0.9; o.vy=1.6;
    const colors={hit:'#ffd166',counter:'#ff5252',chip:'#88aaff',parry:'#9ff3ff',crush:'#ff5252',wall:'#9ff3ff',super:'#ff9f1c'};
    o.el.style.display='block'; o.el.style.color=colors[cls]||'#fff'; o.el.style.fontSize=size+'px';
    o.el.textContent=text;
  }
  updateDmgNums(dt){
    const w=innerWidth,h=innerHeight;
    for(const o of this.dmgPool){
      if(o.life<=0){ o.el.style.display='none'; continue; }
      o.life-=dt; o.pos.y+=o.vy*dt; o.vy*=0.94;
      _v.copy(o.pos).project(this.camera);
      if(_v.z>1){ o.el.style.display='none'; continue; }
      o.el.style.display='block';
      o.el.style.left=((_v.x*0.5+0.5)*w)+'px';
      o.el.style.top=((-_v.y*0.5+0.5)*h)+'px';
      o.el.style.opacity=Math.min(1,o.life*2.5);
    }
  }
  updatePips(){
    [0,1].forEach(i=>{
      const el=$(i===0?'rounds1':'rounds2');
      [...el.children].forEach((p,j)=>p.classList.toggle('on',j<this.wins[i]));
    });
  }
  updateHUD(dt){
    const f=[this.f1,this.f2];
    for(let i=0;i<2;i++){
      const hp=Math.max(0,f[i].hp/f[i].maxhp);
      $(i===0?'hp1':'hp2').style.width=(hp*100)+'%';
      $(i===0?'hp1':'hp2').classList.toggle('low',hp<0.3);
      // ゴーストバー
      if(hp<this.ghostBar[i]) this.ghostDelay[i]=0.55;
      else this.ghostDelay[i]-=dt;
      if(this.ghostDelay[i]<=0) this.ghostBar[i]=Math.max(hp,this.ghostBar[i]-dt*0.5);
      $(i===0?'hp1g':'hp2g').style.width=(this.ghostBar[i]*100)+'%';
      const mt=f[i].meter/100;
      const me=$(i===0?'meter1':'meter2');
      me.style.width=(mt*100)+'%'; me.classList.toggle('max',mt>=1);
      $(i===0?'stam1':'stam2').style.width=(f[i].stam)+'%';
      // コンボ非表示
      if(this.stateT-this.combo[i].last>1.4) $(i===0?'combo1':'combo2').classList.add('hidden');
    }
    if(this.mode==='training'){ $('timer').textContent='∞'; $('timer').classList.remove('urgent'); }
    else { const t=Math.max(0,Math.ceil(this.timer)); $('timer').textContent=t; $('timer').classList.toggle('urgent',t<=10&&this.fightOn); }
    if(this.mode==='survival') $('surv-wins').textContent=this.survWins;
    if(this.mode==='training') $('train-info').textContent=`ダミー: ${{stand:'棒立ち',guard:'ガード',random:'ランダム'}[this.dummyMode]} — Escで設定`;
  }

  // ---------- カメラ ----------
  slowMo(scale,dur){ this.tsTarget=scale; this.slowT=dur; }
  updateCamera(dt){
    const me=this.f1, foe=this.f2;
    let mode=this.camMode;
    if(this.state==='title'||this.state==='mode'||this.state==='select'||this.state==='result') mode='menu';
    else if(this.state==='versus') mode='intro';
    else if(this.state==='intro') mode='intro';
    else if(this.ko) mode='ko';
    const cam=this.camera;
    _v.addVectors(me.pos,foe.pos).multiplyScalar(0.5); // 中点
    const mid=_v.clone();
    let wantFov=55+this.fovKick;
    this.fovKick*=Math.pow(0.02,dt);

    if(mode==='first'){
      const h=me.rig.h;
      _v2.set(me.pos.x+Math.sin(me.yaw)*0.12, 1.62*h, me.pos.z+Math.cos(me.yaw)*0.12);
      // 歩行ボブ
      const sp=Math.hypot(me.vel.x,me.vel.z);
      _v2.y+=Math.abs(Math.sin(performance.now()*0.012))*Math.min(0.05,sp*0.008);
      cam.position.lerp(_v2,Math.min(1,dt*30));
      _euler.set(this.camPitch,this.camYaw+Math.PI,0,'YXZ'); // 三人称と方位を一致
      _q.setFromEuler(_euler);
      cam.quaternion.slerp(_q,Math.min(1,dt*22));
      wantFov=68+this.fovKick;
    } else if(mode==='third'){
      const cp=this.camPitch;
      const fx=Math.sin(this.camYaw)*Math.cos(cp), fy=Math.sin(cp), fz=Math.cos(this.camYaw)*Math.cos(cp);
      me.chestPos(_v2);
      _v3.set(_v2.x-fx*this.camDist, _v2.y-fy*this.camDist+0.3, _v2.z-fz*this.camDist);
      // 肩オフセット
      _v3.x+=-fz*0.55; _v3.z+=fx*0.55;
      // 衝突簡易: 床・アリーナ
      _v3.y=Math.max(0.45,_v3.y);
      const dd=Math.hypot(_v3.x,_v3.z), mx=this.stage.radius+4;
      if(dd>mx){ _v3.x*=mx/dd; _v3.z*=mx/dd; }
      cam.position.lerp(_v3,Math.min(1,dt*11));
      // 注視: 自分〜相手の中間寄り
      foe.chestPos(_v3);
      _v3.lerpVectors(_v2,_v3,0.34); _v3.y+=0.12;
      if(!this.lookInit){ this.lookSm.copy(_v3); this.lookInit=true; }
      this.lookSm.lerp(_v3,Math.min(1,dt*9));
      _m.lookAt(cam.position,this.lookSm,_up);
      _q.setFromRotationMatrix(_m);
      cam.quaternion.slerp(_q,Math.min(1,dt*12));
      const sp=Math.hypot(me.vel.x,me.vel.z);
      wantFov=55+Math.min(8,sp*0.9)+this.fovKick;
      // ソフトロックオン
      if(this.fightOn&&performance.now()/1000-this.lastMouseT>2.5){
        const lock=Math.atan2(foe.pos.x-me.pos.x,foe.pos.z-me.pos.z);
        let d=(lock-this.camYaw)%(Math.PI*2);
        if(d>Math.PI)d-=Math.PI*2; if(d<-Math.PI)d+=Math.PI*2;
        this.camYaw+=d*Math.min(1,dt*1.4);
      }
    } else if(mode==='dual'){
      _v2.subVectors(foe.pos,me.pos);
      const sep=Math.max(2,_v2.length());
      const side=Math.atan2(_v2.x,_v2.z)+Math.PI/2;
      const dist=clamp(3.6+sep*0.85,5,11);
      _v3.set(mid.x+Math.sin(side)*dist, 2.2+sep*0.18, mid.z+Math.cos(side)*dist);
      cam.position.lerp(_v3,Math.min(1,dt*6));
      mid.y+=1.25;
      if(!this.lookInit){ this.lookSm.copy(mid); this.lookInit=true; }
      this.lookSm.lerp(mid,Math.min(1,dt*6));
      _m.lookAt(cam.position,this.lookSm,_up);
      _q.setFromRotationMatrix(_m);
      cam.quaternion.slerp(_q,Math.min(1,dt*8));
      wantFov=52;
    } else { // intro / menu / ko
      let r=7.6,h=2.7,spd=0.35,tgt=mid; tgt.y=1.3;
      if(mode==='ko'&&this.ko){ const L=this.ko.loser.chestPos(new THREE.Vector3()); tgt=L; r=3.4; h=1.5; spd=0.8; }
      if(mode==='menu'){ r=8.6; h=3.0; spd=0.18; }
      const a=performance.now()/1000*spd+(mode==='menu'?1:2.4);
      _v3.set(tgt.x+Math.sin(a)*r, h, tgt.z+Math.cos(a)*r);
      cam.position.lerp(_v3,Math.min(1,dt*(mode==='ko'?3:1.6)));
      if(!this.lookInit){ this.lookSm.copy(tgt); this.lookInit=true; }
      this.lookSm.lerp(tgt,Math.min(1,dt*4));
      _m.lookAt(cam.position,this.lookSm,_up);
      _q.setFromRotationMatrix(_m);
      cam.quaternion.slerp(_q,Math.min(1,dt*5));
      wantFov=mode==='ko'?48:55;
    }
    // シェイク
    this.trauma=Math.max(0,this.trauma-dt*1.7);
    if(this.trauma>0.001){
      const s=this.trauma*this.trauma, t=performance.now()*0.03;
      cam.position.x+=Math.sin(t*1.3)*s*0.45; cam.position.y+=Math.cos(t*1.7)*s*0.3; cam.position.z+=Math.sin(t*1.1+2)*s*0.45;
      _euler.set((Math.random()-0.5)*s*0.06,(Math.random()-0.5)*s*0.06,(Math.random()-0.5)*s*0.05);
      _q.setFromEuler(_euler); cam.quaternion.multiply(_q);
    }
    if(Math.abs(cam.fov-wantFov)>0.15){ cam.fov+=(wantFov-cam.fov)*Math.min(1,dt*8); cam.updateProjectionMatrix(); }
    // 一人称ギミック
    const fp=(mode==='first');
    this.f1.rig.j.head.visible=!fp;
    this.fpG.visible=fp;
    $('crosshair').classList.toggle('hidden',!(fp&&this.fightOn));
    if(fp) this.updateFP(dt);
  }
  updateFP(dt){
    // パンチ演出: 攻撃状態に応じて拳を突き出す
    const me=this.f1;
    let tl=0,tr=0,tbly=0,tbry=0;
    if(me.state==='attack'&&me.atk){
      const k=clamp((me.atkT-me.atk.startup)/0.08,0,1)*(1-clamp((me.atkT-me.atk.active[1])/0.15,0,1));
      const id=me.atkId;
      if(id==='jab'||id==='straight'||id==='heavy'||id==='super') tr=k;
      else if(id==='jab2') tl=k;
      else if(id==='grab'){ tl=k*0.8; tr=k*0.8; }
      else if(id==='kick'||id==='kickhigh'||id==='sweep'){ tbly=-0.15*k; }
    } else if(me.state==='block'){ tl=0.45; tr=0.45; }
    else if(me.state==='hit'||me.state==='launch'){ tl=-0.2; tr=-0.2; }
    const P=this.fpPunch;
    P.l+=(tl-P.l)*Math.min(1,dt*18); P.r+=(tr-P.r)*Math.min(1,dt*18);
    const bob=Math.sin(performance.now()*0.004)*0.008;
    this.fpL.position.set(-0.30+P.l*0.24, -0.26+bob+tbly, -0.55-P.l*0.5);
    this.fpR.position.set(0.30-P.r*0.24, -0.26-bob+tbry, -0.55-P.r*0.5);
  }

  // ---------- キーイベント ----------
  onKeyEdge(code){
    if(code==='KeyM'){ this.settings.mute=!this.settings.mute; this.applyAudio(); saveSettings(this.settings);
      this.toast(this.settings.mute?'ミュート ON':'ミュート OFF'); return; }
    if(code==='Escape'||code==='KeyP'){ this.onPauseKey(); return; }
    if(code==='KeyV'){ this.toggleCam(); return; }
    if(code==='Enter'){
      if(this.state==='title'){ $('btn-start').click(); }
      else if(this.state==='result'){ $('btn-rematch').click(); }
    }
  }
  onTouchEdge(a){ if(a==='cam') this.toggleCam(); }
  toggleCam(){
    if(this.mode==='versus'){ this.toast('2P対戦は固定カメラです'); return; }
    if(this.state!=='fight'&&this.state!=='intro') return;
    this.camMode=this.camMode==='first'?'third':'first';
    this.audio.uiMove();
    this.toast(this.camMode==='first'?'👁 一人称視点':'🎥 三人称視点',900);
  }
  onPauseKey(){
    if(this.state==='fight'||this.state==='intro'||this.state==='roundEnd'){
      this.togglePause();
    }
  }
  togglePause(force){
    const to=force!==undefined?force:!this.paused;
    if(to===this.paused) return;
    this.paused=to;
    $('s-pause').classList.toggle('hidden',!to);
    $('train-opts').classList.toggle('hidden',this.mode!=='training');
    if(to&&this.mode==='training'){
      document.querySelectorAll('#dummy-row .pill').forEach(x=>x.classList.toggle('on',x.dataset.dummy===this.dummyMode));
    }
    if(document.pointerLockElement) document.exitPointerLock();
    if(to) this.audio.uiBack(); else this.audio.uiOk();
  }

  // ---------- ラウンド終了 ----------
  endRoundCheck_Draw(){ return false; }
  processRoundEnd(dt){
    // KO時シーケンス
    if(this.ko){
      this.ko.t+=dt;
      const t=this.ko.t;
      if(!this.ko.announced&&t>0.55){
        this.ko.announced=true;
        const perfect=this.ko.winner.hp>=this.ko.winner.maxhp;
        if(this.ko.draw){ this.announce('DRAW','ドロー','small',2.0); }
        else {
          this.announce('K.O.!',perfect?'PERFECT! — 完全勝利':this.ko.how==='counter'?'COUNTER K.O.!':this.ko.how==='throw'?'THROW K.O.!':'', 'ko',2.0);
        }
      }
      if(!this.ko.winpose&&t>1.3){
        this.ko.winpose=true;
        if(!this.ko.draw&&this.ko.winner.hp>0){ this.ko.winner.state='win'; this.ko.winner.anim.play('win',0.2); }
        this.letterbox(false);
      }
      if(t>2.6){
        const w=this.ko.draw?-1:(this.ko.winner===this.f1?0:1);
        this.ko=null;
        this.finishRound(w);
      }
      return;
    }
    // タイムアップ
    if(this.fightOn&&this.mode!=='training'&&this.timer<=0){
      this.fightOn=false;
      const h1=this.f1.hp,h2=this.f2.hp;
      if(h1===h2){ this.announce('DRAW','ドロー','small',2); this.audio.bell(1);
        this.state='roundEnd'; this.after(2.5,()=>this.finishRound(-1));
      } else {
        const wi=h1>h2?0:1;
        this.announce('TIME UP',(wi===0?'1P':'2P/CPU')+' の判定勝ち','small',2); this.audio.bell(2);
        const w=wi===0?this.f1:this.f2, l=wi===0?this.f2:this.f1;
        w.state='win'; w.anim.play('win',0.2);
        this.state='roundEnd'; this.after(2.5,()=>this.finishRound(wi));
      }
    }
  }
  finishRound(w){
    if(w>=0){ this.wins[w]++; this.updatePips(); }
    else { this.banner('DRAW — もう一度',1.5); }
    const need=this.mode==='training'?Infinity:(this.mode==='survival'?1:BALANCE.roundsToWin);
    if(this.mode==='survival'){
      if(w===0){ // 勝利
        this.survWins++;
        this.audio.roundWin();
        this.banner(`${this.survWins}連勝! 次の敵が現れる…`,2.0);
        this.state='roundEnd';
        this.after(2.2,()=>{
          // 次の敵へ
          this.survFoe=(this.f1.def.id?CHARACTERS.findIndex(c=>c.id===this.f2.def.id):0);
          let nf; do{ nf=(Math.random()*4)|0; }while(nf===CHARACTERS.findIndex(c=>c.name===this.f1.def.name));
          this.survFoe=nf; this._survCont=true;
          const heal=Math.round(this.f1.maxhp*BALANCE.survivalHeal/100);
          const opts=Object.assign({},this.lastOpts); opts.p2=nf;
          this.lastOpts=opts;
          this._survHeal=heal+20;
          this.startMatch(opts);
        });
      } else if(w===1){
        this.endMatch(1,'survival');
      } else { this.startRound(); }
      return;
    }
    if(this.mode==='training'){ this.state='roundEnd'; this.banner('仕切り直し',1.0); this.after(1.4,()=>this.startRound()); return; }
    if(w>=0&&this.wins[w]>=need){
      this.endMatch(w,this.mode);
    } else {
      this.round++;
      this.startRound();
    }
  }
  endMatch(w,mode){
    this.state='matchEnd'; this.timers.length=0;
    this.audio.roundWin();
    this.after(1.2,()=>{
      this.state='result';
      this.audio.stopBGM(); this.audio.startBGM('title');
      const win1=w===0;
      let title,sub;
      if(mode==='arcade'){
        if(win1){
          if(this.ladder>=2){ title='優勝!'; sub='全ての刺客を倒した — 真の武道家だ'; }
          else { title='YOU WIN'; sub=`刺客 ${this.ladder+1}/3 を撃破`; }
        } else { title='YOU LOSE'; sub=`刺客 ${this.ladder+1}/3 に敗れた…`; }
      } else if(mode==='survival'){
        title=win1?'SURVIVED?':'GAME OVER';
        if(!win1){ title=`${this.survWins}連勝`; sub='ここまでか… さらなる高みを目指せ'; }
        else { title='???'; sub=''; }
      } else if(mode==='versus'){
        title=(w===0?'1P':'2P')+' WIN!'; sub='お見事!';
      } else { title='修行終了'; sub='日々鍛錬あるのみ'; }
      // arcade連戦進行
      if(mode==='arcade'&&win1&&this.ladder<2){
        this.banner('次の刺客が現れる…',2);
        this.after(2.2,()=>{ this.ladder++; this.startMatch(this.lastOpts); });
        return;
      }
      $('res-kicker').textContent={arcade:'ARCADE RESULT',survival:'SURVIVAL RESULT',versus:'VERSUS RESULT',training:'TRAINING'}[mode]||'RESULT';
      $('res-title').textContent=title;
      $('res-title').className=win1||this.ladder>=2?'win':'lose';
      if(mode==='arcade'&&win1&&this.ladder>=2){ $('res-title').textContent='🏆 優勝!'; $('res-title').className='win'; }
      if(mode==='survival'&&!win1){ $('res-title').textContent=`${this.survWins}連勝`; $('res-title').className='lose'; }
      $('res-sub').textContent=sub;
      $('res-stats').innerHTML=
        `<div class="stat-cell"><b>${this.f1.maxCombo}</b><span>最大コンボ</span></div>
         <div class="stat-cell"><b>${this.f1.dealtTotal}</b><span>総ダメージ</span></div>
         <div class="stat-cell"><b>${Math.round(this.matchTime)}s</b><span>試合時間</span></div>
         <div class="stat-cell"><b>${this.wins[0]}-${this.wins[1]}</b><span>ラウンド</span></div>`;
      $('btn-rematch').textContent=(mode==='arcade'&&win1&&this.ladder>=2)?'👑 もう一度頂点へ':'⚔️ 再戦する';
      this.showScreen('s-result');
      this.fightOn=false;
    });
  }

  // ---------- メインループ ----------
  loop(t){
    requestAnimationFrame((tt)=>this.loop(tt));
    let raw=Math.min(0.05,(t-this.last)/1000||0.016);
    this.last=t;
    if(this.paused){ this.input.endFrame(); this.renderer.render(this.scene,this.camera); return; }
    // タイマー
    for(let i=this.timers.length-1;i>=0;i--){
      const o=this.timers[i]; o.t-=raw;
      if(o.t<=0){ this.timers.splice(i,1); try{o.fn();}catch(e){console.error(e);} }
    }
    // スローモ
    if(this.slowT>0){ this.slowT-=raw; if(this.slowT<=0) this.tsTarget=1; }
    this.timeScale+=(this.tsTarget-this.timeScale)*Math.min(1,raw*10);
    let dt=raw*this.timeScale;
    if(this.freeze>0){ this.freeze-=raw; dt*=0.03; }

    const inMenu=(this.state==='title'||this.state==='mode'||this.state==='select'||this.state==='result');
    const inFight=(this.state==='fight'||this.state==='intro'||this.state==='roundEnd'||this.state==='versus'||this.state==='matchEnd');

    // カメラ入力
    const {dx,dy,w}=this.input.consumeCam();
    if(dx||dy){ this.camYaw-=dx*0.0026; this.camPitch=clamp(this.camPitch-dy*0.0022,-0.5,1.0); this.lastMouseT=performance.now()/1000; }
    if(w){ this.camDist=clamp(this.camDist+w*0.4,2.8,6.8); }

    if(inMenu){
      // デモ: 向き合わせ+待機
      this.f1.faceFoe(this.f2,2,raw); this.f2.faceFoe(this.f1,2,raw);
      this.f1.syncRig(); this.f2.syncRig();
      this.f1.anim.update(raw,0,true); this.f2.anim.update(raw,0,true);
      this.stateT+=raw;
    }
    if(inFight){
      this.stateT+=dt; this.matchTime+=dt;
      const fighting=this.fightOn&&!this.ko;
      let yawMove=this.camYaw;
      if(this.mode==='versus'){
        _v.subVectors(this.lookSm,this.camera.position);
        yawMove=Math.atan2(_v.x,_v.z);
      }
      // P1入力
      if(fighting){
        const c1=this.input.cmdP1(yawMove,this.f1,this.f2,this.mode==='versus');
        Object.assign(this.f1.cmd,c1);
      } else { const c=this.f1.cmd; for(const k in c) if(typeof c[k]==='boolean')c[k]=false; c.mx=0;c.mz=0; }
      // P2: 人 or AI
      if(this.mode==='versus'){
        if(fighting){ Object.assign(this.f2.cmd,this.input.cmdP2(yawMove,this.f2,this.f1)); }
        else { const c=this.f2.cmd; for(const k in c) if(typeof c[k]==='boolean')c[k]=false; c.mx=0;c.mz=0; }
      } else {
        if(fighting) this.brain2.update(dt,this.f2,this.f1,this.mode==='training'?this.dummyMode:null);
        else { const c=this.f2.cmd; for(const k in c) if(typeof c[k]==='boolean')c[k]=false; c.mx=0;c.mz=0; }
      }
      // 状態遷移: fight開始
      if(this.state==='intro'&&this.fightOn) this.state='fight';
      // 更新
      this.f1.update(dt,this.f2,this.fighterEnv);
      this.f2.update(dt,this.f1,this.fighterEnv);
      // 足音・ダッシュ残像
      [this.f1,this.f2].forEach((f,i)=>{
        const sp=Math.hypot(f.vel.x,f.vel.z);
        if(f.grounded()&&sp>3&&f.state==='idle'){
          this.stepT[i]-=dt;
          if(this.stepT[i]<=0){ this.stepT[i]=sp>4.6?0.26:0.36; this.audio.step();
            _v.copy(f.pos);_v.y=0.08; this.fx.dust(_v,1,0x666f88,0.3); }
        }
        if(sp>8){ this.ghostT[i]-=dt; if(this.ghostT[i]<=0){ this.ghostT[i]=0.07; this.fx.ghost(f,i===0?0x00f0ff:0xff2d95,0.3); } }
      });
      // タイマー
      if(this.fightOn&&this.mode!=='training'){ this.timer-=dt;
        if(this.timer<=10.5&&this.timer>0&&Math.ceil(this.timer)!==this._lastTick){ this._lastTick=Math.ceil(this.timer); if(this._lastTick<=5&&this._lastTick>0)this.audio.count(false); }
      }
      this.processRoundEnd(dt);
      this.updateHUD(dt);
    }
    // ステージ・FX
    if(this.stage&&this.stage.dyn) this.stage.dyn.update(raw,performance.now()/1000);
    this.fx.update(raw,this.camera);
    this.updateDmgNums(raw);
    this.updateCamera(raw);
    // fps
    this._fpsN=(this._fpsN||0)+1; this._fpsT=(this._fpsT||0)+raw;
    if(this._fpsT>0.5){ $('fps').textContent=Math.round(this._fpsN/this._fpsT); this._fpsN=0; this._fpsT=0; }
    this.renderer.render(this.scene,this.camera);
    this.input.endFrame();
  }
  onResize(){
    this.camera.aspect=innerWidth/innerHeight; this.camera.updateProjectionMatrix();
    this.renderer.setSize(innerWidth,innerHeight);
  }
}
const _euler=new THREE.Euler(0,0,0,'YXZ');
const _q=new THREE.Quaternion();
const _m=new THREE.Matrix4();
const _up=new THREE.Vector3(0,1,0);
