import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";

type SplashNavProp = NativeStackNavigationProp<RootStackParamList, "Splash">;

export default function SplashScreen() {
  const navigation = useNavigation<SplashNavProp>();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        // ✅ look for a saved token (mock example)
        const userToken = await AsyncStorage.getItem("userToken");

        if (userToken) {
          // if token exists → go to Main (Bottom Tabs)
          navigation.replace("Main");
        } else {
          // no token → go to SignIn
          navigation.replace("SignIn");
        }
      } catch (error) {
        console.error("Error checking login status:", error);
        navigation.replace("SignIn");
      }
    };

    setTimeout(checkLoginStatus, 1500); // small delay for splash feel
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mental Wellness App</Text>
      <ActivityIndicator size="large" color="#4CAF50" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: { fontSize: 22, marginBottom: 20, fontWeight: "bold" },
});
