// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { FIREBASE_API_KEY } from "@env"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "intoro-1ba81.firebaseapp.com",
  projectId: "intoro-1ba81",
  storageBucket: "intoro-1ba81.appspot.com",
  messagingSenderId: "79564034518",
  appId: "1:79564034518:web:d756a1b60ac8e11fda1477",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
