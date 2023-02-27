import { StyleSheet, Text, View } from "react-native"
import KanaGrid from "@components/kanaChart/KanaGrid"

const KanaLevel = ({ kana, level }) => {
  return (
    <View>
      <View style={style.levelContainer}>
        <Text>{`Level ${level}`}</Text>
      </View>
      <KanaGrid kana={kana} />
    </View>
  )
}

export default KanaLevel

const style = StyleSheet.create({
  levelContainer: {
    marginLeft: "auto",
    backgroundColor: "#F4D23C",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
})
