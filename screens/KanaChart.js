import { useEffect, useState } from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { ActivityIndicator, MD2Colors } from "react-native-paper"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"

import { IntoroButton, IntoroWrapper } from "@components/common"
import { KanaLevel } from "@components/kanaChart"

import { getAllKana } from "@api/firestore"

import Kana from "@types/types.js"

export default function KanaChart() {
  const [type, setType] = useState(Kana.HIRAGANA)
  const [currentKana, setCurrentKana] = useState({})

  const handleSwitch = () => {
    setType(() => (type === Kana.HIRAGANA ? Kana.KATAKANA : Kana.HIRAGANA))
  }

  const getKana = async () => {
    try {
      const allKana = await getAllKana(type)
      setCurrentKana({ ...allKana })
    } catch (err) {
      console.log("Error while fetching kana chart:", err)
    }
  }

  useEffect(() => {
    getKana()
  }, [type])

  return (
    <IntoroWrapper>
      <View style={styles.container}>
        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.chartTitle}>{`${type} Chart`}</Text>
        </View>

        {/* Level Chart */}
        <View style={styles.chartContainer}>
          {Object.keys(currentKana).length !== 0 ? (
            <ScrollView>
              {Object.keys(currentKana).map((element) => {
                return (
                  <KanaLevel
                    kana={currentKana[element]}
                    type={type}
                    level={element}
                    key={element}
                  />
                )
              })}
            </ScrollView>
          ) : (
            <ActivityIndicator
              animating={true}
              color={MD2Colors.red800}
              size={"large"}
              style={styles.indicator}
            />
          )}
        </View>
        {/* Switch Button -> Switch between Hiragana and Katakana */}
        <View style={styles.buttonContainer}>
          <IntoroButton
            onPress={handleSwitch}
            icon={<SimpleLineIcons size={18} name="refresh" />}
            fontStyle={styles.buttonFontStyle}
            text={type}
          />
        </View>
      </View>
    </IntoroWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
  },
  chartContainer: {
    flex: 6,
    justifyContent: "center",
  },
  chartTitle: {
    fontSize: 26,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  buttonContainer: {
    flex: 1,
    width: "40%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttonFontStyle: {
    fontSize: 17,
    fontWeight: "600",
    textTransform: "capitalize",
  },
})
