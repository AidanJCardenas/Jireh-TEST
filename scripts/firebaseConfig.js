// firebaseConfig.js

// Import Firebase if using modules (skip if using CDN)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration object from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDZNNdeEt2ifdHaj7UF3_idH_WhYjWKRuw",
  authDomain: "jireh-fc-website.firebaseapp.com",
  projectId: "jireh-fc-website",
  storageBucket: "jireh-fc-website.appspot.com",
  messagingSenderId: "456425159457",
  appId: "1:456425159457:web:799c60532953e463ad1c60",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firestore and export for other scripts
const db = firebase.firestore();
export { db };
