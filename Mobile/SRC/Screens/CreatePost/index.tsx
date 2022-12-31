// criação do createpopst aula 8 min 1h
import React, {useState, useContext} from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from './styles';
import { Input } from '../../Components/Input';
import { THEME } from '../../Theme';
import { Spacer } from '../../Components/Spacer';
import { Button } from '../../Components/Button';
import { UserCircle } from 'phosphor-react-native';
  // aula 8 min 1h e 19
import { Context as AuthContext} from '../../Context/AuthContext';
import { Context as PostContext } from '../../Context/PostContext';

export function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // aula 8 min 1h e 19
  const [user] = useContext(AuthContext);
  const {createPost} = useContext(PostContext);

  return (
    (<View style={styles.container}>
      <View style={styles.heading}>
          {/* aula 7 min 1h e 20 */}
          <UserCircle color='white' size={48} weight="thin"/>
          <Text style={styles.userNameText}>{user}</Text>
          {/* aula 8 min 1h e 3 */}
          <View style={{flex: 1}}></View>
        </View>
        
      {/* aula 8 min 1h e 10 */}
      <Spacer>
        <Input.Root>
          <Input.Input
          value={title}
          onChangeText={setTitle} 
          placeholder='Digite o Titulo do Post'
          placeholderTextColor={THEME.COLORS.INPUT}
          autoCorrect/>
          </Input.Root>
        <Spacer/>
        <Input.Root>
          <Input.Input
          value={description}
          onChangeText={setDescription} 
          placeholder='Digite a Descrição do Post'
          placeholderTextColor={THEME.COLORS.INPUT}
          autoCorrect/>
          </Input.Root>

        <Spacer/>
        <Button title="Postar" onPress={() =>{
          createPost && createPost({title,description})
        }}/>
        </Spacer>
    
    </View>)
  );
}