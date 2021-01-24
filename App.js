import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Apresentation from './src/Pages/Apresentation';
import Login from './src/Pages/Login';
import SingUp from './src/Pages/SingUp';
import Home from './src/Pages/Home';

export default function App() {
  const navigation = createStackNavigator();
  return (
    <NavigationContainer>
      <navigation.Navigator>
        <navigation.Screen
          name="Apresentaion"
          component={Apresentation}
          options={
            { headerShown: false }
          }
        />
        <navigation.Screen
          name="Login"
          component={Login}
          options={{
            headerShown:false
          }}
        />
        <navigation.Screen
          name="SingUp"
          component={SingUp}
          options={{
            headerShown:false
          }}
        />
        <navigation.Screen
        name="Home"
        component={Home}
        options={{
          headerShown:false
        }}
        />
      </navigation.Navigator>
    </NavigationContainer>
  );
}




