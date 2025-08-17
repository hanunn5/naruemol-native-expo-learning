import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';

const ChatLayout = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* ส่วนบน: Header */}
      <ImageBackground
        source={require('../assets/image6.jpg')} // ใช้เส้นทางที่ถูกต้องสำหรับ .jpg
        style={styles.header}
      >
        <Text style={styles.headerText}>Header</Text>
      </ImageBackground>

      {/* ส่วนกลาง: Body Content */}
      <ImageBackground
        source={require('../assets/image4.jpg')} // ใช้เส้นทางที่ถูกต้องสำหรับ .jpg
        style={styles.body}
      >
        <Text style={styles.bodyText}>Body Content</Text>
      </ImageBackground>

      {/* ส่วนล่าง: Footer */}
      <ImageBackground
        source={require('../assets/image5.jpg')} // ใช้เส้นทางที่ถูกต้องสำหรับ .jpg
        style={styles.footer}
      >
        <Text style={styles.footerText}>Footer</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
  },
  body: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  bodyText: {
    color: 'white',
    fontSize: 24,
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  footerText: {
    color: 'white',
    fontSize: 24,
  },
});

export default ChatLayout;
