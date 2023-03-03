import { StyleSheet, Text, View, TextInput } from "react-native"
import { useState } from "react"
import { IntoroButton } from "@components/common"
const FlashcardDetails = ({ element, page, width }) => {
  // TODO: add function to save notes dynamically
  const [note, setNote] = useState("")
  const [isEdit, setIsEdit] = useState(false)
  const toggleMode = () => setIsEdit((previousState) => !previousState)
  if (page === "1") {
    return (
      <View
        style={{
          width: width - 40,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "700" }}>
          {element._character}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: "300" }}>
          {element._reading}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "700", marginTop: 10 }}>
          Pronounciation
        </Text>
        <Text style={{ fontSize: 14, fontWeight: "300" }}>
          {element._extraNote}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "700", marginTop: 10 }}>
          Mnemonic
        </Text>
        <Text style={{ fontSize: 14, fontWeight: "300" }}>
          {element._mnemonic}
        </Text>
      </View>
    )
  } else {
    return (
      <View
        style={{
          width: width - 40,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "300" }}>Notes</Text>
        <View style={{ height: 200, padding: 20 }}>
          {isEdit ? (
            <TextInput
              autoCorrect={false}
              style={styles.input}
              onChangeText={setNote}
              value={note}
              multiline
              numberOfLines={10}
            />
          ) : (
            <Text>{note}</Text>
          )}
        </View>

        <IntoroButton
          text={isEdit ? "Save Note" : "Edit Notes"}
          onPress={toggleMode}
          buttonStyle={{ width: "80%" }}
        ></IntoroButton>
      </View>
    )
  }
}

export default FlashcardDetails

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    minWidth: 250,
    borderWidth: 1,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
})
