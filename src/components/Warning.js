import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {HeadLine, Paragraph} from '../components/StyledComponents';
import {fp} from '../utils/images';

const Warning = ({setModalVisible, modalVisible}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.1,
          zIndex: 0,
        }}></View>
      <View style={styles.fpcontainer}>
        <View style={styles.fp}>
          <Image source={fp} />
          <Paragraph style={{fontSize: 16, marginTop: 15}}>
            Please Sign in
          </Paragraph>
        </View>
        <TouchableOpacity
          style={{alignSelf: 'flex-end', marginEnd: 30, marginBottom: 10}}
          onPress={() => setModalVisible(!modalVisible)}>
          <Paragraph style={{color: '#12A759', fontWeight: 'bold'}}>
            Cancel
          </Paragraph>
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 350,
    flex: 0.8,
    flexDirection: 'column',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  fpcontainer: {
    zIndex: 1,
    flex: 0.4,
    flexDirection: 'column',

    backgroundColor: '#111111',
    borderRadius: 30,
    justifyContent: 'space-evenly',
  },
  title: {
    marginLeft: 18,
    alignSelf: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  fp: {
    flexDirection: 'column',
    marginTop: 30,
    alignItems: 'center',
  },
});
export default Warning;
