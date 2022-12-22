// Adicionar icones, aula 7 min 1h e 14
import { House, User, UsersThree } from "phosphor-react";
// n lembro quando importei
import { MenuItem } from "../Menu_Item";

// Importando aula 10
import { Text } from "../../Components/Text";
import { CreatePostButton } from "../../Components/CreatePostButton";
import { CreatePostDialog } from "../../Components/CreatePostDialog";
import Logo_Menu from "../../Assets/Logo_Menu.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

// criar interface menu, aula 11, min 1h e 25
interface MenuProps {
    newPostCreated: (post: Post) => void;
};

// Criar componente Menu, aula 7 min 1H
export function Menu(props: MenuProps){

    const [open, setOpen] = useState(false);
    function postCreate(post: Post){
        setOpen(false);
        props.newPostCreated(post);
    };

    return(
// Mudo doi td, tiro do home ejogo no menu
        <div className="basis-1/6 border-r border-slate-400 ml-4 pt-4">
            <div className="flex items-center ml-4">
                <img src={Logo_Menu} alt="Logo Home"/>
                <Text className="font-extrabold ml-4">Parrot</Text>
            </div>
                {/* Componente Menu */}
            <ul className="pr-2">
                <MenuItem menuTitle="Pagina Inicial" route="/home"> <House size={48} weight="fill" /> </MenuItem>
                <MenuItem menuTitle="Perfil" route="/profile"> <User size={48} weight="fill" /> </MenuItem>
                <MenuItem menuTitle="Amigos" route="/friends"> <UsersThree size={48} weight="fill" /> </MenuItem>
            </ul>
                {/* Estilo aula 8 min 1h e 22 */}
            <div className="flex flex-col items-center">
                <Dialog.Root open={open} onOpenChange={setOpen}>
                    <CreatePostButton />

                    <CreatePostDialog postCreate={postCreate} />
                </Dialog.Root>
            </div>
        </div>

    );
};