import { StyleSheet, Text, View, Dimensions, Image } from "react-native"
import React from "react"

const { width, height } = Dimensions.get("screen")

const OnboardingItem = ({ item }) => {
  return (
    <View style={{ width, alignItems: "center", padding: 20 }}>
      <View style={{ flex: 0.65, justifyContent: "center" }}>
        <Image
          source={{ uri: item.image }}
          style={{
            width: width / 2,
            height: height / 2,
            resizeMode: "contain",
          }}
        />
      </View>
      <View style={{ flex: 0.35, justifyContent: "center" }}>
        <Text style={styles.onboardingTitle}>{item.title}</Text>
        <Text style={styles.onboardingSubtitle}>{item.description}</Text>
      </View>
    </View>
  )
}

export default OnboardingItem

const styles = StyleSheet.create({
  onboardingTitle: {
    fontWeight: "800",
    fontSize: "28",
    textAlign: "center",
    marginBottom: 10,
  },
  onboardingSubtitle: {
    fontWeight: "300",
    textAlign: "center",
    fontSize: "16",
  },
})
