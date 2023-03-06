import { StyleSheet, Text, View } from "react-native"
import KanaGrid from "./KanaGrid"

export default function KanaLevel({ type, kana, level }) {
  return (
    <View>
      <View style={style.levelContainer}>
        <Text>{`Level ${level}`}</Text>
      </View>
      <KanaGrid
        kana={kana}
        type={type}
        showUnlocked={true}
        showProgress={false}
      />
    </View>
  )
}

const style = StyleSheet.create({
  levelContainer: {
    marginLeft: "auto",
    backgroundColor: "#F4D23C",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
})
