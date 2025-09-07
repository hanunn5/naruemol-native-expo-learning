import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./components/Navigation";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <NavigationContainer>
      <Navigation 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn} 
        email={email} 
        setEmail={setEmail} 
      />
    </NavigationContainer>
  );
}
