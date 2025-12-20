document.getElementById("cookie-banner").classList.remove("hidden")
document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const modal = document.getElementById("cookie-modal");

  const acceptBtn = document.getElementById("acceptCookies");
  const rejectBtn = document.getElementById("rejectCookies");
  const customizeBtn = document.getElementById("customizeCookies");
  const saveBtn = document.getElementById("saveCookies");
  const closeBtn = document.getElementById("closeCookies");
  const analyticsCheckbox = document.getElementById("analyticsCookies");

  if (!banner) return;

  const consent = localStorage.getItem("cookieConsent");

  // 🔥 Affiche le bandeau si aucun consentement OU consentement invalide
  if (!consent || consent === "null") {
    banner.classList.remove("hidden");
  }

  // ✅ Tout accepter
  acceptBtn?.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "all");
    banner.classList.add("hidden");
    modal?.classList.add("hidden");
  });

  // ❌ Tout refuser (cookies nécessaires uniquement)
  rejectBtn?.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "necessary");
    banner.classList.add("hidden");
    modal?.classList.add("hidden");
  });

  // ⚙️ Ouvrir personnalisation
  customizeBtn?.addEventListener("click", () => {
    modal?.classList.remove("hidden");
  });

  // 💾 Enregistrer préférences
  saveBtn?.addEventListener("click", () => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({
        necessary: true,
        analytics: analyticsCheckbox?.checked || false
      })
    );

    modal?.classList.add("hidden");
    banner.classList.add("hidden");
  });

  // ❎ Fermer la modale sans enregistrer
  closeBtn?.addEventListener("click", () => {
    modal?.classList.add("hidden");
  });
});




