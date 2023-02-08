import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native"
import IntoroTextInput from "../components/common/IntoroTextInput"
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

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ fontSize: 16, fontWeight: "bold", padding: 10 }}>or</Text>

      {/* TODO: Add sign in with google button */}

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
    fontSize: 28,
  },
  subtitle: {
    marginBottom: 20,
    fontSize: 24,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 0.5,
  },
  buttonContainer: {
    width: "80%%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
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
})

export default Login
