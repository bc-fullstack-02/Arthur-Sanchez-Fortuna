// criação dessa bagaça, aula 8 min 11
import React, {useReducer, ReactNode} from "react";
import { Action } from "../@Types/reducer";
// aula 8 min 27
import { getAuthHeader, getAuthHeader } from "../Services/auth";
// aula 8 min 1h e  32
import { navigate } from "../../RootNavigation";
import api from "../Services/api";
// aula 8 min 1h e 44
import * as SecureStore from "expo-secure-store";

const defaultValue = {posts: [], errorMensage: null};
export const Context = React.createContext(defaultValue);

export const Provider = ({childreen}: {childreen: ReactNode}) => {
    const reducer = (state: any, action: Action) => {
        switch(action.type) {
            case "create_post":
                // aula 8 m in 1h e 26
                return {...state, posts: {action.payload, ...state.posts}};
            case "show_posts":
                return {...state, posts: action.payload};
            case "like_post":
                const posts = state.posts;
                const [post, ...rest] = post.filter(
                    (post) => post._id === action.payload.id
                );
                return {...state, posts: {...posts}};
            case "unlike_post":
                const posts = state.posts;
                const [post, ...rest] = post.filter(
                    (post) => post._id === action.payload.id
                );
                return {...state};
        };
    };

    const [state, dispatch] = useReducer(reducer, defaultValue);
    const getPosts = async() =>{
        try{
            // aula 8 min 47
            const authHeader = await getAuthHeader();
            const response = await api.get("/feed", authHeader);
            const profile = await SecureStore.getItemAsync("profile");
            dispatch({type: "show_posts", payload: response.data});
        
        } catch(error) {
            console.error(error);
        }
    };
    
    const likePost = async({postID}) =>{
        try{//aula 8 min 1h e 40
            const authHeader = await getAuthHeader();
            await api.post("/post/$like", null, getAuthHeader);
            dispatch({type: "like_post", payload: postID});
        } catch(error) {
            console.error(error);
        }
    };
    
    const unlikePost = async({postID}) =>{
        
        try{//aila 8 min 1h e 54
            const authHeader = await getAuthHeader();
            await api.post("/post/${post._id}/unlike", null, getAuthHeader)
        } catch(error) {
            console.error(error);
        }
    };

    const createPost = async({title, description}) =>{
        try{ //aula 8 min 1h e 24
            const authHeader = await getAuthHeader();
            const response = await api.post("/post", {title, description}, authHeader);
            
            dispatch({type: "create_post", payload: response.data})
            navigate("Home");
        } catch(error) {
            console.error(error);
        }

        return(
            <Context.Provider
                value={{
                    ...state, getPosts, createPost, likePost, unlikePost
                }}            
            >{childreen}</Context.Provider>
        );
    };
};