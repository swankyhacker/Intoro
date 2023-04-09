import { collection, getDocs, query, where } from "firebase/firestore"
import {
  add,
  fromUnixTime,
  getUnixTime,
  startOfDay,
  startOfHour,
} from "date-fns"

import { getCurrentUser } from "../auth.js"
import { db } from "../firebase.js"

// Returns the timetable for a user
export default async () => {
  const { uid: currentUser } = getCurrentUser()
  const oneWeekFromNow = getUnixTime(startOfDay(add(new Date(), { days: 7 })))

  const q1 = query(
    collection(db, `users/${currentUser}/kana`),
    where("review_time", ">", getUnixTime(Date.now())),
    where("review_time", "<", oneWeekFromNow)
  )
  const reviewSnapshot = await getDocs(q1)
  const timetable = {}

  reviewSnapshot.forEach((doc) => {
    const reviewTime = fromUnixTime(doc.data().review_time)
    const hourStart = getUnixTime(startOfHour(reviewTime))
    const dayStart = getUnixTime(startOfDay(reviewTime))

    if (!timetable[dayStart]) {
      timetable[dayStart] = {
        [hourStart]: 1,
      }
    } else {
      timetable[dayStart][hourStart] = timetable[dayStart][hourStart]
        ? timetable[dayStart][hourStart] + 1
        : 1
    }
  })
  return timetable
}
