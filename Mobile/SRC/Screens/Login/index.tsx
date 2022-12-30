// criação do Screen, aula 2 min 28, pula pro 36
import { AuthForm } from '../../Components/AuthForm';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../Login/styles';
// aula 6 min 1h
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
// aula 6 min 1h e 55
import React, {useContext} from 'react';
import {Context as AuthContext} from "../../Context/AuthContext";
import { Spacer } from '../../Components/Spacer';

// aula 6 min 58
interface LoginProps {
  navigation: NativeStackNavigationProp <any, any>;
};

export function Login({navigation}: LoginProps) {
  const {login, errorMensage} = useContext(AuthContext);
// aula 6 min 58
  function handleRegisterClick(){
    navigation.navigate("SingUp")
  };
  
  return (
    <>
    <AuthForm
    formTitle= "Faça o Login para Entrar!"
    submitFormButtonText= "Entrar"
    submitFormButtonAction={handleLogin}
    />
    <TouchableOpacity onPress={handleRegisterClick}>
      <Text style={styles.link}>Não Tem Conta? Crie uma Aqui!</Text>
    </TouchableOpacity>
    {/* aula 7 min 45 */}
    {errorMensage && (
      <Spacer>
        <Text style={styles.errorMessage}>{errorMensage}</Text>
      </Spacer>
    )}
    </>
  );
}