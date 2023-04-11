import { useCallback, useRef, useState } from "react"
import { useFocusEffect } from "@react-navigation/native"
import { getUnixTime, startOfDay } from "date-fns"

import { getTimetable } from "@api/firestore"
import Timeline from "@components/Timetable/Timeline"
import WeeklyIndicator from "@components/Timetable/WeeklyIndicator"
import { IntoroWrapper } from "@components/common"

const Timetable = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const timetableRef = useRef({})

  const fetchTimetable = async () => {
    try {
      const dayStart = getUnixTime(startOfDay(new Date()))
      const timetable = await getTimetable()
      timetableRef.current = timetable
      setSelectedDate(dayStart)
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
        timetable={timetableRef.current}
      />
      <Timeline selectedDate={selectedDate} timetable={timetableRef.current} />
    </IntoroWrapper>
  )
}

export default Timetable
