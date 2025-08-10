import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CountScreen({ navigation }) {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ค่าปัจจุบัน: {count}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="เพิ่มค่า"
          onPress={() => setCount(count + 1)}
        />
        <View style={{ width: 20 }} />
        <Button
          title="ลบค่า"
          onPress={() => setCount(count > 0 ? count - 1 : 0)}
        />
      </View>

      <View style={{ marginTop: 30 }}>
        <Button
          title="Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 24,
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});