// Aula 6 min 26:30
import { AuthForm, Auth } from "../../Components/AuthForm";
import api from "../../Services/api";

//  aula 7 min 44
import { useNavigate } from "react-router-dom";

export function SingUp() {
    // aula 7 min 44
    const navigate = useNavigate();
    async function handleRegister(auth: Auth){
        // aula 7 min 41
        try {
            await api.post("/security/register", auth);
            navigate("/");
        } catch(err){
            alert("Erro na Criação do Usuario.");
        }
    };

    return (
        <AuthForm
            formTitle="Faça seu Cadastro para Entrar!"
            submitFormButtonText="Cadastrar"
            submitFormButtonAction={handleRegister}
            linkDescription="Já Tem Uma Conta? Entre Agora!"
            routeName="/"
            showNameInput
        />
    );
};