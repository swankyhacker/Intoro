import { StyleSheet, Text, View } from "react-native"

import LessonText from "./LessonText"

export default function Section({ title, subtitle, style }) {
  return (
    <View style={{ ...styles.section, ...style }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{<LessonText text={subtitle} />}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    alignItems: "center",
    flex: 1,
    marginVertical: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
  },
})
