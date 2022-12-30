// criação do authcontext aula 6 min 1h 30 até 1h e 48
import React, {useReducer, ReactNode} from "react";
import api from "../Services/api";
import jwt_decode from "jwt-decode";
// aula 7 min  1h e 3
import * as SecureStore from "expo-secure-store";
// aula 7 min 1h e 15
import { Auth, UserToken } from "../@Types/auth";
import { Action } from "../@Types/reducer";

// criar interface iauthcontext, aula 7 min 49
interface IAuthContext {
    token: string | null;
    user: string | null;
    profile: string | null;
    isLoading: boolean;
    errorMessage: string | null;
    login?: () => void;
    register?: () => void;
    tryLocalLogin?: () => void;
    logout?: () => void;
};

const defaultvalue= {
    token: null,
    user: null,
    profile: null,
    isLoading: true,
    errorMessage: null,
};

const Context = React.createContext(defaultvalue);

export const Provider = ({ children}: {children: ReactNode}) => {
    const reducer = (state: any, action: Action) => {
        switch(action.type) {
            case "login":
                return{
                    ...state,
                    ...action.payload
                    errorMessage: null
                };
            case "user_created":
                return {...state, errorMessage: null};
            case "logout":
                return {token: null, profile: null, user: null, errorMessage: null};
            case "user_error":
                return {...state, errorMessage: action.payload};
            default:
                return state;
        }   
    }
};

    const [state, dispatch] = useReducer(reducer, defaultValue);

    const login = async ({user, password}: Auth) => {
        try {
            const response = await api.post("/security/login",{user, password});
            const {accessToken} = response.data
            const {profile, user: UserName} = jwt_decode(accessToken) as UserToken;
            
            // aula 7 min 1h e 9
            await SecureStore.getItemAsync("token");
            await SecureStore.getItemAsync("user");
            await SecureStore.getItemAsync("profile");

            dispatch({
                type: "login",
                payload:{ token: accessToken, profile, user: UserName},
            });

        } catch(error) {
            // aula 7 min 33
            console.error(error)
            dispatch ({
                type:"add_error",
                payload: "Houve um Erro no Login",
            });
        };
    };
    // aula 7 min 29
    const register = async ({user, password}: Auth) => {
        try {
            await api.post("/security/register",{user, password});
            
            dispatch({
                type: "user_created",
            });
            
        } catch(error) {
            dispatch ({
                type:"add_error",
                payload: "Houve um Erro no Cadastro",
            });
        }
    };

    // aula 7 min 1h e 4
    const tryLocalLogin = async () => {
      let token, user, profile;
      try {
        token = await SecureStore.getItemAsync("token");
        user = await SecureStore.getItemAsync("user");
        profile = await SecureStore.getItemAsync("profile");
        dispatch({type: "login", payload: {token, profile, user}})
    }  catch (error) {
        console.error(error)
    };
    };

    // aula 7 min 1h e 55
    const logout = async ({user, password}: Auth) => {
        try { 
            await SecureStore.deletetemAsync("token");
            await SecureStore.deletetemAsync("user");
            await SecureStore.deletetemAsync("profile");

            dispatch({
                type: "logout",
            });
        } catch(error) {
            console.error(error);
        };
    };
    return (
        <Context.Provider
        value={{
            ...state,
            login,
            register,
            tryLocalLogin,
            logout,
        }}>
        {children}
        </Context.Provider>
    );