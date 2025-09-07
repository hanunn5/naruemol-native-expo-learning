import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ setIsLoggedIn, setEmail }) {
  const [inputEmail, setInputEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (inputEmail === 'test@demo.com' && password === '123456') {
      setEmail(inputEmail);  // ส่งอีเมลไปที่ App.js
      setIsLoggedIn(true);  // เปลี่ยนสถานะการล็อกอินเป็น true เมื่อข้อมูลถูกต้อง
    } else {
      alert('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
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
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  input: { width: '80%', padding: 10, borderWidth: 1, marginBottom: 10 },
  loginButton: { backgroundColor: '#4CAF50', padding: 10, borderRadius: 5 },
  loginButtonText: { color: '#fff', fontSize: 18 },
});
