import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import theme from '../styles/theme';
export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome back</Text>
      <Text style={styles.sub}>Sign in to continue</Text>
      <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('Home')}>
        <Text style={styles.btnText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: theme.colors.background },
  header: { fontSize: 28, fontWeight: '800', color: theme.colors.text },
  sub: { marginTop: 6, color: theme.colors.muted },
  input: { marginTop: 16, padding: 12, backgroundColor: '#fff', borderRadius: 10, borderWidth: 1, borderColor: '#eee' },
  btn: { marginTop: 20, padding: 14, backgroundColor: theme.colors.primary, borderRadius: 12, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: '700' }
});
