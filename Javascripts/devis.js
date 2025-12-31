document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("calcBtn")
    .addEventListener("click", calculateBudget);
});

function calculateBudget() {
  const pages = Number(document.getElementById("pages").value);
  const siteType = document.getElementById("siteType").value;
  const options = document.querySelectorAll(".option");
  const totalEl = document.getElementById("total");

  if (pages < 1) {
    totalEl.textContent = "—";
    return;
  }

  let total = 0;

  // 🔴 PRIX OBLIGATOIRES POUR 1 À 5 PAGES
  if (pages >= 1 && pages <= 5) {
    if (siteType === "800") {
      total = 700; // Site vitrine
    } else if (siteType === "1500") {
      total = 1000; // Plateforme étudiant
    } else if (siteType === "1800") {
      total = 1200; // E-commerce
    }
  }
  // 🔵 PRIX AU-DELÀ DE 5 PAGES
  else if (pages <= 10) {
    total = 1200 + Number(siteType);
  } else {
    total = 2250 + Number(siteType);
  }

  // ➕ OPTIONS
  options.forEach(option => {
    if (option.checked) {
      total += Number(option.value);
    }
  });

  totalEl.textContent = total + " €";
}

document.querySelectorAll(
  "#siteType, #pages, .option"
).forEach(el => {
  el.addEventListener("change", calculateBudget);
});


