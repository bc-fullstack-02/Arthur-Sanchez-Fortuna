import React, {useContext, useEffect} from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
// aula 7 min 1h e 20
import { UserCircle, Chat, Heart, PencilSimple } from 'phosphor-react-native';
// aula 7 min 1h e 54
import {Context as AuthContext} from "../../Context/AuthContext";
import { SafeAreaView } from 'react-native-safe-area-context';
// importando FocusAwareStatusBa aula 8 min 7 as 4H DA MANHA
import FocusAwareStatusBar from "../../Components/FocusAwareStatusBar/index";
import { THEME } from '../../Theme';
//  aula 8 min 28
import { Context as PostContext } from '../../Context/PostContext';
import { PostItem } from '../../Components/PostItem';
import { NativeStackNavigatorProp } from '@react-navigation/native-stack/lib/typescript/src/types';

// aula 8 min 1h 7
interface HomeProps {
  navigation: NativeStackNavigatorProp<any,any>;
};

export function Home({navigation}: HomeProps) {
  // aula 7 min 1h e 52
  const {user} = useContext(AuthContext);
  // aula 8 min29
  const {getPosts, posts} = useContext(PostContext);

  useEffect(() = > {
    getPosts && getPosts();
  }, []);

  // aula 8 min 1h e 9
  function handlePencilPress(){
    navigation.navigate("SingUp")
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor={THEME.COLORS.BACKGROUND_800}/>
      
        <View style={styles.heading}>
          {/* aula 7 min 1h e 20 */}
          <UserCircle color='white' size={48} weight="thin"/>
          <Text style={styles.userNameText}>{user}</Text>
          {/* aula 8 min 1h e 3 */}
          <View style={{flex: 1}}></View>
          <TouchableOpacity onPress={handlePencilPress}>
          <PensilSimple color="white" size={40} weight="thin"/>
          </TouchableOpacity>
        </View>
        
        <View style={styles.content}>
          {/* Aula 8 min 37 */}
          <FlatList
            data={posts}
            keyExtractor={({_id}) => _id}
            renderItem={({item}) => (<PostItem post={item}/>)}
          >

          </FlatList>
        </View>
    </SafeAreaView>
  );
}