import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import colors from '../config/colors';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeNavigator from './HomeNavigator';
import ScheduleNavigator from './ScheduleNavigator';

const Tab = createMaterialBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator
      activeColor={colors.primary}
      barStyle={{ backgroundColor: colors.secondary }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="home"
              size={20}
              color={focused ? color : colors.light}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Horarios"
        component={ScheduleNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="calendar"
              size={20}
              color={focused ? color : colors.light}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
