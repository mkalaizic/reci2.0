import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

export const RootLayout = () => {
  return (
    <Stack>
      <Stack.screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="search/[query]" options={{ headerShown: false }} />
    </Stack>
  );
};
