// criar Loading aula 2 min 1h e 27
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export function Loading() {
  return (
    <View style={styles.container}>
        <Text>Carregando...</Text>
    </View>
  );
}