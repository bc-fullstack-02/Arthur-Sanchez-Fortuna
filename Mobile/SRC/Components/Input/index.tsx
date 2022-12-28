// criação textinput aula 4 min 1h e 42
import React, { ReactNode } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { styles } from './styles';

// criar interface TextInput aula 4 min 1h e 48
interface TextInputRootProps {
  children: ReactNode
};

function TextInputRoot({children}: TextInputRootProps) {
  return (
    <View style={styles.container}>{ children }</View>
  );
}
// criar interface TextInputInputProps aula 4 min 2h e 8
interface TextInputInputProps extends TextInputProps{};

// criar funções aula 4 min 44
function TextInputInput(props: TextInputInputProps){
  return(<TextInput style={styles.input} {...props} ></TextInput>);
};

// criar interface TextInputIcon aula 4 min 1h e 50
interface TextInputIconProps{
  children: ReactNode
};

function TextInputIcon({children}: TextInputIconProps){
  return(<View> {children} </View>);
};

export const Input = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};