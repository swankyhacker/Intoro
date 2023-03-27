import {
  collection,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore"
import { db } from "../firebase.mjs"

// Resets the progress and review times of all reviews
async function resetLevelReviews() {
  const currentUser = process.argv[2]
  if (!currentUser) {
    console.log(" \n Enter UID to remove reviews from... \n")
    return
  }
  const q1 = query(
    collection(db, `users/${currentUser}/kana`),
    where("progress", ">=", 0)
  )

  const reviewSnapshot = await getDocs(q1)
  const batch = writeBatch(db)

  reviewSnapshot.forEach((doc) => {
    batch.set(doc.ref, { ...doc.data(), progress: 0, review_time: null })
  })

  await batch.commit()
  console.log("\n Reset all reviews!! \n")
  process.exit(0)
}

resetLevelReviews()
