import { StyleSheet, Text, View, Image, Dimensions } from "react-native"
import React from "react"
import intoroLogo from "@assets/logo/IntoroLogo.png"
import CharacterGrid from "@components/characterChart/CharacterGrid"
import IntoroButton from "@components/common/IntoroButton"
import CharacterLevel from "@components/characterChart/CharacterLevel"

const { width, height } = Dimensions.get("screen")

const CharacterChart = ({ navigation }) => {
  console.log(width, height)
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={intoroLogo}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        />
      </View>

      {/* Body contains title (Hiragana Chart), Level Chart, and Switch Button underneath */}
      <View style={styles.bodyContainer}>
        {/* Title */}
        <View>
          <Text style={styles.chartTitle}>Hiragana Chart</Text>
        </View>

        {/* Level Chart */}
        <View style={styles.chartContainer}>
          <CharacterLevel level={"1"} />
          <CharacterLevel level={"2"} />
        </View>

        {/* Switch Button -> Switch between Hiragana and Katakana */}
        <View
          style={{
            flex: 1,
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <IntoroButton
            buttonStyle={{}}
            logoURI={"https://cdn-icons-png.flaticon.com/512/519/519848.png"}
            fontStyle={{
              fontSize: 18,
              fontWeight: "700",
            }}
            text={"Hiragana"}
          />
        </View>
      </View>

      {/* TODO: Add NavBar */}
    </View>
  )
}

export default CharacterChart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  logo: {
    flex: 1,
  },
  bodyContainer: {
    flex: 5,
  },
  chartContainer: {
    flex: 5,
    marginTop: 30,
  },
  chartTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
})
