import { SafeAreaProvider } from 'react-native-safe-area-context';
// aula 2 min 39, importando login
import { Login } from './SRC/Screens/Login';
// importar background aula 1 min 52
import { BackGround } from './SRC/Components/BackGround';
// dps de instalar a fonts do google se importa, aula2 min 1h e 24 https://github.com/expo/google-fonts
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black} from '@expo-google-fonts/inter';
// importar Loading aula 2 min 1h e 30
import { Loading } from './SRC/Components/Loading';

export default function App() {
// isso aki é pra retornar um booleano pra retornar pra useFonts, ou seja, quando td carrego ela retorna 1 objeto, é oq diz o roteiro 
  const fontsLoaded = useFonts({Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black});
  
  return (
    <SafeAreaProvider>
      {fontsLoaded ? (<BackGround>
        <Login/>
      </BackGround>) : <Loading/>}
    </SafeAreaProvider>
  );
};