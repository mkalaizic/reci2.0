import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { signOut } from "../../lib/appwrite";
import { router } from "expo-router";

const Home = () => {
  // tengo que hacer una call para recibir las recetas
  // si hay recetas tengo que mostrar un screen
  // si no hay recetas tengo que mostrar otro
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Pressable
        onPress={() => {
          signOut();
          router.replace("/");
        }}
      >
        <Text>Sign out</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 3,
  },
});
