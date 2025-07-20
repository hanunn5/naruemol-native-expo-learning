import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>นฤมล แน่นอุดร ทธด.102</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    textcolor: '#fff',
    backgroundColor: '#b3e5fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
