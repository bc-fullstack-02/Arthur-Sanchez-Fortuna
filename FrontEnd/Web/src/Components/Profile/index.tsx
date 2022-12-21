// cricação das paginas Profile, aula 10 min 21 e 25
import { Heading } from "../../Components/Heading";
import { Text } from "../../Components/Text";
import { UserCircle } from "phosphor-react";
import { Button } from "../../Components/Button";
import { useNavigate } from "react-router-dom";

// aki a pagina é montada no min 35 aula 10
export function Profile(){
    const navegate = useNavigate();
    const user = localStorage.getItem("user");

    // limpar o local storage e direcionar pra rota principal da aplicação
    // aula 10 min 58
    function handleLogout(){
        localStorage.clear();
        navegate("/");
    }

    return (
        <div className="basis-5/6">
            <Heading className="border-b border-slate-400 mt-4">
                <div className="flex flex-row items-center ml-5 my-4">
                    <UserCircle size={48} weight="light" className="text-slate-50"/>
                    <Text className="font-extrabold ml-2">{user}</Text>
                </div>
            </Heading>
            <div className="mt-4 max-w-sm w-full flex justify-end">
                <Button className="ml-4 max-w-sm" onClick={handleLogout}>Sair</Button>
            </div>
        </div>
    );
};