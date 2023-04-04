import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import Foundation from "react-native-vector-icons/Foundation"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import KanaChart from "@screens/KanaChart"
import Timetable from "@screens/Timetable"
import LearningPad from "@screens/LearningPad"

const IntoroTabs = ({ navigation }) => {
  const Tab = createMaterialBottomTabNavigator()

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#7B9EE3"
      barStyle={{ backgroundColor: "#fff" }}
    >
      <Tab.Screen
        name="Timetable"
        component={Timetable}
        options={{
          tabBarLabel: "Timetable",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="timetable" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={LearningPad}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Kana Chart"
        component={KanaChart}
        options={{
          tabBarLabel: "Kana Chart",
          tabBarIcon: ({ color }) => (
            <Foundation name="clipboard-pencil" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default IntoroTabs
