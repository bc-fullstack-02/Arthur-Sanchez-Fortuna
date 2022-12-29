import { StyleSheet } from 'react-native';
import { THEME } from '../../Theme';

export const styles = StyleSheet.create({

      link: {
        color: THEME.COLORS.CAPTION_500,
        fontSize: THEME.FONT_SIZE.MD,
        textAlign: "center",
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        textDecorationLine: "underline",
      },
});