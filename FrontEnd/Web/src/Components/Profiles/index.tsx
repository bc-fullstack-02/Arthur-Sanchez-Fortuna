// contruiu isso kai na aula 10 min 1h e 12
import { UserCircle } from "phosphor-react";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { useState, useEffect } from "react";
import api from "../../Services/api";
import { getAuthHeader } from "../../Services/auth";

// Criar interface profile, aula 10 min 1h e 39
interface Profile {
    _id: string;
    name: string;
    followers: string;
    followButtonDisable: boolean;
};

export function Profiles() {
    const authHeader = getAuthHeader();
    const user = localStorage.getItem("user");
    const profileId = localStorage.getItem("profile");
    const [profiles, setProfiles] = useState<Profile[]>([]);

    useEffect(() => {const getProfiles = async () => {
        try {
            const response = await api.get("/profiles", authHeader);
            const profiles = response.data.map(profile => {
                return {...profile, followButtonDisable: profile.followers.includes(profileId) }
            })
            setProfiles(profiles)
        } catch (err) {
            console.error(err);
        }
    }; getProfiles();}, []);

    // função pra seguir, aula 10 min 1h e 35
    async function handleFollow(profileId:string){
        try {
            await api.post("/profiles/${profileId}/follow", null, authHeader);
        } catch (err) {
            console.error(err)
        };
    };

    async function handleUnfollow() {
        try {
            await api.post("/profiles/${profileId}/follow", null, authHeader);
        } catch (err) {
            console.error(err)
        };
    };

    return( 
        <div className="basis-5/6">
            <Heading className="border-b border-slate-400 mt-4">
                <Text size="lg" className="font-extrabold ml-5">Pagina Inicial</Text>

                <div className="flex flex-row items-center ml-5 my-4">
                    <UserCircle size={48} weight="light" className="text-slate-50"/>
                    <Text className="font-extrabold ml-2">{user}</Text>
                </div>
            </Heading>
            
            <ul>
                {profiles.map(profile => (
                    <li key={profile._id} className="ml-5 border-slate-400 mt-4 pl-5">
                        <div className="flex flex-row items-center">
                            <UserCircle size={48} weight="light" className="text-slate-50"/>
                            <Text className="font-extrabold ml-2">{profile.name}</Text>
                        </div>
                        <footer className="mt-6 flex justify-star gap-4 mb-4">
                            <Button type="submit" className="flex-none w-48" 
                            onClick={() => handleFollow(profile._id)} 
                            disabled={profile.followButtonDisable}>Seguir</Button>

                            <button className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600 focus:ring-2 ring-white" 
                            onClick={() => handleUnfollow(profile._id)} disabled={!profile.followButtonDisable(profileId)}>Deixar de Seguir</button>
                        </footer>             
                    </li>
                ))};    
            </ul>        
        </div>
        );
};