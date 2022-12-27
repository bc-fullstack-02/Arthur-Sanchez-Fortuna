// criação do background aula 2 min 44
import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

// criar interface aula 1 min 50
interface Props {
  children?: React.ReactNode;
};

export function BackGround({ children }: Props) {
  return (<View style={styles.container}>{ children }</View>);
}