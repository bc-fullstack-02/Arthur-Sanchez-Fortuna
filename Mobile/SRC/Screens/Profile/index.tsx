import { UserCircle } from 'phosphor-react-native';
import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
// aula 7 min 1h e 52
import {Context as AuthContext} from "../../Context/AuthContext";

export function Profile() {
// aula 7 min 1h e 52
  const {user, logout} = useContext(AuthContext);

  // aula 7 min 1h e 50
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <UserCircle color='white' size={48} weight="thin"/>
        <Text style={styles.userNameText}>{user}</Text>
      </View>
      <Button title="sair" onPress={logout} style={{width: 200}}/>
    </View>);
}