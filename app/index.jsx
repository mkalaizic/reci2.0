import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Reci</Text>
      <Link href="/sign-in" asChild>
        <Pressable>
          <Text>Sign In</Text>
        </Pressable>
      </Link>
      <Link href="/sign-up" asChild>
        <Pressable>
          <Text>Sign Up</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
