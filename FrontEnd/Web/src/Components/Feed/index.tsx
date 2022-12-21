// Criação do feed aula 8 min 1h e 37 até o fim
import { Heading } from "../Heading";
import { Text } from "../Text";
import { UserCircle, Chat, Heart } from "phosphor-react";

// aula 9 min 44
import { useEffect, useState } from "react";
import api from "../../Services/api";

// aula 10 min 1h e 30
import { getAuthHeader } from "../../Services/auth";

// Criar interface Post, aula 9 min 1h e 8
interface Post {
    _id: string;
    title: string;
    description: string;
    profile: {
        name: string;
    };
    comments: [];
    likes:[];
}


export function Feed() {
    // aula 10 min 1h e 30
    const authHeader = getAuthHeader();

    // aula 9 min 45
    // explicação min 54 aula 9
    const  user = localStorage.getItem("user");
    const profile = localStorage.getItem("profile")
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
    async function handleLike(postId: string){
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

    return(
        <div className="basis-5/6 overflow-y-auto scroll-smooth">
            <Heading className="border-b border-slate-400 mt-4">
                <Text size="lg" className="font-extrabold ml-5">Pagina Inicial</Text>

                <div className="flex flex-row items-center ml-5 my-4">
                    <UserCircle size={48} weight="light" className="text-slate-50"/>
                    <Text className="font-extrabold ml-2">{user}</Text>
                </div>
            </Heading>
            {/* aki da uma mudada na aula 9 min 1H */}
            {/* pelo q entendi ele fez a tela de feed de acordo com os posts do usuario */}
            <section>
                {posts && 
                posts.map(post => (
                    <div className="border-b border-slate-400" key={post._id}>
                        <div className="flex flex-row items-center ml-5 my-4">
                            <UserCircle size={48} weight="light" className="text-slate-50"/>
                            <Text className="font-extrabold ml-2">{post.profile.name}</Text>
                        </div>

                        <div className="ml-16 flex flex-col gap-2">
                            <Heading size="md">{post.title}</Heading>
                            <Text asChild>
                                <p>{post.description}</p>
                            </Text>
                        </div>

                        <div className="flex items-center ml-16 my-4">
                            <Chat size={24} className="text-slate-50" />
                            <Text size="sm">{post.comments.length}</Text>

                            <div className="hover:bg-sky-400 rounded-full p-1" onClick={() => handleLike(post._id)}>
                                <Heart size={24} className="text-slate-50"/>
                            </div>
                            <Text size="sm">post.likes.length</Text>
                        </div>
                    </div>
            ))};
            </section>
        </div>
    );
}
};