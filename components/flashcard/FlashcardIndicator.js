import { Animated, StyleSheet, View, Dimensions } from "react-native"
const { width } = Dimensions.get("screen")

const FlashcardIndicator = ({ scrollX }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {Array(2)
        .fill(true)
        .map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width]
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1.4, 0.8],
            extrapolate: "clamp",
          })
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 0.9, 0.3],
            extrapolate: "clamp",
          })
          const backgroundColor = scrollX.interpolate({
            inputRange,
            outputRange: ["#333", "rgba(64, 123, 255, 1)", "#333"],
            extrapolate: "clamp",
          })
          return (
            <Animated.View
              key={`indicator-${i}`}
              style={{
                ...styles.indicator,
                backgroundColor,
                opacity,
                transform: [
                  {
                    scale,
                  },
                ],
              }}
            ></Animated.View>
          )
        })}
    </View>
  )
}

const styles = StyleSheet.create({
  indicator: {
    height: 8,
    width: 8,
    borderRadius: 5,
    marginHorizontal: 5,
  },
})

export default FlashcardIndicator
