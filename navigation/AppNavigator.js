import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import HomeNavigator from './HomeNavigator';
import ScheduleNavigator from './ScheduleNavigator';
import GradesNavigator from './GradesNavigator';
import ObservationsNavigator from './ObservationsNavigator';

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
          tabBarColor: colors.danger,
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
      <Tab.Screen
        name="Notas"
        component={GradesNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="comment-check"
              size={20}
              color={focused ? color : colors.light}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Observaciones"
        component={ObservationsNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="eye"
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
