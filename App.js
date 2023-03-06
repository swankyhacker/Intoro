import { NavigationContainer } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { LogBox } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { signInWithEmail } from "@api/auth"
import { getData } from "@api/storage"

import { LessonsProvider } from "@context/LessonsContext"
import { AppNavigator } from "@navigators/index"

LogBox.ignoreAllLogs() //Hide all warning notifications on front-end

export default function App() {
  const [signedIn, setSignedIn] = useState(null)

  const asyncLogin = async () => {
    const storedCredentials = await getData("credentials")
    if (storedCredentials) {
      try {
        await signInWithEmail(
          storedCredentials.email,
          storedCredentials.password
        )
        setSignedIn(true)
      } catch (err) {
        console.log("Invalid async storage credentials:", err)
        setSignedIn(false)
      }
    }
  }

  useEffect(() => {
    asyncLogin()
  }, [])

  if (signedIn === null) {
    return <></>
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <LessonsProvider>
          <AppNavigator
            initialRouteName={signedIn === false ? "Onboarding" : "IntoroTabs"}
          />
        </LessonsProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
