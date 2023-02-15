// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import * as dotenv from "dotenv"

dotenv.config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, connectFirestoreEmulator } from "firebase/firestore"
import { getFunctions, connectFunctionsEmulator } from "firebase/functions"
import { getAuth, connectAuthEmulator } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "intoro-1ba81.firebaseapp.com",
  projectId: "intoro-1ba81",
  storageBucket: "intoro-1ba81.appspot.com",
  messagingSenderId: "79564034518",
  appId: "1:79564034518:web:d756a1b60ac8e11fda1477",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Cloud Firestore
const db = getFirestore(app)
// Initialize Cloud Functions
const functions = getFunctions(app)
// Initialize Firebase Auth
const auth = getAuth(app)

// For development environments, use emulators
if (process.env.APP_ENV === "development") {
  const host = process.env.DEV_OS === "android" ? "10.0.2.2" : "localhost"
  connectFirestoreEmulator(db, "localhost", 8080)
  connectFunctionsEmulator(functions, "localhost", 5001)
  connectAuthEmulator(auth, `http://${host}:9099`)
}

export { auth, db, functions }
