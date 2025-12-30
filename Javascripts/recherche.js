const pages = [
  { title: "Accueil", url: "/", keywords: "accueil home level up creation" },
  { title: "Services", url: "/services.html", keywords: "services site web création design" },
  { title: "Formations", url: "/formations.html", keywords: "formations wordpress seo apprendre" },
  { title: "Portfolio", url: "/portfolio.html", keywords: "portfolio projets réalisations" },
  { title: "À propos", url: "/a-propos.html", keywords: "a propos qui suis je" },
  { title: "Contact", url: "/contact.html", keywords: "contact devis" }
];

const input = document.getElementById("globalSearch");
const results = document.getElementById("searchResults");

input.addEventListener("input", () => {
  const value = input.value.toLowerCase().trim();
  results.innerHTML = "";

  if (value.length < 2) {
    results.style.display = "none";
    return;
  }

  const matches = pages.filter(page =>
    page.keywords.includes(value) || page.title.toLowerCase().includes(value)
  );

  if (matches.length === 0) {
    results.style.display = "none";
    return;
  }

  matches.forEach(page => {
    const link = document.createElement("a");
    link.href = page.url;
    link.textContent = page.title;
    results.appendChild(link);
  });

  results.style.display = "block";
});

// Fermer au clic extérieur
document.addEventListener("click", e => {
  if (!e.target.closest(".site-search")) {
    results.style.display = "none";
  }
});
