import { setDoc, doc } from "firebase/firestore"

import { getCurrentUser } from "../auth.js"
import { db } from "../firebase.js"

// Updates user's kana after review
export default async (kana) => {
  const { uid: currentUser } = getCurrentUser()
  const ref = doc(db, `users/${currentUser}/kana`, kana.docId)
  kana.updateReviewStatus()
  setDoc(ref, kana.metadata, { merge: true })
}
