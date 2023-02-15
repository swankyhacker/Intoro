import { StyleSheet, Text, TouchableOpacity } from "react-native"
import React from "react"

const IntoroButton = ({ navigation, text, ...props }) => {
  const { style, ...rest } = props
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={() => navigation.navigate("Login")}
      {...rest}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default IntoroButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f4d23c",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },
})
