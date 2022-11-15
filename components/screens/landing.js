import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {Context} from '../globalContext/globalContext';

const landing = props => {
  const globalContext = useContext(Context);
  const {isLoggedIn} = globalContext;

  return (
    <View>
      <Text>Hello! hi~</Text>
      <Text>You are {isLoggedIn ? '' : 'Not'} logged in</Text>
      <Text>fsdfsdfsa</Text>
    </View>
  );
};

export default landing;
