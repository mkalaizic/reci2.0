import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
      <Text>Not registered yet?</Text>
      <Link href="/sign-up" asChild>
        <Pressable>
          <Text>Go to sign up</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
