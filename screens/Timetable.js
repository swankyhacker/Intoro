import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { IntoroWrapper } from "@components/common"
import { addDays, eachDayOfInterval, eachWeekOfInterval } from "date-fns"
import WeeklyIndicator from "@components/Timetable/WeeklyIndicator"
import Timeline from "@components/Timetable/Timeline"

const Timetable = () => {
  const dates = eachWeekOfInterval(
    {
      start: new Date(),
      end: addDays(new Date(), 28),
    },
    {
      weekStartsOn: 1,
    }
  ).reduce((acc, date) => {
    const allDays = eachDayOfInterval({
      start: date,
      end: addDays(date, 6),
    })
    acc.push(allDays)
    return acc
  }, [])

  const [selectedDate, setSelectedDate] = useState(dates[0][0])

  // TODO: replace with real data, refetch on date change
  const timeline = [
    { time: "9am", value: "8" },
    { time: "10am", value: "5" },
    { time: "1pm", value: "3" },
    { time: "4pm", value: "8" },
    { time: "6pm", value: "8" },
    { time: "8pm", value: "3" },
    { time: "10pm", value: "6" },
  ]

  return (
    <IntoroWrapper>
      <WeeklyIndicator
        dates={dates}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <Timeline timeline={timeline} />
    </IntoroWrapper>
  )
}

export default Timetable

const styles = StyleSheet.create({})
