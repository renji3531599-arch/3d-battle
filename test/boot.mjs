// E2E: boot the REAL Game in jsdom, click through title->mode->select->fight
import { register } from 'node:module';
import fs from 'fs';
import { JSDOM } from 'jsdom';

let pass = 0, fail = 0;
const ok = (c, m) => { if (c) { pass++; } else { fail++; console.error('  FAIL -', m); } };
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// ---------- DOM ----------
const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html, { url: 'http://localhost:8000/', pretendToBeVisual: true });
const { window } = dom;

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
window.HTMLCanvasElement.prototype.getContext = function () { return fake2d(); };

globalThis.window = window;
globalThis.document = window.document;
try { Object.defineProperty(globalThis, 'navigator', { value: window.navigator, configurable: true }); } catch (e) {}
globalThis.localStorage = window.localStorage;
globalThis.addEventListener = window.addEventListener.bind(window);
globalThis.removeEventListener = window.removeEventListener.bind(window);
globalThis.innerWidth = 1280;
globalThis.innerHeight = 720;
globalThis.devicePixelRatio = 1;
let rafQ = [];
globalThis.requestAnimationFrame = (cb) => { rafQ.push(cb); return rafQ.length; };
globalThis.cancelAnimationFrame = () => {};

// ---------- three redirect + import ----------
register('./redirect-hooks.mjs', import.meta.url);
const { Game } = await import('../js/game.js');

// ---------- helpers ----------
let now = 1000;
function frames(n, stepMs = 16.7) {
  for (let i = 0; i < n; i++) {
    now += stepMs;
    const q = rafQ; rafQ = [];
    if (!q.length) throw new Error('rAF queue empty (loop died?)');
    for (const cb of q) cb(now);
  }
}
const $ = (id) => document.getElementById(id);
const visible = (id) => !$(id).classList.contains('hidden');
function click(id) {
  const el = $(id);
  if (!el) throw new Error('no such element: ' + id);
  el.click();
}
function key(code, type = 'keydown') {
  const ev = new window.KeyboardEvent(type, { code, bubbles: true });
  // jsdom may not set .code from init dict on older versions; force it
  if (ev.code !== code) Object.defineProperty(ev, 'code', { value: code });
  window.dispatchEvent(ev);
}

// ---------- boot ----------
console.log('== boot ==');
const g = new Game();
try {
  g.boot();
  ok(true, 'boot() runs');
} catch (e) {
  ok(false, 'boot() threw: ' + (e.stack || e).split('\n').slice(0, 4).join(' | '));
  process.exit(1);
}
frames(5);
await sleep(1100); // loader fade setTimeout chain
ok(!document.getElementById('loader'), 'loader removed');
ok(visible('s-title'), 'title visible');
ok(!visible('hud'), 'hud hidden on title');

// ---------- title -> mode ----------
console.log('== title -> mode ==');
click('btn-start');
ok(visible('s-mode') && !visible('s-title'), 'GAME START opens mode select (THE REPORTED BUG)');

// ---------- mode -> select ----------
console.log('== mode -> select ==');
click('m-arcade');
ok(visible('s-select'), 'arcade opens select');
ok(document.querySelectorAll('#char-row .char-card').length === 4, '4 char cards built');
document.querySelectorAll('#char-row .char-card')[2].click();
ok(true, 'char card clickable');

// ---------- select -> fight ----------
console.log('== select -> versus -> fight ==');
click('btn-fight');
ok(visible('versus'), 'versus splash shows');
ok(visible('hud'), 'hud shows');
ok(g.state === 'versus', `state=versus (got ${g.state})`);
frames(200); // 200*16.7ms > 2.3s versus timer
ok(g.state === 'intro' || g.state === 'fight', `round intro starts (got ${g.state})`);
frames(300); // READY(1.5s)+FIGHT(2.4s) timers
ok(g.fightOn === true && g.state === 'fight', `FIGHT! state=fight fightOn (got ${g.state}/${g.fightOn})`);

// ---------- combat via real key events ----------
console.log('== combat input ==');
function resetFaceOff(f2hp = null) {
  g.f1.reset(-0.8, 0, Math.PI / 2);
  g.f2.reset(0.8, 0, -Math.PI / 2);
  if (f2hp !== null) g.f2.hp = f2hp;
}
g.f1.reset(-3, 0, Math.PI / 2); g.f2.reset(3, 0, -Math.PI / 2);
// freeze AI during walk measurement (deterministic)
const brainOrig = g.brain2.update.bind(g.brain2);
g.brain2.update = () => {};
for (let i = 0; i < 30; i++) { key('KeyW'); frames(1); }
// Note: keydown without keyup keeps key held (Input.held) — good for walk
// (KeyW = camera-forward = toward foe at round start)
ok(g.f1.pos.x > -2, `walks with keyboard (x=${g.f1.pos.x.toFixed(2)})`);
key('KeyW', 'keyup');
g.brain2.update = brainOrig;
frames(5);
// deterministic strike: both idle, in range (AI may rarely dodge -> retry)
resetFaceOff();
const hp0 = g.f2.hp;
let landed = false;
for (let attempt = 0; attempt < 6 && !landed; attempt++) {
  resetFaceOff(hp0);
  key('KeyJ'); frames(1); key('KeyJ', 'keyup');
  frames(30);
  if (g.f2.hp < hp0) landed = true;
}
ok(landed, `punch via keyboard damages CPU (${hp0} -> ${g.f2.hp})`);
ok(document.querySelectorAll('#dmg-layer .dmgnum').length > 0, 'damage numbers spawned');

// ---------- camera toggle ----------
console.log('== camera toggle ==');
const cm0 = g.camMode;
key('KeyV'); frames(2); key('KeyV', 'keyup');
ok(g.camMode !== cm0, `V toggles camera (${cm0} -> ${g.camMode})`);
frames(30); // let FP path run
ok(rafQ.length > 0, 'loop alive in FP');
key('KeyV'); frames(2); key('KeyV', 'keyup');
ok(g.camMode === cm0, 'V toggles back');

// ---------- pause ----------
console.log('== pause ==');
key('Escape'); frames(2); key('Escape', 'keyup');
ok(g.paused === true && visible('s-pause'), 'pause opens');
key('Escape'); frames(2); key('Escape', 'keyup');
ok(g.paused === false, 'pause closes');

// ---------- KO -> round -> match end -> result ----------
console.log('== KO flow ==');
g.wins = [1, 0]; g.updatePips();
g.ladder = 2; // final boss -> match end shows result (not auto-advance)
for (let attempt = 0; attempt < 8 && !g.ko; attempt++) {
  resetFaceOff(2);
  key('KeyJ'); frames(1); key('KeyJ', 'keyup');
  frames(30);
}
ok(!!g.ko, 'KO triggered');
frames(500); // KO slow-mo + round end + 1.2s matchEnd timer
ok(visible('s-result'), `result screen shows (state=${g.state})`);
ok($('res-title').textContent.length > 0, `result title: "${$('res-title').textContent}"`);

// ---------- rematch + quit paths ----------
console.log('== rematch/quit ==');
click('btn-rematch');
ok(!visible('s-result') && (g.state === 'versus' || g.state === 'intro'), `rematch restarts (state=${g.state})`);
frames(200);
// force back to title via pause->quit
g.fightOn = true; // ensure pause allowed
key('Escape'); frames(2); key('Escape', 'keyup');
if (visible('s-pause')) {
  click('btn-quit');
  ok(visible('s-mode'), 'quit returns to mode');
} else {
  ok(false, 'pause did not open for quit test');
}
click('m-back');
ok(visible('s-title'), 'back to title');

console.log(`\nRESULT: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
