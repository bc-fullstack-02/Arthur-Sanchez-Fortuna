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
    borderRadius: 12,
    backgroundColor: THEME.COLORS.BACKGROUND_600,
    padding: 12
  },
  input: {
    marginStart: 12,
    flex: 1,
    color: THEME.COLORS.INPUT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    placeHolderTextColor: THEME.COLORS.INPUT,
  }
});