import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { db } from "../firebase.js"

import { Kana } from "@types/kana.js"

// Returns a particular type of kana for all levels
export default async (type) => {
  const kanaByLevel = {}
  const q = query(collection(db, type), orderBy("serial", "asc"))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    const { level } = doc.data()
    if (!kanaByLevel[level]) {
      kanaByLevel[level] = [new Kana(doc.data(), type)]
    } else {
      kanaByLevel[level].push(new Kana(doc.data(), type))
    }
  })
  return kanaByLevel
}
