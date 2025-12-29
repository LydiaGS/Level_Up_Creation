document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const sidebar = document.getElementById("sidebar");

  if (!burger || !sidebar) {
    console.error("❌ Burger ou sidebar introuvable");
    return;
  }

  burger.addEventListener("click", () => {
    console.log("🍔 burger cliqué");
    sidebar.classList.toggle("active");
  });
});
