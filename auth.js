// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf_jRAqo6l8ycv3YpHylDFdT03V9hgV8Q",
  authDomain: "rushikaze-r2o5.firebaseapp.com",
  projectId: "rushikaze-r2o5",
  storageBucket: "rushikaze-r2o5.firebasestorage.app",
  messagingSenderId: "674729217637",
  appId: "1:674729217637:web:8a1553dd6f3ad352f3008c",
  measurementId: "G-83XKK9PS9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
