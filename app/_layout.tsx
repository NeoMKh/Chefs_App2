import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen'; // Replace with the actual path to HomeScreen
import DetailsScreen from './DetailsScreen'; 
import LoginScreen from './Login_Screen'; 
import FinalMenu from './FinalMenu';


export default function App() {
  const [items, setItems] = useState<
    { name: string; price: number; category: 'Starter' | 'Main' | 'Dessert' }[]
  >([]); // Shared state for items
  const [currentScreen, setCurrentScreen] = useState<'Home' | 'Details' | 'Login'| 'Final Menu'>('Login'); // Manage screens manually

  const handleNavigate = (screen: 'Home' | 'Details' | 'Login'| 'Final Menu') => {
    setCurrentScreen(screen);
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'Login' && (
        <LoginScreen onNavigate={handleNavigate} />
      )}
      {currentScreen === 'Home' && (
        <HomeScreen setItems={setItems} items={items} onNavigate={handleNavigate} />
      )}
      {currentScreen === 'Details' && (
        <DetailsScreen setItems={setItems} items={items}  onNavigate={handleNavigate} />
      )}
      {currentScreen === 'Final Menu' && (
        <FinalMenu items={items}  onNavigate={handleNavigate} />
      )}      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
