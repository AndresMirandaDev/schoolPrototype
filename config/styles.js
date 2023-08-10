import colors from './colors';

export default {
  gradientBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica',
    color: colors.dark,
  },
  colors,
  heading: {
    fontSize: 33,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica',
  },
  subHeading: {
    fontSize: 20,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica',
    textAlign: 'center',
  },
  screenPadding: 35,
};
