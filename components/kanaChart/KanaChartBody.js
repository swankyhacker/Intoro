import { ScrollView, StyleSheet, Text, View } from "react-native"
import React from "react"
import KanaLevel from "@components/kanaChart/KanaLevel"
import IntoroButton from "@components/common/IntoroButton"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"

const KanaChartBody = ({ kana, handleSwitch }) => {
  //TODO: Fetching Function kana chart data.

  return (
    <View style={styles.container}>
      {/* Title */}
      <View>
        <Text style={styles.chartTitle}>{`${kana} Chart`}</Text>
      </View>

      {/* Level Chart */}
      <ScrollView style={styles.chartContainer}>
        <KanaLevel kana={kana} level={"1"} />
        <KanaLevel kana={kana} level={"2"} />
        <KanaLevel kana={kana} level={"3"} />
        <KanaLevel kana={kana} level={"4"} />
      </ScrollView>

      {/* Switch Button -> Switch between Hiragana and Katakana */}
      <View
        style={{
          flex: 1,
          width: "40%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <IntoroButton
          onPress={handleSwitch}
          icon={<SimpleLineIcons size={18} name="refresh" />}
          fontStyle={{
            fontSize: 17,
            fontWeight: "600",
          }}
          text={kana}
        />
      </View>
    </View>
  )
}

export default KanaChartBody

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chartContainer: {
    height: 360,
    marginBottom: 50,
  },
  chartTitle: {
    fontSize: 26,
    fontWeight: "600",
  },
})
