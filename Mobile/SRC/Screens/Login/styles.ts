// criação do styles min 37 aula 2
import { StyleSheet } from 'react-native';
import { THEME } from '../../Theme';

export const styles = StyleSheet.create({
// aula 2 min 1h e 16 
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 48, //aula 2 min 1h e 54
  },
// aula 2 min 1h e 40
  logo :{
    width: 100,
    height: 100,
  },
// aula 2 min 1h
  text: {
    color: THEME.COLORS.TEXT,
  },
});