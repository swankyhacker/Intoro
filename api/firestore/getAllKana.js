import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { db } from "../firebase.js"

import getUserKana from "./getUserKana.js"

// Returns a particular type of kana for all levels
export default async (type) => {
  const kanaByLevel = {}
  const q = query(collection(db, type), orderBy("serial", "asc"))
  const querySnapshot = await getDocs(q)
  const unlockedKana = await getUserKana(querySnapshot, type)
  unlockedKana.forEach((kana) => {
    if (!kanaByLevel[kana.level]) {
      kanaByLevel[kana.level] = [kana]
    } else {
      kanaByLevel[kana.level].push(kana)
    }
  })
  return kanaByLevel
}
