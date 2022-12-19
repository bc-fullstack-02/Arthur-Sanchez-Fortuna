import * as Dialog from "@radix-ui/react-dialog";

export function CreatePostButton (){
    return (
        <Dialog.Trigger className="py-3 px-6 bg-sky-500 transtion-colors hover:bg-cyan-300 container rounded-full font-semibold">
            Novo Post
        </Dialog.Trigger>
    );
};