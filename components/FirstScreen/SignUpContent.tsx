import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  Pressable,
} from "react-native";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { createUser, signOut } from "../../lib/appwrite";

const SignUpContent = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    signOut();
  }, []);

  const submitForm = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    try {
      //   await signIn(form.email, form.password);
      //   const result = await getCurrentUser();

      await createUser(form.email, form.password);
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
};

export default SignUpContent;

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

// form to sign up
// require name, last name, email address and password
// agregar link al sign in
// agregar back button
