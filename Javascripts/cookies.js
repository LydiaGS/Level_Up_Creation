document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const modal = document.getElementById("cookie-modal");

  const acceptBtn = document.getElementById("acceptCookies");
  const rejectBtn = document.getElementById("rejectCookies");
  const customizeBtn = document.getElementById("customizeCookies");
  const saveBtn = document.getElementById("saveCookies");
  const closeBtn = document.getElementById("closeCookies");
  const analyticsCheckbox = document.getElementById("analyticsCookies");

  const consent = localStorage.getItem("cookieConsent");

  // Affiche le bandeau si aucun choix
  if (!consent) {
    banner.classList.remove("hidden");
  }

  // ✅ Tout accepter
  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "all");
    banner.classList.add("hidden");
  });

  // ❌ Tout refuser
  rejectBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "necessary");
    banner.classList.add("hidden");
  });

  // ⚙️ Personnaliser
  customizeBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  // 💾 Enregistrer préférences
  saveBtn.addEventListener("click", () => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({
        necessary: true,
        analytics: analyticsCheckbox.checked
      })
    );

    modal.classList.add("hidden");
    banner.classList.add("hidden");
  });

  // ❎ Fermer modale
  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
});




