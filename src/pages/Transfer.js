import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  Column,
  Row,
  BoldText,
  StyledInput,
  StyledButton,
  ButtonText,
} from '../components/StyledComponents';
import {SelectList} from 'react-native-dropdown-select-list';
import {useSelector} from 'react-redux';
const Transfer = ({navigation}) => {
  const {langArabic} = useSelector(state => state.lang);

  const [selected, setSelected] = React.useState('');

  const data = [
    {key: '1', value: 'Mobiles', disabled: true},
    {key: '2', value: 'Between your accounts'},
    {key: '3', value: '042-653214521245   -   $2,145,5874.25'},
    {key: '5', value: '056-32154875423   -   $1,523.48'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
  ];
  return (
    <Column
      style={{
        alignItems: 'center',
        textAlign: 'start',
        flex: 1,
        justifyContent: 'space-between',
      }}>
      <Column
        style={{
          width: '90%',
          justifyContent: 'space-between',
          justifyContent: 'space-between',
          height: '65%',
        }}>
        <BoldText style={{fontSize: 24, alignSelf: 'flex-start'}}>
          Transfer
        </BoldText>
        <SelectList
          setSelected={val => setSelected(val)}
          data={data}
          save="value"
          placeholder={'Type of transfer'}
          boxStyles={{height: 65}}
        />
        <SelectList
          setSelected={val => setSelected(val)}
          data={data}
          save="value"
          placeholder={'Transfer from'}
          boxStyles={{height: 65}}
        />
        <SelectList
          setSelected={val => setSelected(val)}
          data={data}
          save="value"
          placeholder={'Transfer to'}
          boxStyles={{height: 65}}
        />

        <Row
          style={{
            border: 1.5,
            borderRadius: 10,
            backgroundColor: 'white',
            borderWidth: 1.5,
            borderColor: '#007236',
            height: 65,
          }}
          arabic={langArabic}>
          <StyledInput
            placeholder={langArabic ? 'كلمة السر' : 'Amount to transfer'}
            placeholderTextColor="#007236"
            color={'black'}
            name="password"
            textAlign={langArabic ? 'right' : 'left'}
            onFocu
          />
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              marginBottom: 10,
            }}></TouchableOpacity>
        </Row>
        <Row
          style={{
            border: 1.5,
            borderRadius: 10,
            backgroundColor: 'white',
            borderWidth: 1.5,
            borderColor: '#007236',
            height: 65,
          }}
          arabic={langArabic}>
          <StyledInput
            placeholder={langArabic ? 'كلمة السر' : 'Reason of transfer'}
            placeholderTextColor="#007236"
            color={'black'}
            name="password"
            textAlign={langArabic ? 'right' : 'left'}
            onFocu
            style={{}}
          />
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              marginBottom: 10,
            }}></TouchableOpacity>
        </Row>
      </Column>
      <StyledButton
        onPress={() => {
          navigation.navigate('otp');
        }}
        style={{width: '90%', height: '10%', marginBottom: 90}}>
        <ButtonText>Transfer</ButtonText>
      </StyledButton>
    </Column>
  );
};

export default Transfer;

const styles = StyleSheet.create({
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
