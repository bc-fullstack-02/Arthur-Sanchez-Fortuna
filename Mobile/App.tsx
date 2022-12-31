import { SafeAreaProvider } from 'react-native-safe-area-context';
// aula 2 min 39, importando login
import { Login } from './SRC/Screens/Login';
// dps de instalar a fonts do google se importa, aula2 min 1h e 24 https://github.com/expo/google-fonts
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black} from '@expo-google-fonts/inter';
// importar Loading aula 2 min 1h e 30
import { Loading } from './SRC/Components/Loading';
// aula 6 min 26, min 46
import {NavigationContainer} from "react-navegation/native";
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
import { useContext, useEffect } from 'react';
import { DefaultTheme } from '@react-navigation/native';
// Inportando phosporreact aula 7 min 14
import {House, User, UsersThree} from "phosphor-react-native"
// importando Contexto as 5 da mamnha, aula 8 min 21
import { Provider as PostProvider} from './SRC/Context/PostContext';
import { HomeNavegationScreen } from './SRC/Screens/HomeNavegationScreen';
import { navigation } from './RootNavigation';

// aula 7 min 4, SLA quando isso foi feito na aula 6 
const MyTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: THEME.COLORS.BACKGROUND_900,
  },
  statusbar: "dark",
  headersShow: false,
  title: false,
};

function App() {
// aula 6 min 1h e 50, aula 7 min 1h e 7
  const {token, tryLocalLogin, isLoading} = useContext(AuthContext);
  useEffect(() => {
    tryLocalLogin && tryLocalLogin();
  }, []);
// isso aki é pra retornar um booleano pra retornar pra useFonts, ou seja, quando td carrego ela retorna 1 objeto, é oq diz o roteiro 
  const fontsLoaded = useFonts({Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black});
  // aula 6 min 29
  const Stack = createNativeStackNavigator();
  // aula 6 min 1h e 12
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaProvider>
      {fontsLoaded ? (
        <NavigationContainer theme={MyTheme} ref={navigationRef}>        
          {! token ? (
            <Stack.Navigator
              screenOptions={{ 
                headersShow: false, 
                statusBarStyle: "dark", }}>
          
              <Stack.Screen name='Login' component={Login}/>
              <Stack.Screen name='SingUp' component={SingUp}/>
            </Stack.Navigator>
            
            ):(

          <Tab.Navigator
          // aula 7 min 10
            screenOptions={({route}) => ({
              tabBarIcon: ({color, size}) => {
                switch(route.name){
                   // aula 7 min 15
                  case "HomeNavegation": return <House size={size} color={color}/>;
                  case "Friends": return <UsersThree size={size} color={color}/>;
                  case "Profile": return <User size={size} color={color}/>;
                }
              },
              tabBarStyle: {backgroundColor: THEME.COLORS.BACKGROUND_800},
              tabBarShowLabel: false,
              headerShown: false,
              
            })}>

            <Tab.Screen name='HomeNavegation' component={HomeNavegationScreen}/>
            <Tab.Screen name='Friends' component={Friends}/>
            <Tab.Screen name='Profile' component={Profile}/>
          </Tab.Navigator>

        )}

        </NavigationContainer>
      ) : ( <Loading/>) }
    </SafeAreaProvider>
  );
};

// aula 8 min 1h e 52
export default () => {
  return(
    <AuthProvider>
      <PostProvider>
        <App/>
      </PostProvider>
    </AuthProvider>
  );
};