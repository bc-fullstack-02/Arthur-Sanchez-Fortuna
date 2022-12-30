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
    flex: 1
  },
  // aula 7 min 1h e 33
  postHeading: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  postUserText: {
    color: THEME.COLORS.TEXT,
    marginStart: 12,
  },
  contentBody: {
    paddingHorizontal: 24,
  },
  contentText: {
    color: THEME.COLORS.TEXT,
  },
  footer: {
    flexDirection: "row",
    paddingHorizontal: 24,
    alignItems: "center",
  },
  number: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
    marginStart: 4,
    marginEnd: 24,
  },
  // aula 7 1h e 48
  post: {
    borderBottomColor: THEME.COLORS.BORDER,
    borderBottomWidth: 1,
    paddingBottom: 12,

  },

});