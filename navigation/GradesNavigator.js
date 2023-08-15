import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GradesScreen from '../screens/grades/GradesScreen';
import SubjectDetailsScreen from '../screens/grades/SubjectDetailsScreen';

const Stack = createNativeStackNavigator();

const GradesNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="grades" component={GradesScreen} />
      <Stack.Screen name="subjectDetails" component={SubjectDetailsScreen} />
    </Stack.Navigator>
  );
};

export default GradesNavigator;
