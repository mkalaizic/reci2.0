import { Text, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import ThemedView from "./StyledComponents/ThemedView";

const SignUpQuestion = () => {
  return (
    <ThemedView>
      <View style={styles.container}>
        <Text>Not registered yet?</Text>
        <Link href="/sign-up" asChild>
          <Pressable>
            <Text style={{ textDecorationLine: "underline" }}>Sign Up</Text>
          </Pressable>
        </Link>
      </View>
    </ThemedView>
  );
};

export default SignUpQuestion;
const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
  },
});
