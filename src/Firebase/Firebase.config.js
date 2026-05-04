// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtjmEoJalVEKrdbfhPHec4DzywLBdJJdI",
  authDomain: "b13-a08-d9d0b.firebaseapp.com",
  projectId: "b13-a08-d9d0b",
  storageBucket: "b13-a08-d9d0b.firebasestorage.app",
  messagingSenderId: "200059872674",
  appId: "1:200059872674:web:e9517e0afb10007a97befb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
