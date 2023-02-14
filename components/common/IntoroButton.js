import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const IntoroButton = ({
  text,
  logoURI = undefined,
  fontStyle = undefined,
  buttonStyle = undefined,
  onPress,
  ...props
}) => {
  const { style } = props

  console.log(logoURI)

  if (logoURI !== undefined) {
    return (
      <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
        <View
          style={{
            width: "70%",
            flexDirection: "row",
          }}
        >
          <Text style={[styles.buttonText, fontStyle, { marginRight: 15 }]}>
            {text}
          </Text>
          <Image source={{ uri: logoURI }} style={{ width: 20 }} />
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
    backgroundColor: "rgba(244,210,60,1)",
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
