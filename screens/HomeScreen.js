import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import Screen from '../components/Screen';
import StudentInfo from '../components/homescreen/StudentInfo';
import GradeAverageInfo from '../components/homescreen/GradeAverageInfo';
import colors from '../config/colors';
import ObservationsInfo from '../components/homescreen/ObservationsInfo';
import ClassGradeAverageInfo from '../components/homescreen/ClassGradeAverageInfo';

export default function HomeScreen() {
  return (
    <Screen>
      <LinearGradient
        colors={[colors.secondary, colors.light]}
        start={{ x: 1, y: 1.2 }}
        end={{ x: 0.9, y: 0.6 }}
        style={styles.background}
      />
      <StudentInfo />
      <View style={styles.container}>
        {/* refactorizar estos componentes para ser el mismo, que muestren la informacion necesaria pasandola por props */}
        <GradeAverageInfo />
        <ClassGradeAverageInfo />
        <ObservationsInfo />
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
