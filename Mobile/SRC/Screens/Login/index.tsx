// criação do Screen, aula 2 min 28, pula pro 36
import React from 'react';
import api from '../../Services/api';
import { AuthForm } from '../../Components/AuthForm';

export function Login() {
  // aula 5 min 1h e 23
  
  async function handleLogin(auth: Auth){
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
    submitFormButtonAction={handleLogin}
    linkDescription="Não Tem Conta? Crie uma Aqui!"
    routeName=''
    />
  );
}