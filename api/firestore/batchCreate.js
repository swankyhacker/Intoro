import { writeBatch } from "firebase/firestore"
import { db } from "../firebase.js"

export default (data, collection, doc = null, prevBatch = null) => {
  const batch = prevBatch ?? writeBatch(db)
  data.forEach((item) => {
    const ref = doc
      ? db.collection(`${collection}`).doc(`${doc}`)
      : db.collection(`${collection}`).doc()
    batch.set(ref, item)
  })
  return batch
}
