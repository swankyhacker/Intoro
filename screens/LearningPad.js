import { StyleSheet, Text, View } from "react-native"

import { IntoroWrapper } from "@components/common"
import KanaGrid from "@components/kanaChart/KanaGrid"
import LearningPadButton from "@components/learningPad/LearningPadButton"

export default function LearningPad() {
  return (
    <IntoroWrapper>
      <View style={styles.buttonWrapper}>
        <LearningPadButton text={"Lesson"} number={0} />
        <LearningPadButton text={"Review"} number={0} />
      </View>
      <View>
        <Text style={styles.title}>Hiragana</Text>
        <KanaGrid kana={"Hiragana"} />
        <Text style={styles.title}>Katakana</Text>
        <KanaGrid kana={"Katakana"} />
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
  },
})
