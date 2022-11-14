import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {Context, Provider} from './components/';

const App = props => {
  return (
    <Provider>
      <View style={{flex: 1}}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </View>
    </Provider>
  );
};

export default App;
