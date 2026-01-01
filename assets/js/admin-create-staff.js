console.log("ADMIN CREATE STAFF JS LOADED");

import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { setDoc, doc } 
from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const form = document.getElementById("createStaffForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    // 1️⃣ CREATE AUTH USER (THIS ENABLES LOGIN)
    const userCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const uid = userCred.user.uid;

    // 2️⃣ SAVE ROLE IN FIRESTORE
    await setDoc(doc(db, "users", uid), {
      email: email,
      role: "staff",
      createdAt: new Date()
    });

    msg.innerText = "✅ Staff account created successfully";
    msg.style.color = "green";
    form.reset();

  } catch (error) {
    msg.innerText = error.message;
    msg.style.color = "red";
  }
});
