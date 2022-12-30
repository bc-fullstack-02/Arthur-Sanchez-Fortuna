// criação do authform aula 5 min 1h e 35
import { User, Image, Lock } from 'phosphor-react-native';
import React, {useState}  from 'react';
import { KeyboardAvoidingView, Platform, Text } from 'react-native';
import { THEME } from '../../Theme';
import { Heading } from '../Heading';
import { Input } from '../Input';
import { Spacer } from '../Spacer';
import { styles } from './styles';
import { Button } from '../Button';
import logo from "../../../assets/images/logo.png";
//  aula 7 min 1h e 14
import {Auth} from "../../@Types/auth";

export interface Auth {
    user: string,
    name?: string;
    passord: string;
};

// criar interface do authform
interface AuthFormProps {
    formTitle: string;
    submitFormButtonText: string;
    submitFormButtonAction: (auth: Auth) => void;
    showNameInput?: boolean;
}

export function AuthForm({formTitle, submitFormButtonText, submitFormButtonAction}: AuthFormProps) {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    return (
        <KeyboardAvoidingView style={styles.container}
        contentContainerStyle={styles.containerPosition}
        behavior={Platform.OS === 'ios' ? "padding" : "position"}>

        <Image source={logo} style={logo} resizeMethod="scale"/>
        <Heading title='Sysmap Parrot' subtitle={formTitle}/>
        <Input.Root>
            <Input.Icon>
            <User color={THEME.COLORS.INPUT}/>
            </Input.Icon>
            <Input.Input
            value={user}
            onChangeText={setUser} 
            placeholder='Digite seu Usuário'
            placeholderTextColor={THEME.COLORS.INPUT}
            autoCapitalize="none"
            autoCorrect/>
        </Input.Root>

        <Spacer/>
        
        <Input.Root>
            <Input.Icon>
            <Lock color={THEME.COLORS.INPUT}/>
            </Input.Icon>
            <Input.Input
            value={password}
            onChangeText={setPassword} 
            placeholder='Digite sua Senha'
            placeholderTextColor={THEME.COLORS.INPUT}
            autoCapitalize="none"
            autoCorrect
            secureTextEntry/>
        </Input.Root>

        <Spacer/>
        <Button title={submitFormButtonText} 
        onPress={() => submitFormButtonAction({user, password})}/>
        </KeyboardAvoidingView>
    );
}