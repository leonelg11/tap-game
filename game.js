import { db } from "./firebase.js";
import { ref, set, get, update } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

let userId = "user_" + Math.random().toString(36).substr(2, 9);

let score = 0;
let energy = 100;
let tapPower = 1;

// Referencia al usuario en Firebase
const userRef = ref(db, "users/" + userId);

// Crear usuario si no existe
async function initUser() {

    const snapshot = await get(userRef);

    if (!snapshot.exists()) {

        await set(userRef, {
            score: 0,
            energy: 100,
            tapPower: 1
        });

    } else {

        const data = snapshot.val();

        score = data.score;
        energy = data.energy;
        tapPower = data.tapPower;

        updateUI();
    }
}

// Actualizar interfaz
function updateUI() {

    document.getElementById("score").innerText = score;
    document.getElementById("energy").innerText = energy;
}

// TAP
window.tap = async function () {

    if (energy <= 0) return;

    score += tapPower;
    energy -= 1;

    updateUI();

    await update(userRef, {
        score: score,
        energy: energy,
        tapPower: tapPower
    });

}

// iniciar
initUser();
