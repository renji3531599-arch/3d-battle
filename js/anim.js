// ===== NEON KUMITE : procedural rig + animation system =====
import * as THREE from 'three';

// 回転符号メモ: 体幹/頭(+X=前屈) / 腕脚(-X=前振り) / 膝(+X=屈曲) / 肘(-X=屈曲)
export const NEUTRAL = {
  py:0, lean:0, side:0, rx:0, ry:0, rz:0,
  spine:[0,0,0], chest:[0,0,0], head:[0,0,0],
  shL:[0,0,-0.15], elL:[-0.25], shR:[0,0,0.15], elR:[-0.25],
  legL:[0,0,0.05], kneeL:[0.06], legR:[0,0,-0.05], kneeR:[0.06], band:[0.15],
};
export const CH = Object.keys(NEUTRAL);

// 基本構え
export const GUARD = {
  py:-0.07, lean:0.07, side:0, rx:0, ry:-0.25, rz:0,
  spine:[0.10,-0.12,0], chest:[0.16,-0.42,0], head:[0.02,0.38,0],
  shL:[-1.05,-0.55,-0.30], elL:[-1.85], shR:[-0.85,0.50,0.30], elR:[-2.05],
  legL:[-0.38,0,0.09], kneeL:[0.52], legR:[0.30,0,-0.09], kneeR:[0.38], band:[0.35],
};
const G = (o)=>Object.assign({}, GUARD, o);

// ---- クリップ定義 [time, pose] ----
// 起き・戻りは滑らか補間、攻撃の伸びはキーを詰めてキレを出す
export const CLIPS = {
  jab: { dur:0.36, keys:[
    [0.00, G({})],
    [0.09, G({ chest:[0.20,-0.55,0], shR:[-0.7,0.6,0.35], lean:0.03 })],
    [0.15, G({ py:-0.08, lean:0.24, ry:-0.5, chest:[0.22,0.55,0], head:[0,-0.5,0],
      shR:[-1.62,-0.12,0.05], elR:[-0.10], shL:[-1.15,-0.4,-0.3],
      legL:[-0.5,0,0.1], kneeL:[0.6], legR:[0.42,0,-0.1] })],
    [0.24, G({ py:-0.08, lean:0.22, ry:-0.45, chest:[0.22,0.5,0], head:[0,-0.45,0],
      shR:[-1.55,-0.12,0.05], elR:[-0.15], shL:[-1.15,-0.4,-0.3],
      legL:[-0.5,0,0.1], kneeL:[0.6], legR:[0.42,0,-0.1] })],
    [0.36, G({})],
  ]},
  jab2: { dur:0.36, keys:[
    [0.00, G({})],
    [0.08, G({ chest:[0.20,0.5,0], shL:[-0.9,-0.6,-0.3], lean:0.03 })],
    [0.14, G({ py:-0.08, lean:0.24, ry:0.15, chest:[0.22,-1.05,0], head:[0,0.85,0],
      shL:[-1.62,0.12,-0.05], elL:[-0.10],
      legL:[-0.5,0,0.1], kneeL:[0.6], legR:[0.42,0,-0.1] })],
    [0.24, G({ py:-0.08, lean:0.22, ry:0.1, chest:[0.22,-0.95,0], head:[0,0.8,0],
      shL:[-1.55,0.12,-0.05], elL:[-0.15], legL:[-0.5,0,0.1], kneeL:[0.6], legR:[0.42,0,-0.1] })],
    [0.36, G({})],
  ]},
  straight: { dur:0.56, keys:[
    [0.00, G({})],
    [0.14, G({ py:-0.10, lean:0.0, ry:-0.35, chest:[0.24,-0.7,0], shR:[-0.5,0.7,0.4], elR:[-2.3], legR:[0.15,0,-0.1] })],
    [0.22, G({ py:-0.09, lean:0.34, ry:-0.62, chest:[0.26,0.62,0], head:[0,-0.6,0],
      shR:[-1.66,-0.1,0.0], elR:[-0.06], shL:[-1.3,-0.2,-0.35],
      legL:[-0.62,0,0.12], kneeL:[0.72], legR:[0.55,0,-0.12], kneeR:[0.25] })],
    [0.34, G({ py:-0.09, lean:0.30, ry:-0.55, chest:[0.26,0.55,0], head:[0,-0.55,0],
      shR:[-1.6,-0.1,0.0], elR:[-0.1], shL:[-1.3,-0.2,-0.35],
      legL:[-0.62,0,0.12], kneeL:[0.72], legR:[0.55,0,-0.12], kneeR:[0.25] })],
    [0.56, G({})],
  ]},
  kick: { dur:0.52, keys:[
    [0.00, G({})],
    [0.16, G({ py:-0.14, lean:-0.06, chest:[-0.12,-0.3,0.1], legR:[-1.9,0,-0.15], kneeR:[2.0],
      legL:[-0.1,0,0.08], kneeL:[0.3], shL:[-0.7,-0.6,-0.5], shR:[-0.5,0.6,0.5] })],
    [0.24, G({ py:-0.12, lean:0.22, chest:[-0.18,0.35,0.08], head:[0,-0.3,0],
      legR:[-1.62,0,-0.05], kneeR:[0.12], legL:[-0.05,0,0.08], kneeL:[0.25],
      shL:[-0.5,-0.7,-0.7], elL:[-0.6], shR:[-0.3,0.7,0.7], elR:[-0.6] })],
    [0.34, G({ py:-0.12, lean:0.20, chest:[-0.16,0.3,0.08], legR:[-1.55,0,-0.05], kneeR:[0.18],
      legL:[-0.05,0,0.08], kneeL:[0.25], shL:[-0.5,-0.7,-0.7], elL:[-0.6], shR:[-0.3,0.7,0.7], elR:[-0.6] })],
    [0.52, G({})],
  ]},
  kickhigh: { dur:0.62, keys:[
    [0.00, G({})],
    [0.20, G({ py:-0.16, lean:-0.04, rz:0.12, ry:0.3, chest:[-0.1,0.6,0], legL:[-1.4,0.4,-0.9], kneeL:[1.9],
      legR:[0.1,0,-0.08], kneeR:[0.3], shR:[-0.6,0.5,0.6] })],
    [0.29, G({ py:-0.15, lean:0.10, rz:0.30, ry:-0.15, chest:[-0.22,0.1,0.15], head:[0,0.1,0],
      legL:[-0.75,-0.15,-1.5], kneeL:[0.10], legR:[0.05,0,-0.08], kneeR:[0.22],
      shL:[-0.4,-0.5,-0.9], elL:[-0.4], shR:[-0.9,0.3,0.9], elR:[-0.4] })],
    [0.40, G({ py:-0.15, lean:0.10, rz:0.28, ry:-0.12, chest:[-0.2,0.1,0.15],
      legL:[-0.7,-0.15,-1.42], kneeL:[0.15], legR:[0.05,0,-0.08], kneeR:[0.22],
      shL:[-0.4,-0.5,-0.9], elL:[-0.4], shR:[-0.9,0.3,0.9], elR:[-0.4] })],
    [0.62, G({})],
  ]},
  heavy: { dur:0.72, keys:[
    [0.00, G({})],
    [0.24, G({ py:-0.30, lean:0.10, chest:[0.45,-0.5,0], head:[0.2,0.4,0], shR:[0.7,0.3,0.2], elR:[-0.9],
      legL:[-0.7,0,0.12], kneeL:[1.0], legR:[0.5,0,-0.12], kneeR:[0.8] })],
    [0.34, G({ py:0.14, lean:0.16, chest:[-0.34,0.4,0], head:[-0.25,-0.35,0],
      shR:[-2.35,-0.1,0.0], elR:[-0.35], shL:[-1.6,0.2,-0.4], elL:[-0.5],
      legL:[-0.3,0,0.1], kneeL:[0.35], legR:[0.25,0,-0.1], kneeR:[0.2] })],
    [0.48, G({ py:0.05, lean:0.14, chest:[-0.28,0.35,0], head:[-0.2,-0.3,0],
      shR:[-2.2,-0.1,0.0], elR:[-0.4], shL:[-1.5,0.2,-0.4], elL:[-0.5],
      legL:[-0.3,0,0.1], kneeL:[0.4], legR:[0.25,0,-0.1], kneeR:[0.25] })],
    [0.72, G({})],
  ]},
  sweep: { dur:0.60, keys:[
    [0.00, G({})],
    [0.20, G({ py:-0.34, lean:0.05, ry:0.5, chest:[0.4,1.1,0], legR:[-0.4,0,-1.1], kneeR:[0.3],
      legL:[-0.5,0,0.1], kneeL:[1.1], shL:[-0.6,-0.3,-0.6], shR:[-0.6,0.3,0.6] })],
    [0.30, G({ py:-0.36, lean:0.12, ry:-0.9, chest:[0.42,-1.2,0], head:[0.1,0.9,0],
      legR:[-0.5,0,-1.35], kneeR:[0.12], legL:[-0.45,0,0.1], kneeL:[1.15],
      shL:[-0.4,-0.8,-0.7], elL:[-0.3], shR:[-0.4,0.8,0.7], elR:[-0.3] })],
    [0.42, G({ py:-0.33, lean:0.10, ry:-0.7, chest:[0.4,-1.0,0], legR:[-0.45,0,-1.25], kneeR:[0.15],
      legL:[-0.45,0,0.1], kneeL:[1.1], shL:[-0.4,-0.8,-0.7], elL:[-0.3], shR:[-0.4,0.8,0.7], elR:[-0.3] })],
    [0.60, G({})],
  ]},
  airatk: { dur:0.44, keys:[
    [0.00, G({ py:-0.05, legL:[-0.8,0,0.1], kneeL:[1.2], legR:[0.4,0,-0.1], kneeR:[1.1] })],
    [0.14, G({ py:-0.02, lean:0.25, chest:[0.35,0.5,0], head:[0.15,-0.4,0],
      shR:[-1.7,-0.1,0], elR:[-0.1], legL:[-0.9,0,0.1], kneeL:[1.3], legR:[0.5,0,-0.1], kneeR:[1.2] })],
    [0.30, G({ py:-0.02, lean:0.22, chest:[0.32,0.45,0], shR:[-1.6,-0.1,0], elR:[-0.15],
      legL:[-0.9,0,0.1], kneeL:[1.3], legR:[0.5,0,-0.1], kneeR:[1.2] })],
    [0.44, G({ py:-0.05, legL:[-0.8,0,0.1], kneeL:[1.2], legR:[0.4,0,-0.1], kneeR:[1.1] })],
  ]},
  grab: { dur:0.70, keys:[
    [0.00, G({})],
    [0.18, G({ py:-0.10, lean:0.32, ry:-0.2, chest:[0.3,-0.2,0],
      shL:[-1.55,-0.35,-0.1], elL:[-0.45], shR:[-1.55,0.35,0.1], elR:[-0.45],
      legL:[-0.55,0,0.1], kneeL:[0.65], legR:[0.45,0,-0.1], kneeR:[0.3] })],
    [0.40, G({ py:-0.10, lean:0.30, ry:-0.2, chest:[0.3,-0.2,0],
      shL:[-1.5,-0.35,-0.1], elL:[-0.5], shR:[-1.5,0.35,0.1], elR:[-0.5],
      legL:[-0.55,0,0.1], kneeL:[0.65], legR:[0.45,0,-0.1], kneeR:[0.3] })],
    [0.70, G({})],
  ]},
  grabbed: { dur:0.70, keys:[
    [0.00, G({ lean:-0.1, chest:[-0.2,0,0], head:[-0.2,0,0] })],
    [0.25, { py:0.45, lean:-0.15, side:0, rx:0, ry:0, rz:0.15, spine:[-0.3,0,0], chest:[-0.45,0,0.1], head:[-0.5,0,0],
      shL:[-2.2,0,-0.9], elL:[-0.4], shR:[-2.2,0,0.9], elR:[-0.4],
      legL:[-0.5,0,0.25], kneeL:[0.9], legR:[0.3,0,-0.25], kneeR:[0.7], band:[0.8] }],
    [0.70, { py:0.30, lean:-0.2, side:0, rx:0, ry:0, rz:0.2, spine:[-0.35,0,0], chest:[-0.5,0,0.1], head:[-0.5,0,0],
      shL:[-2.4,0,-1.0], elL:[-0.3], shR:[-2.4,0,1.0], elR:[-0.3],
      legL:[-0.6,0,0.3], kneeL:[1.0], legR:[0.4,0,-0.3], kneeR:[0.8], band:[1.0] }],
  ]},
  super: { dur:1.90, keys:[
    [0.00, G({})],
    [0.30, G({ py:-0.24, lean:0.05, chest:[0.35,-0.4,0], shL:[0.6,-0.3,-0.4], elL:[-0.7], shR:[0.6,0.3,0.4], elR:[-0.7],
      legL:[-0.65,0,0.12], kneeL:[0.95], legR:[0.5,0,-0.12], kneeR:[0.75] })],
    [0.45, G({ py:-0.10, lean:0.55, chest:[0.35,-0.3,0], shL:[0.9,-0.2,-0.5], elL:[-0.3], shR:[0.9,0.2,0.5], elR:[-0.3],
      legL:[-1.1,0,0.14], kneeL:[0.5], legR:[0.9,0,-0.14], kneeR:[0.9] })],
    [0.60, G({ py:-0.08, lean:0.30, ry:-0.5, chest:[0.25,0.55,0], shR:[-1.66,-0.1,0], elR:[-0.08],
      legL:[-0.6,0,0.12], kneeL:[0.7], legR:[0.5,0,-0.12], kneeR:[0.3] })],
    [0.78, G({ py:-0.08, lean:0.30, ry:0.1, chest:[0.25,-1.0,0], shL:[-1.66,0.1,0], elL:[-0.08],
      legL:[-0.6,0,0.12], kneeL:[0.7], legR:[0.5,0,-0.12], kneeR:[0.3] })],
    [0.96, G({ py:-0.10, lean:0.28, ry:-0.5, chest:[0.28,0.6,0], shR:[-1.66,-0.1,0], elR:[-0.08],
      legR:[-1.7,0,-0.1], kneeR:[0.4], legL:[-0.2,0,0.1], kneeL:[0.4] })],
    [1.14, G({ py:0.10, lean:0.18, chest:[-0.3,0.35,0], shR:[-2.3,-0.1,0], elR:[-0.3], shL:[-1.5,0.2,-0.4],
      legL:[-0.3,0,0.1], kneeL:[0.35], legR:[0.25,0,-0.1], kneeR:[0.2] })],
    [1.45, G({ py:-0.12, lean:0.35, ry:-0.6, chest:[0.3,0.65,0], shR:[-1.7,-0.1,0], elR:[-0.05],
      legL:[-0.7,0,0.14], kneeL:[0.8], legR:[0.6,0,-0.14], kneeR:[0.3] })],
    [1.90, G({})],
  ]},
  block: { dur:0.30, loop:true, keys:[
    [0.00, G({})],
    [0.12, G({ py:-0.13, lean:0.02, chest:[0.28,-0.3,0], head:[0.18,0.25,0],
      shL:[-1.25,-0.95,-0.15], elL:[-1.7], shR:[-1.25,0.95,0.15], elR:[-1.7],
      legL:[-0.5,0,0.1], kneeL:[0.65], legR:[0.4,0,-0.1], kneeR:[0.5] })],
    [0.30, G({ py:-0.13, lean:0.02, chest:[0.28,-0.3,0], head:[0.18,0.25,0],
      shL:[-1.25,-0.95,-0.15], elL:[-1.7], shR:[-1.25,0.95,0.15], elR:[-1.7],
      legL:[-0.5,0,0.1], kneeL:[0.65], legR:[0.4,0,-0.1], kneeR:[0.5] })],
  ]},
  parry: { dur:0.50, keys:[
    [0.00, G({})],
    [0.10, G({ py:-0.08, lean:0.18, chest:[0.25,-0.9,0], shR:[-1.4,1.1,0.3], elR:[-0.9],
      shL:[-1.2,-0.5,-0.3], legL:[-0.5,0,0.1], kneeL:[0.6], legR:[0.4,0,-0.1] })],
    [0.30, G({ py:-0.08, lean:0.16, chest:[0.25,-0.8,0], shR:[-1.3,1.0,0.3], elR:[-0.9],
      shL:[-1.2,-0.5,-0.3], legL:[-0.5,0,0.1], kneeL:[0.6], legR:[0.4,0,-0.1] })],
    [0.50, G({})],
  ]},
  hitH: { dur:0.40, keys:[
    [0.00, G({})],
    [0.08, G({ py:-0.05, lean:-0.30, chest:[-0.42,0.1,0.08], head:[-0.55,0,0],
      shL:[-0.5,-0.6,-0.6], elL:[-1.0], shR:[-0.4,0.6,0.6], elR:[-1.0],
      legL:[-0.2,0,0.08], kneeL:[0.35], legR:[0.45,0,-0.1], kneeR:[0.25] })],
    [0.24, G({ py:-0.07, lean:-0.22, chest:[-0.3,0.08,0.06], head:[-0.4,0,0],
      shL:[-0.7,-0.6,-0.5], elL:[-1.3], shR:[-0.6,0.6,0.5], elR:[-1.3],
      legL:[-0.25,0,0.08], kneeL:[0.4], legR:[0.4,0,-0.1], kneeR:[0.3] })],
    [0.40, G({})],
  ]},
  hitL: { dur:0.45, keys:[
    [0.00, G({})],
    [0.09, G({ py:-0.24, lean:0.12, chest:[0.62,-0.2,0], head:[0.45,0.2,0],
      shL:[-0.7,-0.7,-0.3], elL:[-1.2], shR:[-0.7,0.7,0.3], elR:[-1.2],
      legL:[-0.45,0,0.1], kneeL:[0.7], legR:[0.35,0,-0.1], kneeR:[0.55] })],
    [0.28, G({ py:-0.18, lean:0.08, chest:[0.45,-0.2,0], head:[0.3,0.2,0],
      shL:[-0.9,-0.6,-0.3], elL:[-1.5], shR:[-0.8,0.6,0.3], elR:[-1.6],
      legL:[-0.4,0,0.1], kneeL:[0.6], legR:[0.32,0,-0.1], kneeR:[0.45] })],
    [0.45, G({})],
  ]},
  launch: { dur:0.60, loop:true, keys:[
    [0.00, { py:0.1, lean:-0.1, side:0, rx:0, ry:0, rz:0.1, spine:[-0.4,0,0], chest:[-0.55,0,0.1], head:[-0.5,0,0],
      shL:[-2.4,0,-1.1], elL:[-0.3], shR:[-2.4,0,1.1], elR:[-0.3],
      legL:[-0.7,0,0.3], kneeL:[1.1], legR:[0.5,0,-0.3], kneeR:[0.9], band:[1.2] }],
    [0.30, { py:0.15, lean:-0.12, side:0, rx:0, ry:0, rz:-0.1, spine:[-0.45,0,0], chest:[-0.6,0,-0.1], head:[-0.55,0,0],
      shL:[-2.6,0,-0.9], elL:[-0.25], shR:[-2.2,0,1.2], elR:[-0.35],
      legL:[-0.5,0,0.35], kneeL:[1.0], legR:[0.7,0,-0.25], kneeR:[1.0], band:[1.4] }],
    [0.60, { py:0.1, lean:-0.1, side:0, rx:0, ry:0, rz:0.1, spine:[-0.4,0,0], chest:[-0.55,0,0.1], head:[-0.5,0,0],
      shL:[-2.4,0,-1.1], elL:[-0.3], shR:[-2.4,0,1.1], elR:[-0.3],
      legL:[-0.7,0,0.3], kneeL:[1.1], legR:[0.5,0,-0.3], kneeR:[0.9], band:[1.2] }],
  ]},
  down: { dur:0.50, loop:true, keys:[
    [0.00, { py:-0.72, lean:-0.35, side:0, rx:0, ry:0, rz:0.06, spine:[-1.05,0,0], chest:[-1.15,0,0], head:[-0.35,0.3,0],
      shL:[-0.3,0,-1.15], elL:[-0.35], shR:[-0.3,0,1.15], elR:[-0.35],
      legL:[-1.35,0,0.18], kneeL:[0.15], legR:[-1.25,0,-0.18], kneeR:[0.2], band:[0.0] }],
    [0.50, { py:-0.72, lean:-0.35, side:0, rx:0, ry:0, rz:0.06, spine:[-1.05,0,0], chest:[-1.15,0,0], head:[-0.35,0.3,0],
      shL:[-0.3,0,-1.15], elL:[-0.35], shR:[-0.3,0,1.15], elR:[-0.35],
      legL:[-1.35,0,0.18], kneeL:[0.15], legR:[-1.25,0,-0.18], kneeR:[0.2], band:[0.0] }],
  ]},
  wakeup: { dur:0.50, keys:[
    [0.00, { py:-0.72, lean:-0.35, side:0, rx:0, ry:0, rz:0.06, spine:[-1.05,0,0], chest:[-1.15,0,0], head:[-0.35,0.3,0],
      shL:[-0.3,0,-1.15], elL:[-0.35], shR:[-0.3,0,1.15], elR:[-0.35],
      legL:[-1.35,0,0.18], kneeL:[0.15], legR:[-1.25,0,-0.18], kneeR:[0.2], band:[0.0] }],
    [0.25, G({ py:-0.34, lean:0.0, chest:[0.5,-0.3,0], shL:[-0.8,-0.5,-0.5], elL:[-1.0], shR:[-0.8,0.5,0.5], elR:[-1.0],
      legL:[-0.6,0,0.15], kneeL:[1.2], legR:[0.3,0,-0.15], kneeR:[1.1] })],
    [0.50, G({})],
  ]},
  ko: { dur:1.20, loop:true, keys:[
    [0.00, { py:-0.70, lean:-0.30, side:0, rx:0, ry:0, rz:0.35, spine:[-1.0,0,0.1], chest:[-1.1,0,0.15], head:[-0.3,0.7,0.4],
      shL:[-0.2,0,-1.5], elL:[-0.2], shR:[-0.5,0,0.7], elR:[-0.5],
      legL:[-1.4,0,0.3], kneeL:[0.1], legR:[-1.1,0,-0.35], kneeR:[0.3], band:[-0.2] }],
    [1.20, { py:-0.70, lean:-0.30, side:0, rx:0, ry:0, rz:0.35, spine:[-1.0,0,0.1], chest:[-1.1,0,0.15], head:[-0.3,0.7,0.4],
      shL:[-0.2,0,-1.5], elL:[-0.2], shR:[-0.5,0,0.7], elR:[-0.5],
      legL:[-1.4,0,0.3], kneeL:[0.1], legR:[-1.1,0,-0.35], kneeR:[0.3], band:[-0.2] }],
  ]},
  win: { dur:1.10, loop:true, keys:[
    [0.00, G({ py:-0.02, lean:0, ry:0, chest:[-0.12,0,0], head:[-0.1,0,0],
      shR:[-2.9,0,0.15], elR:[-0.15], shL:[-0.3,0,-0.3], elL:[-0.8],
      legL:[-0.15,0,0.1], kneeL:[0.15], legR:[0.15,0,-0.1], kneeR:[0.15] })],
    [0.28, G({ py:0.10, lean:0, ry:0, chest:[-0.2,0,0], head:[-0.18,0,0],
      shR:[-3.0,0,0.15], elR:[-0.1], shL:[-0.5,0,-0.4], elL:[-1.0],
      legL:[-0.2,0,0.1], kneeL:[0.3], legR:[0.2,0,-0.1], kneeR:[0.3] })],
    [0.55, G({ py:-0.02, lean:0, ry:0, chest:[-0.12,0,0], head:[-0.1,0,0],
      shR:[-2.9,0,0.15], elR:[-0.15], shL:[-0.3,0,-0.3], elL:[-0.8],
      legL:[-0.15,0,0.1], kneeL:[0.15], legR:[0.15,0,-0.1], kneeR:[0.15] })],
    [0.82, G({ py:0.10, lean:0, ry:0, chest:[-0.2,0,0], head:[-0.18,0,0],
      shR:[-3.0,0,0.15], elR:[-0.1], shL:[-0.5,0,-0.4], elL:[-1.0],
      legL:[-0.2,0,0.1], kneeL:[0.3], legR:[0.2,0,-0.1], kneeR:[0.3] })],
    [1.10, G({ py:-0.02, lean:0, ry:0, chest:[-0.12,0,0], head:[-0.1,0,0],
      shR:[-2.9,0,0.15], elR:[-0.15], shL:[-0.3,0,-0.3], elL:[-0.8],
      legL:[-0.15,0,0.1], kneeL:[0.15], legR:[0.15,0,-0.1], kneeR:[0.15] })],
  ]},
  taunt: { dur:1.00, keys:[
    [0.00, G({})],
    [0.25, G({ py:-0.05, lean:0.12, ry:0.15, chest:[0.1,0.3,0], head:[0,0,0],
      shR:[-1.3,-0.5,0.2], elR:[-0.5], shL:[-0.6,-0.4,-0.3], elL:[-1.2] })],
    [0.45, G({ py:-0.05, lean:0.12, ry:0.15, chest:[0.1,0.3,0], head:[0,0,0],
      shR:[-0.9,-0.7,0.2], elR:[-1.1], shL:[-0.6,-0.4,-0.3], elL:[-1.2] })],
    [0.65, G({ py:-0.05, lean:0.12, ry:0.15, chest:[0.1,0.3,0], head:[0,0,0],
      shR:[-1.3,-0.5,0.2], elR:[-0.5], shL:[-0.6,-0.4,-0.3], elL:[-1.2] })],
    [1.00, G({})],
  ]},
  intro: { dur:1.20, keys:[
    [0.00, { py:0, lean:0, side:0, rx:0, ry:0, rz:0, spine:[0,0,0], chest:[0,0,0], head:[0.1,0,0],
      shL:[-0.15,0,-0.12], elL:[-0.2], shR:[-0.15,0,0.12], elR:[-0.2],
      legL:[0,0,0.06], kneeL:[0.05], legR:[0,0,-0.06], kneeR:[0.05], band:[0.1] }],
    [0.70, G({ py:-0.03, lean:0.05 })],
    [1.20, G({})],
  ]},
  dash: { dur:0.24, keys:[
    [0.00, G({ py:-0.10, lean:0.18 })],
    [0.12, G({ py:-0.12, lean:0.42, chest:[0.42,-0.3,0], head:[0.1,0.3,0],
      shL:[0.7,-0.2,-0.4], elL:[-0.5], shR:[0.7,0.2,0.4], elR:[-0.5],
      legL:[-1.15,0,0.14], kneeL:[0.55], legR:[0.95,0,-0.14], kneeR:[0.95] })],
    [0.24, G({ py:-0.10, lean:0.20, chest:[0.35,-0.3,0],
      shL:[0.5,-0.2,-0.4], elL:[-0.6], shR:[0.5,0.2,0.4], elR:[-0.6],
      legL:[-0.9,0,0.12], kneeL:[0.5], legR:[0.7,0,-0.12], kneeR:[0.8] })],
  ]},
  step: { dur:0.26, keys:[
    [0.00, G({})],
    [0.12, G({ py:0.06, lean:-0.22, chest:[-0.2,-0.3,0], shL:[-0.6,-0.5,-0.5], shR:[-0.6,0.5,0.5],
      legL:[-0.6,0,0.1], kneeL:[0.9], legR:[0.2,0,-0.1], kneeR:[0.9] })],
    [0.26, G({})],
  ]},
  jump: { dur:0.40, loop:true, keys:[
    [0.00, G({ py:0.02, lean:0.05, chest:[0.2,-0.3,0], shL:[-1.2,-0.4,-0.4], elL:[-1.6], shR:[-1.0,0.4,0.4], elR:[-1.8],
      legL:[-0.7,0,0.1], kneeL:[1.1], legR:[0.35,0,-0.1], kneeR:[1.0] })],
    [0.40, G({ py:0.02, lean:0.05, chest:[0.2,-0.3,0], shL:[-1.2,-0.4,-0.4], elL:[-1.6], shR:[-1.0,0.4,0.4], elR:[-1.8],
      legL:[-0.7,0,0.1], kneeL:[1.1], legR:[0.35,0,-0.1], kneeR:[1.0] })],
  ]},
  land: { dur:0.18, keys:[
    [0.00, G({ py:-0.26, lean:0.08, chest:[0.35,-0.35,0], legL:[-0.6,0,0.12], kneeL:[1.0], legR:[0.45,0,-0.12], kneeR:[0.85] })],
    [0.18, G({})],
  ]},
  crush: { dur:1.00, keys:[
    [0.00, G({})],
    [0.15, G({ py:-0.10, lean:-0.35, chest:[-0.5,0,0.1], head:[-0.5,0,0],
      shL:[-0.2,0,-0.8], elL:[-0.3], shR:[-0.2,0,0.8], elR:[-0.3],
      legL:[-0.3,0,0.12], kneeL:[0.4], legR:[0.5,0,-0.12], kneeR:[0.3] })],
    [0.45, G({ py:-0.14, lean:-0.25, chest:[-0.35,0,-0.08], head:[-0.35,0,0],
      shL:[-0.3,0,-0.7], elL:[-0.4], shR:[-0.3,0,0.7], elR:[-0.4],
      legL:[-0.3,0,0.12], kneeL:[0.45], legR:[0.45,0,-0.12], kneeR:[0.35] })],
    [0.75, G({ py:-0.12, lean:-0.28, chest:[-0.4,0,0.08], head:[-0.4,0,0],
      shL:[-0.25,0,-0.75], elL:[-0.35], shR:[-0.25,0,0.75], elR:[-0.35],
      legL:[-0.3,0,0.12], kneeL:[0.42], legR:[0.48,0,-0.12], kneeR:[0.32] })],
    [1.00, G({})],
  ]},
};

// ---------- リグ構築 ----------
const _mats = [];
function std(color, rough=0.75, metal=0.08){
  const m = new THREE.MeshStandardMaterial({ color, roughness:rough, metalness:metal });
  _mats.push(m); return m;
}
function glow(color, intensity=1.6){
  const m = new THREE.MeshStandardMaterial({ color:0x111111, emissive:color, emissiveIntensity:intensity, roughness:0.4 });
  _mats.push(m); return m;
}
function capsule(r, len, mat){
  const m = new THREE.Mesh(new THREE.CapsuleGeometry(r, len, 4, 10), mat);
  m.castShadow = true; return m;
}
function box(w,h,d, mat){
  const m = new THREE.Mesh(new THREE.BoxGeometry(w,h,d), mat);
  m.castShadow = true; return m;
}

export function buildRig(pal, body){
  const h = body.h||1, bulk = body.bulk||1, sh = (body.shoulder||1);
  const g = new THREE.Group();
  const j = {};
  const mats = {
    skin: std(pal.skin), top: std(pal.top,0.85), bottom: std(pal.bottom,0.85),
    glove: std(pal.glove,0.5,0.2), accent: glow(pal.accent,1.8),
    hair: std(pal.hair,0.9), belt: std(pal.belt,0.6), eye: glow(0xd8fbff,2.2),
  };
  const flashMats = [mats.skin,mats.top,mats.bottom,mats.glove,mats.hair,mats.belt];
  flashMats.forEach(m=>{ m.userData.baseEmissive = m.emissive.getHex(); });

  const thighL=0.46*h, shinL=0.46*h, hipsY=thighL+shinL+0.06*h;
  const W = (v)=>v*bulk;

  // HIPS
  const hips = new THREE.Group(); hips.position.y = hipsY; g.add(hips); j.hips=hips;
  const hipsM = box(W(0.32),0.17*h,W(0.21), mats.bottom); hips.add(hipsM);
  const belt = box(W(0.35),0.07*h,W(0.24), mats.belt); belt.position.y=0.09*h; hips.add(belt);
  const knot = box(0.08,0.08,0.05, mats.belt); knot.position.set(0.1,0.03,-0.13*bulk); hips.add(knot);

  // SPINE / CHEST
  const spine = new THREE.Group(); spine.position.y=0.10*h; hips.add(spine); j.spine=spine;
  const spineM = capsule(W(0.12),0.10*h, mats.top); spineM.position.y=0.08*h; spine.add(spineM);
  const chest = new THREE.Group(); chest.position.y=0.20*h; spine.add(chest); j.chest=chest;
  const chestM = box(W(0.42),0.30*h,W(0.24), mats.top); chestM.position.y=0.16*h; chest.add(chestM);
  const core = box(0.10,0.10,0.03, mats.accent); core.position.set(0,0.16*h,W(0.13)); chest.add(core);
  // 肩パッド
  const shW = 0.24*sh*bulk;
  const padL = new THREE.Mesh(new THREE.SphereGeometry(0.105*bulk,12,10), mats.bottom);
  padL.position.set(-shW-0.03,0.28*h,0); padL.castShadow=true; chest.add(padL);
  const padR = padL.clone(); padR.position.x*=-1; chest.add(padR);

  // HEAD
  const head = new THREE.Group(); head.position.y=0.36*h; chest.add(head); j.head=head;
  const neck = capsule(0.06*bulk,0.05, mats.skin); neck.position.y=0.0; head.add(neck);
  const skull = box(0.23*bulk,0.25*h,0.23*bulk, mats.skin); skull.position.y=0.16*h; head.add(skull);
  const hair = box(0.25*bulk,0.10*h,0.25*bulk, mats.hair); hair.position.y=0.29*h; head.add(hair);
  const band = box(0.26*bulk,0.055*h,0.26*bulk, mats.accent); band.position.y=0.235*h; head.add(band);
  const eyeL = box(0.045,0.05,0.02, mats.eye); eyeL.position.set(-0.06*bulk,0.15*h,0.115*bulk); head.add(eyeL);
  const eyeR = eyeL.clone(); eyeR.position.x*=-1; head.add(eyeR);
  const tail1 = box(0.05,0.22*h,0.015, mats.accent); tail1.position.set(-0.05,0.16*h,-0.16*bulk); head.add(tail1);
  const tail2 = box(0.05,0.17*h,0.015, mats.accent); tail2.position.set(0.05,0.17*h,-0.16*bulk); head.add(tail2);
  j.bandT1=tail1; j.bandT2=tail2;

  // ARMS
  function arm(side){ // side: -1=L(+x? ) Lは-x側
    const s = new THREE.Group(); s.position.set(side*shW, 0.27*h, 0); chest.add(s);
    const up = capsule(W(0.072),0.18*h, mats.skin); up.position.y=-0.15*h; s.add(up);
    const e = new THREE.Group(); e.position.y=-0.30*h; s.add(e);
    const fo = capsule(W(0.066),0.16*h, mats.skin); fo.position.y=-0.13*h; e.add(fo);
    const cuff = box(W(0.10),0.06,0.10, mats.accent); cuff.position.y=-0.20*h; e.add(cuff);
    const hand = new THREE.Group(); hand.position.y=-0.27*h; e.add(hand);
    const gl = box(W(0.125),0.14*h,W(0.125), mats.glove); gl.position.y=-0.05*h; hand.add(gl);
    const tip = new THREE.Group(); tip.position.y=-0.13*h; hand.add(tip);
    return {s,e,hand,tip};
  }
  const aL=arm(-1), aR=arm(1);
  j.shL=aL.s; j.elL=aL.e; j.handL=aL.hand; j.handTipL=aL.tip;
  j.shR=aR.s; j.elR=aR.e; j.handR=aR.hand; j.handTipR=aR.tip;

  // LEGS
  function leg(side){
    const hp = new THREE.Group(); hp.position.set(side*0.11*bulk,-0.06*h,0); hips.add(hp);
    const th = capsule(W(0.098),0.26*h, mats.bottom); th.position.y=-thighL/2+0.03; hp.add(th);
    const kn = new THREE.Group(); kn.position.y=-thighL; hp.add(kn);
    const sn = capsule(W(0.08),0.26*h, mats.skin); sn.position.y=-shinL/2+0.03; kn.add(sn);
    const foot = new THREE.Group(); foot.position.y=-shinL; kn.add(foot);
    const shoe = box(W(0.12),0.09*h,0.26, mats.glove); shoe.position.set(0,-0.03,0.06); foot.add(shoe);
    const tip = new THREE.Group(); tip.position.set(0,-0.03,0.19); foot.add(tip);
    return {hp,kn,foot,tip};
  }
  const lL=leg(-1), lR=leg(1);
  j.legL=lL.hp; j.kneeL=lL.kn; j.footL=lL.foot; j.footTipL=lL.tip;
  j.legR=lR.hp; j.kneeR=lR.kn; j.footR=lR.foot; j.footTipR=lR.tip;

  // 中心マーカー (被弾判定・カメラ注視)
  const center = new THREE.Group(); center.position.y=hipsY+0.45*h; g.add(center);
  const chestW = new THREE.Group(); chestW.position.y=0.18*h; chest.add(chestW);

  const rig = { group:g, j, mats, center, chestW, baseHipsY:hipsY, h,
    setFlash(v){
      for(const m of flashMats){
        m.emissive.setHex(0xffffff);
        m.emissiveIntensity = v*0.9;
        if(v<=0.001){ m.emissive.setHex(m.userData.baseEmissive); m.emissiveIntensity=1; }
      }
    }
  };
  return rig;
}

// ---------- Animator ----------
function newPose(){ return { py:0,lean:0,side:0,rx:0,ry:0,rz:0,
  spine:[0,0,0],chest:[0,0,0],head:[0,0,0],shL:[0,0,0],elL:[0],shR:[0,0,0],elR:[0],
  legL:[0,0,0],kneeL:[0],legR:[0,0,0],kneeR:[0],band:[0] }; }
function copyPose(s,d){ for(const k of CH){ const v=s[k]; d[k]=Array.isArray(v)?v.slice():v; } return d; }
function lerpPose(a,b,t,out){
  for(const k of CH){
    const va=a[k], vb=b[k];
    if(Array.isArray(va)){ for(let i=0;i<va.length;i++) out[k][i]=va[i]+(vb[i]-va[i])*t; }
    else out[k]=va+(vb-va)*t;
  }
  return out;
}
const smooth=(t)=>t*t*(3-2*t);
const _fullA=newPose(), _fullB=newPose();
function fillPose(partial,out){
  for(const k of CH){ const v=(partial&&partial[k]!==undefined)?partial[k]:NEUTRAL[k];
    out[k]=Array.isArray(v)?v.slice():v; }
  return out;
}
function sampleClip(clip,t,out){
  const keys=clip.keys;
  if(t<=keys[0][0]) return fillPose(keys[0][1],out);
  for(let i=0;i<keys.length-1;i++){
    const t0=keys[i][0], t1=keys[i+1][0];
    if(t<=t1){
      const k=smooth((t-t0)/Math.max(0.0001,t1-t0));
      fillPose(keys[i][1],_fullA); fillPose(keys[i+1][1],_fullB);
      return lerpPose(_fullA,_fullB,k,out);
    }
  }
  return fillPose(keys[keys.length-1][1],out);
}

export class Animator {
  constructor(rig){
    this.rig=rig;
    this.cur='idle'; this.t=0; this.blend=0; this.blendDur=0.12;
    this.from=newPose(); this.target=newPose(); this.applied=newPose();
    copyPose(fillPose(GUARD,newPose()), this.applied);
    this.phase=0; this.breath=Math.random()*10;
    this.speed=0; this.impX=0; this.impZ=0; // 追加インパルス
    this.finished=false;
  }
  play(name, blendDur=0.10){
    if(this.cur===name && !CLIPS[name]?.loop) { /* one-shot中は継続 */ }
    copyPose(this.applied,this.from);
    this.cur=name; this.t=0; this.blendDur=blendDur; this.finished=false;
  }
  get clip(){ return CLIPS[this.cur]; }
  get k(){ const c=this.clip; return c?Math.min(1,this.t/c.dur):1; }
  addImpulse(x,z){ this.impX+=x; this.impZ+=z; }

  update(dt, moveSpeed=0, grounded=true){
    this.t+=dt; this.breath+=dt; this.speed=moveSpeed;
    const c=this.clip;
    if(this.cur==='idle'){
      this.locoPose(this.target, moveSpeed);
    } else if(c){
      let tt=this.t;
      if(c.loop){ tt=tt%c.dur; }
      else if(tt>=c.dur){ tt=c.dur; this.finished=true; }
      sampleClip(c,tt,this.target);
      // 必殺チャージ振動
      if(this.cur==='super' && tt<0.42){
        this.target.ry+=(Math.random()-0.5)*0.06;
        this.target.py+=(Math.random()-0.5)*0.02;
      }
      if(this.cur==='launch'){ this.target.rz+=Math.sin(this.breath*14)*0.08; }
      if(this.cur==='ko' && this.t<0.6){ this.target.rz+=Math.sin(this.breath*30)*0.05*(0.6-this.t); }
    }
    // ブレンド
    const b=this.blendDur>0?smooth(Math.min(1,this.t/this.blendDur)):1;
    lerpPose(this.from,this.target,b,this.applied);
    // インパルス減衰・適用
    this.impX*=Math.pow(0.001,dt); this.impZ*=Math.pow(0.001,dt);
    this.applied.lean+=this.impZ; this.applied.side+=this.impX;
    this.apply();
    return this.finished;
  }

  locoPose(out, speed){
    fillPose(GUARD,out);
    const br=this.breath;
    // 呼吸・構えの上下動
    out.chest[0]+=Math.sin(br*2.3)*0.022;
    out.py+=Math.sin(br*3.6)*0.013 + Math.sin(br*2.3)*0.006;
    out.rz+=Math.sin(br*1.7)*0.012;
    out.head[1]+=Math.sin(br*0.6)*0.12;
    out.shL[0]+=Math.sin(br*3.6+0.4)*0.03; out.shR[0]+=Math.sin(br*3.6)*0.03;
    out.band[0]+=Math.sin(br*3.0)*0.12 + speed*0.06;
    if(speed>0.3){
      const run = speed>4.6;
      const freq = run?11.5:8.0, amp = run?0.75:0.5;
      this.locoPhase = (this.locoPhase||0) + freq*(this._dt||0.016);
      const p=this.locoPhase;
      const s1=Math.sin(p), c1=Math.cos(p);
      const swing=s1*amp, lift=Math.max(0,c1)*(run?0.5:0.3);
      out.legL[0]+=swing; out.legR[0]-=swing;
      out.kneeL[0]+=Math.max(0,-c1)*0.7+lift*0.5; out.kneeR[0]+=Math.max(0,c1)*0.7+lift*0.5;
      out.py+=Math.abs(c1)*(run?0.055:0.03)-0.01;
      out.lean+=speed*0.022;
      out.chest[0]+=speed*0.012;
      out.shL[0]+=-s1*(run?0.45:0.25); out.shR[0]+=s1*(run?0.45:0.25);
      out.shL[2]+=-0.05; out.shR[2]+=0.05;
      out.rz+=s1*0.03;
      out.band[0]+=speed*0.10;
    }
  }
  apply(){
    const j=this.rig.j, p=this.applied;
    j.hips.position.set(p.side, this.rig.baseHipsY+p.py, p.lean);
    j.hips.rotation.set(p.rx,p.ry,p.rz);
    j.spine.rotation.set(p.spine[0],p.spine[1],p.spine[2]);
    j.chest.rotation.set(p.chest[0],p.chest[1],p.chest[2]);
    j.head.rotation.set(p.head[0],p.head[1],p.head[2]);
    j.shL.rotation.set(p.shL[0],p.shL[1],p.shL[2]); j.elL.rotation.set(p.elL[0],0,0);
    j.shR.rotation.set(p.shR[0],p.shR[1],p.shR[2]); j.elR.rotation.set(p.elR[0],0,0);
    j.legL.rotation.set(p.legL[0],p.legL[1],p.legL[2]); j.kneeL.rotation.set(p.kneeL[0],0,0);
    j.legR.rotation.set(p.legR[0],p.legR[1],p.legR[2]); j.kneeR.rotation.set(p.kneeR[0],0,0);
    const w=Math.sin(this.breath*5)*0.08;
    j.bandT1.rotation.x=p.band[0]+w; j.bandT2.rotation.x=p.band[0]*0.8-w;
  }
}
