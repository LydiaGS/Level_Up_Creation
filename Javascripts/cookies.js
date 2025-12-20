document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const modal = document.getElementById("cookie-modal");

  if (!banner) return;

  const acceptBtn = document.getElementById("acceptCookies");
  const rejectBtn = document.getElementById("rejectCookies");
  const customizeBtn = document.getElementById("customizeCookies");
  const saveBtn = document.getElementById("saveCookies");
  const closeBtn = document.getElementById("closeCookies");
  const analyticsCheckbox = document.getElementById("analyticsCookies");

  // 🔐 Lecture du consentement
  let consent;
  try {
    consent = JSON.parse(localStorage.getItem("cookieConsent"));
  } catch {
    consent = null;
  }

  // 📢 Affiche le bandeau si aucun consentement valide
  if (!consent || typeof consent !== "object") {
    banner.classList.remove("hidden");
  }

  // ✅ Tout accepter
  acceptBtn?.addEventListener("click", () => {
    const data = { necessary: true, analytics: true };
    localStorage.setItem("cookieConsent", JSON.stringify(data));
    applyConsent(data);
    closeAll();
  });

  // ❌ Tout refuser
  rejectBtn?.addEventListener("click", () => {
    const data = { necessary: true, analytics: false };
    localStorage.setItem("cookieConsent", JSON.stringify(data));
    applyConsent(data);
    closeAll();
  });

  // ⚙️ Personnaliser
  customizeBtn?.addEventListener("click", () => {
    modal?.classList.remove("hidden");
  });

  // 💾 Sauvegarde personnalisée
  saveBtn?.addEventListener("click", () => {
    const data = {
      necessary: true,
      analytics: analyticsCheckbox?.checked || false
    };
    localStorage.setItem("cookieConsent", JSON.stringify(data));
    applyConsent(data);
    closeAll();
  });

  // ❎ Fermer modale
  closeBtn?.addEventListener("click", () => {
    modal?.classList.add("hidden");
  });

  // 🔧 Fonctions utilitaires
  function closeAll() {
    banner.classList.add("hidden");
    modal?.classList.add("hidden");
  }

  function applyConsent(consent) {
    if (consent.analytics) {
      loadAnalytics();
    }
  }

  // 📊 Chargement conditionnel analytics
  function loadAnalytics() {
    if (window.analyticsLoaded) return;
    window.analyticsLoaded = true;

    // Exemple Google Analytics (à adapter)
    /*
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXX";
    script.async = true;
    document.head.appendChild(script);
    */
  }
});





