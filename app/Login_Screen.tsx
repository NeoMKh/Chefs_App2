import { Text, StyleSheet, View, Pressable, Image } from 'react-native'
import { Link,useNavigation } from 'expo-router';
import React from 'react';

interface Login_ScreenProps {    
    onNavigate: (screen: 'Home' | 'Details' | 'Login') => void;
  }


export default function Login_Screen({onNavigate }: Login_ScreenProps) {
  

  
 
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../assets/images/Chefs.jpg')} style={{width: 150, height: 200}}/>
        <Text style={styles.text}>Welcome to Chef Chrisfels Menu app</Text>
        <Pressable  onPress={() => onNavigate('Details')}>
         <Text style={styles.link}>View Menu</Text>
        </Pressable> 
        <Pressable  onPress={() => onNavigate('Home')}>
         <Text style={styles.link}>Add Items</Text>
        </Pressable>  
      </View>
    )
  
}

const styles = StyleSheet.create({

  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },

  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },

})