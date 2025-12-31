function calculateBudget() {
  const siteType = Number(document.getElementById("siteType").value);
  const pages = Number(document.getElementById("pages").value);
  const options = document.querySelectorAll(".option");

  // Sécurité si pages < 1
  if (pages < 1) {
    document.getElementById("total").textContent = "—";
    return;
  }

  let total = siteType;

  // Tarification par nombre de pages
  if (pages >= 1 && pages <= 5) {
    total += 700;
  } else if (pages >= 6 && pages <= 10) {
    total += 1200;
  } else if (pages > 10) {
    total += 2250;
  }

  // Options supplémentaires
  options.forEach(option => {
    if (option.checked) {
      total += Number(option.value);
    }
  });

  document.getElementById("total").textContent = total + " €";
}
document.querySelectorAll(
  "#siteType, #pages, .option"
).forEach(el => {
  el.addEventListener("change", calculateBudget);
});

