import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

// นำเข้าหน้าจอต่าง ๆ
import HomeScreen from '../pages/HomeScreen';
import ActivityScreen from '../pages/ActivityScreen';
import ProfileScreen from '../pages/ProfileScreen';
import SettingsScreen from '../pages/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      {/* หน้า Home */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/frog1.png') : require('../assets/image1.png')}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />

      {/* หน้า Activity */}
      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/frog2.png') : require('../assets/image1.png')}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />

      {/* หน้า Profile */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/frog3.png') : require('../assets/image1.png')}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />

      {/* หน้า Settings */}
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/frog4.png') : require('../assets/image1.png')}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
