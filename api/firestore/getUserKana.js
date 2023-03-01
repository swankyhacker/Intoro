import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import { db } from "../firebase.js"

import { UserKana } from "@types/userKana.js"
import { getCurrentUser } from "../auth.js"
import getCurrentLevel from "./getCurrentLevel.js"

// Returns all kana of a type for one level
export default async (type) => {
  const { uid: currentUser } = getCurrentUser()
  const userLevel = await getCurrentLevel(currentUser)
  // Get all kana of a type from a particular level
  const queryLevel = query(
    collection(db, type),
    where("level", "==", userLevel),
    orderBy("serial", "asc")
  )

  const kanaRefs = []
  // Store the refs of kana so that they can be fetched from the user table
  const levelKanaSnapshot = await getDocs(queryLevel)
  levelKanaSnapshot.forEach((doc) => {
    kanaRefs.push(doc.ref)
  })
  // TODO: Add checks to ensure that only 10 entries are fetched in a query
  // get user's data progress of kana
  const userKana = query(
    collection(db, `users/${currentUser}/kana`),
    where("kana_id", "in", kanaRefs)
  )

  const userKanaRefs = {}
  const userKanaSnapshot = await getDocs(userKana)
  userKanaSnapshot.forEach((doc) => {
    const data = doc.data()
    userKanaRefs[data.kana_id.id] = data
  })

  const kana = []
  levelKanaSnapshot.forEach((doc) => {
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
