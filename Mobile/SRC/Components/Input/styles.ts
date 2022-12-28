import { StyleSheet } from 'react-native';
import { THEME } from '../../Theme';

export const styles = StyleSheet.create({
// aual 4 min 2h
  container: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 2, foi só pra da akela markagem
    // borderColor: "red",
    maxWidth: "100%",
    minWidth: 240,
    borderRadius: 10,
    backgroundColor: THEME.COLORS.BACKGROUND_600,
    padding: 8
  },
  input: {
    marginStart: 8,
    color: THEME.COLORS.INPUT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,

  }
});