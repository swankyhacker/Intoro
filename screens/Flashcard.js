import { IntoroWrapper } from "@components/common"
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useRef } from "react"
import FlashcardDetails from "@components/flashcard/FlashcardDetails"
import FlashcardIndicator from "@components/flashcard/FlashcardIndicator"
const { width } = Dimensions.get("screen")
const CONTAINER_WIDTH = width * 0.85

const Flashcard = ({ route, navigation }) => {
  const { element } = route.params
  const DATA = [
    {
      page: "1",
    },
    {
      page: "2",
    },
  ]
  const scrollX = useRef(new Animated.Value(0)).current
  return (
    <IntoroWrapper>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="ios-arrow-back" size={30} />
      </TouchableOpacity>

      <View style={{ alignItems: "center" }}>
        <View style={styles.topContainer}>
          <View style={styles.characterContainer}>
            <Text style={styles.character}>{element._character}</Text>
          </View>
          <View style={styles.characterContainer}>
            <Text style={styles.character}>{element._character}</Text>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <Animated.FlatList
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
              return (
                <FlashcardDetails
                  page={item.page}
                  element={element}
                  width={CONTAINER_WIDTH}
                />
              )
            }}
          />
          <FlashcardIndicator scrollX={scrollX} />
        </View>
      </View>
    </IntoroWrapper>
  )
}

export default Flashcard

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "#7B9EE3",
    width: CONTAINER_WIDTH,
    height: 190,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginVertical: 20,
  },
  characterContainer: {
    backgroundColor: "#BDCDEC",
    width: 130,
    height: 140,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  character: {
    fontSize: 80,
    fontWeight: "700",
  },
  bottomContainer: {
    backgroundColor: "#D4AD6573",
    width: CONTAINER_WIDTH,
    height: 330,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
})
