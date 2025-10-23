// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4DNXyIn0CvubaPLs9ajMu313h85qQd0o",
  authDomain: "assignment-9-9cb6f.firebaseapp.com",
  projectId: "assignment-9-9cb6f",
  storageBucket: "assignment-9-9cb6f.firebasestorage.app",
  messagingSenderId: "1023657391499",
  appId: "1:1023657391499:web:a052a94ce2550875deab8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);