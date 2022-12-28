// cricação do Button aula 5 min 59
import React from 'react';
import { Text, TouchableOpacityProps, TouchableOpacity } from 'react-native';
import { styles } from './styles';

// criando interface aula 5 min 1h, explicação min 1h e 2
interface ButtonProps extends TouchableOpacityProps {
    title: string;
};

export function Button(props: ButtonProps) {
  return (
  <TouchableOpacity style={styles.container} {...props}>
    <Text style={styles.title}>{props.title}</Text>
  </TouchableOpacity>);
}