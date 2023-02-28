import { useState } from "react"

import { IntoroWrapper } from "@components/common"
import KanaChartBody from "@components/kanaChart/KanaChartBody"

const KanaChart = ({ navigation }) => {
  const [kana, setKana] = useState("Hiragana")

  const handleSwitch = () => {
    if (kana === "Hiragana") {
      setKana("Katakana")
    } else {
      setKana("Hiragana")
    }
  }

  return (
    <IntoroWrapper>
      <KanaChartBody kana={kana} handleSwitch={handleSwitch} />
    </IntoroWrapper>
  )
}

export default KanaChart
