import { db } from "./firebase.js";
import { ref, set, get, update } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

let userId = localStorage.getItem("userId");

if(!userId){
  userId = "user_" + Math.random().toString(36).substr(2,9);
  localStorage.setItem("userId", userId);
}

let score = 0;
let energy = 100;
let tapPower = 1;

const scoreEl = document.getElementById("score");
const energyEl = document.getElementById("energy");
const tapButton = document.getElementById("tapButton");

const userRef = ref(db, "users/" + userId);

async function loadGame(){

  const snapshot = await get(userRef);

  if(snapshot.exists()){

    const data = snapshot.val();

    score = data.score || 0;
    energy = data.energy || 100;
    tapPower = data.tapPower || 1;

  }else{

    await set(userRef, {
      score:0,
      energy:100,
      tapPower:1
    });

  }

  updateUI();
}

function updateUI(){

  scoreEl.innerText = score;
  energyEl.innerText = "Energy: " + energy;

}

tapButton.addEventListener("click", async ()=>{

  if(energy <= 0) return;

  score += tapPower;
  energy -= 1;

  updateUI();

  await update(userRef,{
    score:score,
    energy:energy,
    tapPower:tapPower
  });

});

loadGame();
