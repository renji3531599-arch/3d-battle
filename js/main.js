// ===== NEON KUMITE : entry =====
import { Game } from './game.js';

window.addEventListener('DOMContentLoaded', () => {
  try {
    const game = new Game();
    window.game = game;
    game.boot();
  } catch (e) {
    console.error(e);
    const tx = document.getElementById('load-tx');
    if (tx) tx.textContent = '起動エラー: ' + e.message;
  }
});
