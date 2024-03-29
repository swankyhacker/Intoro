import { useFocusEffect } from "@react-navigation/native"
import { useCallback, useState } from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"

import { IntoroWrapper } from "@components/common"
import { KanaGrid } from "@components/kanaChart"
import LearningPadButton from "@components/learningPad/LearningPadButton"

import { LessonsContext } from "@context/LessonsContext"
import { ReviewsContext } from "@context/ReviewsContext"

import { getKanaByLevel, getLessons, getReviews } from "@api/firestore"
import Kana from "@types/types"

export default function LearningPad({ navigation }) {
  const [currentKana, setCurrentKana] = useState({
    hiragana: [],
    katakana: [],
  })

  const getKana = async () => {
    try {
      const { lvlHiragana, lvlKatakana } = await getKanaByLevel()
      // TODO: Remove setTimeout after demo
      if (lvlHiragana.length > 0) {
        setCurrentKana({
          hiragana: lvlHiragana,
          katakana: lvlKatakana,
        })
      } else {
        setTimeout(getKana, 2000)
      }
    } catch (err) {
      console.log("Error while fetching level kana:", err)
    }
  }

  const navigateToScreen = (screen) => {
    navigation.navigate(screen, { prevScreen: "LearningPad" })
  }

  useFocusEffect(
    useCallback(() => {
      getKana()
    }, [])
  )

  return (
    <IntoroWrapper>
      <ScrollView>
        {currentKana.hiragana.length > 0 ? (
          <>
            <View style={styles.buttonWrapper}>
              <LearningPadButton
                text={"Lesson"}
                fetchData={getLessons}
                context={LessonsContext}
                onPress={() => navigateToScreen("Lessons")}
              />
              <LearningPadButton
                text={"Review"}
                fetchData={getReviews}
                context={ReviewsContext}
                nextPage={"Reviews"}
                onPress={() => navigateToScreen("Reviews")}
              />
            </View>
            <Text style={styles.title}>{Kana.HIRAGANA}</Text>
            {currentKana.hiragana.length > 0 ? (
              <KanaGrid
                kana={currentKana.hiragana}
                showProgress={true}
                showReading={false}
              />
            ) : (
              <></>
            )}
            <Text style={styles.title}>{Kana.KATAKANA}</Text>
            {currentKana.katakana.length > 0 ? (
              <KanaGrid
                kana={currentKana.katakana}
                showProgress={true}
                showReading={false}
              />
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}
      </ScrollView>
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
