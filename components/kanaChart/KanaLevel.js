import { StyleSheet, Text, View } from "react-native"
import KanaGrid from "./KanaGrid"

export default function KanaLevel({ navigation, type, kana, level }) {
  return (
    <View>
      <View style={style.levelContainer}>
        <Text>{`Level ${level}`}</Text>
      </View>
      <KanaGrid navigation={navigation} kana={kana} type={type} />
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
