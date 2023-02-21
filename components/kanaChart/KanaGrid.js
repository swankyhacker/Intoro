import { StyleSheet, Text, View, Dimensions, Image } from "react-native"
const { width } = Dimensions.get("screen")

const chartContainerWidth = width - 50

const Item = ({ backgroundColor }) => {
  const generateBoxShadowStyle = (
    xOffset,
    yOffset,
    shadowColorIos,
    shadowOpacity,
    shadowRadius,
    elevation,
    shadowColorAndroid
  ) => {
    if (Platform.OS === "ios") {
      return {
        shadowColor: shadowColorIos,
        shadowOffset: { width: xOffset, height: yOffset },
        shadowOpacity,
        shadowRadius,
      }
    } else if (Platform.OS === "android") {
      return {
        elevation,
        shadowColor: shadowColorAndroid,
      }
    }
  }

  let boxShadow = generateBoxShadowStyle(-2, 4, "#171717", 0.4, 3, 4, "#171717")

  return (
    <View style={{ ...styles.item, backgroundColor, ...boxShadow }}>
      <Image
        style={{ width: 35, height: 35, resizeMode: "contain" }}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/15/15490.png",
        }}
      />
      <Text>KA</Text>
    </View>
  )
}

const KanaGrid = ({ kana }) => {
  const backgroundColor = kana === "Katakana" ? "#E990A0" : "#7B9EE3"
  return (
    <View style={styles.gridContainer}>
      {Array(10)
        .fill(0)
        .map(() => (
          <Item backgroundColor={backgroundColor} />
        ))}
    </View>
  )
}

export default KanaGrid

const styles = StyleSheet.create({
  gridContainer: {
    marginLeft: -8,
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    width: chartContainerWidth,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    flex: 1,
    minWidth: 0.17 * chartContainerWidth,
    maxWidth: 0.17 * chartContainerWidth,
    height: 0.17 * chartContainerWidth,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
    marginTop: 8,
    padding: 20,
    borderRadius: 12,
  },
})
