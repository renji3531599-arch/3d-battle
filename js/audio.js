// ===== NEON KUMITE : synthesized audio (SFX + BGM, no assets) =====
export class AudioSys {
  constructor(){
    this.ctx = null; this.master = null; this.sfxBus = null; this.musBus = null;
    this.muted = false; this.vol = 0.7;
    this.bgmTimer = null; this.bgmStep = 0; this.bgmStyle = 'battle1';
    this.noiseBuf = null;
  }
  init(){
    if(this.ctx) { if(this.ctx.state==='suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if(!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.connect(this.ctx.destination);
    this.sfxBus = this.ctx.createGain(); this.sfxBus.connect(this.master);
    this.musBus = this.ctx.createGain(); this.musBus.gain.value = 0.5; this.musBus.connect(this.master);
    // noise buffer
    const len = this.ctx.sampleRate * 1;
    this.noiseBuf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for(let i=0;i<len;i++) d[i] = Math.random()*2-1;
    this.applyVol();
  }
  applyVol(){
    if(!this.master) return;
    this.master.gain.value = this.muted ? 0 : (this.vol*this.vol*1.2);
  }
  setVol(v){ this.vol = v; this.applyVol(); }
  setMute(m){ this.muted = m; this.applyVol(); }
  now(){ return this.ctx ? this.ctx.currentTime : 0; }

  // --- primitives ---
  tone({f=440, f1=null, t=0.15, type='sine', g=0.5, at=0, bus=null}={}){
    if(!this.ctx) return;
    const c=this.ctx, o=c.createOscillator(), gn=c.createGain();
    const t0=c.currentTime+at;
    o.type=type; o.frequency.setValueAtTime(f,t0);
    if(f1!=null) o.frequency.exponentialRampToValueAtTime(Math.max(1,f1), t0+t);
    gn.gain.setValueAtTime(0.0001,t0);
    gn.gain.exponentialRampToValueAtTime(g, t0+0.008);
    gn.gain.exponentialRampToValueAtTime(0.0001, t0+t);
    o.connect(gn); gn.connect(bus||this.sfxBus);
    o.start(t0); o.stop(t0+t+0.05);
  }
  noise({t=0.2, g=0.5, at=0, hp=null, lp=null, f1=null, Q=1, bus=null}={}){
    if(!this.ctx) return;
    const c=this.ctx, s=c.createBufferSource(), gn=c.createGain();
    const t0=c.currentTime+at;
    s.buffer=this.noiseBuf; s.loop=true;
    let node=s;
    if(hp!=null){ const f=c.createBiquadFilter(); f.type='highpass'; f.frequency.value=hp; node.connect(f); node=f; }
    if(lp!=null){ const f=c.createBiquadFilter(); f.type='lowpass'; f.frequency.value=lp; f.Q.value=Q;
      if(f1!=null) f.frequency.exponentialRampToValueAtTime(f1, t0+t);
      node.connect(f); node=f; }
    gn.gain.setValueAtTime(0.0001,t0);
    gn.gain.exponentialRampToValueAtTime(g, t0+0.006);
    gn.gain.exponentialRampToValueAtTime(0.0001, t0+t);
    node.connect(gn); gn.connect(bus||this.sfxBus);
    s.start(t0); s.stop(t0+t+0.05);
  }

  // --- SFX ---
  uiMove(){ this.tone({f:660,f1:880,t:0.07,type:'square',g:0.12}); }
  uiOk(){ this.tone({f:520,t:0.09,type:'square',g:0.16}); this.tone({f:780,at:0.07,t:0.12,type:'square',g:0.16}); }
  uiBack(){ this.tone({f:440,f1:220,t:0.12,type:'square',g:0.14}); }
  whiff(p=1){ this.noise({t:0.12,lp:2500,f1:500,g:0.16*p}); }
  punch(p=1){
    this.noise({t:0.10,lp:1800,g:0.5*p});
    this.tone({f:160,f1:60,t:0.14,g:0.55*p});
  }
  kick(p=1){
    this.noise({t:0.13,lp:1200,g:0.5*p});
    this.tone({f:120,f1:45,t:0.18,g:0.6*p});
  }
  heavyHit(){
    this.noise({t:0.25,lp:900,g:0.7});
    this.tone({f:90,f1:32,t:0.35,g:0.8});
    this.tone({f:1400,f1:200,t:0.1,type:'sawtooth',g:0.2});
  }
  block(){
    this.tone({f:320,f1:180,t:0.12,type:'square',g:0.3});
    this.noise({t:0.08,hp:1500,g:0.25});
  }
  parry(){
    this.tone({f:1200,f1:2400,t:0.18,type:'triangle',g:0.4});
    this.tone({f:1800,at:0.05,t:0.25,type:'sine',g:0.3});
    this.noise({t:0.15,hp:3000,g:0.2});
  }
  crush(){ this.tone({f:200,f1:50,t:0.4,type:'sawtooth',g:0.5}); this.noise({t:0.3,lp:700,g:0.5}); }
  grab(){ this.noise({t:0.12,lp:800,g:0.4}); this.tone({f:200,f1:90,t:0.15,g:0.4}); }
  thrown(){ this.noise({t:0.3,lp:1500,f1:300,g:0.35}); this.tone({f:300,f1:80,t:0.3,type:'sawtooth',g:0.25}); }
  land(){ this.noise({t:0.12,lp:500,g:0.4}); this.tone({f:100,f1:45,t:0.12,g:0.4}); }
  jump(){ this.tone({f:280,f1:560,t:0.12,type:'triangle',g:0.18}); }
  dash(){ this.noise({t:0.18,lp:3500,f1:600,g:0.22}); }
  step(){ this.noise({t:0.05,lp:600,g:0.12}); }
  bell(n=1){ for(let i=0;i<n;i++){ this.tone({f:880,at:i*0.5,t:0.8,g:0.3}); this.tone({f:1320,at:i*0.5,t:0.6,g:0.15}); } }
  count(final=false){
    if(final){ this.tone({f:880,t:0.35,type:'square',g:0.3}); this.tone({f:1320,at:0.02,t:0.35,type:'square',g:0.2}); }
    else this.tone({f:440,t:0.12,type:'square',g:0.22});
  }
  ko(){
    this.tone({f:70,f1:28,t:1.0,g:0.9});
    this.noise({t:0.6,lp:600,g:0.7});
    this.tone({f:1500,f1:100,t:0.5,type:'sawtooth',g:0.2});
    this.bell(2);
  }
  superFlash(){
    this.tone({f:100,f1:2000,t:0.6,type:'sawtooth',g:0.25});
    this.noise({t:0.6,hp:500,g:0.2});
    this.tone({f:60,f1:120,t:0.5,g:0.6});
  }
  superHit(i){
    this.noise({t:0.12,lp:2000,g:0.55});
    this.tone({f:200+i*60,f1:70,t:0.16,g:0.6});
  }
  superFinish(){
    this.heavyHit();
    this.tone({f:500,f1:50,t:0.8,type:'sawtooth',g:0.4});
  }
  roundWin(){ [523,659,784,1046].forEach((f,i)=>this.tone({f,at:i*0.1,t:0.25,type:'triangle',g:0.3})); }
  announce(){ this.tone({f:150,f1:600,t:0.3,type:'sawtooth',g:0.2}); }

  // --- BGM : step sequencer ---
  startBGM(style='battle1'){
    if(!this.ctx) return;
    this.stopBGM();
    this.bgmStyle = style; this.bgmStep = 0;
    const stepDur = style==='title' ? 0.24 : 0.155;
    const tick = ()=>{
      if(!this.ctx) return;
      this.playStep(this.bgmStep, style);
      this.bgmStep++;
      this.bgmTimer = setTimeout(tick, stepDur*1000);
    };
    tick();
  }
  stopBGM(){ if(this.bgmTimer){ clearTimeout(this.bgmTimer); this.bgmTimer=null; } }
  playStep(s, style){
    const bus = this.musBus, bar = Math.floor(s/16)%4, st = s%16;
    if(style==='title'){
      // 幻想的なアルペジオ (Am - F - C - G)
      const roots=[110,87.3,130.8,98];
      const scale=[0,3,7,12,15,19,24];
      if(st%2===0){ const n=roots[bar]*Math.pow(2,scale[(s/2)%7]/12); this.tone({f:n,t:0.22,type:'triangle',g:0.20,bus,at:0}); }
      if(st===0) this.tone({f:roots[bar]/2,t:0.5,type:'sine',g:0.30,bus});
      if(st%8===4) this.noise({t:0.06,hp:6000,g:0.05,bus});
      return;
    }
    // battle: driving minor groove  E phryg-ish
    const bassLine=[41.2,41.2,43.6,41.2, 49,41.2,46.2,43.6, 41.2,41.2,55,49, 46.2,43.6,41.2,39];
    const b = style==='battle2' ? bassLine[st]*1.335 : bassLine[st];
    if(st%2===0) this.tone({f:b,t:0.16,type:'sawtooth',g:0.16,bus});
    this.tone({f:b/2,t:0.14,type:'sine',g:0.30,bus,at:0});
    if(st%4===0) this.tone({f:120,f1:40,t:0.12,g:0.5,bus});            // kick
    if(st%4===2) this.noise({t:0.08,hp:1800,g:0.22,bus});              // snare
    if(st%2===1) this.noise({t:0.03,hp:8000,g:0.07,bus});              // hat
    const arpNotes=[329.6,392,493.9,587.3,493.9,392];
    if(bar>=1 && st%2===1) this.tone({f:arpNotes[(s+bar)%6]*(style==='battle2'?0.891:1),t:0.12,type:'square',g:0.06,bus});
    if(st===0&&bar===3) this.tone({f:82.4,t:0.5,type:'sawtooth',g:0.12,bus});
  }
}
