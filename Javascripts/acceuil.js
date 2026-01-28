document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".service-card, .trust-item, .step"
  );

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    el.style.transition = "0.6s ease";
    observer.observe(el);
  });
});
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

