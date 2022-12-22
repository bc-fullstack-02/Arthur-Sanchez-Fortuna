// Criação do feed aula 8 min 1h e 37 até o fim
import { Heading } from "../Heading";
import { Text } from "../Text";
import { UserCircle} from "phosphor-react";

// aula 11 min 1h
import { Post } from "../Model/Post";
import { PostItem } from "../Post_Item";

// criar interface feed props, aula 11 min 1h e 20 e eu presciso de ajuda, n to bem n
interface FeedProps {
    posts: Post[];
    handleLike: (postId:String) => void;
};


export function Feed({posts, handleLike}: FeedProps) {
    // aula 9 min 45
    // explicação min 54 aula 9
    const  user = localStorage.getItem("user");

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
                    <PostItem post={post} handleLike={handleLike} />
                ))};
            </section>
        </div>
    );
}
};