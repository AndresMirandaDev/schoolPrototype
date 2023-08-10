import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ScheduleScreen from '../screens/ScheduleScreen';

const Stack = createNativeStackNavigator();

const ScheduleNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="scheduleScreen" component={ScheduleScreen} />
    </Stack.Navigator>
  );
};

export default ScheduleNavigator;
