console.log("✅ client.js chargé");
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  doc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { auth, db } from "./firebase.js";

document.addEventListener("DOMContentLoaded", () => {

  const openClient = document.getElementById("openClient");
  const logoutBtn = document.getElementById("logoutBtn");
  const clientModal = document.getElementById("clientModal");
  const registerModal = document.getElementById("registerModal");
  const closeClient = document.getElementById("closeClient");
  const closeRegister = document.getElementById("closeRegister");
  const switchRegister = document.getElementById("switchRegister");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  openClient?.addEventListener("click", () => clientModal.classList.add("active"));
  closeClient?.addEventListener("click", () => clientModal.classList.remove("active"));
  closeRegister?.addEventListener("click", () => registerModal.classList.remove("active"));

  switchRegister?.addEventListener("click", () => {
    clientModal.classList.remove("active");
    registerModal.classList.add("active");
  });

  loginForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = loginEmail.value.trim();
    const password = loginPassword.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      clientModal.classList.remove("active");
    } catch (err) {
      alert(err.message);
    }
  });

  registerForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = registerEmail.value.trim();
    const password = registerPassword.value;
    const confirm = confirmPassword.value;

    if (password !== confirm) return alert("Mots de passe différents");

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, "users", userCredential.user.uid), {
      email,
      createdAt: serverTimestamp()
    });

    registerModal.classList.remove("active");
  });

  logoutBtn?.addEventListener("click", async () => {
    await signOut(auth);
    location.reload();
  });

  onAuthStateChanged(auth, user => {
    openClient.textContent = user ? "Mon espace" : "Se connecter";
    logoutBtn.style.display = user ? "inline-block" : "none";
  });

  document.querySelectorAll(".toggle-password").forEach(icon => {
    icon.addEventListener("click", () => {
      const input = document.getElementById(icon.dataset.target);
      input.type = input.type === "password" ? "text" : "password";
    });
  });

});

