import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screen from '../../components/Screen';
import AppText from '../../components/AppText';
import colors from '../../config/colors';

export default function SubjectDetailsScreen({ route }) {
  const subject = route.params;

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <AppText style={styles.title}>{subject.name}</AppText>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.primary,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
