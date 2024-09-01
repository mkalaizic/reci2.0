import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      <Text>Have an account already?</Text>
      <Link href="/sign-in" asChild>
        <Pressable>
          <Text>Go to sign in</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
