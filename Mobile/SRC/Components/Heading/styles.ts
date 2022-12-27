import { StyleSheet } from 'react-native';
import { THEME } from '../../Theme';

export const styles = StyleSheet.create({
//aula 2 min 1h e 9  
  container: {
    width: "100%",
    padding: 32,
    // borderColor: "red", //colocar borda prar orientar, aula 2 min 1h e 18
    // borderWidth: 2,
  },
  title: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    // borderColor: "green", //colocar borda prar orientar, aula 2 min 1h e 18
    // borderWidth: 2,
    textAlign: "center",
    fontFamily: THEME.FONT_FAMILY.BLACK, //aula 2 min 1h e 34
  },
  subtitle: {
    color: THEME.COLORS.CAPTION_400,
    fontSize: THEME.FONT_SIZE.MD,
    // borderColor: "blue", //colocar borda prar orientar, aula 2 min 1h e 18
    // borderWidth: 2,
    textAlign: "center",
    fontFamily: THEME.FONT_FAMILY.REGULAR, //aula 2 min 1h e 34
  },
});