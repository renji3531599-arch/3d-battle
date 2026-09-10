// test helper: real three.js, but WebGLRenderer stubbed (no GL in node)
export * from '../node_modules/three/build/three.module.js';

export class WebGLRenderer {
  constructor() {
    this.toneMapping = 0;
    this.toneMappingExposure = 1;
    this.outputColorSpace = '';
    this.shadowMap = { enabled: false, type: 0 };
    this._size = { w: 0, h: 0 };
  }
  setSize() {}
  setPixelRatio() {}
  render() {}
  dispose() {}
}
