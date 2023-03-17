import { FlatList, StyleSheet, Text, View } from "react-native"
import React from "react"

const Timeline = ({ timeline }) => {
  if (!timeline) {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "400",
            color: "#1E1D1D",
            textAlign: "center",
            opacity: 0.5,
          }}
        >
          TODAY IS YOUR{"\n"}
          DAY OFF!
        </Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={timeline}
        renderItem={({ item }) => (
          <Indicator time={item.time} value={item.value} />
        )}
      />
    </View>
  )
}

const Indicator = ({ time, value }) => {
  const valueWidth = value * 30
  return (
    <View style={styles.content}>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{time}</Text>
      </View>
      <View style={{ ...styles.valueContainer, width: valueWidth }}>
        <Text style={styles.valueText}>{value}</Text>
      </View>
    </View>
  )
}

export default Timeline

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    position: "relative",
    height: 55,
    justifyContent: "flex-start",
    alignItems: "center",
    borderLeftWidth: 3,
    borderColor: "#F4D23C",
    marginLeft: 20,
  },
  timeContainer: {
    position: "absolute",
    backgroundColor: "#fff",
    left: -20,
    borderRadius: 50,
    padding: 2,
  },
  timeText: {
    fontWeight: "600",
    fontSize: 12,
  },
  valueContainer: {
    marginLeft: 30,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#81B1E2",
    borderRadius: 14,
  },
  valueText: {
    fontSize: 16,
    fontWeight: "500",
  },
})
