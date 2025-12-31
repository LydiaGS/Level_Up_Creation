document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("calcBtn")
    .addEventListener("click", calculateBudget);
});

function calculateBudget() {
  const siteType = Number(document.getElementById("siteType").value);
  const pages = Number(document.getElementById("pages").value);
  const options = document.querySelectorAll(".option");

  if (pages < 1) {
    document.getElementById("total").textContent = "—";
    return;
  }

  let total = siteType;

  if (pages <= 5) total += 700;
  else if (pages <= 10) total += 1200;
  else total += 2250;

  options.forEach(o => o.checked && (total += Number(o.value)));

  document.getElementById("total").textContent = total + " €";
}


