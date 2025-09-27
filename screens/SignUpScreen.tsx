// screens/SignUpScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types";

type SignUpNavProp = NativeStackNavigationProp<RootStackParamList, "SignUp">;

type Props = { navigation: SignUpNavProp };

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = () => {
    if (!email.trim() || !password.trim() || !name.trim()) {
      Alert.alert("Missing info", "Please complete all fields.");
      return;
    }
    // TODO: call sign-up API
    navigation.replace("Home"); // or navigate to SignIn, verify email, etc.
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: "padding", android: undefined })}
    >
      <View style={styles.top}>
        <Image
          source={require("../assets/signup.png")}
          style={styles.illustration}
        />
        <Text style={styles.title}>Create account</Text>
        <Text style={styles.subtitle}>
          Join and start your wellness journey
        </Text>
      </View>

      <View style={styles.form}>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Full name"
          style={styles.input}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password (min 6 chars)"
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={onSignUp}
          activeOpacity={0.85}
        >
          <Text style={styles.buttonText}>Create account</Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <Text style={styles.small}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text style={[styles.small, styles.link]}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  top: { alignItems: "center", paddingTop: 40 },
  illustration: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 8,
  },
  title: { fontSize: 24, fontWeight: "700", color: "#222" },
  subtitle: { marginTop: 6, color: "#666" },

  form: { paddingHorizontal: 20, paddingBottom: 40 },
  input: {
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#EEE",
    marginTop: 12,
  },

  button: {
    marginTop: 18,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "#6C63FF",
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "700" },

  row: { flexDirection: "row", justifyContent: "center", marginTop: 12 },
  small: { color: "#666" },
  link: { color: "#6C63FF", fontWeight: "700" },
});
