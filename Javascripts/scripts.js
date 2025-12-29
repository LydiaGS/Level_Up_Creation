import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./firebase.js";

document.addEventListener("DOMContentLoaded", () => {

  // ===== MENU BURGER =====
  const burger = document.getElementById("burger");
  const sidebar = document.getElementById("sidebar");

  if (burger && sidebar) {
    burger.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      console.log("Burger cliqué");
    });
  } else {
    console.error("Burger ou sidebar introuvable");
  }

  // ===== ANNEE FOOTER =====
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // ===== FIREBASE AUTH =====
  onAuthStateChanged(auth, user => {
    console.log(user ? `Connecté : ${user.email}` : "Déconnecté");
  });

  // ===== PROTECTIONS =====
  document.addEventListener("contextmenu", e => e.preventDefault());
  document.addEventListener("selectstart", e => e.preventDefault());

  document.querySelectorAll("img").forEach(img => {
    img.setAttribute("draggable", "false");
  });

  // ===== TOGGLE PASSWORD =====
  document.querySelectorAll(".toggle-password").forEach(icon => {
    icon.addEventListener("click", () => {
      const input = document.getElementById(icon.dataset.target);
      if (input) {
        input.type = input.type === "password" ? "text" : "password";
      }
    });
  });

});



