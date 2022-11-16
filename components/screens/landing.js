import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {Context} from '../globalContext/globalContext';
import s from '../styles/containers';

const landing = props => {
  const globalContext = useContext(Context);
  const {isLoggedIn, appSettings} = globalContext;

  return (
    <View style={s(appSettings).outerPage}>
      <Text>Hello! hi~</Text>
      <Text>You are {isLoggedIn ? '' : 'Not'} logged in</Text>
    </View>
  );
};

export default landing;
