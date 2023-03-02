import { collection, getDocs, query, where } from "firebase/firestore"

import { getCurrentUser } from "../auth.js"
import { db } from "../firebase.js"

// Returns all lessons for a user
export default async () => {
  const { uid: currentUser } = getCurrentUser()
  const q1 = query(
    collection(db, `users/${currentUser}/kana`),
    where("review_time", "==", null),
    where("progress", "==", 0)
  )
  const lessonSnapshot = await getDocs(q1)
  return lessonSnapshot
}
