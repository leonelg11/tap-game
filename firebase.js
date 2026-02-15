// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC3vKROREYXZFSbMbbmJ9B-xLPmSQpT8SIo",
  authDomain: "tap-game-a1da2.firebaseapp.com",
  databaseURL: "https://tap-game-a1da2-default-rtdb.firebaseio.com",
  projectId: "tap-game-a1da2",
  storageBucket: "tap-game-a1da2.firebasestorage.app",
  messagingSenderId: "362400020438",
  appId: "1:362400020438:web:4fc538d2013eef3dc79677"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export async function saveGame(userId, data) {
  await set(ref(db, 'users/' + userId), data);
}

export async function loadGame(userId) {
  const snapshot = await get(child(ref(db), 'users/' + userId));
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return null;
  }
}
