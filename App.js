import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {NavigatorIOS, View} from 'react-native';
import {Context, Provider} from './components/globalContext/globalContext';
import Navigator from './components/navigation/navigator';

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
