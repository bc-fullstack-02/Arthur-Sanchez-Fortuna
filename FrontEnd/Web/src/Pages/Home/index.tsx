// Aula 7 Min 30 & min 50, cricação da home
import { Menu } from "../../Components/Menu";
import { Feed } from "../../Components/Feed";

import { useEffect, useState } from "react";
import api from "../../Services/api";
import { getAuthHeader } from "../../Services/auth";
import { Post } from "../../Components/Model/Post";

export function Home() {
    // aula 10 min 1h e 30
    const authHeader = getAuthHeader();
    const profile = localStorage.getItem("profile")
    const user = localStorage.getItem("user") as string:

    // explicação aula 9 min 1h e 13
    const [posts, setPosts] = useState<Post[]>([]);

    
    useEffect(() => {
        async function getPosts() {
          const response = await api.get ("/feed", authHeader);
          setPosts(response.data);
        };
        getPosts();
    }, []);

    // função para receber likes
    async function handleLike(postId: String){
        try{
            await api.post('/post/${postId}/like', null, authHeader);
            const newPost = posts.filter(post => post._id == postId).map(post => post.likes.push(profile));
            // Explicação aula 9 min 1h e 46
            setPosts((posts) => {
                const post = newPost[0];
                const index = posts.indexOf(post);
                posts[index] = post;
                return [...posts];
        });
    } catch (err) {
        console.error(err);
    };

    async function newPostCreated(post: Post){
        try {
            const response = await api.get('/posts/${post._id}');
            const newPost = response.data;
            setPosts((posts) => [newPost,...posts])
        } catch (err) {
            console.error(err);
        };
    };

    return( 
        <div className="w-screen h-screen flex">
            {/* aki mudo pra só 1 linha de menu */}
            <Menu newPostCreated={newPostCreated}/>    
            <Feed posts={posts} handleLike={handleLike}/>
        </div>
        );
}
// Criação dos post aula 8 min 31 até 1h e 15