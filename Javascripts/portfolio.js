document.addEventListener("DOMContentLoaded", () => {
  const openImage = document.getElementById("openImage");
  const modal = document.getElementById("imageModal");
  const closeModal = document.getElementById("closeModal");

  // Si un élément n'existe pas, on arrête
  if (!openImage || !modal || !closeModal) return;

  // Ouvrir la modale
  openImage.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Fermer la modale via le X
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Fermer la modale si clic en dehors
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});


