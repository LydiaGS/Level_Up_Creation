import { auth, db } from "./firebase.js";
import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {

  const reserveBtns = document.querySelectorAll(".reserve-btn");
  const cartInfo = document.getElementById("cart-info");
  const payBtn = document.getElementById("payBtn");
  const dateSelect = document.getElementById("dateSelect");

  const modal = document.getElementById("paymentModal");
  const closePayment = document.getElementById("closePayment");

  let selectedFormation = null;

  reserveBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".formation-card");

      selectedFormation = {
        title: card.dataset.title,
        price: card.dataset.price
      };

      cartInfo.textContent =
        `${selectedFormation.title} – ${selectedFormation.price} €`;

      if (dateSelect.value) payBtn.disabled = false;
    });
  });

  dateSelect?.addEventListener("change", () => {
    if (selectedFormation) payBtn.disabled = false;
  });

  payBtn?.addEventListener("click", async () => {
    modal.classList.add("active");

    const user = auth.currentUser;
    if (!user) return;

    await updateDoc(doc(db, "users", user.uid), {
      paid: true,
      "formations.html_css": true
    });

    alert("✅ Accès activé");
  });

  closePayment?.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal?.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("active");
  });

});

