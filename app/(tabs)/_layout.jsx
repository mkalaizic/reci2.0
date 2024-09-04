import React from "react";
import { Tabs } from "expo-router";
import { TabIcon } from "../../components/Reci/TabIcon";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          // tabBarActiveTintColor: "#FFA001",
          // tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            //   backgroundColor: "#161622",
            //   borderTopWidth: 1,
            //   borderTopColor: "#232533",
            height: 70,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "gray",
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                color={focused ? "#000" : "#929292"}
                name="home"
                size={22}
                style={{ marginRight: 12 }}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,

            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                color={focused ? "#000" : "#929292"}
                name="pencil-plus"
                size={22}
                style={{ marginRight: 12 }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="shopping"
          options={{
            title: "Shopping",
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "gray",
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                color={focused ? "#000" : "#929292"}
                name="cart-arrow-right"
                size={22}
                style={{ marginRight: 12 }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                color={focused ? "#000" : "#929292"}
                name="logout"
                size={22}
                style={{ marginRight: 12 }}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
