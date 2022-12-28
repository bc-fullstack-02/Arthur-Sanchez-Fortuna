// criação da Spacer aula 5 min 34
import React, {ReactNode} from 'react';
import { View } from 'react-native';
import { styles } from './styles';

// interface min 35 aula 5
interface SpacerProps {
    children?: ReactNode;
};

export function Spacer(props: SpacerProps) {
  return (<View style={styles.container}>{props.children}</View>);
}