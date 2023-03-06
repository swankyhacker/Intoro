import { Text, StyleSheet } from "react-native"

export default function CustomText({ text }) {
  if (text && text.trim().length < 1) {
    return <></>
  }
  console.log(text)

  const tags = {
    "*KH*": "*/KH*",
    "*KK*": "*/KK*",
    "*UN*": "*/UN*",
  }

  const textStyles = {
    "*KH*": styles.highlight,
    "*UN*": styles.underlined,
    "*KK*": styles.highlight,
  }

  const findStartTag = text.indexOf("*")
  if (findStartTag === -1) {
    return <Text>{text}</Text>
  }
  const findStartTagEnd = text.indexOf("*", findStartTag + 1)
  const tag = text.slice(findStartTag, findStartTagEnd + 1)
  const findEndTag = text.indexOf(tags[tag])

  console.log("Reached 1", tag)
  return (
    <Text>
      <Text>{text.slice(0, findStartTag)}</Text>
      <Text style={textStyles[tag]}>
        {<CustomText text={text.slice(findStartTagEnd + 1, findEndTag)} />}
      </Text>
      <Text>
        {<CustomText text={text.slice(findEndTag + tags[tag].length)} />}
      </Text>
    </Text>
  )
}

const styles = StyleSheet.create({
  highlight: {
    backgroundColor: "green",
    borderRadius: "100%",
  },
  underlined: {
    textDecorationLine: "underline",
  },
})
