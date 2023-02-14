import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Image,
} from "react-native"
const { width } = Dimensions.get("screen")
import { useRef } from "react"
import { StatusBar } from "expo-status-bar"
import intoroLogo from "@assets/logo/IntoroLogo.png"
import Indicator from "@components/onboarding/Indicator"
import IntoroButton from "@components/common/IntoroButton"
import OnboardingItem from "@components/onboarding/OnboardingItem"

const DATA = [
  {
    key: "1",
    title: "Hiragana & Katakana Made Easy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam.",
    image: "https://cdn-icons-png.flaticon.com/512/2907/2907979.png",
  },
  {
    key: "2",
    title: "Interactive Learning",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam.",
    image: "https://cdn-icons-png.flaticon.com/512/2907/2907979.png",
  },
  {
    key: "3",
    title: "Plan Your Learning",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam.",
    image: "https://cdn-icons-png.flaticon.com/512/2907/2907979.png",
  },
  {
    key: "4",
    title: "Track Your Progress",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam.",
    image: "https://cdn-icons-png.flaticon.com/512/2907/2907979.png",
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
          style={{ marginTop: 15 }}
          navigation={navigation}
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
