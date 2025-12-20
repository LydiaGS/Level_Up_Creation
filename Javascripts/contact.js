import emailjs from "https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js";

emailjs.init("pBMx5f_soArWQDzqS");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMsg");

  if (!form || !successMsg) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_jjxz4c6",
        "template_2zunkww",
        form
      );

      successMsg.style.display = "block";
      form.reset();

      setTimeout(() => {
        successMsg.style.display = "none";
      }, 4000);

    } catch (error) {
      console.error("❌ EmailJS error:", error);
      alert("Erreur lors de l'envoi ❌");
    }
  });
});

