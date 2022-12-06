import { Heading } from "../../Components/Heading";
import { Text } from "../../Components/Text";
import Logo from "../../Assets/Logo.svg";

export function Login() {
    return (
        // Alinhar td mundo no centro
        <div className="text-cyan-50 flex flex-col items-center mt-20">
            <header className="flex flex-col items-center">

                {/* Importar o papagaio */}
                <img src={Logo} alt="Logo-Papagaio/Parrot" />
                {/* Texto inicial */}
                <Heading>Sysmap Parrot</Heading>
                <Heading>Faça seu Login para Entrar </Heading>
            </header>

            <h1>Form</h1>

            <footer>
                <h1 className="text-white">Footer</h1>
            </footer>
        </div>
    );
}

// export default Login; é  MSM coisa de fazer la em cima, só muda que o import tem {}