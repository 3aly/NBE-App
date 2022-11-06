import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {dark, light} from '../infrastructure/theme/colors';

const Dummy = () => {
  const {darkmode} = useSelector(state => state.theme);

  return (
    <View style={{flex: 1, backgroundColor: darkmode ? dark.bg : light.bg}}>
      <Text>Dummy</Text>
    </View>
  );
};

export default Dummy;
