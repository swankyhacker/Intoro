import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { ActivityIndicator } from "react-native-paper"

const AuthButton = ({ onPress, label }) => {
  const [loading, setLoading] = useState(false)

  const handleButton = () => {
    setLoading(true)
    onPress()
    setLoading(false)
  }

  return (
    <View style={styles.buttonContainer}>
      {loading ? (
        <ActivityIndicator animating={true} size={"large"} color={"#D4AD65"} />
      ) : (
        <TouchableOpacity onPress={handleButton} style={styles.button}>
          <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default AuthButton

const styles = StyleSheet.create({
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#D4AD65",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
})
