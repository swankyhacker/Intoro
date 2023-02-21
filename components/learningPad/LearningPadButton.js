import { View, TouchableOpacity, Text, StyleSheet } from "react-native"

const LearningPadButton = ({ text, number }) => {
  return (
    <TouchableOpacity>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{text}</Text>
        <View style={styles.numberContainer}>
          <Text>{number}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default LearningPadButton

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "#F4D23C",
    paddingHorizontal: 20,
    paddingVertical: 8,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginVertical: 10,
  },
  buttonText: {
    flex: "3",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  numberContainer: {
    backgroundColor: "#D4AD65",
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
  },
})
