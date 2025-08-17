import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

export default function CountScreen({ navigation }) {
  const [count, setCount] = useState(0);

 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ค่าปัจจุบัน: {count}</Text>

      <View style={styles.buttonContainer}>
        {/* ปุ่มเพิ่มค่า */}
        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Image source={require('../assets/duck-button.png')} style={styles.duckButton} />
        </TouchableOpacity>

        <View style={{ width: 10 }} />

        {/* ปุ่มลดค่า */}
        <TouchableOpacity onPress={() => setCount(count > 0 ? count - 1 : 0)}>
          <Image source={require('../assets/frog-button.png')} style={styles.frogButton} />
        </TouchableOpacity>
      </View>

      {/* ปุ่มกลับ Home (ยังคงใช้ Button ปกติ) */}
      <View style={{ marginTop: 15 }}>
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
    duckButton: {
    width: 150,   // ปรับขนาดตามที่ต้องการ เช่น 40, 50
    height: 150,
    resizeMode: 'contain',
  },
  frogButton: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});