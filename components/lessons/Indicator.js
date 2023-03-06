import { View, StyleSheet } from "react-native"

import { KanaItem } from "@components/kanaChart"

export default function Indicator({ lessons, selectedIndex, scrollToLesson }) {
  return (
    <View style={styles.container}>
      {lessons.map((element, index) => {
        return (
          <KanaItem
            key={index}
            element={element}
            showReading={false}
            boxStyle={
              index === selectedIndex
                ? styles.selectedBoxStyle
                : styles.boxStyle
            }
            characterStyle={
              index === selectedIndex
                ? styles.selectedCharacterStyle
                : styles.characterStyle
            }
            onPressed={() => scrollToLesson(index)}
            disabled={false}
          />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
  },
  boxStyle: {
    height: 40,
    margin: 0,
    padding: 0,
    minWidth: 0,
    maxWidth: 80,
    width: 40,
  },
  characterStyle: {
    fontSize: 18,
  },
  selectedBoxStyle: {
    margin: 0,
    padding: 0,
    minWidth: 0,
    maxWidth: 80,
    width: 50,
    height: 50,
  },
  selectedCharacterStyle: {
    fontSize: 24,
  },
})
