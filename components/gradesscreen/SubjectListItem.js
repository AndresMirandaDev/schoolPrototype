import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from '../AppText';
import colors from '../../config/colors';

export default function SubjectListItem({ subject, onPress }) {
  const totalSum = subject.grades.reduce((accumulator, grade) => {
    return parseFloat(grade) + accumulator;
  }, 0);

  const average = Number((totalSum / subject.grades.length).toFixed(1));

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.info}>
          <AppText style={styles.name}>{subject.name}</AppText>
          <View style={styles.averageContainer}>
            <MaterialCommunityIcons
              name="star"
              size={23}
              color={colors.yellow}
            />
            <AppText style={styles.average}>{average}</AppText>
          </View>
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="chevron-right"
            size={40}
            color={colors.light}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  average: {
    marginLeft: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.light,
  },
  averageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: colors.lightBlue,
    borderRadius: 20,
    margin: 3,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.light,
  },
});
