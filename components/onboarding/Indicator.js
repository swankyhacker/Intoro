import { StyleSheet, Text, View, Dimensions, Animated } from "react-native"
import React from "react"
const { width, height } = Dimensions.get("screen")

const Indicator = ({ scrollX }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {Array(4)
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
                height: 8,
                width: 8,
                borderRadius: 5,
                backgroundColor,
                margin: 10,
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

export default Indicator

const styles = StyleSheet.create({})
