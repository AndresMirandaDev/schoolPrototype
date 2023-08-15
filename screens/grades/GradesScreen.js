import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import Screen from '../../components/Screen';
import SubjectListItem from '../../components/gradesscreen/SubjectListItem';
import colors from '../../config/colors';

const grades = [
  {
    id: 1,
    name: 'Matemáticas',
    grades: ['5.6', '5,0', '6,4', '4,6'],
    lottie: require('../../assets/animations/math.json'),
  },
  {
    id: 2,
    name: 'Lenguaje',
    grades: ['5.2', '4,0', '5,4', '6,6'],
    lottie: require('../../assets/animations/lenguage.json'),
  },
  {
    id: 3,
    name: 'Historia y Ciencias Sociales',
    grades: ['4.7', '4,0', '5,4', '4,6'],
    lottie: require('../../assets/animations/history.json'),
  },
  {
    id: 4,
    name: 'Biologia',
    grades: ['6.9', '6,0', '6,4', '6,6'],
    lottie: require('../../assets/animations/biology.json'),
  },
  {
    id: 5,
    name: 'Física',
    grades: ['4.9', '7,0', '7,4', '4,6'],
    lottie: require('../../assets/animations/physics.json'),
  },
  {
    id: 6,
    name: 'Química',
    grades: ['4.9', '4,0', '4,4', '6,6'],
    lottie: require('../../assets/animations/chemistry.json'),
  },
  {
    id: 7,
    name: 'Educacion Física',
    grades: ['6.9', '7,0', '7,0', '7,0'],
    lottie: require('../../assets/animations/sports.json'),
  },
  {
    id: 8,
    name: 'Música',
    grades: ['6.9', '7,0', '5,9', '5,7'],
    lottie: require('../../assets/animations/music.json'),
  },
  {
    id: 9,
    name: 'Idioma Extranjero Inglés',
    grades: ['5,4', '6,7', '5,5', '5,4'],
    lottie: require('../../assets/animations/english.json'),
  },
];

export default function GradesScreen({ navigation }) {
  return (
    <Screen>
      <LinearGradient
        colors={[colors.secondary, colors.light]}
        start={{ x: 1, y: 1.2 }}
        end={{ x: 0.9, y: 0.6 }}
        style={styles.background}
      />
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            data={grades}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <SubjectListItem
                  subject={item}
                  onPress={() => navigation.navigate('subjectDetails', item)}
                />
              );
            }}
          />
        </View>
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
    alignContent: 'center',
  },
  listContainer: {
    flex: 1,
    paddingBottom: 50,
  },
});
