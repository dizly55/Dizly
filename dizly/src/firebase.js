// firebase.js

// Firebase Core + Services
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider 
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDNvndti8UazGGvKMamRwBUoK2WBKJDj1k",
  authDomain: "dizly-298af.firebaseapp.com",
  projectId: "dizly-298af",
  storageBucket: "dizly-298af.appspot.com",
  messagingSenderId: "493130723955",
  appId: "1:493130723955:web:6e490b61473e3355ae3006",
  measurementId: "G-9KTGRJTX6X"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Firebase Services
const auth = getAuth(app);

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

// Firestore + Storage
const db = getFirestore(app);
const storage = getStorage(app);

// Exports
export { app, auth, googleProvider, db, storage };
