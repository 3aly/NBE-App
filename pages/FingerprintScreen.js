import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {HeadLine, Paragraph} from '../components/StyledComponents';

const FingerprintScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <HeadLine style={{fontSize: 20}}>Fingerprint for NBE Mobile</HeadLine>
        <Paragraph style={{fontSize: 16}}>
          Log in with your fingerprint
        </Paragraph>
      </View>
      <View style={styles.fp}>
        <Image source={require('../assets/fp.png')} />
        <Paragraph style={{fontSize: 16, marginTop: 15}}>
          Touch the fingerprint sensor
        </Paragraph>
      </View>
      <View>
        <TouchableOpacity style={{alignSelf: 'flex-end', marginEnd: 30}}>
          <Paragraph style={{color: '#12A759', fontWeight: 'bold'}}>
            Cancel
          </Paragraph>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
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
