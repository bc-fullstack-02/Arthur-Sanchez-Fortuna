import { StyleSheet } from 'react-native';
import { THEME } from '../../Theme';

// aula 7 min 1h e 22
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  userNameText:{
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingBottom: 12,
    borderBottomColor: THEME.COLORS.BORDER,
    borderBottomWidth: 1,
  },
  content: {
    flex:1
  }
});