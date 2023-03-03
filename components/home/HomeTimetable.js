import { StyleSheet, Text, View } from "react-native"

const HomeTimetable = () => {
  return (
    <View style={styles.homeTimetableContainer}>
      <Text>Hi</Text>
    </View>
  )
}

export default HomeTimetable

const styles = StyleSheet.create({
  homeTimetableContainer: {
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    width: "90%",
    height: 260,
  },
})
