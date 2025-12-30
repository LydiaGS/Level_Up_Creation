import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// CONFIG FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBO9W2Tkg5jLOZYf7tHIwbKMu5pAaUir5o",
  authDomain: "levelupcreation-amandine.firebaseapp.com",
  projectId: "levelupcreation-amandine",
  storageBucket: "levelupcreation-amandine.firebasestorage.app",
  messagingSenderId: "806349038860",
  appId: "1:806349038860:web:3125da97fe3083275d5529"
};

// INIT
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// ATTEND QUE LA PAGE SOIT CHARGÉE
document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     INSCRIPTION
  ===================== */
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("registerEmail").value;
      const password = document.getElementById("registerPassword").value;

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("Compte créé :", userCredential.user);
        })
        .catch((error) => {
          console.error(error.code, error.message);
        });
    });
  }

  /* =====================
     CONNEXION
  ===================== */
 const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("Connecté :", userCredential.user);
        })
        .catch((error) => {
          console.error(error.code, error.message);
        });
    });
  }

});

