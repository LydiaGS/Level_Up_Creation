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

  // =====================
  // ELEMENTS (OPTIONNELS)
  // =====================
  const openClient = document.getElementById("openClient");
  const logoutBtn = document.getElementById("logoutBtn");

  const clientModal = document.getElementById("clientModal");
  const registerModal = document.getElementById("registerModal");

  const closeClient = document.getElementById("closeClient");
  const closeRegister = document.getElementById("closeRegister");
  const switchRegister = document.getElementById("switchRegister");

  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  // =====================
  // MODALES
  // =====================
  openClient?.addEventListener("click", () => {
    clientModal?.classList.add("active");
  });

  closeClient?.addEventListener("click", () => {
    clientModal?.classList.remove("active");
  });

  switchRegister?.addEventListener("click", () => {
    clientModal?.classList.remove("active");
    registerModal?.classList.add("active");
  });

  closeRegister?.addEventListener("click", () => {
    registerModal?.classList.remove("active");
  });

  // =====================
  // CONNEXION
  // =====================
  loginForm?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = loginForm.querySelector("input[type='email']")?.value;
    const password = loginForm.querySelector("input[type='password']")?.value;

    if (!email || !password) return;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      clientModal?.classList.remove("active");
    } catch (err) {
      alert("❌ " + err.message);
    }
  });

  // =====================
  // INSCRIPTION
  // =====================
  registerForm?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const prenom = registerForm.querySelector("input[name='name']")?.value;
    const email = document.getElementById("registerEmail")?.value;
    const password = document.getElementById("registerPassword")?.value;

    if (!prenom || !email || !password) return;

    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", cred.user.uid), {
        prenom,
        email,
        role: "client",
        paid: false,
        createdAt: serverTimestamp()
      });

      registerModal?.classList.remove("active");
    } catch (err) {
      alert("❌ " + err.message);
    }
  });

  // =====================
  // DECONNEXION
  // =====================
  logoutBtn?.addEventListener("click", async () => {
    await signOut(auth);
    location.reload();
  });

  // =====================
  // ETAT UTILISATEUR (UNIQUE)
  // =====================
  onAuthStateChanged(auth, (user) => {
    if (openClient && logoutBtn) {
      if (user) {
        openClient.textContent = "Mon espace";
        logoutBtn.style.display = "inline-block";
      } else {
        openClient.textContent = "Se connecter";
        logoutBtn.style.display = "none";
      }
    }
  });

});

