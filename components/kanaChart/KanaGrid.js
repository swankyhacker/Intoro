import { useContext } from "react"
import { Dimensions, StyleSheet, View } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { ReferenceContext } from "@context/ReferenceContext"
import KanaItem from "./KanaItem"

const { width } = Dimensions.get("screen")

export default function KanaGrid({
  kana,
  showReading = true,
  showProgress = false,
  showUnlocked = false,
}) {
  const navigation = useNavigation()
  const { setReference } = useContext(ReferenceContext)

  const onPressed = (kana) => {
    setReference(kana)
    navigation.navigate("Reference")
  }

  return (
    <View style={styles.gridContainer}>
      {kana.map((element, index) => (
        <KanaItem
          element={element}
          key={index}
          showProgress={showProgress}
          showReading={showReading}
          showUnlocked={showUnlocked}
          disabled={false}
          onPressed={() => onPressed(element)}
        />
      ))}
    </View>
  )
}

const chartContainerWidth = width - 50
const styles = StyleSheet.create({
  gridContainer: {
    marginLeft: -8,
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    width: chartContainerWidth,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
})
