import * as Dialog from "@radix-ui/react-dialog";
import { FormEvent } from "react";
import { Button } from "../Button";
import { TextInput } from "../Text_Input";

// criar handlesubmit min 40 aula 8
export function CreatePostDialog (){
    function handlesubmit(event: FormEvent){
        event.preventDefault();
        const form = event.target as HTMLFormElement;
    };

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>
            {/* Explicação aula 8 min 26 */}
            <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
                <Dialog.Title className="text-2xl font-black">Nova Post</Dialog.Title>
                <form className="mt-8 flex flex-col gap-2">

                    <div className="flex flex-col gap-2">
                        <label htmlFor="title" className="font-semibold">
                            Titulo do Post
                        </label>
                        <TextInput.Input 
                            id="title"
                            placeholder="Qual o Titulo do Post?"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="description" className="font-semibold">
                            O que você está Pensando?
                        </label>
                        <TextInput.Input 
                            id="description"
                            placeholder="Diga, o que está Pensando..."/>
                    </div>
                    {/* Fazendo o buttão de fechar e posta, min 31 aula 8 */}
                    <footer className="mt-6 flex justify-end gap-4">
                        {/* Fechar */}
                        <Dialog.Close type="button" className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">
                            Fechar
                        </Dialog.Close>
                        {/* Postar */}
                        <Button type="submit" className="flex-none w-48">Postar</Button>
                    </footer>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    );
};