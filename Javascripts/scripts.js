import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./firebase.js";
document.getElementById("year").textContent =
  new Date().getFullYear();

onAuthStateChanged(auth, user => {
  console.log(user ? user.email : "déconnecté");
});
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("selectstart", e => e.preventDefault());

document.querySelectorAll("img").forEach(img => {
  img.setAttribute("draggable", "false");
});

document.querySelectorAll(".toggle-password").forEach(icon => {
  icon.addEventListener("click", () => {
    const input = document.getElementById(icon.dataset.target);
    input.type = input.type === "password" ? "text" : "password";
  });
});



