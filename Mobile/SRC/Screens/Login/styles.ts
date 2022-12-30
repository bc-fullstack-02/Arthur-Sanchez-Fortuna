import { StyleSheet } from 'react-native';
import { THEME } from '../../Theme';

export const styles = StyleSheet.create({
    // aula 5 min 1h e 13
      link: {
        color: THEME.COLORS.CAPTION_500,
        fontSize: THEME.FONT_SIZE.MD,
        textAlign: "center",
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        textDecorationLine: "underline",
      },

      errorMensage: {
        color: THEME.COLORS.ERROR,
        textAlign: "center",
      },
});