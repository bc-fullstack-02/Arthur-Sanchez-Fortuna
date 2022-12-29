// criação do register, aula 6 min 45
import React from 'react';
import api from '../../Services/api';
import { Auth, AuthForm } from '../../Components/AuthForm';

export function Register() {  
  async function handleRegister(auth: Auth){
    try
      {const response = await api.post("/security/login", auth);
       console.log(response);}
    catch(error)
      {console.error(error)}
  };
  
  return (
    <AuthForm
    formTitle= "Faça o Login para Entrar!"
    submitFormButtonText= "Entrar"
    submitFormButtonAction={handleRegister}
    linkDescription="Não Tem Conta? Crie uma Aqui!"
    routeName=''
    />
  );
}