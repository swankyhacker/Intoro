import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useEffect, useState } from "react"
import { LogBox } from "react-native"

import IntoroTabs from "@screens/IntoroTabs"
import Login from "@screens/Login"
import Onboarding from "@screens/Onboarding"
import Register from "@screens/Register"

import { signInWithEmail } from "@api/auth"
import { getData } from "@api/storage"

const Stack = createNativeStackNavigator()
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
        return true
      } catch (err) {
        console.log("Invalid async storage credentials:", err)
        return false
      }
    }
    return false
  }

  useEffect(() => {
    setSignedIn(() => asyncLogin())
  }, [])

  // TODO: Add splash screen while storage is being fetched

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {signedIn === false ? (
          <>
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="IntoroTabs"
              component={IntoroTabs}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
