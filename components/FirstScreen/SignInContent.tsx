import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { signIn } from "../../lib/appwrite";
import { router } from "expo-router";

const INPUT_OFFSET = 20;

export default function SignInContent() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = (): void => {
    setForm({
      email: "",
      password: "",
    });
  };

  const submitForm = async () => {
    setIsLoading(true);

    try {
      if (form.email === "" || form.password === "") {
        Alert.alert("Error", "Please fill in all fields");
      } else {
        await signIn(form.email, form.password);
        // const result = await getCurrentUser();

        Alert.alert("Success", "User signed in successfully");
        router.replace("/home");
        resetForm();
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <Text style={styles.subtitle}>Please login to continue</Text>
        <View style={styles.inputsContainer}>
          <TextInput
            keyboardType="email-address"
            onChangeText={(e) => setForm({ ...form, email: e })}
            placeholder="Email"
            placeholderTextColor="#505060"
            returnKeyType="done"
            style={styles.inputControl}
            value={form.email}
          />

          <TextInput
            keyboardType="visible-password"
            onChangeText={(e) => setForm({ ...form, password: e })}
            placeholder="Password"
            placeholderTextColor="#505060"
            returnKeyType="done"
            style={styles.inputControl}
            value={form.password}
          />
        </View>

        <View style={styles.formAction}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          >
            <View style={styles.btn}>
              <View style={{ width: 32 }} />
              <Pressable onPress={submitForm}>
                {isLoading ? (
                  <ActivityIndicator />
                ) : (
                  <Text style={styles.btnText}>Continue</Text>
                )}
              </Pressable>
              <MaterialCommunityIcons
                color="#fff"
                name="arrow-right"
                size={20}
                style={{ marginLeft: 12 }}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.formActionSpacer}>Or continue with</Text>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          >
            <View style={styles.btnSecondary}>
              <MaterialCommunityIcons
                color="#000"
                name="phone"
                size={22}
                style={{ marginRight: 12 }}
              />
              <Text style={styles.btnSecondaryText}>SMS</Text>
              <View style={{ width: 34 }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          >
            <View style={styles.btnSecondary}>
              <MaterialCommunityIcons
                color="#000"
                name="google"
                size={22}
                style={{ marginRight: 12 }}
              />
              <Text style={styles.btnSecondaryText}>Google</Text>
              <View style={{ width: 34 }} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    // paddingTop: 24,
    paddingRight: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    paddingLeft: 25,
  },
  inputsContainer: {
    display: "flex",
    gap: 7,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#929292",
    paddingBottom: 20,
  },
  /** Form */
  form: {
    marginTop: 20,
    marginBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginVertical: 12,
  },
  formActionSpacer: {
    marginVertical: 32,
    fontSize: 14,
    fontWeight: "600",
    color: "#4b4858",
    textAlign: "center",
  },
  formFooter: {
    fontSize: 14,
    fontWeight: "600",
    color: "#51505a",
    textAlign: "center",
  },
  /** Input */
  input: {
    marginBottom: 7,
  },
  inputLabel: {
    position: "absolute",
    width: INPUT_OFFSET,
    lineHeight: 44,
    top: 0,
    left: 0,
    bottom: 0,
    marginHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
    fontWeight: "500",
    color: "#8b8989",
    zIndex: 9,
    paddingLeft: 5,
  },
  inputControl: {
    height: 44,
    backgroundColor: "#efefef",
    paddingLeft: INPUT_OFFSET,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#343333",
    borderWidth: 1,
    borderColor: "transparent",
    borderStyle: "solid",
  },
  /** Button */
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#000",
    borderColor: "#000",
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
  },
  btnSecondary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "transparent",
    borderColor: "#000",
    marginBottom: 12,
  },
  btnSecondaryText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#000",
  },
});
