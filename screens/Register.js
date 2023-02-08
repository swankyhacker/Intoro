import { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import React from "react"
import IntoroTextInput from "../components/common/IntoroTextInput"
import GoogleLoginButton from "../components/common/GoogleLoginButton"

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleRegister = () => {}
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

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleRegister} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ fontSize: 16, fontWeight: "bold", padding: 10 }}>or</Text>

      <View style={styles.googleButtonContainer}>
        <GoogleLoginButton text={"Sign up with Google"} />
      </View>

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
  buttonContainer: {
    width: "80%",
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
  googleButtonContainer: {
    width: "70%",
  },
  footerContainer: {
    marginTop: 10,
    alignItems: "center",
    width: "80%",
  },
})
