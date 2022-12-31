// criação do RootNavigation, aula 8 min 1h e 28
import { createNavigationContainerRef } from "@react-navigation/native";

export const navigation = createNavigationContainerRef();

export function navigate(name, params?){
    if (navigationRed.isReedy()) {
        navigation.navigate(name, params);
    }
};