import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {HeadLine, Paragraph} from '../components/StyledComponents';
import {fp} from '../utils/images';

const FingerprintScreen = ({setModalVisible, modalVisible}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.7,
          zIndex: 0,
        }}></View>
      <View style={styles.fpcontainer}>
        <View style={styles.title}>
          <HeadLine style={{fontSize: 20, marginTop: 10}}>
            Fingerprint for NBE Mobile
          </HeadLine>
          <Paragraph style={{fontSize: 16, marginTop: 15}}>
            Log in with your fingerprint
          </Paragraph>
        </View>
        <View style={styles.fp}>
          <Image source={fp} />
          <Paragraph style={{fontSize: 16, marginTop: 15}}>
            Touch the fingerprint sensor
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
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(28, 36, 55, 0.77)',
  },
  fpcontainer: {
    zIndex: 1,
    flex: 0.4,
    flexDirection: 'column',

    backgroundColor: '#111111',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
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
export default FingerprintScreen;
