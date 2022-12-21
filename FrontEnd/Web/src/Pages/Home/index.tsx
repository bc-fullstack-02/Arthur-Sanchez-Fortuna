// Aula 7 Min 30 & min 50, cricação da home
import Logo_Menu from "../../Assets/Logo_Menu.svg";
import { Text } from "../../Components/Text";
import { Menu } from "../../Components/Menu";
import * as Dialog from "@radix-ui/react-dialog";
import { CreatePostButton } from "../../Components/CreatePostButton";
import { CreatePostDialog } from "../../Components/CreatePostDialog";
import { useState } from "react";
import { Feed } from "../../Components/Feed";

export function Home() {
    // Aula 8 min 1H e 5
    const [open,setOpen] = useState(false);

    function closeDialog(){
        setOpen(false);
    };

    return( 
        <div className="w-screen h-screen flex">
            {/* Esplicacção tailwind, aula 7 min 51 */}
            <div className="basis-1/6 border-r border-slate-400 ml-4 pt-4">
                <div className="flex items-center ml-4">
                    <img src={Logo_Menu} alt="Logo Home"/>
                    <Text className="font-extrabold ml-4">Parrot</Text>
                </div>
                {/* Componente Menu */}
                <Menu/>
                {/* Estilo aula 8 min 1h e 22 */}
                <div className="flex flex-col items-center">
                    <Dialog.Root open={open} onOpenChange={setOpen}>
                        <CreatePostButton />

                        <CreatePostDialog closeDialog={closeDialog} />
                    </Dialog.Root>
                </div>
            </div>
            {/* explicação min 1H e 7 aula 9 */}
            <div className="basis-5/6 overflow-y-auto scroll-smooth">
                <Feed />
            </div>
        </div>
        );
}
// Criação dos post aula 8 min 31 até 1h e 15