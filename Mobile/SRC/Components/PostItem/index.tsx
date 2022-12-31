// criação postitem aula 8 min 40
import { UserCircle, Chat, Heart } from 'phosphor-react-native';
import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import {Post} from "../../@Types/post"; 
// aula 8 min 1h  e37
import { Context as PostContext} from '../../Context/PostContext';
import { TouchableOpacity } from 'react-native';
// aula 8 min 1h e 52
import { Context as AuthContext} from '../../Context/AuthContext';

// interface postitem aula 8 min 48
interface PostItemProps {
    post: Post;
};

export function PostItem({post}: PostItemProps) {
    const {likePost, unlikePost} = useContext(PostContext);
    // aula 8 min 1h e 52
    const {profile} useContext(AuthContext);

    function handleLikePress() {
        if(post.likes.includes(profile)) {
          unlikePost && unlikePost({postId: post._id})
        } else{
          likePost && likePost({postId: post._id})
        }
      }
    return (
   
        <View style={styles.post}>
            <View style={styles.postHeading}>
                <UserCircle color='white' size={48} weight="thin"/>
                <Text style={styles.postUserText}>{post.name}</Text>
            </View>

            {post.image ? ( 
                <Image source={post.description} style={styles.image}></Image>
            ) : (
            <View style={styles.contentBody}>
                <Text style={styles.contentText}>{post.description}</Text>
            </View>)}

            <View style={styles.footer}>
                <Chat size={24} color="white" weight='thin'/>
                <Text style={styles.number}>{post.comments.length}</Text>
                <TouchableOpacity onPress={() =>{
                    likePost && likePost({postId: post._id});
                }}>
                    <Heart size={24} color="white" weight='thin'/>
                </TouchableOpacity>
                <Text style={styles.number}>{post.likes.length}</Text>
            </View>
        </View>
    
  );
}