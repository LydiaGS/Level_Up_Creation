import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { auth, db } from "./firebase.js";

document.addEventListener("DOMContentLoaded", () => {

  onAuthStateChanged(auth, async user => {
    if (!user) {
      location.href = "index.html";
      return;
    }

    const snap = await getDoc(doc(db, "users", user.uid));
    const data = snap.data();

    userName.textContent = data.prenom;
    userEmail.textContent = data.email;
  });

});


