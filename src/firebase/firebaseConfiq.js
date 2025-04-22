


// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDe0UoYocHW4B94sqCmOHU6WEsDAFMI0-c",
  authDomain: "rtravworld.firebaseapp.com",
  projectId: "rtravworld",
  storageBucket: "rtravworld.firebasestorage.app",
  messagingSenderId: "397373613001",
  appId: "1:397373613001:web:1b725731e2bca3abab3e18",
  measurementId: "G-QR7XSH7HR3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
