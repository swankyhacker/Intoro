import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "firebase/firestore"

import { UserKana } from "@types/userKana.js"
import { db } from "../firebase.js"

import KanaType from "@types/types.js"

// Get kana information from a user's version
export default async (snapshot) => {
  const hiraganaRefs = []
  const katakanaRefs = []
  const userKanaInfo = {}

  snapshot.forEach((doc) => {
    const data = doc.data()
    const ref = data.kana_id.id
    if (data.type === KanaType.HIRAGANA) {
      hiraganaRefs.push(ref)
    } else {
      katakanaRefs.push(ref)
    }
    userKanaInfo[ref] = { ...data, docId: doc.id }
  })

  const kana = []
  const hiraganaSnapshot = await getInfo(hiraganaRefs, KanaType.HIRAGANA)
  const katakanaSnapshot = await getInfo(katakanaRefs, KanaType.KATAKANA)

  if (hiraganaSnapshot) {
    hiraganaSnapshot.forEach((doc) => {
      const data = doc.data()
      kana.push(
        new UserKana(
          { ...userKanaInfo[doc.id], ...data },
          KanaType.HIRAGANA,
          true
        )
      )
    })
  }

  if (katakanaSnapshot) {
    katakanaSnapshot.forEach((doc) => {
      const data = doc.data()
      kana.push(
        new UserKana(
          { ...userKanaInfo[doc.id], ...data },
          KanaType.KATAKANA,
          true
        )
      )
    })
  }

  return kana
}

async function getInfo(refs, type) {
  for (let i = 0; i < refs.length; i += 10) {
    // get user's data progress of kana
    const userKana = query(
      collection(db, `${type}`),
      where(documentId(), "in", refs.slice(i, i + 10))
    )
    const userKanaSnapshot = await getDocs(userKana)
    return userKanaSnapshot
  }
}
