import CircularProgress from "react-native-circular-progress-indicator"

const IntoroProgress = ({ value, text }) => {
  return (
    <CircularProgress
      value={value}
      radius={75}
      progressValueColor={"#D4AD65"}
      inActiveStrokeColor={"#C6daee"}
      activeStrokeColor={"#6F8FCE"}
      title={text}
      titleColor={"#155698"}
      titleStyle={{ fontWeight: "bold" }}
      titleFontSize={16}
      valueSuffix={"%"}
      progressValueFontSize={45}
      clockwise={false}
    />
  )
}

export default IntoroProgress
