import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/navigator';
import { Login, Welcome, Register } from './screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Doctors from './screens/Doctors';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
//{isAuthenticated ? <AppNavigator /> : <Welcome />}
const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <AppNavigator />
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Tabs'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;