// headless stage/effects test (node + minimal canvas stub)
import * as THREE from 'three';

// ---- minimal DOM stub for canvas textures ----
function fake2d() {
  const grad = { addColorStop() {} };
  return {
    fillStyle: '', strokeStyle: '', lineWidth: 1,
    createRadialGradient() { return grad; },
    createLinearGradient() { return grad; },
    fillRect() {}, strokeRect() {}, clearRect() {},
    beginPath() {}, arc() {}, fill() {}, stroke() {},
    moveTo() {}, lineTo() {}, closePath() {},
    save() {}, restore() {}, translate() {}, scale() {},
  };
}
globalThis.document = {
  createElement(tag) {
    if (tag === 'canvas') return { width: 300, height: 300, getContext: () => fake2d() };
    throw new Error('stub: ' + tag);
  },
};

const { Effects, buildStage } = await import('../js/world.js');
const { CHARACTERS, STAGES } = await import('../js/config.js');
const { Fighter } = await import('../js/fighter.js');

let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error('  FAIL -', m); } };

console.log('== stages ==');
for (const def of STAGES) {
  try {
    const st = buildStage(def.id, def);
    ok(st.group && st.dyn && st.radius === def.radius, `${def.id} builds`);
    let meshes = 0;
    st.group.traverse(o => { if (o.isMesh || o.isPoints || o.isSprite) meshes++; });
    ok(meshes > 10, `${def.id} has content (${meshes} objs)`);
    for (let i = 0; i < 120; i++) st.dyn.update(1 / 60, i / 60);
    ok(true, `${def.id} dyn.update stable`);
    // geometry sanity
    let bad = 0;
    st.group.traverse(o => { if (o.isMesh && (!o.geometry || !o.geometry.attributes)) bad++; });
    ok(bad === 0, `${def.id} geometries valid`);
  } catch (e) { ok(false, `${def.id} threw: ${e.message}`); }
}

console.log('== effects ==');
{
  const scene = { add() {}, remove() {} };
  const fx = new Effects(scene);
  fx.setBudget(1);
  const f1 = new Fighter(scene, CHARACTERS[0]);
  f1.reset(-2, 0, Math.PI / 2);
  const P = new THREE.Vector3(0, 1.2, 0);
  try {
    fx.hitSpark(P, 0xff0000, 1, new THREE.Vector3(1, 0, 0));
    fx.hitSpark(P, 0x00ff00, 2, null);
    fx.hitSpark(P, 0x0000ff, 3, new THREE.Vector3(0, 1, 0));
    fx.blockSpark(P);
    fx.parrySpark(P);
    fx.dust(P, 10);
    fx.shockwave(P, 0xffffff, 1);
    fx.ring(P, { color: 0xff0000, maxR: 3, dur: 0.4 });
    fx.flash(P, 0xffffff, 50, 12);
    for (let i = 0; i < 5; i++) fx.ghost(f1, 0x00f0ff, 0.3);
    fx.aura(f1, 0xff0000, 1.0);
    fx.burst(P, { n: 40, colors: [0xff0000, 0x00ff00], speed: 8, life: 0.6, size: 0.5 });
    const cam = new THREE.PerspectiveCamera();
    for (let i = 0; i < 180; i++) fx.update(1 / 60, cam);
    ok(true, 'all effect types run 180 frames');
    // pool recycle: everything should be dead after long update
    let alive = 0;
    fx.parts.each(() => alive++);
    ok(alive === 0, `particles recycled (${alive} alive)`);
    ok(fx.ghosts.length === 0, 'ghosts recycled');
    ok(fx.emitters.length === 0, 'emitters expired');
    fx.clear();
    ok(true, 'clear() ok');
  } catch (e) { ok(false, 'effects threw: ' + e.stack.split('\n').slice(0, 3).join(' | ')); }
}

console.log(`\nRESULT: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
