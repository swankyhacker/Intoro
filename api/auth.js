import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import { auth } from "./firebase"

export const createUserWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

export const signInWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const getCurrentUser = () => {
  return auth.currentUser
}

export const signOutUser = () => {
  return signOut(auth)
}
