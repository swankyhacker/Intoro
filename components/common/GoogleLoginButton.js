import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native"
import React from "react"
import googleIcon from "../../assets/icon/google-icon.png"

const GoogleLoginButton = ({ text }) => {
  return (
    <TouchableOpacity style={styles.googleButton}>
      <Image
        style={{ width: 30, height: 30, marginHorizontal: 10 }}
        source={googleIcon}
      />
      <Text style={styles.googleButtonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default GoogleLoginButton

const styles = StyleSheet.create({
  googleButton: {
    flexDirection: "row",
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  googleButtonText: {
    color: "rgba(0, 0, 0, 0.54)",
    fontWeight: "700",
    fontSize: 16,
  },
})
