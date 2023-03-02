import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { getCurrentUser } from "@api/auth"
import IntoroTabs from "@screens/IntoroTabs"
import Login from "@screens/Login"
import Onboarding from "@screens/Onboarding"
import Register from "@screens/Register"
import LearningPad from "@screens/LearningPad"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          getCurrentUser() === null ? "Onboarding" : "IntoroTabs"
        }
      >
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
        <Stack.Screen
          name="IntoroTabs"
          component={IntoroTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
