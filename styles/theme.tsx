import React from 'react';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default {
  colors: {
    background: '#FAFBFF',
    primary: '#6C63FF',
    accent: '#FF9AA2',
    text: '#222',
    muted: '#8A8A8A',
    card: '#FFFFFF'
  },
  spacing: (n) => n * 8,
  radius: 14,
  width,
  height
};
