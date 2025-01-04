// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Import the database function

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMD_kTMiEGXqHOBuLdJ3lc0Ks6EQO9ix0",
  authDomain: "portfoliocontact-94d3a.firebaseapp.com",
  projectId: "portfoliocontact-94d3a",
  storageBucket: "portfoliocontact-94d3a.appspot.com",
  messagingSenderId: "559394957426",
  appId: "1:559394957426:web:6ba77a554daf483b827aeb",
  measurementId: "G-16N0HYP1LX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Initialize database

export { database };
