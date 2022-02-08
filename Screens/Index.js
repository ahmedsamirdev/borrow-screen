import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import AddScreen from "./AddScreen";
import ListScreen from "./ListScreen";
import NotifyScreen from "./NotifyScreen";

import { Feather, FontAwesome, Entypo } from "@expo/vector-icons";
import {  Text, Image, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export default function Index() {
  
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerTitleAlign: "center",
        headerShown: true,
        headerTransparent: true,
        tabBarActiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: () => <Text style={styles.header}>BORROW</Text>,
          headerRight: () => (
            <Image
              style={styles.headerRight}
              source={require("../assets/right-logo.png")}
            />
          ),
          headerLeft: () => (
            <Image
              style={styles.headerLeft}
              source={require("../assets/left-logo.png")}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AddScreen"
        component={AddScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="add-to-list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ListScreen"
        component={ListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list-ul" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="NotifyScreen"
        component={NotifyScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="bell" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  headerRight: {
    marginRight: 22,
  },
  headerLeft: {
    marginLeft: 22,
  },
});
