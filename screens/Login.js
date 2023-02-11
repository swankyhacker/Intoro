import { useRef, useState } from "react"
import { StyleSheet, Text, View } from "react-native"

import { AuthButton, ErrorSnackbar } from "@components/auth"
import { GoogleLoginButton, IntoroTextInput } from "@components/common"

import { signInWithEmail } from "@api/auth"

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [snackBar, setSnackBar] = useState(false)
  const errorMessage = useRef("")

  const handleLogin = async (email, password) => {
    try {
      const user = await signInWithEmail(email, password)
      console.log("User", user)
    } catch (error) {
      console.log("Error", error.message)
      errorMessage.current = error.message
      setSnackBar(true)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>
          You have been missed,
          {"\n"}
          Let's sign you in
        </Text>
      </View>

      {/* Email and Password Input Field */}
      <View style={styles.inputContainer}>
        <IntoroTextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text)
            console.log(text)
          }}
        />
        <IntoroTextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>

      {/* Sign In Button */}
      <AuthButton
        label={"Sign in"}
        onPress={() => handleLogin(email, password)}
      />

      <Text style={{ fontSize: 16, fontWeight: "bold", padding: 10 }}>or</Text>

      <GoogleLoginButton text={"Sign in with Google"} />

      {/* Google Login Button */}
      <View style={styles.footerContainer}>
        <Text style={{ fontSize: 14, padding: 10 }}>
          Dont have an account?{" "}
          <Text
            onPress={() => navigation.navigate("Register")}
            style={{ fontWeight: "bold" }}
          >
            Register Now
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
    marginBottom: 30,
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
    marginTop: 10,
    alignItems: "center",
    width: "80%",
  },
})

export default Login
