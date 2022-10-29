import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Button,
  Modal,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {
  StyledButton,
  StyledInput,
  ButtonContianer,
  Row,
  Column,
} from '../components/StyledComponents';
import React, {Component} from 'react';
import styled from 'styled-components';
import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';
const SignIn = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <ImageBackground
      source={require('../assets/lady.png')}
      style={styles.image}>
      <View style={styles.contianer}>
        <View style={styles.title}>
          <View>
            <Image source={require('../assets/Topbar.png')} />
          </View>
          <Text style={styles.text}>Welcome to The National Bank of Egypt</Text>
        </View>

        <Column>
          <StyledInput
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderColor: 'rgba(255, 255, 255, 0.5)',
              width: 320,
            }}
            placeholder={'Username'}
            placeholderTextColor="#ffff"
          />
          <StyledInput
            style={{
              backgroundColor: 'white',
              borderColor: '#007236',
              width: 320,
            }}
            placeholder={'Password'}
            placeholderTextColor="#007236"
          />
        </Column>

        <Row
          style={{
            width: 320,
            color: 'white',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Remember me</Text>
          </View>
          <Text style={styles.label}>Forgot password?</Text>
        </Row>
        <ButtonContianer>
          <StyledButton onPress={() => navigation.navigate('finish')}>
            <Text style={styles.buttontext}>Log In</Text>
          </StyledButton>
          <TouchableOpacity onPress={() => navigation.navigate('FP')}>
            <Image source={require('../assets/register.png')} />
          </TouchableOpacity>
        </ButtonContianer>
        <Row>
          <Text style={styles.buttontext}>
            Don’t have an account?{' '}
            <Text style={{color: '#F6A721'}}>Sign up</Text>
          </Text>
        </Row>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    color: 'white',
  },
  contianer: {
    flex: 1,
    backgroundColor: ' rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
    flexDirection: 'column',
  },

  title: {
    flex: 0.9,
    fontSize: 1,
    justifyContent: 'space-between',
    marginTop: 30,
    alignItems: 'center',
    textAlign: 'end',
  },
  text: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  form: {
    flex: 0.25,
    padding: 5,
    justifyContent: 'space-between',
    marginHorizontal: 18,
  },
  buttons: {
    fontWeight: '700',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 1,
    alignItems: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 2,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
  buttontext: {
    margin: 2,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default SignIn;
