import React, {Component} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  BoldText,
  ButtonText,
  Column,
  Row,
  StyledButton,
} from '../../components/StyledComponents';
import {back, fullogo, fullogod} from '../../utils/images';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SheetManager} from 'react-native-actions-sheet';
import {proceedotptoggler} from '../../utils/Redux/store/router';
export const Otp = ({navigation}) => {
  const gotoAirPay = () => {
    navigation.goBack();
  };
  const [pass, setpass] = useState(false);
  const {langArabic} = useSelector(state => state.lang);
  const {proceedotp} = useSelector(state => state.router);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
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
          <TouchableOpacity onPress={gotoAirPay}>
            <Image source={back} />
          </TouchableOpacity>
          <Image source={fullogo} />
        </Row>
        <BoldText> {langArabic ? 'رمز التأكيد' : 'Verification'}</BoldText>
        <Row arabic={langArabic}>
          <Text>
            {langArabic
              ? 'اكتب رمز التأكيد الي اتبعت ل '
              : 'Enter 5 digit code we sent to '}
          </Text>
          <Text>+20 101 131 5412</Text>
        </Row>

        <OTPInputView
          pinCount={5}
          style={{width: '80%', height: '20%'}}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={() => {
            setpass(!pass);
          }}
        />

        <Text>
          {langArabic ? 'ماستلمتش الكود؟' : 'Didn’t receive the code?'}
        </Text>
        <Row arabic={langArabic}>
          <BoldText style={{fontSize: 14}}>
            {langArabic ? ' اطلب رمز تاني بعد' : 'Request new one in '}
          </BoldText>
          <BoldText> 00:12 </BoldText>
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
              gotoAirPay();
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
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'white',
  },

  underlineStyleHighLighted: {
    borderColor: '#007236',
  },
});
