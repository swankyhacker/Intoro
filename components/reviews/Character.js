import { StyleSheet, Text, View } from "react-native"

import Colors from "@types/colors"
import Kana from "@types/types"

export default function Character({ kana }) {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor:
          kana.type === Kana.HIRAGANA
            ? Colors.HIRAGANA_CARD
            : Colors.KATAKANA_CARD,
      }}
    >
      <Text
        style={{
          ...styles.character,
          color:
            kana.type === Kana.HIRAGANA
              ? Colors.HIRAGANA_CHARACTER
              : Colors.KATAKANA_CHARACTER,
        }}
      >
        {kana.character}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  character: {
    fontSize: 200,
    fontWeight: "500",
  },
})
