import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from "../Components/CustomTabBar";
import HomePage from "../Screens/HomePage";
import RecordPage from "../Screens/RecordPage";
import SettingsPage from "../Screens/SettingsPage";
import LoginPage from "../Screens/LoginPage";

// define stack navigator
const Stack = createStackNavigator();

// define tab navigator
const Tab = createBottomTabNavigator();


// create tab layout
export const TabLayout = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="HomePage" component={HomePage} />
      <Tab.Screen name="SettingsPage" component={SettingsPage} />
    </Tab.Navigator>
  );
};


// create stack navigator
export function MyStack() {
  return (
    <Stack.Navigator>
       <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabLayout"
        component={TabLayout}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecordPage"
        component={RecordPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
