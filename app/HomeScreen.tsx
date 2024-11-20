import React, { useState } from 'react';
import { View, Text, TextInput, Button, Pressable,  StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';



interface HomeScreenProps {
  items: { name: string; price: number; category: 'Starter' | 'Main' | 'Dessert' }[];
  setItems: React.Dispatch<
    React.SetStateAction<
      { name: string; price: number; category: 'Starter' | 'Main' | 'Dessert' }[]
    >
  >;
  onNavigate: (screen: 'Home' | 'Details' | 'Login') => void;
}

export default function HomeScreen({ items, setItems, onNavigate }: HomeScreenProps) {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>(''); // Input as string to parse later
  const [category, setCategory] = useState<'Starter' | 'Main' | 'Dessert'>('Starter');

  const handleAddItem = () => {
    if (!name.trim() || !price.trim() || isNaN(Number(price))) {
      alert('Please enter a valid name and price.');
      return;
    }
    setItems([
      ...items,
      { name: name.trim(), price: parseFloat(price.trim()), category },
    ]);
    setName('');
    setPrice('');
    setCategory('Starter');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Item Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter item name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter item price"
        value={price}
        keyboardType="numeric"
        onChangeText={setPrice}
      />
      
       
      <Button title="Add Item" onPress={handleAddItem} />
      <Pressable style={styles.link} onPress={() => onNavigate('Details')}>
        <Text style={styles.linkText}>View Items</Text>
      </Pressable>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  picker: {
    height: 50,
    marginBottom: 10,
  },
  link: {
    marginTop: 10,
    alignItems: 'center',
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});
