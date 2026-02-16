import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

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
export const db = getDatabase(app);
