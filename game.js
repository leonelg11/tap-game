// game.js
import { saveGame, loadGame } from './firebase.js';

let score = 0;
let energy = 100;
let tapPower = 1;
let userId = localStorage.getItem("tapUserId");

if (!userId) {
  userId = "user_" + Math.random().toString(36).substring(2);
  localStorage.setItem("tapUserId", userId);
}

const scoreEl = document.getElementById("score");
const energyEl = document.getElementById("energy");
const tapBtn = document.getElementById("tap");

async function init() {
  const data = await loadGame(userId);
  if (data) {
    score = data.score || 0;
    energy = data.energy || 100;
    tapPower = data.tapPower || 1;
  }
  updateUI();
}

function updateUI() {
  scoreEl.innerText = score;
  energyEl.innerText = energy + "/100";
}

tapBtn.onclick = async () => {
  if (energy > 0) {
    score += tapPower;
    energy--;
    updateUI();
    await saveGame(userId, { score, energy, tapPower });
  }
};

init();
