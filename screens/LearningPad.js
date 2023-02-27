import { Image, StyleSheet, Text, View } from "react-native"

import intoroLogo from "@assets/logo/IntoroLogo.png"
import KanaGrid from "@components/kanaChart/KanaGrid"
import LearningPadButton from "@components/learningPad/LearningPadButton"

const LearningPad = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={intoroLogo}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        />
      </View>
      <View style={styles.bodyContainer}>
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
      </View>
    </View>
  )
}

export default LearningPad

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
  },
  logo: {
    flex: 1,
  },
  bodyContainer: {
    flex: 5,
  },
  buttonWrapper: {
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
})
