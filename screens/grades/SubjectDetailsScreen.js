import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from '../../components/Screen';
import AppText from '../../components/AppText';
import colors from '../../config/colors';

export default function SubjectDetailsScreen({ route }) {
  const subject = route.params;

  const totalSum = subject.grades.reduce((accumulator, grade) => {
    return parseFloat(grade) + accumulator;
  }, 0);

  const average = Number((totalSum / subject.grades.length).toFixed(1));

  return (
    <Screen>
      <LinearGradient
        colors={[colors.secondary, colors.light]}
        start={{ x: 1, y: 1.2 }}
        end={{ x: 0.9, y: 0.6 }}
        style={styles.background}
      />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <AppText style={styles.title}>{subject.name}</AppText>
        </View>
        <View style={styles.animation}>
          <LottieView
            source={subject['lottie']}
            loop
            autoPlay
            resizeMode="contain"
          />
        </View>
        <View style={styles.averageContainer}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <MaterialCommunityIcons
              name="star"
              size={40}
              color={colors.yellow}
            />
            <AppText style={styles.averageText}>Promedio</AppText>
          </View>
          <AppText
            style={[
              styles.average,
              { color: average < 4 ? colors.danger : colors.primary },
            ]}
          >
            {average}
          </AppText>
        </View>
        <ScrollView style={styles.gradesContainer}>
          {subject.grades.map((grade, index) => {
            return (
              <View key={index} style={styles.gradeContainer}>
                <AppText style={styles.grade}>N {index + 1}</AppText>
                <AppText style={styles.grade}>{grade}</AppText>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  animation: {
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  average: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  averageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  grade: {
    fontSize: 20,
    color: colors.light,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gradeContainer: {
    padding: 10,
    backgroundColor: colors.primary,
    minWidth: '95%',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.primary,
    margin: 10,
    textAlign: 'center',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
