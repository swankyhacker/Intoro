import { StyleSheet } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import KanaChart from "@screens/KanaChart"
import Flashcard from "./Flashcard"

const Stack = createNativeStackNavigator()

const KanaTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="KanaChart"
        component={KanaChart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Flashcard"
        component={Flashcard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default KanaTab

const styles = StyleSheet.create({})
