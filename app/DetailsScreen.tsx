import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';

interface DetailsScreenProps {
  items: { name: string; price: number; category: 'Starter' | 'Main' | 'Dessert' }[];
  onNavigate: (screen: 'Home' | 'Details' | 'Login'| 'Final Menu') => void;
  setItems: (items: { name: string; price: number; category: 'Starter' | 'Main' | 'Dessert' }[]) => void;
}

export default function DetailsScreen({ items, onNavigate, setItems  }: DetailsScreenProps) {
  const calculateAveragePrice = () => {
    if (items.length === 0) return 0;
    const total = items.reduce((sum, item) => sum + item.price, 0);
    return (total / items.length).toFixed(2);
  };

  const handleDelete = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index); // Remove item at the given index
    setItems(updatedItems);
  };

  const categorizedItems = items.reduce(
    (acc, item) => {
      acc[item.category].push(item);
      return acc;
    },
    { Starter: [], Main: [], Dessert: [] } as {
      Starter: { name: string; price: number; category: 'Starter' | 'Main' | 'Dessert' }[];
      Main: { name: string; price: number; category: 'Starter' | 'Main' | 'Dessert' }[];
      Dessert: { name: string; price: number; category: 'Starter' | 'Main' | 'Dessert' }[];
    }
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Items List</Text>
      <Text style={styles.average}>
        Average Price: R{calculateAveragePrice()}
      </Text>
      <Text style={styles.subtitle}>Starters:</Text>
      {categorizedItems.Starter.map((item, index) => (
        <Text key={index} style={styles.item}>{`${item.name} - R${item.price}`}</Text>
      ))}
      <Text style={styles.subtitle}>Mains:</Text>
      {categorizedItems.Main.map((item, index) => (
        <Text key={index} style={styles.item}>{`${item.name} - R${item.price}`}</Text>
      ))}
      <Text style={styles.subtitle}>Desserts:</Text>
      {categorizedItems.Dessert.map((item, index) => (
        <Text key={index} style={styles.item}>{`${item.name} - R${item.price}`}</Text>
      ))}
      {categorizedItems.Main.map((item, index) => (
       <Pressable key={index} style={styles.deleteButton} onPress={() => handleDelete(index)}>
         <Text style={styles.deleteText}>Delete {item.name}</Text>
       </Pressable>
      ))}

       <Pressable
        style={styles.deleteButton}
        onPress={() => handleDelete(items.indexOf(items[items.length - 1]))}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </Pressable>
     
      
      <Pressable style={styles.link} onPress={() => onNavigate('Home')}>
        <Text style={styles.linkText}>Add Items</Text>
      </Pressable>

      <Pressable style={styles.link} onPress={() => onNavigate('Final Menu')}>
        <Text style={styles.linkText}>Final Menu</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#0262aa',
    borderBlockColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  average: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  item: {
    fontSize: 16,
    padding: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  link: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    padding: 5,
    borderRadius: 5,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});


function setItems(updatedItems: { name: string; price: number; category: "Starter" | "Main" | "Dessert"; }[]) {
  throw new Error('Function not implemented.');
}

