// ===== NEON KUMITE : master config =====
export const VERSION = '1.0.0';

export const QUALITY = {
  low:  { pixelRatio: 1,    shadow: 512,  particles: 60,  antialias: false },
  med:  { pixelRatio: 1.5,  shadow: 1024, particles: 140, antialias: true },
  high: { pixelRatio: 2,    shadow: 2048, particles: 240, antialias: true },
};

export const BALANCE = {
  maxHP: 100, maxMeter: 100, maxStam: 100,
  roundTime: 60, roundsToWin: 2,
  meterOnDealt: 1.1, meterOnTaken: 0.75, meterOnBlock: 5, meterOnWhiff: 0,
  chipRatio: 0.12,           // ガード削り
  stamRegen: 30, stamRegenDelay: 0.8,
  dashStam: 14, blockStamBase: 6,
  throwTechWindow: 0.0,
  survivalHeal: 38,
  juggleScale: 0.7,          // 空中追撃ダメージ倍率
  counterBonus: 1.25,        // カウンター倍率
};

// ---------- 技データ ----------
// dur:全硬直 / startup:発生 / active:[開始,終了] / dmg / range / arc(正面±deg)
// hitstun / blockstun / kb(吹き飛び水平) / launch:[垂直,水平] / down:叩き落とし
// lunge:踏み込み距離 / hits:多段数 / chain:{入力:次技} / type: high|mid|low
export const MOVES = {
  jab:      { name:'ジャブ',   dur:0.36, startup:0.10, active:[0.10,0.20], dmg:5,  range:1.9, arc:75, hitstun:0.34, blockstun:0.20, kb:1.4, launch:null,      lunge:1.3, meter:6,  type:'high', chain:{punch:'jab2'}, limb:'handR' },
  jab2:     { name:'連拳',     dur:0.36, startup:0.09, active:[0.09,0.19], dmg:6,  range:2.0, arc:75, hitstun:0.38, blockstun:0.20, kb:1.8, launch:null,      lunge:1.4, meter:6,  type:'high', chain:{punch:'straight'}, limb:'handL' },
  straight: { name:'正拳',     dur:0.56, startup:0.16, active:[0.16,0.28], dmg:10, range:2.2, arc:70, hitstun:0.52, blockstun:0.30, kb:4.2, launch:null,      lunge:1.8, meter:9,  type:'mid',  chain:{}, limb:'handR' },
  kick:     { name:'前蹴り',   dur:0.52, startup:0.18, active:[0.18,0.30], dmg:8,  range:2.4, arc:70, hitstun:0.46, blockstun:0.26, kb:3.0, launch:null,      lunge:1.6, meter:8,  type:'mid',  chain:{kick:'kickhigh'}, limb:'footR' },
  kickhigh: { name:'上段廻し', dur:0.62, startup:0.22, active:[0.22,0.36], dmg:12, range:2.4, arc:65, hitstun:0.60, blockstun:0.34, kb:5.0, launch:null,      lunge:1.6, meter:10, type:'high', chain:{}, limb:'footL' },
  heavy:    { name:'昇龍撃',   dur:0.72, startup:0.26, active:[0.26,0.40], dmg:14, range:2.1, arc:70, hitstun:0.40, blockstun:0.36, kb:1.5, launch:[7.0,2.6], lunge:1.8, meter:11, type:'mid',  chain:{}, limb:'handR', launcher:true },
  sweep:    { name:'足払い',   dur:0.60, startup:0.22, active:[0.22,0.34], dmg:9,  range:2.2, arc:70, hitstun:0.50, blockstun:0.30, kb:2.0, launch:null, down:true, lunge:1.6, meter:8, type:'low', chain:{}, limb:'footR' },
  airatk:   { name:'空中拳',   dur:0.44, startup:0.10, active:[0.10,0.30], dmg:7,  range:2.2, arc:90, hitstun:0.40, blockstun:0.24, kb:2.4, launch:null,      lunge:0.6, meter:7,  type:'mid',  chain:{}, limb:'handR' },
  grab:     { name:'投げ',     dur:0.70, startup:0.16, active:[0.16,0.30], dmg:13, range:1.8, arc:60, hitstun:0.0,  blockstun:0.0,  kb:0,   launch:[5.5,4.5], lunge:1.5, meter:10, type:'throw', unblockable:true, chain:{}, limb:'handR' },
  super:    { name:'秘奥義・霹靂連牙', dur:1.9, startup:0.45, active:[0.45,1.35], dmg:8, range:3.4, arc:80, hitstun:0.5, blockstun:0.4, kb:1.0, launch:[6.0,5.0], lunge:7.0, meter:0, type:'mid', chain:{}, limb:'handR', hits:5, hitGap:0.18, cost:100, cinematic:true },
};

export const CHAINS = { punch: ['jab','jab2','straight'], kick: ['kick','kickhigh'] };

// ---------- ファイター ----------
export const CHARACTERS = [
  {
    id:'kagemaru', name:'影丸', en:'KAGEMARU', kanji:'影', style:'疾風忍拳 · バランス',
    desc:'万能型。速い連撃と安定した立ち回り。',
    color:'#00f0ff', stats:{ pow:3, spd:4, sta:3 },
    hp:100, atk:1.0, def:1.0, spd:1.0,
    body:{ h:1.0, bulk:1.0, shoulder:1.0 },
    palette:{ skin:0xe8b88a, top:0x10233a, bottom:0x0a1424, glove:0xff2d95, accent:0x00f0ff, hair:0x14181f, belt:0x00f0ff },
    ai:{ aggro:0.55, keepRange:2.2, dashUse:0.5, superUse:0.6 },
  },
  {
    id:'breaker', name:'剛岩', en:'GOUGAN', kanji:'剛', style:'豪破巌流 · パワー',
    desc:'一撃が重い重量級。ガードを砕く豪腕。',
    color:'#ff9f1c', stats:{ pow:5, spd:2, sta:4 },
    hp:112, atk:1.28, def:1.12, spd:0.88,
    body:{ h:1.06, bulk:1.35, shoulder:1.25 },
    palette:{ skin:0xd9a06f, top:0x4a1a10, bottom:0x241014, glove:0xffd166, accent:0xff9f1c, hair:0x2a1a10, belt:0xffd166 },
    ai:{ aggro:0.7, keepRange:1.9, dashUse:0.35, superUse:0.5 },
  },
  {
    id:'hayate', name:'疾風', en:'HAYATE', kanji:'疾', style:'神速連舞 · スピード',
    desc:'目にも留まらぬ手数。紙装甲の暴風。',
    color:'#9dff57', stats:{ pow:2, spd:5, sta:2 },
    hp:90, atk:0.9, def:0.9, spd:1.18,
    body:{ h:0.96, bulk:0.82, shoulder:0.9 },
    palette:{ skin:0xf0c8a0, top:0x0f3a24, bottom:0x0a1f16, glove:0x9dff57, accent:0x9dff57, hair:0x3a2a1a, belt:0x9dff57 },
    ai:{ aggro:0.75, keepRange:2.0, dashUse:0.8, superUse:0.7 },
  },
  {
    id:'hagane', name:'鋼牙', en:'HAGANE', kanji:'鋼', style:'鉄壁鋼体 · タンク',
    desc:'堅牢な肉体と反撃。崩れざる要塞。',
    color:'#c77dff', stats:{ pow:3, spd:2, sta:5 },
    hp:122, atk:1.0, def:1.3, spd:0.85,
    body:{ h:1.02, bulk:1.2, shoulder:1.15 },
    palette:{ skin:0xcfa07a, top:0x2a1a3a, bottom:0x16101f, glove:0xc77dff, accent:0xc77dff, hair:0x101014, belt:0xc77dff },
    ai:{ aggro:0.4, keepRange:2.4, dashUse:0.3, superUse:0.55 },
  },
];

// ---------- ステージ ----------
export const STAGES = [
  { id:'neon_dojo', name:'霓裳道場', en:'NEON DOJO', desc:'ネオン瞬く真夜中の道場', radius:9.5, bgm:'battle1',
    sky:{ top:0x050818, mid:0x0d1440, bot:0x2a0a3a }, fog:0x0a0d24, ground:0x0d1226, accent:0x00f0ff },
  { id:'sunset_roof', name:'黄昏屋上', en:'SUNSET ROOF', desc:'茜に染まる決戦の屋上', radius:10.5, bgm:'battle2',
    sky:{ top:0x1a2a6c, mid:0xb21f66, bot:0xfea540 }, fog:0x4a2440, ground:0x2a2a35, accent:0xff9f1c },
  { id:'storm_ring', name:'雷鳴リング', en:'STORM RING', desc:'嵐の中心の鋼鉄リング', radius:9.0, bgm:'battle1',
    sky:{ top:0x02030a, mid:0x0a1a3a, bot:0x1a2a55 }, fog:0x060a18, ground:0x11161f, accent:0x9dff57 },
];

// ---------- CPU難易度 ----------
export const DIFFICULTY = {
  easy:   { name:'やさしい', react:0.55, blockCh:0.10, punishCh:0.15, comboCh:0.25, think:0.45, dmgMul:0.8,  aggroMul:0.7 },
  normal: { name:'ふつう',   react:0.35, blockCh:0.28, punishCh:0.40, comboCh:0.55, think:0.30, dmgMul:1.0,  aggroMul:1.0 },
  hard:   { name:'つよい',   react:0.22, blockCh:0.45, punishCh:0.65, comboCh:0.80, think:0.20, dmgMul:1.1,  aggroMul:1.15 },
  master: { name:'鬼神',     react:0.12, blockCh:0.60, punishCh:0.85, comboCh:0.95, think:0.13, dmgMul:1.2,  aggroMul:1.3 },
};

export const DEFAULT_SETTINGS = {
  vol: 70, mute: false, quality: 'med', shadow: true,
  shake: true, cam: 'third', diff: 'normal',
};

export function loadSettings(){
  try{
    const s = JSON.parse(localStorage.getItem('neon_kumite_set')||'{}');
    return Object.assign({}, DEFAULT_SETTINGS, s);
  }catch(e){ return Object.assign({}, DEFAULT_SETTINGS); }
}
export function saveSettings(s){
  try{ localStorage.setItem('neon_kumite_set', JSON.stringify(s)); }catch(e){}
}
