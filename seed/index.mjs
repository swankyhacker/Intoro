import { writeBatch, doc, collection } from "firebase/firestore"
import { db } from "./firebase.mjs"

import h1 from "./hiragana/level-1.json" assert { type: "json" }
import h2 from "./hiragana/level-2.json" assert { type: "json" }
import k1 from "./katakana/level-1.json" assert { type: "json" }
import k2 from "./katakana/level-2.json" assert { type: "json" }

const hiragana = [...h1, ...h2]
const katakana = [...k1, ...k2]

function batchCreate(data, collectionName, prevBatch = null) {
  try {
    const batch = prevBatch ?? writeBatch(db)
    data.forEach((item) => {
      const ref = doc(collection(db, `${collectionName}`))
      batch.set(ref, item)
    })
    return batch
  } catch (err) {
    console.log(err)
  }
}

async function seed(args) {
  try {
    let batch = writeBatch(db)
    if (args && args === "hiragana") {
      batch = batchCreate(hiragana, "hiragana", batch)
    } else if (args && args === "katakana") {
      batch = batchCreate(katakana, "katakana", batch)
    } else {
      batch = batchCreate(hiragana, "hiragana", batch)
      batch = batchCreate(katakana, "katakana", batch)
    }
    await batch.commit()
  } catch (err) {}
}

seed(process.argv[2])
