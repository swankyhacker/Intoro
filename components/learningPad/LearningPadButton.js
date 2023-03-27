import { useFocusEffect } from "@react-navigation/native"
import { useCallback, useContext, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const LearningPadButton = ({ text, fetchData, onPress, context }) => {
  const { setSnapshot } = useContext(context)
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

  useFocusEffect(
    useCallback(() => {
      getData()
    }, [])
  )

  if (number === null) return <></>
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={onPress}
      disabled={number > 0 ? false : true}
    >
      <Text style={styles.buttonText}>{text}</Text>
      <View style={styles.numberContainer}>
        <Text>{number !== null ? number : -1}</Text>
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
