import { useContext } from "react"
import { StyleSheet, View } from "react-native"

import { ReferenceContext } from "@context/ReferenceContext"

import { IntoroWrapper } from "@components/common"
import { Indicator, Leaflet } from "@components/lessons"

export default function Reference({ navigation }) {
  const { reference: kana } = useContext(ReferenceContext)

  return (
    <IntoroWrapper
      logo={false}
      title={"Reference"}
      backButton={true}
      backNavigation={() => navigation.navigate("IntoroTabs")}
    >
      <View style={{ ...styles.leafletContainer }}>
        <Leaflet kana={kana} key={0} />
      </View>
      <View style={styles.indicator}>
        <Indicator
          lessons={[kana]}
          selectedIndex={0}
          scrollToLesson={() => {}}
        />
      </View>
    </IntoroWrapper>
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
