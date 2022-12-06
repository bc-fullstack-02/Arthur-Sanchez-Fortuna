// Importando components
import { Heading } from "../../Components/Heading";
import { Text } from "../../Components/Text";
import { TextInput } from "../../Components/Text_Input";
import { Button } from "../../Components/Button";

// Importanto log e icones
import Logo from "../../Assets/Logo.svg";
import { User, Lock } from "phosphor-react"


export function Login() {
    return (
        // Alinhar td mundo no centro
        <div className="text-cyan-50 flex flex-col items-center mt-20">
            <header className="flex flex-col items-center">

                {/* Importar o papagaio */}
                <img src={Logo} alt="Logo-Papagaio/Parrot" />

                {/* Texto inicial */}
                <Heading size="lg" className="mt-2">Sysmap Parrot</Heading>
                <Text className="mt-1 opacity-50">Faça seu Login para Entrar </Text>

            </header>

            {/*Formulario: Login, Senha, e Button*/}
            <form className="mt-10 flex-col gap-4 items-stretch w-full max-w-sm">
                 {/*Login*/}
                <label htmlFor="user" className="flex flex-col gap-2">
                    <Text>Login</Text>
                    <TextInput.Root>
                        {/* Icone */}
                        <TextInput.Icon>
                            <User/>
                        </TextInput.Icon>
                        {/* Input */}
                        <TextInput.Input id="user" type="text" placeholder="Digite seu Login"/>
                    </TextInput.Root>
                </label>

                {/*Senha*/}
                <label htmlFor="password" className="flex flex-col gap-2">
                    <Text>Senha</Text>
                    <TextInput.Root>
                        {/* Icone */}
                        <TextInput.Icon>
                            <Lock/>
                        </TextInput.Icon>
                        {/* Input */}
                        <TextInput.Input id="password" type="password" placeholder="Digite sua Senha"/>
                    </TextInput.Root>
                </label>

                {/*Button*/}
                <Button type="submit" className="mt-4">Entrar</Button>
            </form>

            <footer>
                <h1 className="text-white">Footer</h1>
            </footer>
        </div>
    );
}

// export default Login; é  MSM coisa de fazer la em cima, só muda que o import tem {}