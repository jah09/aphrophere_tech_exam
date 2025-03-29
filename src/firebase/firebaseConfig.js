// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  query,
  where,
  updateDoc,
  doc,
  getDoc,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo_GLFn6MifsvtGYvaGI_clTHE5vq0PE4",
  authDomain: "beauty-app-4d173.firebaseapp.com",
  projectId: "beauty-app-4d173",
  storageBucket: "beauty-app-4d173.firebasestorage.app",
  messagingSenderId: "689888940752",
  appId: "1:689888940752:web:09342d0ef4f3b30c3644d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {
  db,
  collection,
  addDoc,
  getDocs,
  getDoc,
  serverTimestamp,
  query,
  where,
  updateDoc,
  doc,
  onSnapshot,
  QuerySnapshot,
};
