import React from "react"
import { StyleSheet, TextInput } from "react-native"

const IntoroTextInput = ({ placeholder, ...props }) => {
  return (
    <TextInput
      placeholderTextColor="#555454"
      autoCapitalize="none"
      placeholder={placeholder}
      style={styles.input}
      {...props}
    />
  )
}

export default IntoroTextInput

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(142, 131, 131, 1)",
    marginTop: 5,
  },
})
