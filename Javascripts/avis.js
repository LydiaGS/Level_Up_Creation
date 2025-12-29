import emailjs from "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";

emailjs.init("pBMx5f_soArWQDzqS");

export function sendReview(form, status) {
  emailjs.sendForm(
    "service_jjxz4c6",
    "template_a6pvbaa",
    form
  )
  .then(() => {
    status.textContent = "Merci pour votre avis 💖";
  })
  .catch(() => {
    status.textContent = "Erreur d'envoi";
  });
}
