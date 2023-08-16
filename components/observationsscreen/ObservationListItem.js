import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';
import AppText from '../AppText';

export default function ObservationListItem({ observation }) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <MaterialCommunityIcons
          name={observation.positiva ? 'plus-box' : 'minus-box'}
          size={30}
          color={observation.positiva ? colors.primary : colors.danger}
        />
      </View>
      <View style={styles.observation}>
        <AppText style={styles.observationText}>
          {observation.observacion}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    backgroundColor: colors.secondary,
    margin: 5,
    borderRadius: 10,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  observationText: {
    color: colors.medium,
  },
});
