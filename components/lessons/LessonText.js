import { StyleSheet, Text } from "react-native"

import Colors from "@types/colors"

export default function CustomText({ text }) {
  try {
    if (text && text.trim().length < 1) {
      return <></>
    }

    const tags = {
      "*KH*": "*/KH*",
      "*KK*": "*/KK*",
      "*UN*": "*/UN*",
    }

    const textStyles = {
      "*KH*": { backgroundColor: Colors.HIRAGANA_CHARACTER },
      "*UN*": styles.underlined,
      "*KK*": { backgroundColor: Colors.KATAKANA_CHARACTER },
    }

    const findStartTag = text.indexOf("*")
    if (findStartTag === -1) {
      return <Text>{text}</Text>
    }
    const findStartTagEnd = text.indexOf("*", findStartTag + 1)
    const tag = text.slice(findStartTag, findStartTagEnd + 1)
    const findEndTag = text.indexOf(tags[tag])

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
  } catch (err) {
    console.log(err)
  }
}

const styles = StyleSheet.create({
  underlined: {
    textDecorationLine: "underline",
  },
})
