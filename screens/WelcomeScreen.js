import { StyleSheet, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import LottieView from 'lottie-react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.primary, colors.light]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
        style={styles.background}
      />
      <View style={styles.backgroundCircle}></View>
      <View style={styles.backgroundCircleBottom}></View>
      <View style={styles.animation}>
        <LottieView
          source={require('../assets/animations/animation_ll4gwq3k.json')}
          autoPlay
          loop
        />
      </View>
      <View style={styles.title}>
        <AppText style={styles.titleText}>EduSync</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animation: {
    height: 200,
    width: 200,
    flex: 1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  backgroundCircle: {
    backgroundColor: colors.lightBlue,
    height: 400,
    width: 400,
    position: 'absolute',
    top: -10,
    left: 100,
    borderRadius: 200,
  },
  backgroundCircleBottom: {
    backgroundColor: colors.secondary,
    height: 400,
    width: 400,
    position: 'absolute',
    top: 400,
    right: 100,
    borderRadius: 200,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    flex: 1,
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
