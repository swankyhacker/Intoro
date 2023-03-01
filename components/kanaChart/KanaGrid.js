import { Dimensions, StyleSheet, View } from "react-native"
import KanaItem from "./KanaItem"

const { width } = Dimensions.get("screen")

export default function KanaGrid({ kana }) {
  return (
    <View style={styles.gridContainer}>
      {kana.map((element, index) => (
        <KanaItem element={element} key={index} />
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
