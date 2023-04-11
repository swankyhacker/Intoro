import { useCallback, useRef, useState } from "react"
import { useFocusEffect } from "@react-navigation/native"
import { getUnixTime, startOfDay } from "date-fns"

import { getTimetable } from "@api/firestore"
import Timeline from "@components/Timetable/Timeline"
import WeeklyIndicator from "@components/Timetable/WeeklyIndicator"
import { IntoroWrapper } from "@components/common"

const Timetable = () => {
  const [timetable, setTimetable] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)

  const fetchTimetable = async () => {
    try {
      const currentDay = getUnixTime(startOfDay(new Date()))
      const timetable = await getTimetable()
      setTimetable({ ...timetable })
      setSelectedDate(currentDay)
    } catch (err) {
      console.log("Error while fetching timetable", err)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchTimetable()
    }, [])
  )

  if (selectedDate === null) return <></>
  return (
    <IntoroWrapper>
      <WeeklyIndicator
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        timetable={timetable}
      />
      <Timeline selectedDate={selectedDate} timetable={timetable} />
    </IntoroWrapper>
  )
}

export default Timetable
