// criação dessa bagaça aula 8 m,in 57
import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Stack } from 'phosphor-react-native';
import { Home } from '../Home';
import { CreatePost } from '../CreatePost';

export function HomeNavegationScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShow: false,
        statusBarStyle: "dark",
      }}
    >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="CreatePost" component={CreatePost}/>
    </Stack.Navigator>
  );
}