import { onAuthStateChanged } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { doc, getDoc } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { auth, db } from "./firebase.js";

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.replace("index.html");
    return;
  }

  try {
    const snap = await getDoc(doc(db, "users", user.uid));

    if (!snap.exists()) {
      console.error("Profil utilisateur introuvable");
      window.location.replace("index.html");
      return;
    }

    const data = snap.data();

    if (!data.formations || data.formations.html_css !== true) {
      alert("⛔ Formation non achetée");
      window.location.replace("formations.html");
    }

  } catch (err) {
    console.error("Erreur protection formation :", err);
    window.location.replace("index.html");
  }
});



