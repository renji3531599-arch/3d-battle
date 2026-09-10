# NEON KUMITE 🥋 — 超本格3Dアリーナ格闘ゲーム

一人称 ⇄ 三人称をリアルタイムに切り替えながら闘う、本格3D格闘ゲーム。
サーバー不要・外部アセット不要 (Three.js同梱) でブラウザだけで動きます。

## 遊び方

```bash
npm run dev        # または: python3 -m http.server 8000
```

→ http://localhost:8000 を開く

## モード

| モード | 内容 |
|---|---|
| ⚔️ VS CPU | 3人の刺客との連戦 (NORMAL→HARD→MASTER) |
| 🔥 サバイバル | 勝ち抜き。敵は徐々に強化、勝利ごとに回復 |
| 👥 2P対戦 | オフライン二人対戦 (固定カメラ) |
| 🥋 修行 | 時間無制限の練習場。ダミー設定つき |

## 操作 (1P)

| 入力 | アクション |
|---|---|
| WASD | 移動 (カメラ基準) |
| マウス | カメラ回転 (クリックで捕捉) / ホイールでズーム |
| J / 左クリック | パンチ (連打で3連撃) |
| K / 右クリック | キック (連打で2連撃・後退中は足払い) |
| L / F | ヘビー (打ち上げ→空中コンボ) |
| E / G | 投げ (ガード不能) |
| R / Q | 必殺技 (ゲージMAX時) |
| C / Ctrl | ガード長押し |
| Space | ジャンプ (空中攻撃可) |
| Shift (+方向) | ダッシュ / バックステップ |
| V | **一人称 ⇄ 三人称 切替** |
| T / Esc | 挑発 / ポーズ |

2P: 矢印キー移動 + テンキー/右手キー群 (`,`, `.`, `/`, `;`, `'`)、または2つ目のゲームパッド。
ゲームパッド全対応 (Xinput標準配置)。

## バトルシステム

- **ガード / パリィ** — 直前ガードで完全無効化+反撃
- **投げ抜けなしの読み合い** — 投げはガード不能
- **コンボ / 空中コンボ** — 打ち上げ追撃、壁バウンド追加ダメージ
- **必殺技** — シネマティック5連撃+フィニッシュ
- **スタミナ / ガードクラッシュ** — 削りと回避のリソース管理
- **カウンター** — 出し際ヒットで1.25倍
- ヒットストップ・スローモーションKO・画面振動・残像・パーティクル演出
- シンセサイズSE+BGM (WebAudio生成、外部音声ファイルなし)

## 技術

- Three.js (r160, `vendor/` に同梱) + 素のESモジュール、ビルド不要
- プロシージャル骨格アニメ (24クリップ+歩行/呼吸の procedural layer)
- ヘッドレス戦闘シミュレーションテストつき: `npm test`

## 開発

```bash
npm run dev    # static server (dist/bundle.js を配信)
npm run build  # esbuild 単一バンドル化 (importmap不要)
npm run build:site  # Vercel 配信用に site/ へ配信物だけをまとめる
npm test       # check + build + logic/stage/E2E/bundle tests
npm run check  # syntax check
npm run test:browser  # 実ブラウザE2E（要Chromium: CHROMIUM_BINで指定）
```

## Vercel デプロイ

このゲームは **サーバーもビルドツールも不要な純静的サイト**です。
`index.html` / `css/style.css` / `dist/bundle.js` の3ファイルだけで動きます
(Three.js はバンドルに同梱、外部 fetch なし)。

リポジトリ直下の `vercel.json` だけで設定は完了します。
GitHub リポジトリを Vercel に Import するだけでデプロイでき、
**Build & Development Settings を手動で変更する必要はありません。**

| 設定 | 値 | 備考 |
|---|---|---|
| Framework Preset | Other (`"framework": null`) | 自動判定させない |
| Install Command | `npm ci --omit=dev …` | 失敗しても `\|\| echo` で握りつぶす |
| Build Command | `node scripts/vercel-build.mjs` | 依存ゼロの素の Node だけで実行 |
| Output Directory | `site` | 配信する3ファイルだけを出力 |
| Node.js Version | 22.x (`package.json` の `engines.node`) | 依存の engines 要件に一致 |

### なぜこの構成か

`dist/bundle.js` は **ビルド済みでコミットされています**。
そのため `npm install` が失敗しても (esbuild の postinstall やレジストリの不調など)、
ビルドスクリプトがコミット済みバンドルにフォールバックして **デプロイは必ず成功します**。

- `node_modules` に esbuild があれば → ソースから `dist/bundle.js` を再生成
- 無ければ → コミット済みの `dist/bundle.js` をそのまま使用

`js/` を編集したら、コミット前に `npm run build` (または `npm test`) を実行して
`dist/bundle.js` を更新してください。これが本番に配信される実体です。

### CLI でデプロイする場合

```bash
npx vercel          # プレビュー
npx vercel --prod   # 本番
```

