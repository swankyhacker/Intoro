import { useNavigation } from "@react-navigation/native"
import { StyleSheet, Text, View } from "react-native"

const AuthFooter = ({ message, navMessage, nextPage }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.footerContainer}>
      <Text style={{ fontSize: 14, padding: 10 }}>
        {message}
        <Text
          onPress={() => navigation.navigate(nextPage)}
          style={{ fontWeight: "bold" }}
        >
          {navMessage}
        </Text>
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 10,
    alignItems: "center",
    width: "80%",
  },
})

export default AuthFooter
