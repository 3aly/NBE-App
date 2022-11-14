import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Formik} from 'formik';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';

import {
  Column,
  Row,
  BoldText,
  StyledInput,
  StyledButton,
  ButtonText,
} from '../components/StyledComponents';
import * as yup from 'yup';

import {useSelector} from 'react-redux';
import {useState} from 'react';
const Transfer = ({navigation}) => {
  const {langArabic} = useSelector(state => state.lang);
  const {darkmode} = useSelector(state => state.theme);

  const SignupSchema = yup.object().shape({
    Amounttotransfer: yup
      .string()
      .required(
        langArabic ? 'مبلغ التحويل مطلوب' : 'Amount to transfer is required',
      ),
    Reasonoftransfer: yup
      .string()
      .required(
        langArabic ? 'سبب التحويل مطلوب' : 'Reason of transfer is required',
      ),
  });
  const dd1 = [
    {
      label: langArabic ? 'ما بين حساباتك' : 'Between your accounts',
      value: 'Between your accounts',
    },
  ];
  const dd2 = [
    {
      label: '042-653214521245   -   $2,145,5874.25',
      value: '042-653214521245   -   $2,145,5874.25',
    },
  ];
  const dd3 = [
    {
      label: '056-32154875423   -   $1,523.48',
      value: '056-32154875423   -   $1,523.48',
    },
  ];
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);

  const [value3, setValue3] = useState(null);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: darkmode ? '#1f2933' : '#f1f3fb',
        alignItems: 'center',
      }}>
      <BoldText
        style={{
          fontSize: 24,
          alignSelf: langArabic ? 'flex-end' : 'flex-start',
          marginHorizontal: 10,
        }}
        dark={darkmode}>
        {langArabic ? 'التحويلات' : 'Transfer'}
      </BoldText>
      <Formik
        initialValues={{
          Amounttotransfer: '',
          Reasonoftransfer: '',
        }}
        validationSchema={SignupSchema}
        handleSubmit={() => {}}>
        {props => {
          return (
            <Column
              style={{
                width: '90%',
                height: '78%',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Column
                style={{
                  width: '100%',
                  height: '75%',
                  justifyContent: 'space-between',
                }}>
                <Dropdown
                  style={[
                    styles.dropdown,
                    {
                      backgroundColor: darkmode ? '#151a21' : 'white',
                      color: 'white',
                    },
                  ]}
                  placeholderStyle={[
                    styles.placeholderStyle,
                    {
                      color: darkmode ? 'white' : 'black',
                      textAlign: langArabic ? 'right' : 'left',
                    },
                  ]}
                  selectedTextStyle={[
                    styles.selectedTextStyle,
                    {
                      color: darkmode ? 'white' : 'black',
                      textAlign: langArabic ? 'right' : 'left',
                    },
                  ]}
                  inputSearchStyle={styles.inputSearchStyle}
                  data={dd1}
                  labelField="label"
                  valueField="value"
                  placeholder={langArabic ? 'نوع التحويل' : 'Type of transfer'}
                  searchPlaceholder="Search..."
                  value={value1}
                  onChange={item => {
                    setValue1(item.value);
                  }}
                />
                <Dropdown
                  style={[
                    styles.dropdown,
                    {
                      backgroundColor: darkmode ? '#151a21' : 'white',
                      color: 'white',
                    },
                  ]}
                  placeholderStyle={[
                    styles.placeholderStyle,
                    {
                      color: darkmode ? 'white' : 'black',
                      textAlign: langArabic ? 'right' : 'left',
                    },
                  ]}
                  selectedTextStyle={[
                    styles.selectedTextStyle,
                    {
                      color: darkmode ? 'white' : 'black',
                      textAlign: langArabic ? 'right' : 'left',
                    },
                  ]}
                  inputSearchStyle={styles.inputSearchStyle}
                  data={dd2}
                  labelField="label"
                  valueField="value"
                  placeholder={langArabic ? 'التحويل من' : 'Transfer from'}
                  searchPlaceholder="Search..."
                  value={value2}
                  onChange={item => {
                    setValue2(item.value);
                  }}
                />
                <Dropdown
                  style={[
                    styles.dropdown,
                    {
                      backgroundColor: darkmode ? '#151a21' : 'white',
                      color: 'white',
                    },
                  ]}
                  placeholderStyle={[
                    styles.placeholderStyle,
                    {
                      color: darkmode ? 'white' : 'black',
                      textAlign: langArabic ? 'right' : 'left',
                    },
                  ]}
                  selectedTextStyle={[
                    styles.selectedTextStyle,
                    {
                      color: darkmode ? 'white' : 'black',
                      textAlign: langArabic ? 'right' : 'left',
                    },
                  ]}
                  inputSearchStyle={styles.inputSearchStyle}
                  data={dd3}
                  labelField="label"
                  valueField="props.values.Transferto"
                  placeholder={langArabic ? 'التحويل ألي' : 'Transfer to'}
                  value={value3}
                  onChange={item => {
                    setValue3(item.value);
                  }}
                />
                <Row
                  style={{
                    border: 1.5,
                    borderRadius: 10,
                    backgroundColor: darkmode ? 'transparent' : 'white',
                    borderWidth: 1.5,
                    borderColor: '#007236',
                    width: '100%',
                    height: '14%',
                  }}
                  arabic={langArabic}>
                  <StyledInput
                    placeholder={
                      langArabic ? 'المبلغ المحول' : 'Amount to Transfer'
                    }
                    placeholderTextColor="#007236"
                    color={darkmode ? 'white' : 'black'}
                    value={props.values.Amounttotransfer}
                    onChangeText={props.handleChange('Amounttotransfer')}
                    textAlign={langArabic ? 'right' : 'left'}
                    name="Amounttotransfer"
                  />
                </Row>
                {props.errors.Amounttotransfer &&
                  props.touched.Amounttotransfer && (
                    <Text style={{color: 'red'}}>
                      {props.errors.Amounttotransfer}
                    </Text>
                  )}
                <Row
                  style={{
                    border: 1.5,
                    borderRadius: 10,
                    backgroundColor: darkmode ? 'transparent' : 'white',
                    borderWidth: 1.5,
                    borderColor: '#007236',
                    width: '100%',
                    height: '14%',
                  }}
                  arabic={langArabic}>
                  <StyledInput
                    placeholder={
                      langArabic ? 'سبب التحويل' : 'Reason of transfer'
                    }
                    placeholderTextColor="#007236"
                    color={darkmode ? 'white' : 'black'}
                    value={props.values.Reasonoftransfer}
                    onChangeText={props.handleChange('Reasonoftransfer')}
                    textAlign={langArabic ? 'right' : 'left'}
                    name="Reasonoftransfer"
                  />
                </Row>
                {props.errors.Reasonoftransfer &&
                  props.touched.Reasonoftransfer && (
                    <Text style={{color: 'red'}}>
                      {props.errors.Reasonoftransfer}
                    </Text>
                  )}
              </Column>
              <Row>
                <StyledButton
                  onPress={() => {
                    props.handleSubmit();
                    if (
                      props.values.Amounttotransfer &&
                      props.values.Reasonoftransfer !== ''
                    ) {
                      navigation.navigate('otp');
                    }
                    console.log(props.values);
                  }}
                  style={{width: '90%', height: '100%'}}>
                  <ButtonText>Transfer</ButtonText>
                </StyledButton>
              </Row>
            </Column>
          );
        }}
      </Formik>
    </View>
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
  dropdown: {
    height: '14%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    width: '100%',
    elevation: 2,
  },

  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
