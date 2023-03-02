import { StyleSheet, Text, View, Image } from "react-native"
import bronzeLogo from "@assets/icon/bronze.png"
import silverLogo from "@assets/icon/silver.png"
import goldLogo from "@assets/icon/gold.png"
import diamondLogo from "@assets/icon/diamond.png"

const TierBadge = () => {
  return (
    <View style={styles.tierContainer}>
      <View style={styles.tierImageWrapper}>
        <Image source={bronzeLogo} style={styles.tierImage}></Image>
        <Text style={styles.tierImageContent}>12</Text>
      </View>
      <View style={styles.tierImageWrapper}>
        <Image source={silverLogo} style={styles.tierImage}></Image>
        <Text style={styles.tierImageContent}>2</Text>
      </View>
      <View style={styles.tierImageWrapper}>
        <Image source={goldLogo} style={styles.tierImage}></Image>
        <Text style={styles.tierImageContent}>20</Text>
      </View>
      <View style={styles.tierImageWrapper}>
        <Image source={diamondLogo} style={styles.tierImage}></Image>
        <Text style={styles.tierImageContent}>1</Text>
      </View>
    </View>
  )
}

export default TierBadge

const styles = StyleSheet.create({
  tierContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  tierImageWrapper: {
    height: 90,
    width: 90,
    overflow: "hidden",
  },
  tierImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  tierImageContent: {
    position: "absolute",
    color: "#D4AD65",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    width: "100%",
    top: 14,
  },
})
