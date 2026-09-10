// Bundle artifact test: runs the REAL dist/bundle.js in jsdom.
// - inline watchdog script is syntax-valid
// - with WebGL unavailable, the friendly boot-error path shows (no dead loader)
import fs from 'fs';
import vm from 'node:vm';
import { JSDOM } from 'jsdom';

let pass = 0, fail = 0;
const ok = (c, m) => { if (c) { pass++; } else { fail++; console.error('  FAIL -', m); } };

console.log('== inline scripts ==');
const html = fs.readFileSync('index.html', 'utf8');
ok(!html.includes('importmap'), 'no importmap (bundled)');
ok(html.includes('dist/bundle.js'), 'bundle referenced');
const inlines = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
ok(inlines.length >= 1, `${inlines.length} inline script(s)`);
for (const [i, code] of inlines.entries()) {
  try { new vm.Script(code); ok(true, `inline script[${i}] parses`); }
  catch (e) { ok(false, `inline script[${i}] syntax: ${e.message}`); }
}

console.log('== bundle boot-error path (no WebGL) ==');
{
  const dom = new JSDOM(html, { url: 'http://localhost:8000/' });
  const { window } = dom;
  const grad = { addColorStop() {} };
  const fake2d = () => ({
    fillStyle: '', strokeStyle: '', lineWidth: 1,
    createRadialGradient() { return grad; }, createLinearGradient() { return grad; },
    fillRect() {}, strokeRect() {}, clearRect() {},
    beginPath() {}, arc() {}, fill() {}, stroke() {},
    moveTo() {}, lineTo() {}, closePath() {}, save() {}, restore() {},
    translate() {}, scale() {},
  });
  // 2D ok, WebGL ng (simulate blocked GPU)
  window.HTMLCanvasElement.prototype.getContext = function (type) {
    if (type === '2d') return fake2d();
    return null;
  };
  window.devicePixelRatio = 1;
  const errors = [];
  window.addEventListener('error', (e) => errors.push(String(e.message || e.error)));
  // run watchdog + bundle with the jsdom window as the vm global
  vm.createContext(window);
  const run = (code, name) => vm.runInContext(code, window, { filename: name });
  for (const code of inlines) run(code, 'watchdog.js');
  const bundle = fs.readFileSync('dist/bundle.js', 'utf8');
  ok(bundle.length > 100000, `bundle size ${(bundle.length / 1024).toFixed(0)}KB`);
  try {
    run(bundle, 'bundle.js');
    // jsdom stays in 'loading'; fire what a real browser fires after <script defer>
    window.document.dispatchEvent(new window.Event('DOMContentLoaded', { bubbles: true }));
    ok(true, 'bundle evaluates without uncaught throw');
  } catch (e) {
    ok(false, 'bundle threw uncaught: ' + e.message);
  }
  const tx = window.document.getElementById('load-tx');
  ok(!window.__kumiteBooted, 'booted flag unset on failure');
  ok(tx && tx.textContent.includes('WebGL'), `friendly WebGL error shown ("${tx && tx.textContent.slice(0, 40)}...")`);
  const loader = window.document.getElementById('loader');
  ok(loader && typeof loader.onclick === 'function', 'loader offers reload escape hatch');
  ok(errors.length === 0, `no window errors (${errors.join(' / ') || 'none'})`);
}

console.log(`\nRESULT: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
