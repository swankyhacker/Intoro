import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native"
import IntoroTextInput from "../components/common/IntoroTextInput"
import GoogleLoginButton from "../components/common/GoogleLoginButton"
// import { Text } from "react-native-paper"

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = () => {}

  const handleLogin = () => {}

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
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ fontSize: 16, fontWeight: "bold", padding: 10 }}>or</Text>

      <View style={styles.googleButtonContainer}>
        <GoogleLoginButton text={"Sign in with Google"} />
      </View>

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
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 6,
  },
  button: {
    backgroundColor: "#D4AD65",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  googleButtonContainer: {
    width: "70%",
    marginTop: 6,
  },
  footerContainer: {
    marginTop: 10,
    alignItems: "center",
    width: "80%",
  },
})

export default Login
