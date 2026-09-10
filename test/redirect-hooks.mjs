// node module customization: redirect 'three' -> stub (WebGLRenderer only)
const stubUrl = new URL('./three-stub.mjs', import.meta.url).href;
export async function resolve(specifier, context, nextResolve) {
  if (specifier === 'three') return { url: stubUrl, shortCircuit: true };
  return nextResolve(specifier, context);
}
