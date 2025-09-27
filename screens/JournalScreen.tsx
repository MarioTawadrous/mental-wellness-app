import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import AppHeader from '../components/AppHeader';
import theme from '../styles/theme';
export default function JournalScreen({ navigation }) {
  const [text, setText] = useState('');
  const [entries, setEntries] = useState([]);
  const addEntry = () => {
    if (!text.trim()) return;
    setEntries([{ id: Date.now().toString(), body: text.trim() }, ...entries]);
    setText('');
  };
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <AppHeader title="Journal" onProfile={() => navigation.navigate('Profile')} />
      <View style={{ padding: 20 }}>
        <TextInput value={text} onChangeText={setText} placeholder="How are you feeling today?" style={styles.input} multiline />
        <TouchableOpacity style={styles.btn} onPress={addEntry}><Text style={{color:'#fff',fontWeight:'700'}}>Add Entry</Text></TouchableOpacity>
        <FlatList
          data={entries}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => (
            <View style={styles.entry}><Text style={{color:theme.colors.text}}>{item.body}</Text></View>
          )}
          style={{ marginTop: 20 }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: { minHeight: 100, backgroundColor: '#fff', padding: 12, borderRadius: 12, borderWidth: 1, borderColor: '#eee' },
  btn: { marginTop: 12, padding: 14, backgroundColor: theme.colors.primary, borderRadius: 10, alignItems: 'center' },
  entry: { marginTop: 12, backgroundColor: theme.colors.card, padding: 12, borderRadius: 10 }
});
