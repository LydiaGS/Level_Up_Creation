document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("calcBtn")
    .addEventListener("click", calculateBudget);
});

function calculateBudget() {
  const pages = Number(document.getElementById("pages").value);
  const siteType = document.getElementById("siteType").value;
  const options = document.querySelectorAll(".option");
  const totalEl = document.getElementById("total");

  if (pages < 1 || siteType === "0") {
    totalEl.textContent = "—";
    return;
  }

  let total = 0;

  /* =========================
     PRIX DE BASE
     ========================= */
  if (pages <= 5) {
    if (siteType === "800") total = 700;       // vitrine
    if (siteType === "1500") total = 1000;     // plateforme étudiant
    if (siteType === "1800") total = 1200;     // e-commerce
  }

  if (pages >= 6 && pages <= 10) {
    if (siteType === "800") total = 700 + 400;
    if (siteType === "1500") total = 1000 + 400;
    if (siteType === "1800") total = 1200 + 400;
  }

  /* =========================
     OPTIONS
     ========================= */
  options.forEach(option => {
    if (!option.checked) return;

    // 🔹 Paiement en ligne
    if (option.value === "300") {
      if (siteType === "1800") total += 300; // e-commerce
      if (siteType === "800") total += 220;  // vitrine
    }

    // 🔹 Blog / Articles
    if (option.value === "200") {
      if (siteType === "800" || siteType === "1800") {
        total += 200;
      }
    }

    // 🔹 Automatisations
    if (option.value === "400") {
      if (siteType === "800" || siteType === "1800") {
        total += 200;
      }
    }

    // 🔹 Espace membre
    if (option.value === "250") {
      if (siteType === "1500" || siteType === "1800") {
        total += 250;
      }
    }
  });

  totalEl.textContent = total + " €";
}

document.querySelectorAll(
  "#siteType, #pages, .option"
).forEach(el => {
  el.addEventListener("change", calculateBudget);
});


