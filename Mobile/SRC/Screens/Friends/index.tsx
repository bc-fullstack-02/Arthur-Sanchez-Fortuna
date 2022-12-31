import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles'
// aula 8 min 10
import { SafeAreaView } from 'react-native-safe-area-context';
import FocusAwareStatusBar from "../../Components/FocusAwareStatusBar/index";
import { THEME } from '../../Theme';
import {styles} from "./styles";

export function Friends() {
  return (  
    <SafeAreaView style={styles.container}>
        <FocusAwareStatusBar barStyle="light-content" backgroundColor={THEME.COLORS.BACKGROUND_800}/>
        <Text>Friends</Text>
    </SafeAreaView>);
}