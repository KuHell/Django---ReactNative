import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';

const Stack = createStackNavigator();

const navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Landing">
      {/* <Stack.Screen name="Landing" component={} */}
    </Stack.Navigator>
  );
};

export default navigator;
