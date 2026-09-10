// ===== NEON KUMITE : entry =====
import { Game } from './game.js';

function showBootError(msg){
  console.error(msg);
  var tx = document.getElementById('load-tx');
  if (tx) tx.textContent = '起動エラー: ' + msg + ' —— タップで再読み込み';
  var fill = document.getElementById('load-fill');
  if (fill) fill.style.background = '#ff5252';
  var l = document.getElementById('loader');
  if (l) { l.style.opacity = 1; l.onclick = function(){ location.reload(); }; }
}
function start(){
  try {
    var game = new Game();
    window.game = game;
    game.boot();
    window.__kumiteBooted = true;
  } catch (e) {
    showBootError((e && e.message) || String(e));
  }
}
if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', start);
else start();
