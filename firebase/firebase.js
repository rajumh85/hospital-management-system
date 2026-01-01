import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCix2LJGtOHoqGefym3gbEcijOYxRPr2tc",
  authDomain: "hospital-management-c7f9e.firebaseapp.com",
  projectId: "hospital-management-c7f9e",
  storageBucket: "hospital-management-c7f9e.appspot.com",
  messagingSenderId: "110644104032",
  appId: "1:110644104032:web:9900751fc9f1c04d6d2c05"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
