// Criação do Menu Item, aula 7 min 1h e 4
import { ReactNode } from "react";
import { Text } from "../Text";
import { Slot } from "@radix-ui/react-slot";
import { Link, Route } from "react-router-dom";

// mudo de menuIcon pra children SLA PQ
interface MenuItemProps {
    menuTitle: string;
    children?: ReactNode;
    route: string;
}

export function MenuItem(props: MenuItemProps){
    return ( 
        <li className="mt-5">
            <Link to={props.route}>
                <div className="flex items-center px-4 rounded-full hover:bg-sky-400 ml-2">
                    {/* ele da um erro de não aceitar o children */}
                    {/* <Slot className="text-slate-50"> {props.children} </Slot> */}
                    <Text className="font-extrabold ml-4"> {props.menuTitle} </Text>
                </div>
            </Link>
        </li>
    );
};