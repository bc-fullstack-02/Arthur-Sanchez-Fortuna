import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
// aula 7 min 1h e 20
import { UserCircle, Chat, Heart } from 'phosphor-react-native';
// aula 7 min 1h e 54
import {Context as AuthContext} from "../../Context/AuthContext";

export function Home() {
  // aula 7 min 1h e 52
  const {user} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        {/* aula 7 min 1h e 20 */}
        <UserCircle color='white' size={48} weight="thin"/>
        <Text style={styles.userNameText}>{user}</Text>
      </View>
      
      <View style={styles.content}>
        {/* aula 7 min 1h e 47 */}
        <View style={styles.post}>

          <View style={styles.postHeading}>
            <UserCircle color='white' size={48} weight="thin"/>
            <Text style={styles.postUserText}>OTRO FULANO AVULSA</Text>
          </View>
      
          {/* aula 7 min 1h e 34 */}
          <View style={styles.contentBody}>
            <Text style={styles.contentText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perspiciatis veritatis facere obcaecati, enim repudiandae, 
              recusandae magnam optio quaerat laboriosam asperiores quidem officiis iste eaque error id iure, architecto repellendus.
            </Text>
          </View>

          <View style={styles.footer}>
            <Chat size={24} color="white" weight='thin'/>
            <Text style={styles.number}>9K</Text>
            <Heart size={24} color="white" weight='thin'/>
            <Text style={styles.number}>9K</Text>
          </View>

        </View>
      </View>
    </View>
  );
}