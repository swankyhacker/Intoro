import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const IntoroButton = ({
  text,
  icon,
  fontStyle = undefined,
  buttonStyle = undefined,
  onPress,
  ...props
}) => {
  if (icon !== undefined) {
    return (
      <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={[styles.buttonText, fontStyle]}>{text}</Text>
          <View>{icon}</View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, fontStyle]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default IntoroButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F4D23C",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "flex-end",
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontWeight: "700",
    fontSize: 16,
    flex: 1,
  },
})
