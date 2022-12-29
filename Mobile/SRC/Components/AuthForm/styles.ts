import { StyleSheet } from 'react-native';
import { THEME } from '../../Theme';

export const styles = StyleSheet.create({
    container: {
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
    // aula 5 min 52
      containerPosition: {
        alignContent: "center",
      },
    // aula 5 min 57
      button: {
        minWidth: 240,
        borderRadius: 12,
      },
    // aula 5 min 1h e 13
      link: {
        color: THEME.COLORS.CAPTION_500,
        fontSize: THEME.FONT_SIZE.MD,
        textAlign: "center",
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        textDecorationLine: "underline",
      },
});