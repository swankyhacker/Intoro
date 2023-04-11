import { createNativeStackNavigator } from "@react-navigation/native-stack"

import {
  Login,
  Onboarding,
  Register,
  IntoroTabs,
  Lessons,
  Reviews,
  Reference,
} from "@screens"

const Stack = createNativeStackNavigator()

export default function AppNavigator({ initialRouteName }) {
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
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
      <Stack.Screen
        name="Lessons"
        component={Lessons}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Reviews"
        component={Reviews}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Reference"
        component={Reference}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
