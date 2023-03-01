import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase.js"

export default async (uid) => {
  const docRef = doc(db, "users", uid)
  const userSnap = await getDoc(docRef)
  if (userSnap.exists()) {
    return userSnap.data().level
  }
  return null
}
