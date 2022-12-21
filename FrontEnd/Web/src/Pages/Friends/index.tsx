// Contrução da pagina firends, aula 10 min 1H
import { Menu } from "../../Components/Menu";
import { Profiles } from "../../Components/Profiles";

export function Friends() {
    return( 
        <div className="w-screen h-screen flex">
            {/* aki mudo pra só 1 linha de menu */}
            <Menu />
            <Profiles/>    
        </div>
        );
};