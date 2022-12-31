// criação desse nome grande ai, FocusAwareStatusBar aula 8 min 5 e são 4HORA DA MANHA
import * React from "react";
import { StatusBar } from "react-native"; 
import { useIsFocused, useIsFocused } from "@react-navigation/native";

interface Props extends StatusBarProps {};

export function FocusAwareStatusBar(props: Props) {
    const useIsFocused = useIsFocused();
    return isFocused ? <StatusBar {...props}/>: null;
};