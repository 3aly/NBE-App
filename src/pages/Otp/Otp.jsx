import React, {Component} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  BoldText,
  ButtonText,
  Column,
  CommonText,
  Row,
  StyledButton,
} from '../../components/StyledComponents';
import {back, fullogo, fullogod} from '../../utils/images';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SheetManager} from 'react-native-actions-sheet';
import {proceedotptoggler} from '../../utils/Redux/store/router';
export const Otp = ({navigation}) => {
  const [pass, setpass] = useState(false);
  const {langArabic} = useSelector(state => state.lang);
  const {darkmode} = useSelector(state => state.theme);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: darkmode ? '#1f2933' : '#f1f3fb'},
      ]}>
      <Column
        style={{
          flex: 0.8,
        }}>
        <Row
          style={{
            justifyContent: 'space-between',
            marginBottom: 20,
          }}
          arabic={langArabic}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={back} />
          </TouchableOpacity>
          <Image source={fullogo} />
        </Row>
        <BoldText dark={darkmode}>
          {langArabic ? 'رمز التأكيد' : 'Verification'}
        </BoldText>
        <Row arabic={langArabic}>
          <BoldText dark={darkmode}>
            {langArabic
              ? 'اكتب رمز التأكيد الي اتبعت ل '
              : 'Enter 5 digit code we sent to '}
          </BoldText>
          <BoldText dark={darkmode}>+20 101 131 5412</BoldText>
        </Row>

        <OTPInputView
          pinCount={5}
          style={{width: '80%', height: '20%'}}
          autoFocusOnLoad
          codeInputFieldStyle={[
            styles.underlineStyleBase,
            {
              backgroundColor: darkmode ? '#151a21' : 'white',
              color: darkmode ? 'white' : 'black',
            },
          ]}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={() => {
            setpass(!pass);
          }}
        />

        <CommonText dark={darkmode}>
          {langArabic ? 'ماستلمتش الكود؟' : 'Didn’t receive the code?'}
        </CommonText>
        <Row arabic={langArabic}>
          <BoldText style={{fontSize: 14}} dark={darkmode}>
            {langArabic ? ' اطلب رمز تاني بعد' : 'Request new one in '}
          </BoldText>
          <BoldText dark={darkmode}> 00:12 </BoldText>
        </Row>
      </Column>

      <Row
        style={{
          height: '7%',
          margin: '10%',
        }}>
        <StyledButton
          onPress={() => {
            if (pass) {
              SheetManager.show('successcard');
              SheetManager.show('otpsucess');
              navigation.goBack();
            } else {
              SheetManager.show('emptycard');
            }
          }}>
          <ButtonText>{langArabic ? 'تأكيد' : 'Submit'}</ButtonText>
        </StyledButton>
      </Row>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    color: 'white',
    alignItems: 'center',
    alignContent: 'space-around',
    justifyContent: 'space-around',
  },
  borderStyleBase: {},

  underlineStyleBase: {
    width: 40,
    height: 50,
    borderRadius: 10,
    shadowColor: 'rgba(15, 14, 14, 0.25)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 1,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    fontWeight: 'bold',
  },

  underlineStyleHighLighted: {
    borderColor: '#007236',
  },
});
