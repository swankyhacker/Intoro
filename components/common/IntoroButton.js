import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const IntoroButton = ({
  text,
  icon,
  iconPosition = "right",
  fontStyle = undefined,
  buttonStyle = undefined,
  onPress,
}) => {
  if (icon !== undefined) {
    return (
      <TouchableOpacity
        style={[styles.iconButton, buttonStyle]}
        onPress={onPress}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {iconPosition == "left" ? <View>{icon}</View> : null}
          <Text style={[styles.iconButtonText, fontStyle]}>{text}</Text>
          {iconPosition == "right" ? <View>{icon}</View> : null}
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
  iconButton: {
    backgroundColor: "#F4D23C",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "flex-end",
  },
  iconButtonText: {
    textAlign: "center",
    color: "black",
    fontWeight: "700",
    fontSize: 16,
    flex: 1,
  },
  button: {
    backgroundColor: "#F4D23C",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },
})
