import { StyleSheet, Text, View } from "react-native"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "@screens/Home"
import LearningPad from "@screens/LearningPad"

const Stack = createNativeStackNavigator()

const HomeTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LearningPad"
        component={LearningPad}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default HomeTab

const styles = StyleSheet.create({})
