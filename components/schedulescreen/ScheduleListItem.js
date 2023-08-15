import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppText from '../AppText';
import colors from '../../config/colors';

export default function ScheduleListItem({ day }) {
  return (
    <View style={styles.container}>
      <View>
        <AppText style={styles.time}>{day.hora}</AppText>
      </View>
      <View>
        <AppText
          style={[
            styles.activity,
            {
              fontWeight:
                day.actividad === 'Recreo' || day.actividad === 'Almuerzo'
                  ? 'bold'
                  : 100,
            },
          ]}
        >
          {day.actividad}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  activity: {
    width: 200,
    color: colors.medium,
  },
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    width: '100%',
  },
  time: {
    width: 200,
    fontWeight: 200,
  },
});
