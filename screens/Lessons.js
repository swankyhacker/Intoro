import { useContext, useEffect, useRef, useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import Swiper from "react-native-swiper"

import { LessonsContext } from "@context/LessonsContext"

import { IntoroWrapper } from "@components/common"
import { Indicator, Leaflet } from "@components/lessons"

import { getKanaInfo } from "@api/firestore"

export default function Lessons() {
  const { snapshot } = useContext(LessonsContext)
  const [lessons, setLessons] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const scrollRef = useRef()

  const getLessons = async () => {
    try {
      const currentLessons = await getKanaInfo(snapshot.docs.slice(0, 5))
      setLessons([...currentLessons])
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

  useEffect(() => {
    getLessons()
  }, [])

  if (lessons.length === 0) return <></>

  return (
    <IntoroWrapper logo={false}>
      <View style={styles.icon}>
        <Text style={styles.title}>Lessons</Text>
        {/* <SimpleLineIcons size={40} name="arrow-left-circle" /> */}
      </View>

      <View style={{ ...styles.leafletContainer }}>
        <Swiper
          style={styles.wrapper}
          loop={false}
          showsPagination={true}
          onIndexChanged={(index) => {
            setSelectedIndex(index)
          }}
          onMomentumScrollEnd={(e) => {
            // console.log("End", e.nativeEvent.contentOffset)
          }}
          dot={<></>}
          activeDot={<></>}
          ref={scrollRef}
        >
          {lessons.map((element, index) => {
            return <Leaflet kana={element} key={index} />
          })}
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
  )
}

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
  },
  leafletContainer: {
    flex: 6,
    borderRadius: 15,
  },
  indicator: {
    flex: 2,
  },
})
