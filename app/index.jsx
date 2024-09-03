import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import SignInContent from "../components/SignInContent";
import SignUpQuestion from "../components/SignUpQuestion";
import ThemedView from "../components/StyledComponents/ThemedView";

const App = () => {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.reciTitle}>Reci</Text>
      <SignInContent />
      <SignUpQuestion />
    </ThemedView>
  );
};

export default App;

const styles = StyleSheet.create({
  reciTitle: {
    paddingTop: 60,
    fontSize: 40,
    paddingBottom: 20,
  },
});
