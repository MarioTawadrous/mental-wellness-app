import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import theme from '../styles/theme';
export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <AppHeader title="Profile" onProfile={() => {}} />
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: '800' }}>Your Profile</Text>
        <Text style={{ color: theme.colors.muted, marginTop: 8 }}>Manage subscription, data and preferences.</Text>
        <TouchableOpacity style={{ marginTop: 20, padding: 12, backgroundColor: '#fff', borderRadius: 10 }}>
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
