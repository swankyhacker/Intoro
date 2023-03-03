import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native"
import Colors from "@types/colors.js"
import Types from "@types/types"

const { width } = Dimensions.get("screen")

export default function KanaItem({ navigation, element }) {
  let boxShadow = generateBoxShadowStyle(
    -2,
    4,
    Colors.SHADOW_COLOR_IOS,
    0.4,
    3,
    4,
    Colors.SHADOW_COLOR_ANDROID
  )

  const handleClick = () => {
    navigation.navigate("Flashcard", {
      element: element,
    })
  }

  return (
    <TouchableOpacity onPress={handleClick}>
      <View
        style={{
          ...styles.item,
          backgroundColor:
            element.type === Types.HIRAGANA ? Colors.HIRAGANA : Colors.KATAKANA,
          opacity:
            element.unlocked !== undefined
              ? element.unlocked === true
                ? 1
                : 0.4
              : 1,
          ...boxShadow,
        }}
      >
        <Text style={styles.character}>{element.character}</Text>
        <Text style={styles.reading}>{element.reading}</Text>
      </View>
    </TouchableOpacity>
  )
}

const chartContainerWidth = width - 40
const styles = StyleSheet.create({
  item: {
    minWidth: 0.17 * chartContainerWidth,
    maxWidth: 0.17 * chartContainerWidth,
    height: 0.17 * chartContainerWidth,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
    marginTop: 10,
    borderRadius: 12,
  },
  character: {
    fontWeight: "900",
    fontSize: 28,
  },
})

const generateBoxShadowStyle = (
  xOffset,
  yOffset,
  shadowColorIos,
  shadowOpacity,
  shadowRadius,
  elevation,
  shadowColorAndroid
) => {
  if (Platform.OS === "ios") {
    return {
      shadowColor: shadowColorIos,
      shadowOffset: { width: xOffset, height: yOffset },
      shadowOpacity,
      shadowRadius,
    }
  } else if (Platform.OS === "android") {
    return {
      elevation,
      shadowColor: shadowColorAndroid,
    }
  }
}
