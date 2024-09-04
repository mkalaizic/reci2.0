import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SignInContent from "../components/FirstScreen/SignInContent";
import SignUpQuestion from "../components/FirstScreen/SignUpQuestion";
import ThemedView from "../components/StyledComponents/ThemedView";
import { GuestQuestion } from "../components/FirstScreen/GuestQuestion";

const App = () => {
  return (
    <ThemedView style={styles.homeWrapper}>
      <Text style={styles.reciTitle}>Reci</Text>
      <SignInContent />
      <View>
        <SignUpQuestion />
        <GuestQuestion />
      </View>
    </ThemedView>
  );
};

export default App;

const styles = StyleSheet.create({
  homeWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  reciTitle: {
    paddingTop: 60,
    fontSize: 40,
    paddingBottom: 20,
    paddingLeft: 25,
    fontFamily: "Bebas Neue",
  },
});
