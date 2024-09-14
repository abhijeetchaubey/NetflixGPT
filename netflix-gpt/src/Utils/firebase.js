// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9xOJXI2E7kTsI3n1ZITy_qK28n5fZXBw",
  authDomain: "netflixgpt-476cb.firebaseapp.com",
  projectId: "netflixgpt-476cb",
  storageBucket: "netflixgpt-476cb.appspot.com",
  messagingSenderId: "531981183377",
  appId: "1:531981183377:web:3b2048bdf474f845b2d230",
  measurementId: "G-L2XYSLLTZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
