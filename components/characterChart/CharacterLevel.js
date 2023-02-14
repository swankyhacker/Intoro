import { StyleSheet, Text, View, Dimensions, Image } from "react-native"
const { width, height } = Dimensions.get("screen")

import IntoroButton from "@components/common/IntoroButton"
import CharacterGrid from "@components/characterChart/CharacterGrid"

const CharacterLevel = ({ level }) => {
  return (
    <View>
      <View style={{ width: 100, marginLeft: "auto" }}>
        <IntoroButton
          buttonStyle={{
            paddingHorizontal: 0,
            paddingVertical: 6,
          }}
          fontStyle={{
            fontSize: 14,
            fontWeight: "500",
          }}
          text={`Level ${level}`}
        />
      </View>
      <CharacterGrid />
    </View>
  )
}

export default CharacterLevel
