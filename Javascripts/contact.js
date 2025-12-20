emailjs.init("pBMx5f_soArWQDzqS");

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Contact.js chargé");

  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMsg");
  let formLoadedAt = Date.now();

  if (!form) {
    console.error("❌ Formulaire introuvable");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

  
    const honeypot = form.querySelector('input[name="website"]');
    if (honeypot && honeypot.value !== "") return;


    if (Date.now() - formLoadedAt < 1500) return;


    const lastSend = localStorage.getItem("lastSend");
    if (lastSend && Date.now() - lastSend < 60000) {
      alert("Merci d’attendre avant un nouvel envoi.");
      return;
    }

    emailjs.sendForm(
      "service_jjxz4c6",
      "template_2zunkww",
      form
    )
    .then(() => {
      successMsg.style.display = "block";
      form.reset();
      localStorage.setItem("lastSend", Date.now());

      setTimeout(() => {
        successMsg.style.display = "none";
      }, 4000);
    })
    .catch((err) => {
      console.error("❌ EmailJS error:", err);
      alert("Erreur lors de l'envoi ❌");
    });
  });
});


