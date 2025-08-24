import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const FlexExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/image1.png')} style={styles.image} />
        <Image source={require('../assets/image2.png')} style={styles.image} />
        <Image source={require('../assets/image3.png')} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',  // ปรับความกว้างตามต้องการ
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 10,  // ปรับระยะห่างระหว่างภาพ
  },
});

export default FlexExample;