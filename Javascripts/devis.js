function calculateBudget() {
  const siteType = Number(document.getElementById("siteType").value);
  const pages = Number(document.getElementById("pages").value);
  const options = document.querySelectorAll(".option");

  let total = siteType;

  // Prix par page (au-delà de la 1ère)
  if (pages > 1) {
    total += (pages - 1) * 120;
  }

  options.forEach(option => {
    if (option.checked) {
      total += Number(option.value);
    }
  });

  document.getElementById("total").textContent = total + " €";
}
