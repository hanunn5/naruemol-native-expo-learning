import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, ImageBackground } from 'react-native';

export default function SettingsScreen() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <ImageBackground
      source={require('../assets/image6.jpg')}  // ใส่รูปภาพที่ชื่อว่า image6.jpg
      style={styles.background}
      resizeMode="cover"  // ปรับให้ภาพครอบคลุมเต็มพื้นที่
    >
      <View style={styles.container}>
        <Text style={styles.title}>Setting Example</Text>

        {/* Switch */}
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Enable Setting:</Text>
          <Switch value={isEnabled} onValueChange={setIsEnabled} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,  // ใช้ให้ภาพครอบคลุมพื้นที่ทั้งหน้าจอ
    justifyContent: 'center',  // จัดตำแหน่งเนื้อหากลางหน้าจอ
    alignItems: 'center',  // จัดตำแหน่งเนื้อหากลางหน้าจอ
  },
  container: {
    width: '80%',  // ความกว้างของฟอร์ม
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',  // ทำให้พื้นหลังโปร่งใสเล็กน้อย
    borderRadius: 10,
    alignItems: 'center',  // จัดตำแหน่งเนื้อหาให้อยู่กลาง
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',  // จัดเรียงข้อความและ switch เป็นแนวนอน
    alignItems: 'center',  // จัดตำแหน่งข้อความและ switch ให้อยู่กลาง
    marginTop: 20,
  },
  switchText: {
    fontSize: 18,
    marginRight: 10,  // เว้นระยะห่างระหว่างข้อความและ switch
  },
});
