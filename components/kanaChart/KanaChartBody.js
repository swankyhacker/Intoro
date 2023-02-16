import { StyleSheet, Text, View } from "react-native"
import React from "react"
import KanaLevel from "@components/kanaChart/KanaLevel"
import IntoroButton from "@components/common/IntoroButton"

const KanaChartBody = ({ kana, handleSwitch }) => {
  return (
    <View style={styles.container}>
      {/* Title */}
      <View>
        <Text style={styles.chartTitle}>{`${kana} Chart!`}</Text>
      </View>

      {/* Level Chart */}
      <View style={styles.chartContainer}>
        <KanaLevel type={kana} level={"1"} />
        <KanaLevel type={kana} level={"2"} />
      </View>

      {/* Switch Button -> Switch between Hiragana and Katakana */}
      <View
        style={{
          flex: 1,
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <IntoroButton
          onPress={handleSwitch}
          buttonStyle={{}}
          logoURI={"https://cdn-icons-png.flaticon.com/512/519/519848.png"}
          fontStyle={{
            fontSize: 18,
            fontWeight: "700",
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
  chartTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
})
