import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import landing from '../screens/landing';

const Stack = createStackNavigator();

const navigator = props => {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={landing}
        option={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default navigator;
