import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyBO9W2Tkg5jLOZYf7tHIwbKMu5pAaUir5o",
  authDomain: "levelupcreation-amandine.firebaseapp.com",
  projectId: "levelupcreation-amandine",
  storageBucket: "levelupcreation-amandine.firebasestorage.app",
  messagingSenderId: "806349038860",
  appId: "1:806349038860:web:3125da97fe3083275d5529"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// INSCRIPTION
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log("Compte créé", userCredential.user);
  })
  .catch((error) => {
    console.error(error.code, error.message);
  });

// CONNEXION
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log("Connecté", userCredential.user);
  })
  .catch((error) => {
    console.error(error.code, error.message);
  });
