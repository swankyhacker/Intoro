import { useState, useRef, useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"

import { IntoroWrapper } from "@components/common"
import { KanaGrid } from "@components/kanaChart"
import LearningPadButton from "@components/learningPad/LearningPadButton"

import { LessonsContext } from "@context/LessonsContext"

import { getKanaByLevel, getLessons, getReviews } from "@api/firestore"
import Kana from "@types/types"

export default function LearningPad() {
  const currentHiragana = useRef({})
  const currentKatakana = useRef({})
  const [_, setRender] = useState()

  const getKana = async () => {
    try {
      const { lvlHiragana, lvlKatakana } = await getKanaByLevel()
      currentHiragana.current = lvlHiragana
      currentKatakana.current = lvlKatakana
      setRender(true)
    } catch (err) {
      console.log("Error while fetching level kana:", err)
    }
  }

  useEffect(() => {
    getKana()
  }, [])

  return (
    <IntoroWrapper>
      <View style={styles.buttonWrapper}>
        <LearningPadButton
          text={"Lesson"}
          fetchData={getLessons}
          context={LessonsContext}
          nextPage={"Lessons"}
        />
        {/* <LearningPadButton text={"Review"} fetchData={getReviews} /> */}
      </View>
      <View>
        <Text style={styles.title}>{Kana.HIRAGANA}</Text>
        {currentHiragana.current.length > 0 ? (
          <KanaGrid kana={currentHiragana.current} showProgress={true} />
        ) : (
          <></>
        )}
        <Text style={styles.title}>{Kana.KATAKANA}</Text>
        {currentKatakana.current.length > 0 ? (
          <KanaGrid kana={currentKatakana.current} showProgress={true} />
        ) : (
          <></>
        )}
      </View>
    </IntoroWrapper>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    textTransform: "capitalize",
  },
})
