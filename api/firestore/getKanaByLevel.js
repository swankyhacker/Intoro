import { collection, getDocs, query, where, orderBy } from "firebase/firestore"

import { db } from "../firebase.js"
import { getCurrentUser } from "../auth.js"
import getUserKana from "./getUserKana"
import getCurrentLevel from "./getCurrentLevel"
import KanaType from "@types/types.js"

// Returns all kana for one level
export default async () => {
  try {
    const { uid: currentUser } = getCurrentUser()

    const userLevel = await getCurrentLevel(currentUser)
    // Get all kana of a type from a particular level
    const q1 = query(
      collection(db, KanaType.HIRAGANA),
      where("level", "==", userLevel),
      orderBy("serial", "asc")
    )
    const q2 = query(
      collection(db, KanaType.KATAKANA),
      where("level", "==", userLevel),
      orderBy("serial", "asc")
    )

    // Store the refs of kana so that they can be fetched from the user table
    const lvlHiraganaSnapshot = await getDocs(q1)
    const lvlKatakanaSnapshot = await getDocs(q2)
    const lvlHiragana = await getUserKana(
      lvlHiraganaSnapshot,
      KanaType.HIRAGANA
    )
    const lvlKatakana = await getUserKana(
      lvlKatakanaSnapshot,
      KanaType.KATAKANA
    )
    return { lvlHiragana, lvlKatakana }
  } catch (err) {
    console.log(err)
  }
}
