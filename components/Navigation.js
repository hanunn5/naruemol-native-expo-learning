import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from '../pages/LoginScreen';
import HomeScreen from '../pages/HomeScreen';
import ActivityScreen from '../pages/ActivityScreen';
import ProfileScreen from '../pages/ProfileScreen';
import SettingsScreen from '../pages/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs({ email, setIsLoggedIn }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home">
        {props => <HomeScreen {...props} email={email} />}
      </Tab.Screen>
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Profile">
        {props => <ProfileScreen {...props} email={email} setIsLoggedIn={setIsLoggedIn} />}
      </Tab.Screen>
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function Navigation({ isLoggedIn, setIsLoggedIn, email, setEmail }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name="Main">
          {props => <MainTabs {...props} email={email} setIsLoggedIn={setIsLoggedIn} />}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="Login">
          {props => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} setEmail={setEmail} />}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
}
