import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import theme from '../styles/theme';
export default function WellnessCard({ title, subtitle, onPress, image }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card} activeOpacity={0.85}>
      {image && <Image source={image} style={styles.image} resizeMode="cover" />}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10
  },
  image: { width: 64, height: 64, borderRadius: 12, marginRight: 12 },
  content: { flex: 1 },
  title: { fontSize: 16, fontWeight: '700', color: theme.colors.text },
  subtitle: { fontSize: 13, color: theme.colors.muted, marginTop: 4 }
});
