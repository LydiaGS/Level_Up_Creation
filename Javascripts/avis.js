(function () {
  emailjs.init("pBMx5f_soArWQDzqS");
  console.log("✅ EmailJS initialisé");
})();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_jjxz4c6",
      "template_k9i1f5v",
      form
    )
    .then(() => {
      alert("✅ Mail envoyé");
    })
    .catch(err => {
      console.error("❌ EmailJS error:", err);
      alert("❌ Erreur EmailJS (voir console)");
    });
  });
});

