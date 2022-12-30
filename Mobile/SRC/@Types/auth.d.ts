// criação do auth aula 7 min 1h e 14
export interface Auth {
    user: string,
    name?: string;
    passord: string;
};

export interface UserToken {
    profile: string;
    user: string;
    
};