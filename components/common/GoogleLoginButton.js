import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import googleIcon from "@assets/icon/google-icon.png"

const GoogleLoginButton = ({ text, onPress }) => {
  return (
    <View style={styles.googleButtonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.googleButton}>
        <Image
          style={{ width: 30, height: 30, marginHorizontal: 10 }}
          source={googleIcon}
        />
        <Text style={styles.googleButtonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default GoogleLoginButton

const styles = StyleSheet.create({
  googleButtonContainer: {
    width: "70%",
    marginTop: 6,
  },
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
