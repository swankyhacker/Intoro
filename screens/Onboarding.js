import { Animated, Dimensions, Image, StyleSheet, View } from "react-native"

import intoroLogo from "@assets/logo/IntoroLogo.png"
import { IntoroButton } from "@components/common"
import Indicator from "@components/onboarding/Indicator"
import OnboardingItem from "@components/onboarding/OnboardingItem"
import { StatusBar } from "expo-status-bar"
import { useRef } from "react"

// import image for onboarding screen
import onboarding1 from "@assets/onboarding/onboarding1.png"
import onboarding2 from "@assets/onboarding/onboarding2.png"
import onboarding3 from "@assets/onboarding/onboarding3.png"
import onboarding4 from "@assets/onboarding/onboarding4.png"

const { width } = Dimensions.get("screen")

const DATA = [
  {
    key: "1",
    title: "Hiragana & Katakana",
    description: "On-the go!",
    image: onboarding1,
  },
  {
    key: "2",
    title: "Effective Learning",
    description: "Spaced Repetitions and Mnemonics",
    image: onboarding2,
  },
  {
    key: "3",
    title: "Plan Your Learning",
    description: "With daily schedules",
    image: onboarding3,
  },
  {
    key: "4",
    title: "Track Your Progress",
    description: "With tracking feature",
    image: onboarding4,
  },
]

const Onboarding = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current
  return (
    <View style={styles.container}>
      <StatusBar />
      <View
        style={{
          flex: 0.1,
          paddingLeft: 20,
          marginTop: 50,
          justifyContent: "flex-start",
          width,
        }}
      >
        <Image source={intoroLogo} />
      </View>

      <Animated.FlatList
        style={{ flex: 0.55 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        pagingEnabled
        data={DATA}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          return <OnboardingItem item={item} />
        }}
      />

      <View style={{ flex: 0.4, alignItems: "center", width: width * 0.5 }}>
        <Indicator scrollX={scrollX} />
        <IntoroButton
          text={"Start Learning!"}
          buttonStyle={{ marginTop: 15 }}
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 15,
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
