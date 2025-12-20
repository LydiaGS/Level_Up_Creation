import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { auth, db } from "./firebase.js";

onAuthStateChanged(auth, async user => {
  if (!user) location.href = "index.html";

  const snap = await getDoc(doc(db, "users", user.uid));
  if (snap.data().role !== "admin") {
    alert("⛔ Accès admin uniquement");
    location.href = "index.html";
  }
});

