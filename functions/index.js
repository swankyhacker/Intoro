import functions from "firebase-functions"
import admin from "firebase-admin"

import { KANA } from "../types/types.js"

admin.initializeApp()

// Set user profile when a user is created
export const createUserProfile = functions.auth
  .user()
  .onCreate(async (user) => {
    try {
      await admin
        .firestore()
        .doc(`users/${user.uid}`)
        .create({ nickname: "", level: 1, phase: 1 })
      console.log(`Profile for user ${user.uid} created successfully!!`)
    } catch (err) {
      console.log(err)
    }
  })

// Shift kana to user's account whenever level is updated
export const shiftKana = functions.firestore
  .document("users/{userId}")
  .onWrite(async (change, context) => {
    try {
      if (!change.after.exists) return

      const { level, phase } = await change.after.data()
      const { userId } = context.params

      await admin.firestore().runTransaction(async (transaction) => {
        const queryHiragana = admin
          .firestore()
          .collection(KANA.HIRAGANA)
          .where("level", "==", level)
          .orderBy("serial", "asc")
        const queryKatakana = admin
          .firestore()
          .collection(KANA.KATAKANA)
          .where("level", "==", level)
          .orderBy("serial", "asc")
        const snapshotHiragana = await transaction.get(queryHiragana)
        const snapshotKatakana = await transaction.get(queryKatakana)

        let h_startIndex, h_endIndex, k_startIndex, k_endIndex
        if (phase === 1) {
          h_startIndex = 0
          k_startIndex = 0
          h_endIndex = Math.floor(snapshotHiragana.size / 2) - 1
          k_endIndex = Math.floor(snapshotKatakana.size / 2) - 1
        } else {
          h_startIndex = Math.floor(snapshotHiragana.size / 2)
          k_startIndex = Math.floor(snapshotKatakana.size / 2)
          h_endIndex = snapshotHiragana.size - 1
          k_endIndex = snapshotKatakana.size - 1
        }

        const newKanaTemplate = {
          tier: "apprentice",
          highest_tier: "apprentice",
          review_time: null,
          progress: 0,
          user_mnemonic: "",
        }
        const kanaDestination = `users/${userId}/kana`

        for (let h_index = h_startIndex; h_index <= h_endIndex; h_index++) {
          transaction.set(admin.firestore().collection(kanaDestination).doc(), {
            ...newKanaTemplate,
            type: KANA.HIRAGANA,
            kana_id: admin
              .firestore()
              .collection(KANA.HIRAGANA)
              .doc(snapshotHiragana.docs[h_index].id),
          })
        }
        for (let k_index = k_startIndex; k_index <= k_endIndex; k_index++) {
          transaction.set(admin.firestore().collection(kanaDestination).doc(), {
            ...newKanaTemplate,
            type: KANA.KATAKANA,
            kana_id: admin
              .firestore()
              .collection(KANA.KATAKANA)
              .doc(snapshotKatakana.docs[k_index].id),
          })
        }
        console.log(
          `Kana for level ${level}, phase ${phase} have been added for user ${userId}`
        )
      })
    } catch (err) {
      console.log(err)
    }
  })
