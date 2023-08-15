import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import AppForm from '../forms/AppForm';
import AppFormPicker from '../forms/AppFormPicker';
import SubmitButton from '../forms/SubmitButton';
import AppText from '../AppText';
import ScheduleListItem from './ScheduleListItem';
import ListItemSeparator from '../ListItemSeparator';
import colors from '../../config/colors';

const horario = [
  {
    name: 'Lunes',
    schedule: [
      { hora: '8:00-8:45', actividad: 'Matematicas' },
      { hora: '8:45-9:30', actividad: 'Matematicas' },
      { hora: '9:30-9:45', actividad: 'Recreo' },
      { hora: '9:45-10:30', actividad: 'Ingles' },
      { hora: '10:30-11:15', actividad: 'Ingles' },
      { hora: '11:15-11:30', actividad: 'Recreo' },
      { hora: '11:30-:12:15', actividad: 'Musica' },
      { hora: '12:15-13:00', actividad: 'Musica' },
      { hora: '13:00-13:45', actividad: 'Almuerzo' },
      { hora: '13:45-14:30', actividad: 'Lenguaje' },
      { hora: '14:30-15:15', actividad: 'Educacion Fisica' },
      { hora: '15:15-16:00', actividad: 'Educacion Fisica' },
    ],
  },
  {
    name: 'Martes',
    schedule: [
      { hora: '8:00-8:45', actividad: 'Matematicas' },
      { hora: '8:45-9:30', actividad: 'Matematicas' },
      { hora: '9:30-9:45', actividad: 'Recreo' },
      { hora: '9:45-10:30', actividad: 'Ingles' },
      { hora: '10:30-11:15', actividad: 'Ingles' },
      { hora: '11:15-11:30', actividad: 'Recreo' },
      { hora: '11:30-:12:15', actividad: 'Musica' },
      { hora: '12:15-13:00', actividad: 'Musica' },
      { hora: '13:00-13:45', actividad: 'Almuerzo' },
      { hora: '13:45-14:30', actividad: 'Lenguaje' },
      { hora: '14:30-15:15', actividad: 'Educacion Fisica' },
      { hora: '15:15-16:00', actividad: 'Educacion Fisica' },
    ],
  },
  {
    name: 'Miercoles',
    schedule: [
      { hora: '8:00-8:45', actividad: 'Lenguaje' },
      { hora: '8:45-9:30', actividad: 'Lenguaje' },
      { hora: '9:30-9:45', actividad: 'Recreo' },
      { hora: '9:45-10:30', actividad: 'Biologia' },
      { hora: '10:30-11:15', actividad: 'Biologia' },
      { hora: '11:15-11:30', actividad: 'Recreo' },
      { hora: '11:30-:12:15', actividad: 'Artes' },
      { hora: '12:15-13:00', actividad: 'Artes' },
      { hora: '13:00-13:45', actividad: 'Almuerzo' },
      { hora: '13:45-14:30', actividad: 'Fisica' },
      { hora: '14:30-15:15', actividad: 'Quimica' },
      { hora: '15:15-16:00', actividad: 'Quimica' },
    ],
  },
  {
    name: 'Jueves',
    schedule: [
      { hora: '8:00-8:45', actividad: 'Ingles' },
      { hora: '8:45-9:30', actividad: 'Ingles' },
      { hora: '9:30-9:45', actividad: 'Recreo' },
      { hora: '9:45-10:30', actividad: 'Matematicas' },
      { hora: '10:30-11:15', actividad: 'Matematicas' },
      { hora: '11:15-11:30', actividad: 'Recreo' },
      { hora: '11:30-:12:15', actividad: 'Quimica' },
      { hora: '12:15-13:00', actividad: 'Quimica' },
      { hora: '13:00-13:45', actividad: 'Almuerzo' },
      { hora: '13:45-14:30', actividad: 'Lenguaje' },
      { hora: '14:30-15:15', actividad: 'Fisica' },
      { hora: '15:15-16:00', actividad: 'Fisica' },
    ],
  },
  {
    name: 'Viernes',
    schedule: [
      { hora: '8:00-8:45', actividad: 'Matematicas' },
      { hora: '8:45-9:30', actividad: 'Matematicas' },
      { hora: '9:30-9:45', actividad: 'Recreo' },
      { hora: '9:45-10:30', actividad: 'Consejo' },
      { hora: '10:30-11:15', actividad: 'Orientacion' },
      { hora: '11:15-11:30', actividad: 'Recreo' },
      { hora: '11:30-:12:15', actividad: 'Musica' },
      { hora: '12:15-13:00', actividad: 'Musica' },
      { hora: '13:00-13:45', actividad: 'Almuerzo' },
      { hora: '13:45-14:30', actividad: 'Lenguaje' },
      { hora: '14:30-15:15', actividad: 'Lenguaje' },
      { hora: '15:15-16:00', actividad: 'Lenguaje' },
    ],
  },
];

export default function ScheduleComponent() {
  const [dayInDisplay, setDayInDisplay] = useState(horario[0]);

  console.log(dayInDisplay);

  const handleChange = ({ day }) => {
    setDayInDisplay(day);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <AppForm
          initialValues={{
            day: '',
          }}
          onSubmit={handleChange}
        >
          <AppFormPicker
            name="day"
            placeholder="Escoge un dia"
            icon="calendar"
            items={horario}
          />
          <SubmitButton title="Ver" />
        </AppForm>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.dayNameContainer}>
          <AppText style={styles.dayName}>{dayInDisplay.name}</AppText>
        </View>
        <FlatList
          data={dayInDisplay.schedule}
          keyExtractor={(item) => {
            return item.hora;
          }}
          renderItem={({ item }) => {
            return <ScheduleListItem day={item} />;
          }}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dayNameContainer: {},
  dayName: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.primary,
  },
  formContainer: {
    padding: 10,
  },
  listContainer: {
    alignSelf: 'center',
  },
});
