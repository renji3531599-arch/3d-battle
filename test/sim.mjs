// headless combat simulation test (node, no DOM/WebGL)
import * as THREE from 'three';
import fs from 'fs';
import { CHARACTERS, MOVES, BALANCE, DIFFICULTY, STAGES } from '../js/config.js';
import { CLIPS } from '../js/anim.js';
import { Fighter } from '../js/fighter.js';
import { Brain } from '../js/game.js';

let pass = 0, fail = 0;
function ok(cond, msg) {
  if (cond) { pass++; /* console.log('  ok -', msg); */ }
  else { fail++; console.error('  FAIL -', msg); }
}
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const _v = new THREE.Vector3(), _v2 = new THREE.Vector3();
const finite = (n) => Number.isFinite(n);

function makeEnv(arenaR = 9.5) {
  const calls = { hit: 0, block: 0, parry: 0, crush: 0, launch: 0, grab: 0, ko: 0, landDown: 0, wall: 0, super: 0, tryHit: 0, sfx: {} };
  const env = {
    arenaR, arenaX: 0, arenaZ: 0, dmgMul: 1,
    sfx: (n) => { calls.sfx[n] = (calls.sfx[n] || 0) + 1; },
    tryHit: (a, d, m, o) => {
      calls.tryHit++;
      _v.subVectors(d.pos, a.pos); _v.y = 0;
      const dist = _v.length(); _v.normalize(); a.fwd(_v2);
      const ang = Math.acos(clamp(_v.dot(_v2), -1, 1)) * 180 / Math.PI;
      if (dist > m.range || ang > m.arc / 2) return;
      let mv = m;
      if (m.hits) { const last = o.hitIdx === m.hits - 1; mv = Object.assign({}, m, { dmg: last ? 12 : 7, launch: last ? m.launch : null, kb: last ? 4 : 0.6, hitstun: last ? 0.5 : 0.35 }); }
      const res = d.takeHit(mv, a, env);
      if (m.hits && (res === 'hit' || res === 'launch')) {
        a.fwd(_v2);
        _v.copy(a.pos).addScaledVector(_v2, 1.25); _v.y = d.pos.y;
        d.pos.lerp(_v, 0.65);
        if (d.state === 'hit' || d.state === 'launch') d.vel.multiplyScalar(0.25);
      }
    },
    onHit: () => { calls.hit++; },
    onBlock: () => { calls.block++; },
    onParry: () => { calls.parry++; },
    onCrush: () => { calls.crush++; },
    onLaunch: () => { calls.launch++; },
    onGrab: () => { calls.grab++; },
    onKO: (d) => { calls.ko++; d.state = 'ko'; d.anim.play('ko', 0.05); },
    onLandDown: () => { calls.landDown++; },
    onWallSplat: () => { calls.wall++; },
    onSuperStart: () => { calls.super++; },
  };
  return { env, calls };
}
function zeroCmd(f) { const c = f.cmd; for (const k in c) if (typeof c[k] === 'boolean') c[k] = false; c.mx = 0; c.mz = 0; }
function step(f1, f2, env, n, dt = 1 / 60) {
  for (let i = 0; i < n; i++) { f1.update(dt, f2, env); f2.update(dt, f1, env); }
}
function jointsFinite(f) {
  const j = f.rig.j;
  for (const k of ['hips', 'spine', 'chest', 'head', 'shL', 'elL', 'shR', 'elR', 'legL', 'kneeL', 'legR', 'kneeR']) {
    const r = j[k].rotation;
    if (!finite(r.x) || !finite(r.y) || !finite(r.z)) return false;
  }
  return finite(f.pos.x) && finite(f.pos.y) && finite(f.pos.z) && finite(f.hp);
}

console.log('== data validation ==');
ok(CHARACTERS.length === 4, '4 characters');
for (const c of CHARACTERS) {
  ok(c.palette && c.body && c.ai && c.stats, `char ${c.id} fields`);
  ok(c.hp > 0 && c.atk > 0 && c.def > 0 && c.spd > 0, `char ${c.id} stats positive`);
}
const MVF = ['dur', 'startup', 'active', 'dmg', 'range', 'arc', 'hitstun', 'blockstun', 'kb', 'meter', 'type', 'limb'];
for (const [id, m] of Object.entries(MOVES)) {
  ok(MVF.every(f => m[f] !== undefined), `move ${id} fields`);
  ok(m.active[0] >= m.startup - 0.001 && m.active[1] <= m.dur + 0.001, `move ${id} timing sane`);
}
ok(Object.keys(DIFFICULTY).length === 4, '4 difficulties');
ok(STAGES.length === 3, '3 stages');

console.log('== clip coverage ==');
{
  const scene = { add() {} };
  const f = new Fighter(scene, CHARACTERS[0]);
  for (const id of Object.keys(CLIPS)) {
    f.anim.play(id, 0.01);
    const n = Math.ceil((CLIPS[id].dur + 0.3) * 60);
    for (let i = 0; i < n; i++) f.anim.update(1 / 60, 0, true);
    ok(jointsFinite(f), `clip ${id} finite`);
  }
  // locomotion speeds
  for (const sp of [0, 2, 5, 8]) {
    f.anim.play('idle', 0.05);
    for (let i = 0; i < 60; i++) f.anim.update(1 / 60, sp, true);
    ok(jointsFinite(f), `loco speed ${sp} finite`);
  }
}

console.log('== locomotion & physics ==');
{
  const scene = { add() {} };
  const { env } = makeEnv();
  const f1 = new Fighter(scene, CHARACTERS[0]);
  const f2 = new Fighter(scene, CHARACTERS[1]);
  f1.reset(-3, 0, Math.PI / 2); f2.reset(3, 0, -Math.PI / 2);
  f1.cmd.mx = 1;
  step(f1, f2, env, 60);
  ok(f1.pos.x > -2, `walk forward (x=${f1.pos.x.toFixed(2)})`);
  zeroCmd(f1);
  f1.cmd.jump = true;
  step(f1, f2, env, 3);
  zeroCmd(f1);
  ok(f1.airborne, 'jump leaves ground');
  step(f1, f2, env, 120);
  ok(!f1.airborne && f1.pos.y === 0, 'lands back');
  // dash
  const dx = f1.pos.x;
  f1.cmd.mx = 1; f1.cmd.dash = true;
  step(f1, f2, env, 3);
  zeroCmd(f1);
  step(f1, f2, env, 20);
  ok(f1.pos.x > dx + 0.8, `dash covers distance (+${(f1.pos.x - dx).toFixed(2)})`);
  ok(jointsFinite(f1) && jointsFinite(f2), 'loco finite');
}

console.log('== strikes ==');
for (const mid of ['jab', 'kick', 'heavy', 'sweep', 'kickhigh', 'straight', 'jab2', 'airatk']) {
  const scene = { add() {} };
  const { env, calls } = makeEnv();
  const f1 = new Fighter(scene, CHARACTERS[0]);
  const f2 = new Fighter(scene, CHARACTERS[1]);
  f1.reset(-0.75, 0, Math.PI / 2); f2.reset(0.75, 0, -Math.PI / 2);
  const hp0 = f2.hp;
  f1.startAttack(mid);
  step(f1, f2, env, 200);
  ok(f2.hp < hp0, `${mid} deals damage (${hp0} -> ${f2.hp})`);
  ok(f1.state === 'idle', `${mid} returns to idle (${f1.state})`);
  ok(calls.tryHit > 0, `${mid} active frames ran`);
}
{
  // heavy launches, sweep downs -> down -> wakeup -> idle cycle
  const scene = { add() {} };
  const { env, calls } = makeEnv();
  const f1 = new Fighter(scene, CHARACTERS[0]);
  const f2 = new Fighter(scene, CHARACTERS[1]);
  f1.reset(-0.8, 0, Math.PI / 2); f2.reset(0.8, 0, -Math.PI / 2);
  f1.startAttack('heavy');
  let sawLaunch = false, sawDown = false;
  for (let i = 0; i < 300; i++) {
    f1.update(1 / 60, f2, env); f2.update(1 / 60, f1, env);
    if (f2.state === 'launch') sawLaunch = true;
    if (f2.state === 'down') sawDown = true;
  }
  ok(sawLaunch && calls.launch > 0, 'heavy launches');
  ok(sawDown && calls.landDown > 0, 'landing -> down');
  ok(f2.state === 'idle', `wakeup -> idle (${f2.state})`);
}

console.log('== chains ==');
{
  const scene = { add() {} };
  const { env } = makeEnv();
  const f1 = new Fighter(scene, CHARACTERS[0]);
  const f2 = new Fighter(scene, CHARACTERS[1]);
  f1.reset(-0.8, 0, Math.PI / 2); f2.reset(0.8, 0, -Math.PI / 2);
  const seen = new Set();
  f1.cmd.punch = true;
  for (let i = 0; i < 300; i++) {
    if (f1.state === 'attack' && f1.atk) seen.add(f1.atkId);
    zeroCmd(f1);
    if (f1.state === 'idle') f1.cmd.punch = true;
    else if (f1.state === 'attack' && f1.hasHit && f1.atkT > f1.atk.active[1] - 0.1) f1.cmd.punch = true;
    f1.update(1 / 60, f2, env); f2.update(1 / 60, f1, env);
    if (f2.hp <= 0) break;
  }
  ok(seen.has('jab2') || seen.has('straight'), `punch chain advances (${[...seen].join(',')})`);
}

console.log('== guard / parry / crush ==');
{
  const scene = { add() {} };
  const { env, calls } = makeEnv();
  const f1 = new Fighter(scene, CHARACTERS[0]);
  const f2 = new Fighter(scene, CHARACTERS[1]);
  f1.reset(-0.8, 0, Math.PI / 2); f2.reset(0.8, 0, -Math.PI / 2);
  f2.cmd.block = true;
  step(f1, f2, env, 30); // ガード維持 (パリィ受付の消化待ち)
  f1.startAttack('jab');
  step(f1, f2, env, 100);
  ok(calls.block > 0, 'guard blocks');
  ok(f2.hp > f2.maxhp - 4, `chip only (${f2.hp}/${f2.maxhp})`);
  // parry
  const f3 = new Fighter(scene, CHARACTERS[0]);
  const f4 = new Fighter(scene, CHARACTERS[1]);
  f3.reset(-0.8, 0, Math.PI / 2); f4.reset(0.8, 0, -Math.PI / 2);
  f4.state = 'block'; f4.blockTap = 0.15;
  const r = f4.takeHit(MOVES.jab, f3, env);
  ok(r === 'parry' && calls.parry > 0, 'just-guard parry');
  ok(f3.state === 'crush', 'attacker staggered');
  // crush
  const f5 = new Fighter(scene, CHARACTERS[0]);
  const f6 = new Fighter(scene, CHARACTERS[1]);
  f5.reset(-0.8, 0, Math.PI / 2); f6.reset(0.8, 0, -Math.PI / 2);
  f6.state = 'block'; f6.stam = 2;
  const r2 = f6.takeHit(MOVES.straight, f5, env);
  ok(r2 === 'crush' && calls.crush > 0, 'guard crush on stam break');
}

console.log('== grab / super / ko ==');
{
  const scene = { add() {} };
  const { env, calls } = makeEnv();
  const f1 = new Fighter(scene, CHARACTERS[0]);
  const f2 = new Fighter(scene, CHARACTERS[1]);
  f1.reset(-0.7, 0, Math.PI / 2); f2.reset(0.7, 0, -Math.PI / 2);
  f1.startAttack('grab');
  let sawGrabbed = false;
  for (let i = 0; i < 200; i++) {
    f1.update(1 / 60, f2, env); f2.update(1 / 60, f1, env);
    if (f2.state === 'grabbed') sawGrabbed = true;
  }
  ok(calls.grab > 0 && sawGrabbed, 'grab connects');
  ok(f2.hp < f2.maxhp, 'throw damage');
}
{
  const scene = { add() {} };
  const { env, calls } = makeEnv();
  const f1 = new Fighter(scene, CHARACTERS[2]);
  const f2 = new Fighter(scene, CHARACTERS[3]);
  f1.reset(-2.2, 0, Math.PI / 2); f2.reset(0, 0, -Math.PI / 2);
  f1.meter = 100;
  ok(f1.startAttack('super') === true, 'super with meter');
  step(f1, f2, env, 200);
  ok(calls.hit >= 4, `super multi-hit (${calls.hit} hits)`);
  ok(f1.meter < 100, 'meter consumed');
  const f3 = new Fighter(scene, CHARACTERS[0]);
  f3.meter = 50;
  ok(f3.startAttack('super') === false, 'super denied without meter');
}
{
  const scene = { add() {} };
  const { env, calls } = makeEnv();
  const f1 = new Fighter(scene, CHARACTERS[0]);
  const f2 = new Fighter(scene, CHARACTERS[1]);
  f1.reset(-0.8, 0, Math.PI / 2); f2.reset(0.8, 0, -Math.PI / 2);
  f2.hp = 3;
  f1.startAttack('jab');
  step(f1, f2, env, 60);
  ok(calls.ko === 1 && f2.state === 'ko', 'KO path');
}

console.log('== iframes / invuln / wall ==');
{
  const scene = { add() {} };
  const { env } = makeEnv();
  const f1 = new Fighter(scene, CHARACTERS[0]);
  const f2 = new Fighter(scene, CHARACTERS[1]);
  f1.reset(-0.8, 0, Math.PI / 2); f2.reset(0.8, 0, -Math.PI / 2);
  f2.state = 'dash'; f2.dashT = 0.05;
  ok(f2.takeHit(MOVES.jab, f1, env) === 'miss', 'dash i-frames');
  f2.state = 'down';
  ok(f2.takeHit(MOVES.jab, f1, env) === 'miss', 'down invuln');
  f2.state = 'idle'; f2.airborne = true; f2.vy = 3;
  ok(f2.takeHit(MOVES.jab, f1, env) === 'hit', 'air juggle connects');
}
{
  const scene = { add() {} };
  const R = 9.5;
  const { env, calls } = makeEnv(R);
  const f1 = new Fighter(scene, CHARACTERS[0]);
  const f2 = new Fighter(scene, CHARACTERS[1]);
  f1.reset(0, 0, 0); f2.reset(R - 1.2, 0, 0);
  f2.state = 'launch'; f2.airborne = true; f2.vy = 4;
  f2.vel.set(9, 0, 0);
  step(f1, f2, env, 120);
  ok(calls.wall > 0, 'wall splat triggers');
  const d = Math.hypot(f2.pos.x, f2.pos.z);
  ok(d <= R - 0.5 + 0.01, `clamped in arena (${d.toFixed(2)})`);
}

console.log('== AI brain ==');
for (const dk of ['easy', 'normal', 'hard', 'master']) {
  const scene = { add() {} };
  const { env } = makeEnv();
  const me = new Fighter(scene, CHARACTERS[0]);
  const foe = new Fighter(scene, CHARACTERS[1]);
  me.reset(-3, 0, Math.PI / 2); foe.reset(3, 0, -Math.PI / 2);
  const brain = new Brain(dk, CHARACTERS[0].ai);
  let atk = 0, blk = 0;
  for (let i = 0; i < 2400; i++) {
    if (i % 90 === 0 && foe.state === 'idle') foe.startAttack('jab');
    brain.update(1 / 60, me, foe, null);
    if (me.cmd.block) blk++;
    me.update(1 / 60, foe, env); foe.update(1 / 60, me, env);
    if (me.state === 'attack') atk++;
    if (me.hp <= 0 || foe.hp <= 0) break;
  }
  ok(atk > 3, `AI[${dk}] attacks (${atk}f)`);
  if (dk === 'hard' || dk === 'master') ok(blk > 0, `AI[${dk}] guards (${blk}f)`);
  ok(jointsFinite(me) && jointsFinite(foe), `AI[${dk}] finite`);
}
{
  // dummy modes
  const scene = { add() {} };
  const { env } = makeEnv();
  const me = new Fighter(scene, CHARACTERS[0]);
  const foe = new Fighter(scene, CHARACTERS[1]);
  const brain = new Brain('normal', CHARACTERS[0].ai);
  for (const dm of ['stand', 'guard', 'random']) {
    me.reset(-2, 0, Math.PI / 2); foe.reset(2, 0, -Math.PI / 2);
    for (let i = 0; i < 300; i++) {
      brain.update(1 / 60, me, foe, dm);
      me.update(1 / 60, foe, env); foe.update(1 / 60, me, env);
    }
    ok(jointsFinite(me), `dummy[${dm}] stable`);
  }
}

console.log('== html/dom/audio cross-check ==');
{
  const html = fs.readFileSync('index.html', 'utf8');
  const gameJs = fs.readFileSync('js/game.js', 'utf8');
  const audioJs = fs.readFileSync('js/audio.js', 'utf8');
  const fighterJs = fs.readFileSync('js/fighter.js', 'utf8');
  const ids = new Set([...gameJs.matchAll(/\$\('([^']+)'\)/g)].map(m => m[1]));
  let missing = [];
  for (const id of ids) {
    if (!html.includes(`id="${id}"`)) missing.push(id);
  }
  ok(missing.length === 0, `all $${'{'}...{'}'} ids exist${missing.length ? ': ' + missing.join(',') : ''} (${ids.size} checked)`);
  // querySelector ids
  const qids = [...gameJs.matchAll(/querySelectorAll\('#([A-Za-z0-9_-]+)/g)].map(m => m[1]);
  missing = qids.filter(id => !html.includes(`id="${id}"`));
  ok(missing.length === 0, `querySelector ids exist (${qids.join(',')})`);
  // audio methods
  const meths = new Set([...audioJs.matchAll(/^  (\w+)\(/gm)].map(m => m[1]));
  const used = new Set([...gameJs.matchAll(/(?:audio|A)\.(\w+)\(/g)].map(m => m[1]));
  const audioMissing = [...used].filter(m => !meths.has(m) && m !== 'init');
  ok(audioMissing.length === 0, `audio methods exist (${[...used].join(',')})`);
  // sfx names
  const sfxHandled = ['whiff', 'jump', 'dash', 'land', 'thrown'];
  const sfxUsed = new Set([...fighterJs.matchAll(/sfx\('(\w+)'/g)].map(m => m[1]));
  const sfxMissing = [...sfxUsed].filter(s => !sfxHandled.includes(s));
  ok(sfxMissing.length === 0, `sfx names handled (${[...sfxUsed].join(',')})`);
}

console.log(`\nRESULT: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
