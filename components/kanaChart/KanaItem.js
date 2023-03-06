import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native"
import { ProgressBar } from "react-native-paper"

import Colors from "@types/colors.js"
import Types from "@types/types"

const { width } = Dimensions.get("screen")

export default function KanaItem({
  element,
  showReading = true,
  showProgress = false,
  showUnlocked = true,
  boxStyle,
  characterStyle,
  onPressed,
  disabled = true,
}) {
  let boxShadow = generateBoxShadowStyle(
    -2,
    4,
    Colors.SHADOW_COLOR_IOS,
    0.4,
    3,
    4,
    Colors.SHADOW_COLOR_ANDROID
  )
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPressed}
      style={styles.container}
    >
      <View
        style={{
          ...styles.item,
          backgroundColor:
            element.type === Types.HIRAGANA
              ? Colors.HIRAGANA_TILES
              : Colors.KATAKANA_TILES,
          opacity:
            showUnlocked === false ? (element.unlocked === true ? 1 : 0.4) : 1,
          ...boxShadow,
          paddingVertical: showReading === true ? 14 : 0,
          ...boxStyle,
        }}
      >
        <Text style={{ ...styles.character, ...characterStyle }}>
          {element.character}
        </Text>
        {showReading ? (
          <Text style={styles.reading}>{element.reading}</Text>
        ) : null}
      </View>
      {showProgress === true ? (
        <ProgressBar
          progress={element.progress / 5}
          theme={{ colors: { primary: "green" } }}
          style={styles.progressBar}
        />
      ) : null}
    </TouchableOpacity>
  )
}

const chartContainerWidth = width - 40
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  item: {
    minWidth: 0.17 * chartContainerWidth,
    maxWidth: 0.17 * chartContainerWidth,
    height: 0.17 * chartContainerWidth,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
    marginTop: 8,
    paddingVertical: 14,
    borderRadius: 12,
  },
  character: {
    fontWeight: "900",
    fontSize: 28,
  },
  progressBar: {
    backgroundColor: "#EEEEEE",
    width: 50,
    margin: 8,
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
