import { View, StyleSheet, Image } from "react-native"
import intoroLogo from "@assets/logo/IntoroLogo.png"

export default function IntoroWrapper({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={intoroLogo}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        />
      </View>

      <View style={styles.bodyContainer}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    paddingVertical: 18,
  },
  logo: {
    flex: 1,
  },
  bodyContainer: {
    flex: 6,
  },
})
