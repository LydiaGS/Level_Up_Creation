// ===============================
// EMAILJS (MODULE CORRECT)
// ===============================
import * as emailjs 
from "https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js";

// 🔑 PUBLIC KEY
emailjs.init("pBMx5f_soArWQDzqS");

// ===============================
// CONTACT FORM
// ===============================
document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMsg");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_jjxz4c6",   // Service ID
      "template_2zunkww",  // Template ID
      form
    )
    .then(() => {
      successMsg.style.display = "block";
      form.reset();

      setTimeout(() => {
        successMsg.style.display = "none";
      }, 4000);
    })
    .catch((error) => {
      console.error("❌ EmailJS error:", error);
      alert("Erreur lors de l'envoi ❌");
    });
  });

});

