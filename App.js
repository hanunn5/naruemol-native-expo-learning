import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './components/MyTabs';  // Tab Navigator ที่มีหน้า Home, Activity, Profile, Settings
import LoginScreen from './pages/LoginScreen';  // หน้าจอ Login

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // สถานะการล็อกอิน
  const [email, setEmail] = useState('');  // เก็บอีเมลผู้ใช้

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {!isLoggedIn ? (
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
          >
            {(props) => (
              <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} setEmail={setEmail} />
            )}
          </Stack.Screen>
        ) : (
          <Stack.Screen
            name="Tabs"
            component={MyTabs}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
