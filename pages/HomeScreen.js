import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/image8.png')}  // ใช้ไฟล์ภาพเป็นพื้นหลัง
      style={styles.background}  // กำหนดขนาดและตำแหน่งของภาพพื้นหลัง
    >
      <View style={styles.container}>
        <Text style={styles.text}>ยินดีต้อนรับ</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,  // ทำให้ ImageBackground ครอบคลุมทั้งหน้าจอ
    justifyContent: 'center',  // จัดตำแหน่งให้ข้อความอยู่กลาง
    alignItems: 'center',  // จัดตำแหน่งให้ข้อความอยู่กลาง
  },
  container: {
    width: '80%',  // กำหนดความกว้างของฟอร์ม
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',  // ทำให้พื้นหลังของข้อความโปร่งใส
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    color: '#33691e',  // เปลี่ยนสีข้อความให้เป็นสีขาวเพื่อให้อ่านง่ายบนพื้นหลัง
  },
});