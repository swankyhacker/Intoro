import { useContext, useEffect, useRef, useState } from "react"
import { StyleSheet, View } from "react-native"

import { AnswerField, Character } from "@components/reviews"
import { IntoroWrapper } from "@components/common"

import { ReviewsContext } from "@context/ReviewsContext"

import { getKanaInfo } from "@api/firestore"
export default function Reviews() {
  const { snapshot } = useContext(ReviewsContext)
  const numberOfReviews = useRef()
  const [reviews, setReviews] = useState([])

  const getReviews = async () => {
    try {
      const currentReviews = await getKanaInfo(snapshot.docs)
      numberOfReviews.current = snapshot.docs.length
      setReviews([...currentReviews])
    } catch (err) {
      console.log("Error while fetching reviews", err)
    }
  }

  useEffect(() => {
    getReviews()
  }, [])

  if (reviews.length === 0) return <></>

  // TODO: Pass kana dynamically as props instead of reviews[0]
  return (
    <IntoroWrapper logo={false}>
      <View style={styles.characterContainer}>
        <Character kana={reviews[0]} />
      </View>
      <View style={styles.answerContainer}>
        <AnswerField kana={reviews[0]} />
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
