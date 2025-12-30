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

/* 🔍 Indexation H1, H2, P et BUTTON */
const contentIndex = [...document.querySelectorAll("h1, h2, p, button")]
  .filter(el => {
    const text = el.textContent.trim();
    return text.length > 20; // évite boutons vides / icônes
  })
  .map((el, index) => {
    if (!el.id) {
      el.id = "content-" + index;
    }

    return {
      title: el.textContent.substring(0, 80) + "...",
      url: "#" + el.id,
      keywords: el.textContent.toLowerCase()
    };
  });

/* 🔎 Fusion pages + contenus */
const searchIndex = [...pages, ...contentIndex];

input.addEventListener("input", () => {
  const value = input.value.toLowerCase().trim();
  results.innerHTML = "";

  if (value.length < 2) {
    results.style.display = "none";
    return;
  }

  const matches = searchIndex.filter(item =>
    item.keywords.includes(value)
  );

  if (matches.length === 0) {
    results.style.display = "none";
    return;
  }

  matches.slice(0, 8).forEach(item => {
    const link = document.createElement("a");
    link.href = item.url;
    link.textContent = item.title;
    results.appendChild(link);
  });

  results.style.display = "block";
});

/* ❌ Fermer au clic extérieur */
document.addEventListener("click", e => {
  if (!e.target.closest(".site-search")) {
    results.style.display = "none";
  }
});

