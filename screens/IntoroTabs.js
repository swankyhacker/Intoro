import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Foundation from "react-native-vector-icons/Foundation"
import Timetable from "@screens/Timetable"
import HomeTab from "./HomeTab"
import KanaTab from "./KanaTab"

const IntoroTabs = () => {
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
        name="HomeTab"
        component={HomeTab}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="KanaTab"
        component={KanaTab}
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
