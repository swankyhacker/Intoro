import { StyleSheet, Text, View } from "react-native"

import Section from "./Section"

import KanaType from "@types/types"
import Colors from "@types/colors"

export default function Leaflet({ kana }) {
  return (
    <View style={styles.outerContainer}>
      <View
        style={{
          ...styles.innerContainer,
          backgroundColor:
            kana.type === KanaType.HIRAGANA
              ? Colors.HIRAGANA_CARD
              : Colors.KATAKANA_CARD,
        }}
      >
        <View style={styles.charContainer}>
          <Text
            style={{
              ...styles.character,
              color:
                kana.type === KanaType.HIRAGANA
                  ? Colors.HIRAGANA_CHARACTER
                  : Colors.KATAKANA_CHARACTER,
            }}
          >
            {kana.character}
          </Text>
          <Text style={styles.reading}>{kana.reading}</Text>
        </View>
        <Section
          title="Pronunciation"
          subtitle={kana.extraNote}
          style={{ flex: 1 }}
        />
        <Section
          title="Mnemonics"
          subtitle={kana.mnemonic}
          style={{ flex: 2 }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 10,
  },
  innerContainer: {
    paddingHorizontal: 20,
    flex: 1,
    alignItems: "center",
    borderRadius: 15,
  },
  charContainer: {
    alignItems: "center",
    paddingBottom: 10,
  },
  character: {
    fontSize: 120,
    fontWeight: "500",
  },
  reading: {
    fontSize: 24,
    fontWeight: "500",
  },
})
