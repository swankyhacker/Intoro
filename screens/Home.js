import { StyleSheet, Text, View, Image } from "react-native"
import intoroLogo from "@assets/logo/IntoroLogo.png"
import profile from "@assets/icon/profile.png"
import IntoroProgress from "@components/home/IntoroProgress"
import TierBadge from "@components/home/TierBadge"
import HomeTimetable from "@components/home/HomeTimetable"
import { IntoroButton } from "@components/common"

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={intoroLogo}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        />
        <Image source={profile} style={{ width: 50, resizeMode: "contain" }} />
      </View>

      <View style={styles.bodyContainer}>
        <View style={styles.progressBarContainer}>
          <IntoroProgress text={"Completed"} value={38} />
          <IntoroProgress text={"Char Unlock"} value={62} />
        </View>

        <TierBadge />

        <HomeTimetable />

        <View style={{ width: "50%" }}>
          <IntoroButton
            onPress={() => navigation.navigate("LearningPad")}
            text={"Learning Pad"}
            buttonStyle={{ borderRadius: 20, paddingVertical: 10 }}
            fontStyle={{ fontSize: 18, fontWeight: "500" }}
          />
        </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    paddingVertical: 18,
  },
  logo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bodyContainer: {
    flex: 6,
    alignItems: "center",
    justifyContent: "space-between",
  },
  progressBarContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
})
