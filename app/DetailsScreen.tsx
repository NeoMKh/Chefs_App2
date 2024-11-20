import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';

interface DetailsScreenProps {
  items: { name: string; price: number; category: 'Starter' | 'Main' | 'Dessert' }[];
  onNavigate: (screen: 'Home' | 'Details' | 'Login') => void;
}

export default function DetailsScreen({ items, onNavigate }: DetailsScreenProps) {
  const calculateAveragePrice = () => {
    if (items.length === 0) return 0;
    const total = items.reduce((sum, item) => sum + item.price, 0);
    return (total / items.length).toFixed(2);
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
        Average Price: ${calculateAveragePrice()}
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
      <Pressable style={styles.link} onPress={() => onNavigate('Home')}>
        <Text style={styles.linkText}>Go Back</Text>
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
  average: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  item: {
    fontSize: 16,
    padding: 5,
  },
  link: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});
