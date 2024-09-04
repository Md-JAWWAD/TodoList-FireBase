// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIk3GkQOCmo7aX1R6FfTHoZibbXRxAeKU",
  authDomain: "jawadauthdocmethods.firebaseapp.com",
  projectId: "jawadauthdocmethods",
  storageBucket: "jawadauthdocmethods.appspot.com",
  messagingSenderId: "946813762644",
  appId: "1:946813762644:web:39501dcf90102e166041c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const db = getFirestore(app)

export {auth, db}