import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import PagerView from "react-native-pager-view"
import DayButton from "@components/Timetable/DayButton"
import { format } from "date-fns"

const WeeklyIndicator = ({ dates, selectedDate, setSelectedDate }) => {
  return (
    <PagerView style={styles.container}>
      {dates.map((week, index) => {
        const monthStart = format(week[0], "MMMM").toUpperCase()
        const monthEnd = format(week[6], "MMMM").toUpperCase()
        return (
          <View key={index}>
            <View>
              <Text
                style={{
                  fontSize: 26,
                  fontWeight: "300",
                  textAlign: "center",
                  marginBottom: 10,
                }}
              >
                {monthStart === monthEnd
                  ? monthStart
                  : monthStart + " - " + monthEnd}
              </Text>
            </View>
            <View style={styles.weekContainer}>
              {week.map((day, index) => {
                return (
                  <View key={index}>
                    <TouchableOpacity
                      onPress={() => {
                        setSelectedDate(day)
                      }}
                    >
                      <DayButton
                        date={day}
                        value={Math.floor(Math.random() * 10)}
                        active={selectedDate.getTime() === day.getTime()}
                      />
                    </TouchableOpacity>
                  </View>
                )
              })}
            </View>
          </View>
        )
      })}
    </PagerView>
  )
}

export default WeeklyIndicator

const styles = StyleSheet.create({
  container: {
    height: 150,
  },
  weekContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
})
