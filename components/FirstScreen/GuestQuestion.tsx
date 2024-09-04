import { Text, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export const GuestQuestion = () => {
  return (
    <View style={styles.container}>
      <Text>Or</Text>
      <Link href="/home" asChild>
        <Pressable onPress={() => console.log("hello")}>
          <Text style={{ textDecorationLine: "underline" }}>
            continue as a guest
          </Text>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignSelf: "center",
    paddingBottom: 30,
  },
});
