import { StyleSheet } from 'react-native';

const SplashStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '60%',
    height: '40%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 150,
    width: '90%',
    alignItems: 'center',
  },
  button: {
    width: '100%',
  },
});

export default SplashStyles;
