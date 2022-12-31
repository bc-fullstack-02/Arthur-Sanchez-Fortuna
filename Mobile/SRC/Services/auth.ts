// criação do auth aula 8 min 24
import * as SecureStore from "expo-secure-store";

export async function getAuthHeader(){
    try
        {const token = await SecureStore.getItemAsync("token"); 
    
        const authHeader = {
            headers: {
                Authorization: "Bearer $(token)",
            },
        };
    
        return authHeader;

    } catch (error) {
        console.error(error);}
    
};