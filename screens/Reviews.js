import { useContext, useEffect, useRef, useState } from "react"
import { StyleSheet, View } from "react-native"

import { AnswerField, Character } from "@components/reviews"
import { IntoroWrapper } from "@components/common"

import { ReviewsContext } from "@context/ReviewsContext"
import { LessonsContext } from "@context/LessonsContext"

import { getKanaInfo } from "@api/firestore"

export default function Reviews({ navigation, route }) {
  const { snapshot } = useContext(ReviewsContext)
  const { snapshot: lessons, setSnapshot: setLessons } =
    useContext(LessonsContext)
  const numberOfReviews = useRef()
  const allReviews = useRef([])
  const [currentReview, setCurrentReview] = useState(null)
  const currentReviewIndex = useRef()

  const getReviews = async () => {
    try {
      const currentReviews = await getKanaInfo(snapshot.docs)
      numberOfReviews.current = snapshot.docs.length
      allReviews.current = currentReviews
      getCurrentReview()
    } catch (err) {
      console.log("Error while fetching reviews", err)
    }
  }

  const getCurrentReview = () => {
    const randomIndex = Math.floor(Math.random() * numberOfReviews.current)
    currentReviewIndex.current = randomIndex
    setCurrentReview(allReviews.current[randomIndex])
  }

  const correctAnswer = () => {
    numberOfReviews.current -= 1
    allReviews.current.splice(currentReviewIndex.current, 1)
    if (numberOfReviews.current === 0) {
      if (route.params.prevScreen === "LearningPad") {
        navigation.navigate("IntoroTabs")
      } else {
        const lessonSnapshot = [...lessons.docs]
        lessonSnapshot.splice(0, 5)
        setLessons({ docs: lessonSnapshot })
        if (lessonSnapshot.length <= 0) {
          navigation.navigate("IntoroTabs")
        } else {
          navigation.navigate("Lessons")
        }
      }
    } else {
      getCurrentReview()
    }
  }

  const wrongAnswer = () => {
    getCurrentReview()
  }

  useEffect(() => {
    getReviews()
  }, [])

  if (currentReview === null) return <></>

  return (
    <IntoroWrapper
      logo={false}
      title="Reviews"
      backButton={true}
      backNavigation={() => navigation.pop()}
    >
      <View style={styles.characterContainer}>
        <Character kana={currentReview} />
      </View>
      <View style={styles.answerContainer}>
        <AnswerField
          kana={currentReview}
          correctAnswer={correctAnswer}
          wrongAnswer={wrongAnswer}
        />
      </View>
      <View style={styles.leafletContainer}></View>
    </IntoroWrapper>
  )
}

const styles = StyleSheet.create({
  characterContainer: {
    flex: 3,
  },
  answerContainer: {
    flex: 1,
  },
  leafletContainer: {
    flex: 3,
  },
})
