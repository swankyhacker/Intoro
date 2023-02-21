import { StyleSheet, Text, View, Image, Dimensions } from "react-native"
import { useState } from "react"
import intoroLogo from "@assets/logo/IntoroLogo.png"
import IntoroButton from "@components/common/IntoroButton"
import KanaLevel from "@components/kanaChart/KanaLevel"
import KanaChartBody from "@components/kanaChart/KanaChartBody"

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

      {/* TODO: Add NavBar */}
    </View>
  )
}

export default KanaChart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  logo: {
    flex: 1,
  },
  bodyContainer: {
    flex: 5,
  },
  chartContainer: {
    flex: 5,
    marginTop: 30,
  },
})
