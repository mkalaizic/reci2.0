import React, { useState } from "react";
import { router } from "expo-router";
import {
  FormField,
  Pressable,
  TextInput,
  Alert,
  Text,
  StyleSheet,
  View,
} from "react-native";
import ThemedView from "../StyledComponents/ThemedView";
import { signIn } from "../../lib/appwrite";

export default function TemporarySignInContent() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const submitForm = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }
    try {
      await signIn(form.email, form.password);
      //   const result = await getCurrentUser();
      Alert.alert("Success", "User signed in successfully");
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        value={form.email}
        placeholder="email"
        placeholderTextColor="#7B7B8B"
        onChangeText={(e) => setForm({ ...form, email: e })}
      />
      <TextInput
        style={styles.inputField}
        value={form.password}
        placeholder="password"
        placeholderTextColor="#7B7B8B"
        onChangeText={(e) => setForm({ ...form, password: e })}
      />
      <Pressable onPress={submitForm}>
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 3,
  },
  inputField: {
    borderColor: " black",
    borderStyle: "solid",
    borderWidth: 1,
  },
});
