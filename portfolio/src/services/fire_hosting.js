// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVcYx52j_EfSEAocB2ArD7uo2ov4HPbns",
  authDomain: "portfolio-98d48.firebaseapp.com",
  projectId: "portfolio-98d48",
  storageBucket: "portfolio-98d48.appspot.com",
  messagingSenderId: "780471080052",
  appId: "1:780471080052:web:cd68d7a0b31cb0b29bad21",
  measurementId: "G-MF82M9FQFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);