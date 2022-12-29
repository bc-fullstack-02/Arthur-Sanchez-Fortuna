import { SafeAreaProvider } from 'react-native-safe-area-context';
// aula 2 min 39, importando login
import { Login } from './SRC/Screens/Login';
// dps de instalar a fonts do google se importa, aula2 min 1h e 24 https://github.com/expo/google-fonts
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black} from '@expo-google-fonts/inter';
// importar Loading aula 2 min 1h e 30
import { Loading } from './SRC/Components/Loading';
// aula 6 min 26, min 46
import {NavegationContainer} from "react-navegation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { THEME } from './SRC/Theme';
import { SingUp } from './SRC/Screens/SingUp';
// aula 6 min 1h e 12
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// aula 6 min 18
import { Home } from './SRC/Screens/Home';
import { Friends } from './SRC/Screens/Friends';
import { Profile } from './SRC/Screens/Profile';
// importando provider aula 6 min 1h e 49
import {
  Provider as AuthProvider,
  Context as AuthContext,
} from './SRC/Context/AuthContext';
import { useContext } from 'react';


function App() {
// aula 6 min 1h e 50
  const {token} = useContext(AuthContext);

// isso aki é pra retornar um booleano pra retornar pra useFonts, ou seja, quando td carrego ela retorna 1 objeto, é oq diz o roteiro 
  const fontsLoaded = useFonts({Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black});
  // aula 6 min 29
  const Stack = createNativeStackNavigator();
  // aula 6 min 1h e 12
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaProvider>
      {fontsLoaded ? (
        <NavegationContainer>        
          {{! token ? (
            <Stack.Navegator
            screenOptions={{ 
              headersShow: false, 
              contentStyle: {backgroundColor: THEME.COLORS.BACKGROUND_900, flex: 1}, statusBarStyle: "dark"}}>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='SingUp' component={SingUp}/>
          </Stack.Navegator>):
        (
          <Tab.Navigator>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Friends' component={Friends}/>
            <Tab.Screen name='Profile' component={Profile}/>
          </Tab.Navigator>
        ))}}
        </NavegationContainer>
      ) : ( <Loading/>) }
    </SafeAreaProvider>
  );
};

// aula 8 min 1h e 52
export default () => {
  return(
    <AuthProvider>
      <App/>
    </AuthProvider>
  );
};