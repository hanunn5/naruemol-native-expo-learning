import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function ProfileScreen({ setIsLoggedIn, setEmail, navigation }) {
  const handleLogout = () => {
    setIsLoggedIn(false);  // เปลี่ยนสถานะการล็อกอินเป็น false เมื่อผู้ใช้ออกจากระบบ
    setEmail('');  // รีเซ็ตอีเมล
    navigation.navigate('Login');  // นำทางกลับไปหน้า Login หลังจาก logout
  };

  return (
    <ImageBackground
      source={require('../assets/image10.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.name}>อะไร๋หรอห์</Text>
        <Text style={styles.email}>test@demo.com</Text>

        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    alignItems: 'center',
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
    color: '#ff4d4d',
    textDecorationLine: 'underline',
  },
});
