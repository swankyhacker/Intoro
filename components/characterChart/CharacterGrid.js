import { StyleSheet, Text, View, Dimensions, Image } from "react-native"
const { width, height } = Dimensions.get("screen")

const Item = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        style={{ width: 45, height: 45, resizeMode: "contain" }}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/15/15490.png",
        }}
      />
    </View>
  )
}

const CharacterGrid = () => {
  return (
    <View style={styles.gridContainer}>
      {Array(10)
        .fill(0)
        .map(() => (
          <Item />
        ))}
    </View>
  )
}

export default CharacterGrid

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

    // my visual styles; not important for grid
    padding: 20,
    backgroundColor: "#7B9EE3",
    borderRadius: 12,
    borderColor: "#fff",
  },
})
