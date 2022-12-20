// Criação do feed aula 8 min 1h e 37 até o fim

import { Heading } from "../Heading";
import { Text } from "../Text";
import { UserCircle, Chat, Heart } from "phosphor-react";

export function Feed() {
    return(
        <div>
            <Heading className="border-b border-slate-400 mt-4">
                <Text size="lg" className="font-extrabold ml-5">Pagina Inicial</Text>

                <div className="flex flex-row items-center ml-5 my-4">
                    <UserCircle size={48} weight="light" className="text-slate-50"/>
                    <Text className="font-extrabold ml-2">Fulano</Text>
                </div>
            </Heading>

            <section>
                <div className="border-b border-slate-400 ml-5 my-4">
                    <UserCircle size={48} weight="light" className="text-slate-50"/>
                    <Text className="font-extrabold ml-2">Fulano 2</Text>
                </div>

                <Text asChild className="ml-16">
                    <p>
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </p>
                </Text>
                <div className="flex items-center ml-16 my-4">
                    <Chat size={24} className="text-slate-50" />
                    <Text size="sm">9K</Text>

                    <div className="hover:bg-sky-400 rounded-full p-1">
                        <Heart size={24} className="text-slate-50"/>
                    </div>
                    <Text size="sm">9K</Text>
                </div>
            </section>
        </div>
    );
};