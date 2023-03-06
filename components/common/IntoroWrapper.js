import intoroLogo from "@assets/logo/IntoroLogo.png"
import { Image, StyleSheet, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function IntoroWrapper({ children, logo = true }) {
  const insets = useSafeAreaInsets()
  return (
    <View
      style={{
        ...styles.container,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      {logo === true ? (
        <View style={styles.logo}>
          <Image
            source={intoroLogo}
            style={{ width: 100, height: 100, resizeMode: "contain" }}
          />
        </View>
      ) : null}
      <View style={styles.bodyContainer}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
  },
  logo: {
    flex: 1,
  },
  bodyContainer: {
    flex: 6,
  },
})
