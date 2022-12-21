// Aula 7 Min 30 & min 50, cricação da home
import { Menu } from "../../Components/Menu";
import { Feed } from "../../Components/Feed";

export function Home() {
    return( 
        <div className="w-screen h-screen flex">
            {/* aki mudo pra só 1 linha de menu */}
            <Menu />    
            <Feed />
        </div>
        );
}
// Criação dos post aula 8 min 31 até 1h e 15