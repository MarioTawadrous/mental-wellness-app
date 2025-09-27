import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import theme from '../styles/theme';
export default function MeditationScreen({ navigation, route }) {
  const { id } = route.params || {};
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <AppHeader title="Meditation" onProfile={() => navigation.navigate('Profile')} />
      <View style={styles.container}>
        <Text style={styles.title}>Session {id || ''}</Text>
        <Text style={styles.desc}>A short guided breathing exercise.</Text>
        <TouchableOpacity style={styles.playBtn} onPress={() => alert('Play sound (hook audio here)')}>
          <Text style={{ color: '#fff', fontWeight: '700' }}>Play</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: '800', color: theme.colors.text },
  desc: { marginTop: 8, color: theme.colors.muted },
  playBtn: { marginTop: 18, padding: 16, borderRadius: 12, backgroundColor: theme.colors.primary, alignItems: 'center' }
});
