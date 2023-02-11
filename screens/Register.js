import { useRef, useState } from "react"
import { StyleSheet, Text, View } from "react-native"

import { AuthButton, ErrorSnackbar } from "@components/auth"
import GoogleLoginButton from "@components/common/GoogleLoginButton"
import IntoroTextInput from "@components/common/IntoroTextInput"

import { createUserWithEmail } from "api/auth"

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [snackBar, setSnackBar] = useState(false)
  const errorMessage = useRef("")

  const handleRegister = async () => {
    try {
      const user = await createUserWithEmail(email, password)
      console.log("User", user)
    } catch (error) {
      console.log("Error", error.message)
      errorMessage.current = error.message
      setSnackBar(true)
    }
  }

  const checkPasswords = () => {
    if (password === confirmPassword) {
      handleRegister()
    } else {
      console.log("Passwords mismatch")
      errorMessage.current = "Passwords mismatch"
      setSnackBar(true)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Let's Register!</Text>
        <Text style={styles.subtitle}>
          Have an
          {"\n"}
          enjoyable experience!
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <IntoroTextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <IntoroTextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <IntoroTextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry
        />
      </View>
      <AuthButton label={"Register"} onPress={checkPasswords} />
      <Text style={{ fontSize: 16, fontWeight: "bold", padding: 10 }}>or</Text>
      <GoogleLoginButton text={"Sign up with Google"} />
      <View style={styles.footerContainer}>
        <Text style={{ fontSize: 14, padding: 10 }}>
          Already have an account?{" "}
          <Text
            onPress={() => navigation.navigate("Login")}
            style={{ fontWeight: "bold" }}
          >
            Login
          </Text>
        </Text>
      </View>
      <ErrorSnackbar
        visible={snackBar}
        onDismiss={() => setSnackBar(false)}
        message={errorMessage.current}
      />
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    width: "80%",
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 34,
  },
  subtitle: {
    marginBottom: 20,
    fontSize: 24,
  },
  inputContainer: {
    width: "80%",
  },
  footerContainer: {
    marginTop: 2,
    alignItems: "center",
    width: "80%",
  },
})
