import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from '../../components/Screen';
import colors from '../../config/colors';
import ObservationListItem from '../../components/observationsscreen/ObservationListItem';
import AppText from '../../components/AppText';
import ObservationsInfo from '../../components/homescreen/ObservationsInfo';

const observaciones = [
  {
    id: 1,
    observacion: 'Alumno pone atención en clase y participa de forma activa.',
    positiva: true,
    fecha: '5/4/2023',
  },
  {
    id: 2,
    observacion: 'Alumno participa en la limpieza de sala.',
    positiva: true,
    fecha: '15/7/2023',
  },
  {
    id: 3,
    observacion: 'Alumno es sorprendido copiando en una prueba.',
    positiva: false,
    fecha: '27/9/2023',
  },
];

export default function ObservationsScreen() {
  const positiveObs = observaciones.filter((o) => {
    return o.positiva;
  });

  const negativeObs = observaciones.filter((o) => {
    return !o.positiva;
  });

  return (
    <Screen>
      <LinearGradient
        colors={[colors.secondary, colors.light]}
        start={{ x: 1, y: 1.2 }}
        end={{ x: 0.9, y: 0.6 }}
        style={styles.background}
      />
      <View style={styles.container}>
        <View style={styles.animation}>
          <LottieView
            source={require('../../assets/animations/observations.json')}
            loop
            autoPlay
          />
        </View>
        <View style={styles.observationsInfoContainer}>
          <View style={styles.observation}>
            <MaterialCommunityIcons
              name="plus-box"
              size={20}
              color={colors.primary}
            />
            <AppText style={styles.observationText}>
              Observaciones Positivas: {positiveObs.length}
            </AppText>
          </View>
          <View style={styles.observation}>
            <MaterialCommunityIcons
              name="minus-box"
              size={20}
              color={colors.danger}
            />
            <AppText style={styles.observationText}>
              Observaciones Negativas: {negativeObs.length}
            </AppText>
          </View>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={observaciones}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <ObservationListItem observation={item} />;
            }}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  animation: {
    height: 200,
    width: 200,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    marginTop: 20,
    alignSelf: 'center',
    paddingBottom: 100,
  },
  observation: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  observationsInfoContainer: {
    padding: 10,
    justifyContent: 'center',
  },
  observationText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginLeft: 5,
  },
});
