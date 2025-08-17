import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StyleExample = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Welcome to My App</Text>
    <Text style={styles.paragraph}>This is a sample text.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    padding: 16,
    justifyContent: 'center', // จัดกึ่งกลางแนวตั้ง
    alignItems: 'center',     // จัดกึ่งกลางแนวนอน
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
});

export default StyleExample;
