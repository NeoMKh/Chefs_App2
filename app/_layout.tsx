import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HomeScreen from './HomeScreen'; // Replace with the actual path to HomeScreen
import DetailsScreen from './DetailsScreen'; // Replace with the actual path to DetailsScreen

export default function App() {
  const [items, setItems] = useState<string[]>([]); // Shared state for items
  const [currentScreen, setCurrentScreen] = useState<'Home' | 'Details'>('Home'); // Manage screens manually

  const handleNavigate = (screen: 'Home' | 'Details') => {
    setCurrentScreen(screen);
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'Home' ? (
        <HomeScreen setItems={setItems} items={items} onNavigate={handleNavigate} />
      ) : (
        <DetailsScreen items={items} onNavigate={handleNavigate} />
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
