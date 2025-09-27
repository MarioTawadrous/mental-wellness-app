import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import AppHeader from "../components/AppHeader";
import WellnessCard from "../components/WellnessCard";
import theme from "../styles/theme";
const sample = [
  {
    id: "1",
    title: "5-min Breathing",
    subtitle: "Calm your mind in 5 minutes",
    image: require("../assets/home_card1.png"),
  },
  {
    id: "2",
    title: "Guided Meditation",
    subtitle: "Focus and clarity",
    image: require("../assets/home_card2.png"),
  },
  {
    id: "3",
    title: "Sleep Stories",
    subtitle: "Stories for restful sleep",
    image: require("../assets/home_card3.png"),
  },
];
// const sample = [
//   { id: '1', title: '5-min Breathing', subtitle: 'Calm your mind in 5 minutes', image: require('../assets/home_card1.png') },
//   { id: '2', title: 'Guided Meditation', subtitle: 'Focus and clarity', image: require('../assets/home_card2.png') },
//   { id: '3', title: 'Sleep Stories', subtitle: 'Stories for restful sleep', image: require('../assets/home_card3.png') }
// ];
export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <AppHeader
        title="Home"
        onProfile={() => navigation.navigate("Profile")}
      />
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={styles.greet}>Good afternoon 👋</Text>
        <Text style={styles.h2}>Today</Text>
        {sample.map((s) => (
          <WellnessCard
            key={s.id}
            title={s.title}
            subtitle={s.subtitle}
            image={s.image}
            onPress={() => navigation.navigate("Meditation", { id: s.id })}
          />
        ))}
        <TouchableOpacity
          onPress={() => navigation.navigate("Journal")}
          style={styles.journalBtn}
        >
          <Text style={{ fontWeight: "700" }}>Open Journal</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  greet: { fontSize: 16, color: theme.colors.muted },
  h2: {
    fontSize: 22,
    fontWeight: "800",
    marginVertical: 12,
    color: theme.colors.text,
  },
  journalBtn: {
    marginTop: 24,
    padding: 16,
    borderRadius: 12,
    backgroundColor: theme.colors.accent,
    alignItems: "center",
  },
});
