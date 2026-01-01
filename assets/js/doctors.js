import { db } from "./firebase.js";
import {
  collection,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const container = document.getElementById("doctorList");

onSnapshot(collection(db, "doctors"), (snapshot) => {
  container.innerHTML = "";

  snapshot.forEach(doc => {
    const d = doc.data();

    container.innerHTML += `
      <div class="card">
        <h3>${d.name}</h3>
        <p><b>Specialization:</b> ${d.specialization}</p>
        <p><b>Contact:</b> ${d.phone}</p>
        <span class="status ${d.status === "Available" ? "ok" : "busy"}">
          ${d.status}
        </span>
      </div>
    `;
  });

  if (snapshot.empty) {
    container.innerHTML = "<p>No doctors available</p>";
  }
});
