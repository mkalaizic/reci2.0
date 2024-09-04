import { Text, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SignUpQuestion = () => {
  return (
    <View style={styles.container}>
      <Text>Not registered yet?</Text>
      <Link href="/sign-up" asChild>
        <Pressable>
          <Text style={{ textDecorationLine: "underline" }}>Sign Up</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default SignUpQuestion;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignSelf: "center",
    paddingBottom: 15,
  },
});
