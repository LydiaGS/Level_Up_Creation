document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("calcBtn")
    .addEventListener("click", calculateBudget);
});

function calculateBudget() {
  const siteType = Number(document.getElementById("siteType").value);
  const pages = Number(document.getElementById("pages").value);
  const options = document.querySelectorAll(".option");
  const totalEl = document.getElementById("total");

  if (pages < 1) {
    totalEl.textContent = "—";
    return;
  }

  let total = 0;

  // 🔹 Forfait pages
  if (pages >= 1 && pages <= 5) {
    total = 700;
  } else if (pages <= 10) {
    total = 1200;
  } else {
    total = 2250;
  }

  // 🔹 Type de site
  total += siteType;

  // 🔹 Options
  options.forEach(option => {
    if (option.checked) {
      total += Number(option.value);
    }
  });

  totalEl.textContent = total + " €"

document.querySelectorAll(
  "#siteType, #pages, .option"
).forEach(el => {
  el.addEventListener("change", calculateBudget);
});


