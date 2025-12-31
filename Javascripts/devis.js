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
    if (siteType === "800") total = 700;      // vitrine
    if (siteType === "1500") total = 1000;    // plateforme
    if (siteType === "1800") total = 1200;    // e-commerce
  } else {
    // 6 pages
    if (siteType === "800") total = 1100;
    if (siteType === "1500") total = 1250;
    if (siteType === "1800") total = 1400;
  }

  /* =========================
     +150 € PAR PAGE > 6
     ========================= */
  if (pages > 6) {
    total += (pages - 6) * 150;
  }

  /* =========================
     OPTIONS
     ========================= */
  options.forEach(option => {
    if (!option.checked) return;

    // Paiement
    if (option.value === "300") {
      if (pages <= 5 && siteType === "800") {
        total += 220; // vitrine tarif réduit
      } else {
        total += 280;
      }
    }

    // Espace membre
    if (option.value === "250") {
      total += 320;
    }

    // Blog / Articles
    if (option.value === "200") {
      total += 300;
    }

    // Automatisation
    if (option.value === "400") {
      total += 295;
    }
  });

  totalEl.textContent = total + " €";
}


document.querySelectorAll(
  "#siteType, #pages, .option"
).forEach(el => {
  el.addEventListener("change", calculateBudget);
});


