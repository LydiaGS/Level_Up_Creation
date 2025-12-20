emailjs.init("pBMx5f_soArWQDzqS");

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Contact.js chargé");

  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMsg");
  const formLoadedAt = Date.now();

  if (!form) {
    console.error("❌ Formulaire introuvable");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // 🛑 Honeypot anti-bot
    if (form.website.value !== "") return;

    // 🛑 Anti-bot rapide
    if (Date.now() - formLoadedAt < 1500) return;

    // 🛑 Anti-spam
    const lastSend = localStorage.getItem("lastSend");
    if (lastSend && Date.now() - lastSend < 60000) {
      alert("Merci d’attendre avant un nouvel envoi.");
      return;
    }

    // 📩 MAIL ADMIN
    emailjs.sendForm(
      "service_jjxz4c6",
      "template_k9i1f5v", // ✅ ADMIN
      form
    )
    .then(() => {
      console.log("✅ Mail ADMIN envoyé");

      // 📩 MAIL CLIENT
      return emailjs.sendForm(
        "service_jjxz4c6",
        "template_2zunkww", // ✅ CLIENT
        form
      );
    })
    .then(() => {
      console.log("✅ Mail CLIENT envoyé");

      successMsg.style.display = "block";
      form.reset();
      localStorage.setItem("lastSend", Date.now());

      setTimeout(() => {
        successMsg.style.display = "none";
      }, 4000);
    })
    .catch(err => {
      console.error("❌ EmailJS error:", err);
      alert("Erreur lors de l'envoi ❌");
    });
  });
});

