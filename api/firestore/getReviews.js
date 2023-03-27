import { collection, getDocs, query, where } from "firebase/firestore"
import { add, getUnixTime, startOfHour } from "date-fns"

import { db } from "../firebase.js"
import { getCurrentUser } from "../auth.js"

// Returns all reviews for a user
export default async () => {
  const { uid: currentUser } = getCurrentUser()
  const q1 = query(
    collection(db, `users/${currentUser}/kana`),
    where("review_time", "<=", getUnixTime(Date.now()))
  )
  const reviewSnapshot = await getDocs(q1)
  return reviewSnapshot
}
