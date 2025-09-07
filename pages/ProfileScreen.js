import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <ImageBackground
      source={require('../assets/image10.png')}  // ใส่ชื่อไฟล์รูปภาพที่ต้องการเป็นพื้นหลัง
      style={styles.background}
      resizeMode="cover"  // ปรับให้รูปภาพครอบคลุมทั้งหน้าจอ
    >
      <View style={styles.container}>
        {/* ข้อมูลโปรไฟล์ */}
        <Text style={styles.name}>อะไร๋หรอห์</Text>
        <Text style={styles.email}>test@demo.com</Text>

        {/* ปุ่ม Log Out */}
        <Text style={styles.logout}>Logout</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,  // ให้รูปภาพครอบคลุมเต็มหน้าจอ
    justifyContent: 'center',  // จัดตำแหน่งข้อความให้ตรงกลาง
    alignItems: 'center',  // จัดตำแหน่งข้อความให้ตรงกลาง
  },
  container: {
    width: '80%',  // ความกว้างของเนื้อหาภายใน
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',  // ทำให้พื้นหลังโปร่งใส
    borderRadius: 10,
    alignItems: 'center',  // จัดตำแหน่งให้อยู่กลาง
  },
  name: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: 'black',
    marginBottom: 20,
  },
  logout: {
    fontSize: 18,
    color: '#ff4d4d',  // สีแดงสำหรับปุ่ม Log out
    textDecorationLine: 'underline',
  },
});
