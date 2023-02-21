import { StyleSheet, Text, View, Dimensions, Image } from "react-native"
const { width, height } = Dimensions.get("screen")

const Item = ({ backgroundColor }) => {
  return (
    <View style={{ ...styles.item, backgroundColor }}>
      <Image
        style={{ width: 35, height: 35, resizeMode: "contain" }}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/15/15490.png",
        }}
      />
      <Text>A</Text>
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
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    width: 350,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    flex: 1,
    minWidth: 0.17 * 350,
    maxWidth: 0.17 * 350,
    height: 0.17 * 350,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
    marginTop: 8,
    padding: 20,
    borderRadius: 12,
    borderColor: "#fff",
  },
})
