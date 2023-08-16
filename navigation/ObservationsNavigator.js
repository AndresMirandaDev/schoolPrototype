import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ObservationsScreen from '../screens/observaciones/ObservationsScreen';

const Stack = createNativeStackNavigator();

const ObservationsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="observationsScreen" component={ObservationsScreen} />
    </Stack.Navigator>
  );
};

export default ObservationsNavigator;
