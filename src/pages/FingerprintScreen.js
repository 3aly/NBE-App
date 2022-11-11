import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Column, HeadLine, Paragraph, Row} from '../components/StyledComponents';
import {fp, fpd} from '../utils/images';
import {useSelector} from 'react-redux';
import {white} from 'react-native-paper/lib/typescript/styles/colors';

const FingerprintScreen = ({setModalVisible, modalVisible}) => {
  const {langArabic} = useSelector(state => state.lang);
  const {darkmode} = useSelector(state => state.theme);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.7,
          zIndex: 0,
        }}></View>
      <View
        style={[
          styles.fpcontainer,
          {backgroundColor: darkmode ? '#111111' : 'white'},
        ]}>
        <Column
          style={[
            styles.title,
            {alignSelf: langArabic ? 'flex-end' : 'flex-start'},
          ]}>
          <HeadLine
            style={{
              color: darkmode ? 'white' : 'black',
              fontSize: 20,
              marginTop: 10,
            }}>
            {langArabic
              ? 'استخدام البصمة في التطبيق'
              : 'Fingerprint for NBE Mobile'}
          </HeadLine>
          <Paragraph
            style={{
              color: darkmode ? 'white' : 'black',
              fontSize: 16,
              marginTop: 15,
            }}>
            {langArabic
              ? 'تسجيل الدخول بالبصمة'
              : 'Log in with your fingerprint'}
          </Paragraph>
        </Column>
        <View style={styles.fp}>
          <Image source={darkmode ? fp : fpd} />
          <Paragraph
            style={{
              color: darkmode ? 'white' : 'black',
              fontSize: 16,
              marginTop: 15,
            }}>
            {langArabic ? 'المس مستشعر البصمة' : 'Touch the fingerprint sensor'}
          </Paragraph>
        </View>
        <Row>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              marginEnd: 30,
              marginBottom: 10,
              marginStart: 30,
            }}
            onPress={() => setModalVisible(!modalVisible)}>
            <Paragraph style={{color: '#12A759', fontWeight: 'bold'}}>
              {langArabic ? 'الغاء' : 'Cancel'}
            </Paragraph>
          </TouchableOpacity>
        </Row>
      </View>
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
