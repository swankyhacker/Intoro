import { Dimensions, StyleSheet, Text, View } from "react-native"
import React from "react"
import { format } from "date-fns"

const DayButton = ({ date, value, active }) => {
  const day = format(date, "iii")
  const dayNumber = format(date, "d")
  return (
    <View
      style={active ? styles.container : { ...styles.container, opacity: 0.5 }}
    >
      <View>
        <Text style={{ fontWeight: "400" }}>{dayNumber}</Text>
      </View>
      <View>
        <Text style={{ fontWeight: "400" }}>{day}</Text>
      </View>
      <View style={styles.valueContainer}>
        <Text style={{ color: "#D4AD65", fontWeight: "500" }}>{value}</Text>
      </View>
    </View>
  )
}

export default DayButton

const styles = StyleSheet.create({
  container: {
    borderRadius: "40",
    height: 90,
    width: 38,
    backgroundColor: "#F4D23C",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  valueContainer: {
    minWidth: 28,
    marginTop: 10,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
})
