import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function ActivityScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <ImageBackground
        source={require('../assets/image5.png')} // ใส่รูปภาพสำหรับ Header
        style={styles.header}
      >
        <Text style={styles.text}>Activity 1</Text>
      </ImageBackground>

      {/* Body Content */}
      <ImageBackground
        source={require('../assets/image9.jpg')} // ใส่รูปภาพสำหรับ Body
        style={styles.body}
      >
        <Text style={styles.text}>Activity 2</Text>
      </ImageBackground>

      {/* Footer */}
      <ImageBackground
        source={require('../assets/image6.jpg')} // ใส่รูปภาพสำหรับ Footer
        style={styles.footer}
      >
        <Text style={styles.text}>Activity 3</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ใช้ flexbox เพื่อให้ container ขยายเต็มหน้าจอ
  },
  header: {
    flex: 1, // Header occupy 1/3 ของหน้าจอ
    justifyContent: 'center', // จัดตำแหน่งข้อความให้อยู่กลาง
    alignItems: 'center', // จัดตำแหน่งข้อความให้อยู่กลาง
  },
  body: {
    flex: 2, // Body occupy 2/3 ของหน้าจอ
    justifyContent: 'center', // จัดตำแหน่งข้อความให้อยู่กลาง
    alignItems: 'center', // จัดตำแหน่งข้อความให้อยู่กลาง
  },
  footer: {
    flex: 1, // Footer occupy 1/3 ของหน้าจอ
    justifyContent: 'center', // จัดตำแหน่งข้อความให้อยู่กลาง
    alignItems: 'center', // จัดตำแหน่งข้อความให้อยู่กลาง
  },
  text: {
    color: 'white', // ทำให้ข้อความเป็นสีขาวเพื่อให้เห็นชัดบนภาพพื้นหลัง
    fontSize: 20,
  },
});
