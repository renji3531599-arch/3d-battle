// Real-browser E2E: headless Chromium + puppeteer-core, REAL mouse clicks.
// Needs a Chromium binary: set CHROMIUM_BIN, or place one at /tmp/sp-chromium.
// (Sandbox recipe: npm pack @sparticuz/chromium, brotli-extract bin/*.br;
//  symlink lib/* next to the binary; LD_LIBRARY_PATH=<lib dir>.)
import puppeteer from 'puppeteer-core';
import fs from 'fs';
import { execSync } from 'child_process';

const URL = process.env.GAME_URL || 'http://localhost:8000/';
const SHOTS = 'test/shots';
fs.mkdirSync(SHOTS, { recursive: true });

let pass = 0, fail = 0;
const ok = (c, m) => { if (c) { pass++; console.log('  ok -', m); } else { fail++; console.error('  FAIL -', m); } };

function findChromium() {
  const cands = [process.env.CHROMIUM_BIN, '/tmp/sp-chromium', '/usr/bin/chromium',
    '/usr/bin/chromium-browser', '/usr/bin/google-chrome'];
  for (const c of cands) { if (c && fs.existsSync(c)) return c; }
  try { return execSync('which chromium || which chromium-browser || which google-chrome', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim() || null; } catch { return null; }
}
const exe = findChromium();
if (!exe) { console.log('SKIP: no Chromium binary (set CHROMIUM_BIN). See test/browser.mjs header.'); process.exit(0); }
console.log('chromium:', exe);
const browser = await puppeteer.launch({
  executablePath: exe,
  env: { ...process.env, LD_LIBRARY_PATH: '/tmp/sp-al/lib:' + (process.env.LD_LIBRARY_PATH || '') },
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--window-size=1280,720',
    '--enable-unsafe-swiftshader', '--font-render-hinting=none', '--mute-audio'],
  headless: true,
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  const logs = [];
  page.on('console', m => { const t = `[${m.type()}] ${m.text()}`; logs.push(t); });
  page.on('pageerror', e => logs.push('[pageerror] ' + e.message));

  await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForFunction(() => window.__kumiteBooted === true, { timeout: 30000 }).catch(() => {});
  await page.waitForSelector('#btn-start', { visible: true, timeout: 30000 });
  await new Promise(r => setTimeout(r, 2500)); // let boot finish + loader fade
  await page.screenshot({ path: `${SHOTS}/1-title.png` });

  // --- what is REALLY on top of the button? ---
  const top = await page.evaluate(() => {
    const b = document.getElementById('btn-start');
    const r = b.getBoundingClientRect();
    const cx = r.x + r.width / 2, cy = r.y + r.height / 2;
    const el = document.elementFromPoint(cx, cy);
    const chain = [];
    let e = el;
    while (e && chain.length < 6) { chain.push(e.tagName + (e.id ? '#' + e.id : '') + (e.className && typeof e.className === 'string' ? '.' + e.className.split(' ').join('.') : '')); e = e.parentElement; }
    const cs = el ? getComputedStyle(el) : null;
    return {
      btnRect: { x: r.x, y: r.y, w: r.width, h: r.height },
      point: { x: cx, y: cy },
      top: chain.join(' < '),
      topStyle: cs ? { pe: cs.pointerEvents, op: cs.opacity, disp: cs.display, vis: cs.visibility, z: cs.zIndex } : null,
      loaderPresent: !!document.getElementById('loader'),
      booted: !!window.__kumiteBooted,
      bootErrors: (window.__kumiteBoot && window.__kumiteBoot.errors) || [],
      webgl: (() => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return 'threw:' + e.message; } })(),
    };
  });
  console.log('TOP ELEMENT:', JSON.stringify(top, null, 1));
  ok(top.top.includes('btn-start') || top.top.includes('BUTTON'), `button is topmost (got: ${top.top.split(' < ')[0]})`);
  ok(top.booted, 'game booted');

  // --- REAL mouse click (hit-tested by the browser) ---
  const box = await page.evaluate(() => {
    const r = document.getElementById('btn-start').getBoundingClientRect();
    return { x: r.x + r.width / 2, y: r.y + r.height / 2 };
  });
  await page.mouse.click(box.x, box.y);
  await new Promise(r => setTimeout(r, 600));
  const modeVisible = await page.evaluate(() => !document.getElementById('s-mode').classList.contains('hidden'));
  ok(modeVisible, 'REAL CLICK on GAME START opens mode select (THE REPORTED BUG)');
  await page.screenshot({ path: `${SHOTS}/2-mode.png` });

  // continue: arcade -> select -> fight with real clicks
  async function state(tag) {
    const s = await page.evaluate(() => {
      const vis = ['s-title','s-mode','s-select','s-versus','s-howto','s-result','s-pause'].filter(id => {
        const el = document.getElementById(id);
        return el && !el.classList.contains('hidden');
      });
      return { vis, selMode: window.game && window.game.selMode, scr: window.game && window.game.ui };
    });
    console.log(`STATE[${tag}]:`, JSON.stringify(s));
  }
  async function rclick(sel) {
    const p = await page.evaluate((s) => {
      const el = document.querySelector(s);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      const cx = r.x + r.width / 2, cy = r.y + r.height / 2;
      const hit = document.elementFromPoint(cx, cy);
      return { x: cx, y: cy, w: r.width, h: r.height,
        hit: hit ? (hit.tagName + '#' + hit.id + '.' + (hit.className && hit.className.baseVal === undefined ? hit.className : '')) : 'NONE' };
    }, sel);
    if (!p) throw new Error('no such: ' + sel);
    console.log(`CLICK ${sel} at (${p.x.toFixed(0)},${p.y.toFixed(0)}) size ${p.w.toFixed(0)}x${p.h.toFixed(0)} hit=${p.hit}`);
    await page.mouse.click(p.x, p.y);
  }
  process.on('uncaughtException', () => { console.log('--- console dump ---'); console.log(logs.slice(-30).join('\n')); });
  await state('after-start');
  await rclick('#m-arcade');
  await new Promise(r => setTimeout(r, 500));
  await state('after-m-arcade');
  await page.screenshot({ path: `${SHOTS}/3-select.png` });
  await rclick('#btn-fight');
  await new Promise(r => setTimeout(r, 500));
  await state('after-btn-fight');
  await new Promise(r => setTimeout(r, 3500)); // versus splash
  await page.screenshot({ path: `${SHOTS}/4-versus.png` });
  // wait for fight
  await page.waitForFunction(() => window.game && window.game.fightOn === true, { timeout: 20000 });
  ok(true, 'fight starts');
  await page.screenshot({ path: `${SHOTS}/5-fight.png` });
  // keyboard attack
  const hp0 = await page.evaluate(() => window.game.f2.hp);
  await page.evaluate(() => {
    if (window.game.brain2) window.game.brain2.update = () => {}; // freeze AI (slow headless)
    window.game.f1.reset(-0.8, 0, Math.PI / 2);
    window.game.f2.reset(0.8, 0, -Math.PI / 2);
  });
  const hpBase = await page.evaluate(() => window.game.f2.hp);
  await page.keyboard.down('KeyJ'); // hold across slow headless frames
  await new Promise(r => setTimeout(r, 1200));
  await page.keyboard.up('KeyJ');
  await new Promise(r => setTimeout(r, 1200));
  const hit = await page.evaluate(() => ({ hp: window.game.f2.hp, st: window.game.f1.state }));
  console.log(`PUNCH: hp ${hpBase} -> ${hit.hp}, f1.state=${hit.st}`);
  ok(hit.hp < hpBase, `keyboard punch damages (${hpBase} -> ${hit.hp})`);
  await page.screenshot({ path: `${SHOTS}/6-hit.png` });
  // V camera toggle
  const cm0 = await page.evaluate(() => window.game.camMode);
  await page.keyboard.press('KeyV');
  await new Promise(r => setTimeout(r, 700));
  const cm1 = await page.evaluate(() => window.game.camMode);
  ok(cm0 !== cm1, `V toggles camera (${cm0} -> ${cm1})`);
  await page.screenshot({ path: `${SHOTS}/7-firstperson.png` });

  const errs = logs.filter(l => l.includes('pageerror') || l.startsWith('[error]'));
  console.log('--- console errors ---');
  console.log(errs.length ? errs.slice(0, 10).join('\n') : '(none)');
  ok(errs.length === 0, 'no page errors');
} finally {
  await browser.close();
}
console.log(`\nRESULT: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
