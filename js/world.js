// ===== NEON KUMITE : stages + effects =====
import * as THREE from 'three';

export function makeGlowTexture(){
  const c=document.createElement('canvas'); c.width=c.height=128;
  const x=c.getContext('2d');
  const g=x.createRadialGradient(64,64,2,64,64,64);
  g.addColorStop(0,'rgba(255,255,255,1)'); g.addColorStop(0.35,'rgba(255,255,255,.7)');
  g.addColorStop(1,'rgba(255,255,255,0)');
  x.fillStyle=g; x.fillRect(0,0,128,128);
  const t=new THREE.CanvasTexture(c); return t;
}
export function makeRingTexture(){
  const c=document.createElement('canvas'); c.width=c.height=128;
  const x=c.getContext('2d');
  x.strokeStyle='rgba(255,255,255,1)'; x.lineWidth=10;
  x.beginPath(); x.arc(64,64,52,0,Math.PI*2); x.stroke();
  x.strokeStyle='rgba(255,255,255,.4)'; x.lineWidth=22;
  x.beginPath(); x.arc(64,64,52,0,Math.PI*2); x.stroke();
  return new THREE.CanvasTexture(c);
}

// ================= エフェクト =================
class Pool {
  constructor(n, factory){ this.items=[]; for(let i=0;i<n;i++){ const o=factory(); o.alive=false; this.items.push(o);} this.i=0; }
  next(){ const o=this.items[this.i]; this.i=(this.i+1)%this.items.length; return o; }
  each(fn){ for(const o of this.items) if(o.alive) fn(o); }
  killAll(){ for(const o of this.items) o.alive=false; }
}

export class Effects {
  constructor(scene){
    this.scene=scene;
    this.budget=1;
    this.glowTex=makeGlowTexture(); this.ringTex=makeRingTexture();
    // パーティクル
    this.parts=new Pool(260, ()=>{
      const m=new THREE.SpriteMaterial({map:this.glowTex,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending});
      const s=new THREE.Sprite(m); s.visible=false; s.renderOrder=5; scene.add(s);
      return {s,vel:new THREE.Vector3(),life:0,maxLife:1,grav:0,drag:1,size0:1,size1:0,op:1,spin:0};
    });
    // リング
    this.rings=new Pool(24, ()=>{
      const m=new THREE.SpriteMaterial({map:this.ringTex,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,side:THREE.DoubleSide});
      const s=new THREE.Sprite(m); s.visible=false; s.renderOrder=6; scene.add(s);
      return {s,life:0,dur:1,maxR:3,op:1,flat:false,baseY:0};
    });
    // フラッシュライト
    this.lights=[];
    for(let i=0;i<3;i++){ const L=new THREE.PointLight(0xffffff,0,18,1.8); scene.add(L); this.lights.push({L,life:0}); }
    this.li=0;
    // ゴースト残像
    this.ghosts=[];
    // オーラ放出
    this.emitters=[];
  }
  setBudget(b){ this.budget=b; }
  _n(n){ return Math.max(1,Math.round(n*this.budget)); }

  spawnP(pos,opt={}){
    const p=this.parts.next();
    p.alive=true; p.s.visible=true;
    p.s.position.copy(pos);
    if(opt.jitter){ p.s.position.x+=(Math.random()-0.5)*opt.jitter; p.s.position.y+=(Math.random()-0.5)*opt.jitter; p.s.position.z+=(Math.random()-0.5)*opt.jitter; }
    const sp=opt.speed??4;
    if(opt.dir){ p.vel.copy(opt.dir).multiplyScalar(sp*(0.5+Math.random()*0.8));
      p.vel.x+=(Math.random()-0.5)*sp*(opt.spread??0.7); p.vel.y+=(Math.random()-0.5)*sp*(opt.spread??0.7); p.vel.z+=(Math.random()-0.5)*sp*(opt.spread??0.7);
    } else {
      p.vel.set(Math.random()-0.5,Math.random()-0.5,Math.random()-0.5).normalize().multiplyScalar(sp*(0.4+Math.random()*0.9));
      if(opt.up) p.vel.y=Math.abs(p.vel.y)+opt.up;
    }
    p.maxLife=p.life=opt.life??0.5;
    p.grav=opt.grav??8; p.drag=opt.drag??0.92;
    p.size0=opt.size??0.5; p.size1=opt.size1??0.05; p.op=opt.op??1;
    p.s.material.color.set(opt.color??0xffffff);
    p.s.material.rotation=Math.random()*Math.PI*2; p.spin=(Math.random()-0.5)*(opt.spin??4);
    p.s.scale.setScalar(p.size0);
    p.s.material.opacity=p.op;
    return p;
  }
  burst(pos,{n=12,color=0xffffff,colors=null,speed=6,life=0.5,size=0.5,grav=8,dir=null,spread=0.8,up=0,op=1}={}){
    n=this._n(n);
    for(let i=0;i<n;i++){
      const c=colors?colors[(Math.random()*colors.length)|0]:color;
      this.spawnP(pos,{color:c,speed:speed*(0.6+Math.random()*0.8),life:life*(0.6+Math.random()*0.8),
        size:size*(0.6+Math.random()*0.8),grav,dir,spread,up,op});
    }
  }
  ring(pos,{color=0xffffff,maxR=3,dur=0.4,op=1,flat=false}={}){
    const r=this.rings.next();
    r.alive=true; r.s.visible=true;
    r.s.position.copy(pos); r.life=r.dur=dur; r.maxR=maxR; r.op=op; r.flat=flat;
    r.s.material.color.set(color); r.s.material.opacity=op;
    r.s.scale.setScalar(0.2);
  }
  flash(pos,color=0xffffff,intensity=60,dist=16){
    const o=this.lights[this.li]; this.li=(this.li+1)%this.lights.length;
    o.L.position.copy(pos); o.L.color.set(color); o.L.intensity=intensity; o.L.distance=dist; o.life=1;
  }
  // ---- 定番演出 ----
  hitSpark(pos,color,power=1,dir=null){
    const cols=[0xffffff,color,color];
    this.burst(pos,{n:6+power*7,color:0xffffff,colors:cols,speed:4+power*3,life:0.35+power*0.08,size:0.35+power*0.15,grav:10,dir,spread:0.9});
    this.spawnP(pos,{color:0xffffff,speed:0.2,life:0.12,size:1.2+power*0.7,grav:0,op:0.95});
    if(power>=2) this.ring(pos,{color,maxR:1.5+power,dur:0.35});
    this.flash(pos,color,26+power*22,10+power*3);
  }
  blockSpark(pos,color=0x66ccff){
    this.burst(pos,{n:8,colors:[0xffffff,color,0x2266ff],speed:4,life:0.3,size:0.3,grav:6});
    this.ring(pos,{color,maxR:1.4,dur:0.25,op:0.9});
    this.flash(pos,color,24,9);
  }
  parrySpark(pos){
    this.burst(pos,{n:26,colors:[0xffffff,0x9ff3ff,0x00f0ff,0xffd166],speed:9,life:0.5,size:0.45,grav:4});
    this.ring(pos,{color:0x9ff3ff,maxR:3.2,dur:0.45});
    this.ring(pos,{color:0xffd166,maxR:2.2,dur:0.35});
    this.flash(pos,0x9ff3ff,80,16);
  }
  dust(pos,n=8,color=0x8a93a8,size=0.5){
    n=this._n(n);
    for(let i=0;i<n;i++){
      this.spawnP(pos,{color,speed:1.6,life:0.7,size:size*(0.7+Math.random()*0.7),
        size1:size*2.2,grav:-1.2,drag:0.94,up:1.2,op:0.45,blend:THREE.NormalBlending});
    }
  }
  shockwave(pos,color=0xffffff,big=1){
    this.ring(pos,{color,maxR:6*big,dur:0.55,flat:true});
    this.ring(pos,{color:0xffffff,maxR:3*big,dur:0.4});
    this.burst(pos,{n:24*big,colors:[0xffffff,color],speed:10,life:0.6,size:0.6,grav:6,up:3});
    this.flash(pos,color,90,22);
  }
  ghost(fighter,color=0x00f0ff,life=0.35){
    if(this.ghosts.length>10) return;
    const src=fighter.rig.group;
    const g=src.clone(true);
    const m=new THREE.MeshBasicMaterial({color,transparent:true,opacity:0.55,blending:THREE.AdditiveBlending,depthWrite:false});
    g.traverse(o=>{ if(o.isMesh){ o.material=m; o.castShadow=false; } if(o.isSprite) o.visible=false; });
    g.position.copy(src.position); g.rotation.copy(src.rotation);
    this.scene.add(g);
    this.ghosts.push({g,m,life,maxLife:life});
  }
  aura(fighter,color,dur=1.0){
    this.emitters.push({f:fighter,color,t:dur});
  }
  update(dt,camera){
    // particles
    this.parts.each(p=>{
      p.life-=dt;
      if(p.life<=0){ p.alive=false; p.s.visible=false; return; }
      const k=p.life/p.maxLife;
      p.vel.y-=p.grav*dt;
      const dr=Math.pow(p.drag,dt*60);
      p.vel.multiplyScalar(dr);
      p.s.position.addScaledVector(p.vel,dt);
      if(p.s.position.y<0.03&&p.grav>0){ p.s.position.y=0.03; p.vel.y*=-0.3; }
      const sz=p.size1+(p.size0-p.size1)*k;
      p.s.scale.setScalar(sz);
      p.s.material.opacity=p.op*k;
      p.s.material.rotation+=p.spin*dt;
    });
    // rings
    this.rings.each(r=>{
      r.life-=dt;
      if(r.life<=0){ r.alive=false; r.s.visible=false; return; }
      const k=1-r.life/r.dur;
      const e=1-Math.pow(1-k,3);
      r.s.scale.setScalar(0.2+e*r.maxR);
      r.s.material.opacity=r.op*(1-k);
      if(r.flat){ /* スプライトは常にカメラ向き。地面リングは別途scaleY圧縮で表現 */ }
    });
    // lights
    for(const o of this.lights){ if(o.life>0){ o.life-=dt*4; o.L.intensity*=Math.pow(0.001,dt); if(o.life<=0)o.L.intensity=0; } }
    // ghosts
    for(let i=this.ghosts.length-1;i>=0;i--){
      const g=this.ghosts[i]; g.life-=dt;
      if(g.life<=0){ this.scene.remove(g.g); g.m.dispose(); this.ghosts.splice(i,1); continue; }
      g.m.opacity=0.55*(g.life/g.maxLife);
    }
    // emitters
    for(let i=this.emitters.length-1;i>=0;i--){
      const e=this.emitters[i]; e.t-=dt;
      if(e.t<=0){ this.emitters.splice(i,1); continue; }
      const n=this._n(3);
      for(let j=0;j<n;j++){
        const a=Math.random()*Math.PI*2, r=0.5+Math.random()*0.4;
        _e.set(e.f.pos.x+Math.cos(a)*r, 0.1+Math.random()*0.3, e.f.pos.z+Math.sin(a)*r);
        this.spawnP(_e,{color:e.color,speed:0.6,life:0.5,size:0.4,grav:-6,up:4,op:0.8});
      }
    }
  }
  clear(){
    this.parts.killAll(); this.parts.each(()=>{});
    for(const p of this.parts.items) p.s.visible=false;
    for(const r of this.rings.items) r.s.visible=false;
    this.rings.killAll();
    for(const g of this.ghosts){ this.scene.remove(g.g); g.m.dispose(); }
    this.ghosts.length=0; this.emitters.length=0;
  }
}
const _e=new THREE.Vector3();

// ================= ステージ =================
function canvasTex(draw,size=512){
  const c=document.createElement('canvas'); c.width=c.height=size;
  draw(c.getContext('2d'),size);
  const t=new THREE.CanvasTexture(c);
  t.wrapS=t.wrapT=THREE.RepeatWrapping; return t;
}
function skyDome(top,mid,bot,sunDir,sunColor){
  const geo=new THREE.SphereGeometry(90,24,16);
  const mat=new THREE.ShaderMaterial({
    side:THREE.BackSide, depthWrite:false, fog:false,
    uniforms:{ topC:{value:new THREE.Color(top)}, midC:{value:new THREE.Color(mid)},
      botC:{value:new THREE.Color(bot)}, sunD:{value:sunDir}, sunC:{value:new THREE.Color(sunColor)} },
    vertexShader:`varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader:`varying vec3 vP; uniform vec3 topC,midC,botC,sunD,sunC;
      void main(){ vec3 d=normalize(vP); float h=d.y*0.5+0.5;
        vec3 col=mix(botC,midC,smoothstep(0.45,0.62,h));
        col=mix(col,topC,smoothstep(0.60,0.95,h));
        float s=pow(max(dot(d,normalize(sunD)),0.0),220.0);
        float s2=pow(max(dot(d,normalize(sunD)),0.0),8.0);
        col+=sunC*(s*1.2+s2*0.25);
        gl_FragColor=vec4(col,1.0); }`
  });
  return new THREE.Mesh(geo,mat);
}
function stars(n=350,r=80){
  const g=new THREE.BufferGeometry(); const p=new Float32Array(n*3);
  for(let i=0;i<n;i++){
    const a=Math.random()*Math.PI*2, e=Math.random()*Math.PI*0.45+0.08;
    p[i*3]=Math.cos(a)*Math.cos(e)*r; p[i*3+1]=Math.sin(e)*r; p[i*3+2]=Math.sin(a)*Math.cos(e)*r;
  }
  g.setAttribute('position',new THREE.BufferAttribute(p,3));
  return new THREE.Points(g,new THREE.PointsMaterial({color:0xbfe9ff,size:1.4,sizeAttenuation:false,transparent:true,opacity:0.8,fog:false}));
}
function arenaBase(R,floorMat,accent){
  const grp=new THREE.Group();
  const floor=new THREE.Mesh(new THREE.CircleGeometry(R+3.5,64),floorMat);
  floor.rotation.x=-Math.PI/2; floor.receiveShadow=true; grp.add(floor);
  // 発光リング
  const ring=new THREE.Mesh(new THREE.RingGeometry(R-0.15,R+0.15,72),
    new THREE.MeshBasicMaterial({color:accent,transparent:true,opacity:0.9,side:THREE.DoubleSide}));
  ring.rotation.x=-Math.PI/2; ring.position.y=0.02; grp.add(ring);
  const ring2=new THREE.Mesh(new THREE.RingGeometry(R+1.6,R+1.75,72),
    new THREE.MeshBasicMaterial({color:accent,transparent:true,opacity:0.25,side:THREE.DoubleSide}));
  ring2.rotation.x=-Math.PI/2; ring2.position.y=0.02; grp.add(ring2);
  // 壁
  const wall=new THREE.Mesh(new THREE.CylinderGeometry(R+0.4,R+0.4,3.2,48,1,true),
    new THREE.MeshBasicMaterial({color:accent,transparent:true,opacity:0.10,side:THREE.DoubleSide,depthWrite:false}));
  wall.position.y=1.6; grp.add(wall);
  const rim=new THREE.Mesh(new THREE.TorusGeometry(R+0.4,0.08,10,64),
    new THREE.MeshBasicMaterial({color:accent}));
  rim.rotation.x=Math.PI/2; rim.position.y=3.1; grp.add(rim);
  return grp;
}

export function buildStage(id,def){
  const R=def.radius;
  const grp=new THREE.Group();
  const dyn={update(){}};
  const accent=new THREE.Color(def.accent);

  if(id==='neon_dojo'){
    grp.add(skyDome(def.sky.top,def.sky.mid,def.sky.bot,new THREE.Vector3(0.3,0.25,-1),0x88aaff));
    grp.add(stars(400));
    const floorTex=canvasTex((x,s)=>{
      x.fillStyle='#0d1226'; x.fillRect(0,0,s,s);
      x.strokeStyle='rgba(0,240,255,.16)'; x.lineWidth=2;
      for(let i=0;i<=8;i++){ x.beginPath();x.moveTo(i*s/8,0);x.lineTo(i*s/8,s);x.stroke(); x.beginPath();x.moveTo(0,i*s/8);x.lineTo(s,i*s/8);x.stroke(); }
      // 畳の縁っぽいライン
      x.strokeStyle='rgba(255,45,149,.35)'; x.lineWidth=4; x.strokeRect(6,6,s-12,s-12);
    });
    floorTex.repeat.set(4,4);
    grp.add(arenaBase(R,new THREE.MeshStandardMaterial({map:floorTex,roughness:0.6,metalness:0.3}),accent));
    // 中央円
    const c=new THREE.Mesh(new THREE.RingGeometry(1.9,2.1,48),
      new THREE.MeshBasicMaterial({color:0xff2d95,transparent:true,opacity:0.8,side:THREE.DoubleSide}));
    c.rotation.x=-Math.PI/2; c.position.y=0.02; grp.add(c);
    // 鳥居
    const toriiMat=new THREE.MeshStandardMaterial({color:0x881111,emissive:0xff2222,emissiveIntensity:0.35,roughness:0.6});
    const pil1=new THREE.Mesh(new THREE.BoxGeometry(0.5,7,0.5),toriiMat); pil1.position.set(-3,3.5,-R-4); grp.add(pil1);
    const pil2=pil1.clone(); pil2.position.x=3; grp.add(pil2);
    const lin=new THREE.Mesh(new THREE.BoxGeometry(8.4,0.6,0.8),toriiMat); lin.position.set(0,7.1,-R-4); grp.add(lin);
    const lin2=new THREE.Mesh(new THREE.BoxGeometry(7,0.4,0.5),toriiMat); lin2.position.set(0,6,-R-4); grp.add(lin2);
    // 提灯 (浮遊・上下動)
    const lans=[];
    const lanMat=new THREE.MeshStandardMaterial({color:0x331100,emissive:0xff8830,emissiveIntensity:2});
    for(let i=0;i<8;i++){
      const a=i/8*Math.PI*2;
      const l=new THREE.Mesh(new THREE.SphereGeometry(0.35,12,10),lanMat);
      l.position.set(Math.cos(a)*(R+2.5),3.4+Math.random(),Math.sin(a)*(R+2.5));
      l.userData={y:l.position.y,ph:Math.random()*9}; grp.add(l); lans.push(l);
      const pole=new THREE.Mesh(new THREE.BoxGeometry(0.12,4.4,0.12),
        new THREE.MeshStandardMaterial({color:0x11131f,roughness:0.8}));
      pole.position.set(l.position.x,2.2,l.position.z); grp.add(pole);
    }
    // ネオン柱
    const colMat=new THREE.MeshStandardMaterial({color:0x061018,emissive:def.accent,emissiveIntensity:1.4});
    for(let i=0;i<6;i++){
      const a=(i/6)*Math.PI*2+0.3;
      const col=new THREE.Mesh(new THREE.BoxGeometry(0.35,5.5,0.35),colMat);
      col.position.set(Math.cos(a)*(R+4.5),2.75,Math.sin(a)*(R+4.5)); grp.add(col);
    }
    dyn.update=(dt,t)=>{ for(const l of lans) l.position.y=l.userData.y+Math.sin(t*1.4+l.userData.ph)*0.25; };
  }
  else if(id==='sunset_roof'){
    grp.add(skyDome(def.sky.top,def.sky.mid,def.sky.bot,new THREE.Vector3(-0.5,0.06,-0.8),0xffd9a0));
    const floorTex=canvasTex((x,s)=>{
      x.fillStyle='#2c2c38'; x.fillRect(0,0,s,s);
      for(let i=0;i<900;i++){ x.fillStyle=`rgba(255,255,255,${Math.random()*0.05})`; x.fillRect(Math.random()*s,Math.random()*s,2,2); }
      x.strokeStyle='rgba(0,0,0,.5)'; x.lineWidth=3;
      for(let i=0;i<=4;i++){ x.beginPath();x.moveTo(i*s/4,0);x.lineTo(i*s/4,s);x.stroke(); x.beginPath();x.moveTo(0,i*s/4);x.lineTo(s,i*s/4);x.stroke(); }
    });
    floorTex.repeat.set(5,5);
    grp.add(arenaBase(R,new THREE.MeshStandardMaterial({map:floorTex,roughness:0.9,metalness:0.05}),accent));
    // ビル群シルエット
    const bMat=new THREE.MeshBasicMaterial({color:0x14101f});
    for(let i=0;i<26;i++){
      const a=i/26*Math.PI*2, d=34+Math.random()*14;
      const w=4+Math.random()*6, hh=6+Math.random()*16;
      const b=new THREE.Mesh(new THREE.BoxGeometry(w,hh,4),bMat);
      b.position.set(Math.cos(a)*d,hh/2-1,Math.sin(a)*d); b.rotation.y=-a; grp.add(b);
      // 窓明かり
      if(Math.random()<0.7){
        const win=new THREE.Mesh(new THREE.PlaneGeometry(w*0.7,hh*0.5),
          new THREE.MeshBasicMaterial({color:0xffc46b,transparent:true,opacity:0.5}));
        win.position.set(Math.cos(a)*(d-2.1),hh/2,Math.sin(a)*(d-2.1)); win.rotation.y=-a+Math.PI/2; grp.add(win);
      }
    }
    // フェンス
    const fMat=new THREE.MeshStandardMaterial({color:0x3a3f4a,roughness:0.6,metalness:0.6});
    for(let i=0;i<20;i++){
      const a=i/20*Math.PI*2;
      const p=new THREE.Mesh(new THREE.BoxGeometry(0.15,2.2,0.15),fMat);
      p.position.set(Math.cos(a)*(R+2.8),1.1,Math.sin(a)*(R+2.8)); grp.add(p);
    }
    const rail=new THREE.Mesh(new THREE.TorusGeometry(R+2.8,0.05,8,64),fMat);
    rail.rotation.x=Math.PI/2; rail.position.y=2.1; grp.add(rail);
    // 室外機・タンク
    const ac=new THREE.Mesh(new THREE.BoxGeometry(1.6,1,1),new THREE.MeshStandardMaterial({color:0x9aa0ad,roughness:0.7,metalness:0.4}));
    ac.position.set(R-1.5,0.5,R-1); ac.castShadow=true; grp.add(ac);
    const tank=new THREE.Mesh(new THREE.CylinderGeometry(1.2,1.2,2.6,16),new THREE.MeshStandardMaterial({color:0x707a8a,roughness:0.6,metalness:0.5}));
    tank.position.set(-R+1,1.3,-R+2); tank.castShadow=true; grp.add(tank);
    // アンテナ+点滅灯
    const ant=new THREE.Mesh(new THREE.CylinderGeometry(0.06,0.1,6,8),fMat);
    ant.position.set(R+1,3,-R-1); grp.add(ant);
    const beacon=new THREE.Mesh(new THREE.SphereGeometry(0.18,10,8),
      new THREE.MeshBasicMaterial({color:0xff2222}));
    beacon.position.set(R+1,6.1,-R-1); grp.add(beacon);
    // 太陽スプライト
    const sun=new THREE.Sprite(new THREE.SpriteMaterial({map:makeGlowTexture(),color:0xffb060,transparent:true,opacity:0.95,fog:false,depthWrite:false}));
    sun.position.set(-40,7,-60); sun.scale.setScalar(26); grp.add(sun);
    dyn.update=(dt,t)=>{ beacon.visible=(t%1.2)<0.6; };
  }
  else { // storm_ring
    grp.add(skyDome(def.sky.top,def.sky.mid,def.sky.bot,new THREE.Vector3(0.2,0.4,1),0x3355ff));
    grp.add(stars(200));
    const floorTex=canvasTex((x,s)=>{
      x.fillStyle='#11161f'; x.fillRect(0,0,s,s);
      x.strokeStyle='rgba(157,255,87,.14)'; x.lineWidth=2;
      for(let i=0;i<=6;i++){ x.beginPath();x.moveTo(i*s/6,0);x.lineTo(i*s/6,s);x.stroke(); x.beginPath();x.moveTo(0,i*s/6);x.lineTo(s,i*s/6);x.stroke(); }
      for(let i=0;i<40;i++){ x.fillStyle='rgba(255,255,255,.05)'; x.beginPath(); x.arc(Math.random()*s,Math.random()*s,Math.random()*3,0,7); x.fill(); }
    });
    floorTex.repeat.set(4,4);
    grp.add(arenaBase(R,new THREE.MeshStandardMaterial({map:floorTex,roughness:0.45,metalness:0.7}),accent));
    // リングポスト+ロープ
    const postMat=new THREE.MeshStandardMaterial({color:0x30363f,roughness:0.5,metalness:0.8});
    const ropeMat=new THREE.MeshStandardMaterial({color:0x111111,emissive:def.accent,emissiveIntensity:0.9});
    const posts=[];
    for(let i=0;i<4;i++){
      const a=i/4*Math.PI*2+Math.PI/4;
      const p=new THREE.Mesh(new THREE.CylinderGeometry(0.12,0.15,2.6,10),postMat);
      p.position.set(Math.cos(a)*(R+0.9),1.3,Math.sin(a)*(R+0.9)); p.castShadow=true; grp.add(p); posts.push(p.position.clone());
    }
    for(const y of [1.0,1.6,2.2]){
      for(let i=0;i<4;i++){
        const a=posts[i].clone().setY(y), b=posts[(i+1)%4].clone().setY(y);
        const d=a.distanceTo(b);
        const rope=new THREE.Mesh(new THREE.CylinderGeometry(0.035,0.035,d,6),ropeMat);
        rope.position.copy(a).lerp(b,0.5);
        rope.lookAt(b); rope.rotateX(Math.PI/2); grp.add(rope);
      }
    }
    // 雨
    const RN=700, rp=new Float32Array(RN*3);
    for(let i=0;i<RN;i++){ rp[i*3]=(Math.random()-0.5)*60; rp[i*3+1]=Math.random()*25; rp[i*3+2]=(Math.random()-0.5)*60; }
    const rainGeo=new THREE.BufferGeometry();
    rainGeo.setAttribute('position',new THREE.BufferAttribute(rp,3));
    const rain=new THREE.Points(rainGeo,new THREE.PointsMaterial({color:0x88aaff,size:0.12,transparent:true,opacity:0.6}));
    grp.add(rain);
    dyn.flashLight=null;
    dyn.update=(dt,t)=>{
      const arr=rainGeo.attributes.position.array;
      for(let i=0;i<RN;i++){ arr[i*3+1]-=dt*22; if(arr[i*3+1]<0){ arr[i*3+1]=25; arr[i*3]=(Math.random()-0.5)*60; arr[i*3+2]=(Math.random()-0.5)*60; } }
      rainGeo.attributes.position.needsUpdate=true;
      // 稲妻
      if(dyn.flashLight&&Math.random()<dt*0.5){
        dyn.flashLight.intensity=120; dyn.flashT=0.12;
      }
      if(dyn.flashT>0){ dyn.flashT-=dt; if(dyn.flashT<=0) dyn.flashLight.intensity=0; }
    };
  }
  return { group:grp, dyn, radius:R };
}
