// criação do Screen, aula 2 min 28, pula pro 36
import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';
import { THEME } from '../../Theme';
// impotando Heading, aula 2 min 1h e 15
import { Heading } from '../../Components/Heading';
// importar a Logo, aula 2 min 1h e 38
import logo from "../../../assets/images/logo.png";
// importanto Text_Input aula 4 min 1h e 49
import { Input } from '../../Components/Input';
// importando user aula 4 min 1h e 53
import { User } from 'phosphor-react-native';

export function Login() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={logo} resizeMethod="scale"/>
      <Heading title='Sysmap Parrot' subtitle='Faça seu Login para Usar!'/>
      <Input.Root>
        <Input.Icon>
          <User color={THEME.COLORS.INPUT}/>
        </Input.Icon>
        <Input.Input></Input.Input>
      </Input.Root>
    </View>
  );
}