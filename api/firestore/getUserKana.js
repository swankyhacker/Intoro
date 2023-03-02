import { collection, getDocs, query, where } from "firebase/firestore"

import { db } from "../firebase.js"
import { getCurrentUser } from "@api/auth.js"
import { UserKana } from "@types/userKana.js"

// Get user's version of a kana passed in a snapshot
export default async (snapshot, type) => {
  const { uid: currentUser } = getCurrentUser()

  const kanaRefs = []
  snapshot.forEach((doc) => {
    kanaRefs.push(doc.ref)
  })

  const userKanaRefs = {}
  const kana = []

  for (let i = 0; i < kanaRefs.length; i += 10) {
    // get user's data progress of kana
    const userKana = query(
      collection(db, `users/${currentUser}/kana`),
      where("kana_id", "in", kanaRefs.slice(i, i + 10))
    )
    const userKanaSnapshot = await getDocs(userKana)
    userKanaSnapshot.forEach((doc) => {
      const data = doc.data()
      userKanaRefs[data.kana_id.id] = data
    })
  }

  snapshot.forEach((doc) => {
    if (userKanaRefs[doc.ref.id]) {
      kana.push(
        new UserKana(
          {
            ...userKanaRefs[doc.id],
            ...doc.data(),
          },
          type,
          true
        )
      )
    } else {
      kana.push(new UserKana(doc.data(), type, false))
    }
  })
  return kana
}
