#!/usr/bin/env node
// Vercel (static) build script — 依存ゼロの素の Node.js だけで動きます。
//
//   1. node_modules に esbuild があれば dist/bundle.js を再生成する
//      (npm install が失敗/スキップされていなければ最新のソースからビルド)
//   2. 無ければコミット済みの dist/bundle.js をそのまま使う
//      → npm install がどうなってもデプロイは必ず成功する
//   3. index.html が実際に参照しているローカルファイルだけを site/ に集約する
//      (vercel.json の outputDirectory)
//
// 実行: node scripts/vercel-build.mjs   (npm run build:site)
import fs from 'node:fs';
import path from 'node:path';

const log = (...a) => console.log('[build]', ...a);
const die = (msg) => { console.error('[build] ERROR:', msg); process.exit(1); };

const OUT = 'site';
const BUNDLE = path.join('dist', 'bundle.js');
const MIN_BUNDLE_BYTES = 100_000; // three.js 同梱なのでこれより小さければ壊れている

// ---------- 1. バンドル (esbuild が使える時だけ再生成) ----------
// esbuild の JS API 経由で呼ぶ (bin は native バイナリなので node では実行できない)
let rebuilt = false;
try {
  const esbuild = await import('esbuild');
  await esbuild.build({
    entryPoints: ['js/main.js'],
    bundle: true,
    format: 'iife',
    target: 'es2020',
    minify: true,
    outfile: BUNDLE,
    logLevel: 'warning',
  });
  rebuilt = true;
  log('esbuild で dist/bundle.js を再生成しました');
} catch (e) {
  console.warn(`[build] WARN: esbuild を使えません (${e && e.message ? e.message.split('\n')[0] : e}) → コミット済み dist/bundle.js を使います`);
}

if (!fs.existsSync(BUNDLE)) {
  die('dist/bundle.js が見つかりません。ローカルで `npm run build` を実行してコミットしてください。');
}

// ---------- 2. index.html が参照するローカル資産を収集 ----------
if (!fs.existsSync('index.html')) die('index.html が見つかりません。');
const html = fs.readFileSync('index.html', 'utf8');
const refs = [...html.matchAll(/(?:\bsrc|\bhref)\s*=\s*"([^"]+)"/g)]
  .map((m) => m[1].trim())
  .filter((u) => u && !/^(data:|https?:|\/\/|#|mailto:|blob:)/i.test(u))
  .filter((u, i, arr) => arr.indexOf(u) === i);

const assets = ['index.html', ...refs];
for (const f of assets) {
  if (!fs.existsSync(f)) die(`index.html が参照する ${f} が見つかりません。`);
}
if (!refs.includes(BUNDLE.split(path.sep).join('/'))) {
  die(`index.html が ${BUNDLE} を参照していません。ビルド設定を確認してください。`);
}

// ---------- 3. site/ へ出力 ----------
fs.rmSync(OUT, { recursive: true, force: true });
let total = 0;
for (const f of assets) {
  const dest = path.join(OUT, f);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(f, dest);
  const size = fs.statSync(dest).size;
  total += size;
  log(`  ${f} → ${dest} (${(size / 1024).toFixed(1)} KB)`);
}

const bundleSize = fs.statSync(path.join(OUT, BUNDLE)).size;
if (bundleSize < MIN_BUNDLE_BYTES) {
  die(`dist/bundle.js が ${(bundleSize / 1024).toFixed(0)}KB しかありません (期待値 >${MIN_BUNDLE_BYTES / 1024}KB)。ビルドが壊れています。`);
}

log(`完了: ${assets.length} ファイル / 合計 ${(total / 1024).toFixed(1)} KB → ${OUT}/ (bundle ${rebuilt ? '再生成' : 'コミット済み'})`);
