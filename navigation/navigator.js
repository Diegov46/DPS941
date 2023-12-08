import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

import QuotesScreen from '../screens/Quotes';
import DoctorsScreen from '../screens/Doctors';
import Welcome from '../screens/Welcome';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Doctores"
        component={DoctorsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-md" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Pacientes"
        component={DoctorsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Citas"
        component={QuotesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={DoctorsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default AppNavigator;
