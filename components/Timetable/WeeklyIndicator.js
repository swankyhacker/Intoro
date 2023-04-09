import DayButton from "@components/Timetable/DayButton"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { addDays, eachDayOfInterval, format, getUnixTime } from "date-fns"

const WeeklyIndicator = ({ selectedDate, setSelectedDate, timetable }) => {
  const dates = eachDayOfInterval({
    start: new Date(),
    end: addDays(new Date(), 7),
  })

  const getTotalReviews = (day) => {
    let total = 0
    if (!timetable[day]) return 0
    let allTimes = Object.keys(timetable[day])
    if (allTimes.length < 1) return 0
    allTimes.forEach((time) => {
      total += timetable[day][time]
    })
    return total
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.month}>{format(new Date(), "LLLL")}</Text>
      </View>
      <View style={styles.weekContainer}>
        {dates.map((day, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                onPress={() => {
                  setSelectedDate(getUnixTime(day))
                }}
              >
                <DayButton
                  date={day}
                  value={getTotalReviews(getUnixTime(day))}
                  active={selectedDate === getUnixTime(day)}
                />
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    </View>
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
  month: {
    fontSize: 26,
    fontWeight: "300",
    textAlign: "center",
    marginBottom: 10,
  },
})
