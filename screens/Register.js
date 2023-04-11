import { useRef, useState } from "react"
import { StyleSheet, Text, View, Dimensions, Image } from "react-native"
import { useForm, Controller } from "react-hook-form"

import { AuthButton, AuthFooter, ErrorSnackbar } from "@components/auth"
import GoogleLoginButton from "@components/common/GoogleLoginButton"
import IntoroTextInput from "@components/common/IntoroTextInput"

import { createUserWithEmail, updateUserProfile } from "api/auth"
import { storeData } from "@api/storage"

import intoroLogo from "@assets/logo/IntoroLogo.png"

const { width } = Dimensions.get("screen")

const Register = ({ navigation }) => {
  const [snackBar, setSnackBar] = useState(false)
  const errorMessage = useRef("")

  // react hook form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const handleRegister = async (
    displayName,
    email,
    password,
    confirmPassword
  ) => {
    if (password === confirmPassword) {
      try {
        await createUserWithEmail(email, password)
        await updateUserProfile(displayName)
        await storeData("credentials", { email, password })
        navigation.navigate("IntoroTabs")
      } catch (error) {
        console.log("Error", error.message)
        errorMessage.current = error.message
        setSnackBar(true)
      }
    } else {
      console.log("Passwords mismatch")
      errorMessage.current = "Passwords mismatch"
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
        <Text style={styles.title}>Let's Register!</Text>
        <Text style={styles.subtitle}>
          Have an
          {"\n"}
          enjoyable experience!
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <IntoroTextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Display Name"
            />
          )}
          name="displayName"
        />
        {errors.displayName && <Text>Display name required.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <IntoroTextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
            />
          )}
          name="email"
        />
        {errors.email?.type == "pattern" && <Text>Invalid Email</Text>}
        {errors.email?.type == "required" && <Text>Email is required.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <IntoroTextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
              placeholder="Password"
            />
          )}
          name="password"
        />

        {errors.password && <Text>Password is required.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <IntoroTextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
              placeholder="Confirm Password"
            />
          )}
          name="confirmPassword"
        />
        {errors.confirmPassword && (
          <Text>Password Confirmation is required.</Text>
        )}
      </View>
      <AuthButton
        label={"Register"}
        onPress={handleSubmit((data) =>
          handleRegister(
            data.displayName,
            data.email,
            data.password,
            data.confirmPassword
          )
        )}
      />
      <Text style={{ fontSize: 16, fontWeight: "bold", padding: 10 }}>or</Text>
      <GoogleLoginButton text={"Sign up with Google"} />
      <AuthFooter
        message={"Already have an account? "}
        navMessage={"Login"}
        nextPage={"Login"}
      />
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
    marginTop: 50,
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
    marginBottom: 20,
  },
  footerContainer: {
    marginTop: 10,
    alignItems: "center",
    width: "80%",
  },
})
