// criação singup aula 6 min 48
import React from 'react';
import api from '../../Services/api';
import { Auth, AuthForm } from '../../Components/AuthForm';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../Login/styles';
// aula 6 min 1h e 3
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

// aula 6 min 1h e 3
interface SingUpProps {
  navigation: NativeStackNavigationProp <any, any>;
};

export function SingUp({navigation}: SingUpProps) {
  function handleLoginClick(){
    navigation.navigate("Login")
  };
  
  async function handleSingUp(auth: Auth){
    try
      {await api.post("/security/register", auth);
       navigation.navigate("Login");}
    catch(error)
      {console.error(error)}
  };
  
  return (
    <>
    <AuthForm
    formTitle= "Faça o Cadastrp e Comece a Usar!"
    submitFormButtonText= "Cadastrar"
    submitFormButtonAction={handleSingUp}
    />
    <TouchableOpacity onPress={handleLoginClick}>
      <Text style={styles.link}>Não Tem Conta? Crie uma Aqui!</Text>
    </TouchableOpacity>
    </>
  );
}