// criação do authcontext aula 6 min 1h 30 até 1h e 48
import React, {useReducer, ReactNode, ReactElement} from "react";
import api from "../Services/api";
import jwt_decode from "jwt-decode";

const defaultvalue= {
    token: null,
    user: null,
    profile: null
    isLoading: true
};

const Context = React.createContext(defaultvalue);

export const Provider = ({ children}: {children: ReactNode}) => {
    const reducer = (state, action) => {
        switch(action.type) {
            case "login":
                return{
                    ...state,
                    ...action.payload
                };
            default:
                return state;
        }   
    }
};

    const [state, dispatch] = useReducer(reducer, defaultValue);

    const login = async ({user, password}) => {
        try {
            const response = await api.post("/security/login",{user, password});
            const {accessToken} = response.data
            const {profile, user: UserName} = jwt_decode(accessToken);
            
            dispatch({
                type: "login",
                payload:{ token: accessToken, profile, user: UserName},
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
        }}>
        {children}
        </Context.Provider>
    );