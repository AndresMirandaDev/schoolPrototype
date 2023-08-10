import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../AppText';
import colors from '../../config/colors';

export default function ClassGradeAverageInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <MaterialCommunityIcons
          name="star"
          size={30}
          color={colors.lightBlue}
        />
        <AppText style={styles.text}>Promedio Curso:</AppText>
        <AppText style={styles.gradeAverage}>6.2</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  gradeAverage: {
    fontSize: 30,
    color: colors.primary,
    fontWeight: 'bold',
    bottom: 3,
  },
  text: {
    color: colors.medium,
    fontWeight: 'bold',
    margin: 5,
  },
  textContainer: {
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
