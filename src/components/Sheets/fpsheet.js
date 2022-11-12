import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {useDispatch, useSelector} from 'react-redux';
import {fp, fpd} from '../../utils/images';
import {Column, HeadLine, Paragraph, Row} from '../StyledComponents';

export const fpsheet = props => {
  const {langArabic} = useSelector(state => state.lang);
  const {darkmode} = useSelector(state => state.theme);
  return (
    <ActionSheet
      id={props.sheetId}
      containerStyle={[
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
    </ActionSheet>
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

export default fpsheet;
