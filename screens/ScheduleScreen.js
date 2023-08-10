import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import Screen from '../components/Screen';
import colors from '../config/colors';
import AppPicker from '../components/AppPicker';
import ScheduleComponent from '../components/schedulescreen/ScheduleComponent';

export default function ScheduleScreen() {
  return (
    <Screen>
      <LinearGradient
        colors={[colors.secondary, colors.light]}
        start={{ x: 1, y: 1.2 }}
        end={{ x: 0.9, y: 0.6 }}
        style={styles.background}
      />
      <View style={styles.container}>
        <ScheduleComponent />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
  },
});
