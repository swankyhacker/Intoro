import { useFocusEffect } from "@react-navigation/native"
import { useCallback, useContext, useRef, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import Swiper from "react-native-swiper"

import { LessonsContext } from "@context/LessonsContext"
import { ReviewsContext } from "@context/ReviewsContext"

import { IntoroWrapper } from "@components/common"
import { Indicator, Leaflet, ReviewsModal } from "@components/lessons"

import { getKanaInfo } from "@api/firestore"

export default function Lessons({ navigation }) {
  const { snapshot: lessonSnapshot } = useContext(LessonsContext)
  const { setSnapshot: setReviews } = useContext(ReviewsContext)
  const [lessons, setLessons] = useState([])
  const currentLessons = useRef()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isDialogVisible, setIsDialogVisible] = useState(false)
  const scrollRef = useRef()

  const getLessons = async () => {
    try {
      currentLessons.current = lessonSnapshot.docs.slice(0, 5)
      const lessonData = await getKanaInfo(currentLessons.current)
      setLessons([...lessonData])
    } catch (err) {
      console.log("Error while fetching lessons", err)
    }
  }

  const scrollToLesson = (index) => {
    if (index !== selectedIndex) {
      scrollRef.current.scrollBy(index - selectedIndex)
      setSelectedIndex(index)
    }
  }

  const scrollToPreviousLesson = () => {
    scrollRef.current.scrollBy(-1)
    setSelectedIndex(selectedIndex - 1)
  }

  const onIndexChanged = (index) => {
    if (index === lessons.length) {
      setIsDialogVisible(true)
    }
    setSelectedIndex(index)
  }

  const navigateToReviews = () => {
    setReviews({
      docs: currentLessons.current,
    })
    navigation.navigate("Reviews", { prevScreen: "Lessons" })
  }

  useFocusEffect(
    useCallback(() => {
      setSelectedIndex(0)
      getLessons()
      return () => {
        setSelectedIndex(0)
        setIsDialogVisible(false)
      }
    }, [lessonSnapshot])
  )

  if (lessons.length === 0) return <></>

  return (
    <ReviewsModal
      visible={isDialogVisible}
      setVisible={setIsDialogVisible}
      scrollToPreviousLesson={scrollToPreviousLesson}
      navigateToReviews={navigateToReviews}
    >
      <IntoroWrapper
        logo={false}
        title={"Lessons"}
        backButton={true}
        backNavigation={() => navigation.navigate("IntoroTabs")}
      >
        <View style={{ ...styles.leafletContainer }}>
          <Swiper
            loop={false}
            showsPagination={true}
            onIndexChanged={onIndexChanged}
            bounces={true}
            dot={<></>}
            activeDot={<></>}
            ref={scrollRef}
            key={lessonSnapshot.docs.length}
          >
            {/* TODO: Add dynamic loop rendering */}
            {/* {lessons.map((element, index) => {
            return <Leaflet kana={element} key={index} />
          })} */}
            <Leaflet kana={lessons[0]} key={0} />
            <Leaflet kana={lessons[1]} key={1} />
            <Leaflet kana={lessons[2]} key={2} />
            <Leaflet kana={lessons[3]} key={3} />
            <Leaflet kana={lessons[4]} key={4} />
            {/* TODO: Add Quiz Card */}
            <View style={{ flex: 1 }}></View>
          </Swiper>
        </View>
        <View style={styles.indicator}>
          <Indicator
            lessons={lessons}
            selectedIndex={selectedIndex}
            scrollToLesson={scrollToLesson}
          />
        </View>
      </IntoroWrapper>
    </ReviewsModal>
  )
}

const styles = StyleSheet.create({
  leafletContainer: {
    flex: 6,
    borderRadius: 15,
  },
  indicator: {
    flex: 2,
  },
})
