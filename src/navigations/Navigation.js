import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home/Home";
import * as Icon from "react-native-feather";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TasksScreen from "../screens/TasksScreen/TasksScreen";
import TimeStudies from "../screens/TimeStudies/TimeStudies";
import NotificationsScreen from "../screens/NotificationsScreen/NotificationsScreen";
import TestNotification from "../screens/TestNotification";
import Setting from "../screens/Setting/Setting";
import TasksTableScreen from "../screens/TasksTableScreen/TasksTableScreen";
import { tabBarBadgeStyle } from "./style";
import PrivacyPolicy from "../screens/PrivacyPolicy/PrivacyPolicy";
import AboutUsScreen from "../screens/AboutUsScreen/AboutUsScreen";
const Stack = createNativeStackNavigator();
const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen
      options={{
        headerShown: false,
        presentation: "modal",
        animationTypeForReplace: "push",
        animation: "slide_from_right",
      }}
      name="TasksScreen"
      component={TasksScreen}
    />
    <Stack.Screen
      options={{
        headerShown: false,
        presentation: "modal",
        animationTypeForReplace: "push",
        animation: "slide_from_right",
      }}
      name="TasksTableScreen"
      component={TasksTableScreen}
    />
  </Stack.Navigator>
);
const SettingStack = () => (
  <Stack.Navigator
    initialRouteName="Setting"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Setting" component={Setting} />
    <Stack.Screen
      options={{
        headerShown: false,
        presentation: "modal",
        animationTypeForReplace: "push",
        animation: "slide_from_right",
      }}
      name="PrivacyPolicy"
      component={PrivacyPolicy}
    />
    <Stack.Screen
      options={{
        headerShown: false,
        presentation: "modal",
        animationTypeForReplace: "push",
        animation: "slide_from_right",
      }}
      name="AboutUsScreen"
      component={AboutUsScreen}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: route.name === "ProfileScreen" ? "white" : "#002A52",
          height: 65,
        },
        tabBarActiveTintColor: "#18AFBA",
        headerShown: false,
      })}
      sceneContainerStyle={{
        backgroundColor: "white",
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Icon.Home color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Icon.User color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TimeStudies"
        component={TimeStudies}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Icon.Clock name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationsScreen"
        component={TestNotification}
        options={{
          tabBarBadge: ".",
          tabBarBadgeStyle,
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Icon.Bell name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingStack"
        component={SettingStack}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Icon.Settings name="bell" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
