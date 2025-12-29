import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./firebase.js";

document.addEventListener("DOMContentLoaded", () => {

  // Burger menu
  const burger = document.getElementById("burger");
  const sidebar = document.getElementById("sidebar");

  burger?.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  // Année footer
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Auth Firebase
  onAuthStateChanged(auth, user => {
    console.log(user ? user.email : "déconnecté");
  });

  // Bloquer clic droit
  document.addEventListener("contextmenu", e => e.preventDefault());

  // Bloquer sélection
  document.addEventListener("selectstart", e => e.preventDefault());

  // Bloquer drag images
  document.querySelectorAll("img").forEach(img => {
    img.setAttribute("draggable", "false");
  });

  // Toggle password
  document.querySelectorAll(".toggle-password").forEach(icon => {
    icon.addEventListener("click", () => {
      const input = document.getElementById(icon.dataset.target);
      if (input) {
        input.type = input.type === "password" ? "text" : "password";
      }
    });
  });

});



