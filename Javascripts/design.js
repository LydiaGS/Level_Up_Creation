document.addEventListener("DOMContentLoaded", () => {

  // ===== A) IntersectionObserver (reveal + stagger) =====
  const items = document.querySelectorAll("[data-anim]");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("is-in");
    });
  }, { threshold: 0.15 });

  items.forEach((el, i) => {
    // Stagger: petit délai automatique
    const type = el.getAttribute("data-anim");
    const base = (type === "tag") ? 40 : (type === "step") ? 60 : 90;
    el.style.transitionDelay = `${Math.min(i * base, 420)}ms`;
    io.observe(el);
  });

  // Pour l’underline des titres : on ajoute is-in au parent au bon moment
  const heads = document.querySelectorAll(".designer-head, .about-header");
  const ioHead = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("is-in"); });
  }, { threshold: 0.4 });
  heads.forEach(h => ioHead.observe(h));


  // ===== B) Motion dots auto (style motion designer) =====
  function addMotionDots(containerSelector, count = 10){
    const container = document.querySelector(containerSelector);
    if (!container) return;

    // évite doublons si rechargement
    if (container.querySelector(".motion-dots")) return;

    const layer = document.createElement("div");
    layer.className = "motion-dots";
    container.style.position = container.style.position || "relative";
    container.appendChild(layer);

    for (let i = 0; i < count; i++){
      const d = document.createElement("span");
      d.className = "motion-dot";
      d.style.left = `${Math.random() * 95}%`;
      d.style.top = `${Math.random() * 85}%`;
      d.style.animationDelay = `${Math.random() * 2.5}s`;
      d.style.animationDuration = `${4.5 + Math.random() * 4}s`;
      d.style.opacity = `${0.10 + Math.random() * 0.18}`;
      layer.appendChild(d);
    }
  }

  // Ajoute des dots sur tes sections
  addMotionDots(".designer-profile", 12);
  addMotionDots(".about-section", 10);


  // ===== C) Tilt léger au mouvement souris (pro, subtil) =====
  function addTilt(selector){
    const cards = document.querySelectorAll(selector);
    cards.forEach(card => {
      card.addEventListener("mousemove", (ev) => {
        const r = card.getBoundingClientRect();
        const cx = (ev.clientX - r.left) / r.width;
        const cy = (ev.clientY - r.top) / r.height;

        const rx = (0.5 - cy) * 6; // rotation X
        const ry = (cx - 0.5) * 8; // rotation Y
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  addTilt(".designer-card, .about-card");
});
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".slider-track");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");

  if(!track || slides.length === 0) return;

  let index = 0;
  const slideWidth = slides[0].offsetWidth + 16; // largeur + gap

  function updateSlider(){
    track.style.transform = `translateX(${-index * slideWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    index = (index < slides.length - 1) ? index + 1 : 0;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    index = (index > 0) ? index - 1 : slides.length - 1;
    updateSlider();
  });

  /* Auto-play (motion designer vibe) */
  let auto = setInterval(() => nextBtn.click(), 4500);

  /* Pause au hover */
  track.addEventListener("mouseenter", () => clearInterval(auto));
  track.addEventListener("mouseleave", () => {
    auto = setInterval(() => nextBtn.click(), 4500);
  });

  window.addEventListener("resize", updateSlider);
});
