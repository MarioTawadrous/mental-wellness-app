// screens/SignInScreen.tsx
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

type SignInNavProp = NativeStackNavigationProp<RootStackParamList, "SignIn">;

type Props = { navigation: SignInNavProp };

const SignInScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState<string>("");

  const onSignIn = () => {
    // Very simple validation — replace with real auth
    if (!email.trim() || !password.trim()) {
      Alert.alert("Missing fields", "Please provide email and password.");
      return;
    }
    // TODO: call auth API / handle tokens
    // For now: navigate to Home
    navigation.replace("Main");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: "padding", android: undefined })}
    >
      <View style={styles.top}>
        <Image
          source={require("../assets/login.png")}
          style={styles.illustration}
        />
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />
        <View style={styles.passwordRow}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            style={[styles.input, { flex: 1, marginRight: 8 }]}
          />
          <Image
            source={require("../assets/secure.png")}
            style={styles.lockIcon}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={onSignIn}
          activeOpacity={0.85}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <Text style={styles.small}>Don’t have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={[styles.small, styles.link]}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  top: { alignItems: "center", paddingTop: 40 },
  illustration: {
    width: 160,
    height: 160,
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
  passwordRow: { flexDirection: "row", alignItems: "center" },
  lockIcon: { width: 28, height: 28, tintColor: "#888" },

  button: {
    marginTop: 18,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "#6C63FF", // replace with your theme primary
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "700" },

  row: { flexDirection: "row", justifyContent: "center", marginTop: 12 },
  small: { color: "#666" },
  link: { color: "#6C63FF", fontWeight: "700" },
});
