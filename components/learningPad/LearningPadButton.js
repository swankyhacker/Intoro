import { useEffect, useState, useRef, useContext } from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"

const LearningPadButton = ({ text, fetchData, nextPage, context }) => {
  const { setSnapshot } = useContext(context)
  const navigation = useNavigation()
  const [number, setNumber] = useState(null)

  const getData = async () => {
    try {
      const snapshot = await fetchData()
      setSnapshot(snapshot)
      setNumber(snapshot.docs.length)
    } catch (err) {
      console.log(`Error while fetching ${text}:`, err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const navigateToPage = () => {
    if (number > 0) {
      navigation.navigate(nextPage)
    }
  }

  if (number === null) return <></>
  return (
    <TouchableOpacity onPress={navigateToPage}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{text}</Text>
        <View style={styles.numberContainer}>
          <Text>{number !== null ? number : -1}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default LearningPadButton

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "#F4D23C",
    paddingHorizontal: 20,
    paddingVertical: 8,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginVertical: 10,
  },
  buttonText: {
    flex: 3,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  numberContainer: {
    backgroundColor: "#D4AD65",
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
  },
})
