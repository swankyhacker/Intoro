import KanaType from "@types/types.js"
import getUserKana from "./getUserKana"

// Returns all kana for one level
export default async () => {
  try {
    const lvlHiragana = await getUserKana(KanaType.HIRAGANA)
    const lvlKatakana = await getUserKana(KanaType.KATAKANA)
    return { lvlHiragana, lvlKatakana }
  } catch (err) {
    console.log(err)
  }
}
