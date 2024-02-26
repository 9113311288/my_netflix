import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDgGYQzP6ZqF23weQ629dlhe0eZ3he5oVU",
  authDomain: "netflix-clone-56073.firebaseapp.com",
  projectId: "netflix-clone-56073",
  storageBucket: "netflix-clone-56073.appspot.com",
  messagingSenderId: "1025686520592",
  appId: "1:1025686520592:web:3d83605c984e23ad03db95",
  measurementId: "G-B5MHHK842S"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
