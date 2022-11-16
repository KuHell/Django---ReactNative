import React, {useContext} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const s = appSettings =>
  StyleSheet.create({
    outerPage: {
      backgroundColor:
        'backgroundColor' in appSettings
          ? appSettings['backgroundColor']
          : '#fff',
      color:
        'foregroundColor' in appSettings
          ? appSettings['foregroundColor']
          : '#000',
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      textAlign: 'center',
    },
  });

export default s;
