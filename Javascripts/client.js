// ================================
// Gestion simple de la connexion client
// ================================

// État de connexion (exemple : stocké en localStorage)
let isLogged = localStorage.getItem("isLogged") === "true";

// Sélecteurs
const loginForm = document.getElementById("loginForm");
const logoutBtn = document.getElementById("logoutBtn");
const clientModal = document.getElementById("clientModal");

// ================================
// Fonctions
// ================================

function showDashboard() {
  console.log("Utilisateur connecté");

  if (clientModal) {
    clientModal.style.display = "none";
  }

  if (logoutBtn) {
    logoutBtn.style.display = "block";
  }
}

function showLogin() {
  console.log("Utilisateur non connecté");

  if (logoutBtn) {
    logoutBtn.style.display = "none";
  }
}

// ================================
// Vérification au chargement
// ================================

if (isLogged) {
  showDashboard();
} else {
  showLogin();
}

// ================================
// Connexion
// ================================

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // 👉 ici tu peux brancher Firebase plus tard
    localStorage.setItem("isLogged", "true");
    isLogged = true;

    showDashboard();
  });
}

// ================================
// Déconnexion
// ================================

if (logoutBtn) {
  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("isLogged");
    isLogged = false;

    showLogin();
  });
}


