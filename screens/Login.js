import { useRef, useState } from "react"
import { Dimensions, Image, StyleSheet, Text, View } from "react-native"

import { AuthButton, AuthFooter, ErrorSnackbar } from "@components/auth"
import { GoogleLoginButton, IntoroTextInput } from "@components/common"

import { signInWithEmail, signInWithGoogle } from "@api/auth"
import { storeData } from "@api/storage"

import intoroLogo from "@assets/logo/IntoroLogo.png"

const { width } = Dimensions.get("screen")

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [snackBar, setSnackBar] = useState(false)
  const errorMessage = useRef("")

  const handleLogin = async (email, password) => {
    try {
      const user = await signInWithEmail(email, password)
      await storeData("credentials", user)
      navigation.navigate("IntoroTabs")
    } catch (error) {
      console.log("Error", error.message)
      errorMessage.current = error.message
      setSnackBar(true)
    }
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          top: 50,
          paddingLeft: 20,
          justifyContent: "flex-start",
          width,
        }}
      >
        <Image source={intoroLogo} />
      </View>

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
          onChangeText={(text) => setEmail(text)}
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
      {/* Google Login Button */}
      <GoogleLoginButton
        text={"Sign in with Google"}
        onPress={signInWithGoogle}
      />
      <AuthFooter
        message={"Don't have an account? "}
        navMessage={"Register Now"}
        nextPage={"Register"}
      />
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
    marginTop: 40,
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
})

export default Login
