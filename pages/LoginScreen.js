import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function LoginScreen({ setIsLoggedIn, setEmail }) {
  const [inputEmail, setInputEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (inputEmail === 'test@demo.com' && password === '123456') {
      setEmail(inputEmail);
      setIsLoggedIn(true);
    } else {
      alert('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/image4.png')}  // ใช้ไฟล์ภาพเป็นพื้นหลัง
      style={styles.background}
      resizeMode="cover"  // ปรับให้ภาพครอบคลุมทั้งหน้าจอ
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={inputEmail}
          onChangeText={setInputEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        
        {/* ปุ่ม Login */}
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,  // ทำให้ ImageBackground ครอบคลุมทั้งหน้าจอ
    justifyContent: 'center',  // จัดตำแหน่งให้อยู่กลางหน้าจอ
    alignItems: 'center',  // จัดตำแหน่งให้อยู่กลางหน้าจอ
  },
  container: {
    width: '80%',  // ความกว้างของฟอร์ม
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // ใส่พื้นหลังโปร่งใสให้ฟอร์ม
    borderRadius: 10,
    alignItems: 'center',  // จัดตำแหน่งให้อยู่กลาง
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',  // กำหนดความกว้างของ input ให้เต็มที่
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50',  // สีพื้นหลังของปุ่ม
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
