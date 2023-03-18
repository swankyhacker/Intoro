import { useState, useRef } from "react"
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from "react-native"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Animated, {
  useAnimatedStyle,
  interpolateColor,
  withTiming,
  useSharedValue,
  withSequence,
  withRepeat,
} from "react-native-reanimated"

export default function AnswerField({ kana }) {
  const [answerMode, setAnswerMode] = useState(true)
  const anim = useSharedValue(0)
  const progress = useSharedValue(0)
  const typedAnswer = useRef("")
  const inputRef = useRef()

  const shake = () => {
    anim.value = withRepeat(
      withSequence(
        withTiming(-2, { duration: 50 }),
        withTiming(2, { duration: 50 }),
        withTiming(0, { duration: 50 })
      ),
      2
    )
  }
  const correct = () => {
    progress.value = withTiming(1, { duration: 200 })
  }

  const wrong = () => {
    progress.value = withTiming(-1, { duration: 200 })
  }

  const blank = () => {
    progress.value = withTiming(0, { duration: 1 })
  }

  const handleText = (text) => (typedAnswer.current = text)

  const handlePress = () => {
    if (answerMode === true) {
      const formattedAnswer = typedAnswer.current.trim()
      if (formattedAnswer.length < 1) {
        // If no answer was typed in
        shake()
      } else {
        Keyboard.dismiss()
        if (formattedAnswer === kana.reading) {
          // If answer is correct
          correct()
        } else {
          // If answer is wrong
          wrong()
        }
      }
    } else {
      // Not in answer mode, go to next review
      blank()
      typedAnswer.current = ""
      inputRef.current.clear()
    }
    setAnswerMode(!answerMode)
  }

  const shakeStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: anim.value }],
    }
  })

  const animatedColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [-1, 0, 1],
        ["#FF0000", "#FFFFFF", "#00FF00"]
      ),
      color: interpolateColor(
        progress.value,
        [-1, 0, 1],
        ["#FFFFFF", "#000000", "#FFFFFF"]
      ),
    }
  })

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            ...styles.animatedContainer,
          },
          shakeStyle,
          animatedColorStyle,
        ]}
      >
        <TextInput
          style={{
            ...styles.input,
          }}
          placeholder="Answer"
          onChangeText={handleText}
          editable={answerMode}
          ref={inputRef}
          multiline={true}
        />
      </Animated.View>
      <TouchableOpacity
        style={styles.button}
        mode="contained"
        onPress={handlePress}
      >
        <SimpleLineIcons size={40} name="arrow-right-circle" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  animatedContainer: {
    width: "65%",
    margin: 20,
    elevation: 10,
    borderRadius: 15,
    zIndex: 99,
  },
  input: {
    height: 50,
    padding: 11,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0)",
  },
})
