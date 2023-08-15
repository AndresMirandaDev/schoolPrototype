import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import Screen from '../../components/Screen';
import AppText from '../../components/AppText';
import SubjectListItem from '../../components/gradesscreen/SubjectListItem';
import appStyles from '../../config/styles';
import ListItemSeparator from '../../components/ListItemSeparator';

const grades = [
  { id: 1, name: 'Matematicas', grades: ['5.6', '5,0', '6,4', '4,6'] },
  { id: 2, name: 'Lenguaje', grades: ['5.2', '4,0', '5,4', '6,6'] },
  {
    id: 3,
    name: 'Historia y Ciencias Sociales',
    grades: ['4.7', '4,0', '5,4', '4,6'],
  },
  { id: 4, name: 'Biologia', grades: ['6.9', '6,0', '6,4', '6,6'] },
  { id: 5, name: 'Fisica', grades: ['4.9', '7,0', '7,4', '4,6'] },
  { id: 6, name: 'Quimica', grades: ['4.9', '4,0', '4,4', '6,6'] },
  { id: 7, name: 'Educacion Fisica', grades: ['6.9', '7,0', '7,0', '7,0'] },
  { id: 8, name: 'Musica', grades: ['6.9', '7,0', '5,9', '5,7'] },
  {
    id: 9,
    name: 'Idioma Extranjero Ingles',
    grades: ['5,4', '6,7', '5,5', '5,4'],
  },
];

export default function GradesScreen({ navigation }) {
  return (
    <Screen>
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
