// layout/AuthStyles.js
import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../GlobalTheme';

const AuthStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    ...FONTS.h2,
    color: COLORS.white,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    ...FONTS.h3,
    color: COLORS.white,
    marginBottom: 5,
    alignSelf: 'center',
  },
  divider: {
    height: 3,
    width: 100,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    marginVertical: 5,
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    color: COLORS.white,
  },
  footerLink: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  bottomSection: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  bottomText: {
    color: COLORS.white,
    opacity: 0.8,
  },
  topSection: {
    marginBottom: 80,
  },
});

export default AuthStyles;
