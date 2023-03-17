import { useCallback, useRef } from "react"
import {
  Animated,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from "react-native"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"

// TODO: Add Text box correct/wrong animation
export default function AnswerField({ answer }) {
  const anim = useRef(new Animated.Value(0))
  const backgroundColor = useRef(new Animated.Value(0))
  const typedAnswer = useRef("")

  const shake = useCallback(() => {
    // makes the sequence loop
    Animated.loop(
      // runs the animation array in sequence
      Animated.sequence([
        // shift element to the left by 2 units
        Animated.timing(anim.current, {
          toValue: -2,
          duration: 50,
          useNativeDriver: true,
        }),
        // shift element to the right by 2 units
        Animated.timing(anim.current, {
          toValue: 2,
          duration: 50,
          useNativeDriver: true,
        }),
        // bring the element back to its original position
        Animated.timing(anim.current, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ]),
      // loops the above animation config 2 times
      { iterations: 2 }
    ).start()
  }, [])

  const correct = useCallback(() => {
    Animated.timing(backgroundColor.current, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start()
  }, [])

  const handleText = (text) => (typedAnswer.current = text)

  const handlePress = () => {
    if (answer.current.trim().length < 1) {
      shake()
      correct()
    } else {
      Keyboard.dismiss()
    }
  }

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.animatedContainer,
          transform: [{ translateX: anim.current }],
          // backgroundColor: backgroundColor.current.interpolate({
          //   inputRange: [0, 1],
          //   outputRange: ["rgba(255,255,255,1)", "rgba(0,0,255,1)"],
          // }),
        }}
      >
        <TextInput
          style={{
            ...styles.input,
          }}
          placeholder="Answer"
          onChangeText={handleText}
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
    backgroundColor: "white",
  },
  input: {
    width: "100%",
    height: 50,
    padding: 11,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0)",
  },
})
