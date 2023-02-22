import { StyleSheet, View, Image, Dimensions } from "react-native"
import { useState } from "react"
import intoroLogo from "@assets/logo/IntoroLogo.png"
import KanaChartBody from "@components/kanaChart/KanaChartBody"

const { width, height } = Dimensions.get("screen")

const KanaChart = ({ navigation }) => {
  const [kana, setKana] = useState("Hiragana")

  const handleSwitch = () => {
    if (kana === "Hiragana") {
      setKana("Katakana")
    } else {
      setKana("Hiragana")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={intoroLogo}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        />
      </View>

      {/* Body contains title, Level Chart, and Switch Button underneath */}
      <View style={styles.bodyContainer}>
        <KanaChartBody kana={kana} handleSwitch={handleSwitch} />
      </View>
    </View>
  )
}

export default KanaChart

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
    flex: 4,
  },
})
