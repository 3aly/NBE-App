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
  KeyboardAvoidingView,
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
import FingerprintScreen from './FingerprintScreen';
const SignUp = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  const [isSecure, setIsSecure] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ImageBackground
      source={require('../assets/lady.png')}
      style={styles.image}>
      <View style={styles.contianer}>
        <View style={styles.title}>
          <View>
            <Image source={require('../assets/Topbar.png')} />
          </View>
        </View>

        <Column
          style={{
            justifyContent: 'space-between',
          }}>
          <Row
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderColor: 'rgba(255, 255, 255, 0.5)',
              borderWidth: 1.5,

              width: 320,
              border: 1.5,
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/beneficiaries.png')}
              style={{marginStart: 15, width: 20, height: 20}}
            />

            <StyledInput
              placeholder={'Username'}
              placeholderTextColor="#ffff"
              color={'white'}
            />
          </Row>
          <Row
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderColor: 'rgba(255, 255, 255, 0.5)',
              borderWidth: 1.5,

              width: 320,
              border: 1.5,
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/@.png')}
              style={{marginStart: 15}}
            />

            <StyledInput
              placeholder={'Email'}
              placeholderTextColor="#ffff"
              color={'white'}
            />
          </Row>
          <Row
            style={{
              border: 1.5,
              borderRadius: 10,
              backgroundColor: 'white',
              borderWidth: 1.5,
              borderColor: '#007236',
              width: 320,
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              source={require('../assets/lock.png')}
              style={{marginStart: 15}}
            />

            <StyledInput
              placeholder={'Password'}
              placeholderTextColor="#007236"
              color={'black'}
              secureTextEntry={isSecure}
            />
            <TouchableOpacity
              onPress={() => {
                setIsSecure(!isSecure);
              }}
              style={{
                alignSelf: 'flex-end',
                marginEnd: 10,
                marginBottom: 10,
              }}>
              <Image source={require('../assets/eye.png')} />
            </TouchableOpacity>
          </Row>
          <Row
            style={{
              border: 1.5,
              borderRadius: 10,
              backgroundColor: 'white',
              borderWidth: 1.5,
              borderColor: '#007236',
              width: 320,
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              source={require('../assets/lock.png')}
              style={{marginStart: 15}}
            />

            <StyledInput
              placeholder={'Confirm Password'}
              placeholderTextColor="#007236"
              color={'black'}
              secureTextEntry={isSecure}
            />
            <TouchableOpacity
              onPress={() => {
                setIsSecure(!isSecure);
              }}
              style={{
                alignSelf: 'flex-end',
                marginEnd: 10,
                marginBottom: 10,
              }}>
              <Image source={require('../assets/eye.png')} />
            </TouchableOpacity>
          </Row>
        </Column>

        <ButtonContianer>
          <StyledButton onPress={() => navigation.navigate('finish')}>
            <Text style={styles.buttontext}>Sign Up</Text>
          </StyledButton>
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: 2,
              width: 50,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../assets/google.png')}
              style={{width: 35, height: 35}}
            />
          </TouchableOpacity>
        </ButtonContianer>
        <Row
          style={{
            width: 190,
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 14, color: 'white'}}>
            You have an account?
          </Text>
          <Text
            style={{color: '#F6A721', textDecorationLine: 'underline'}}
            onPress={() => {
              navigation.navigate('signin');
            }}>
            Sign Up
          </Text>
        </Row>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        style={{position: 'absolute', top: 150}}>
        <>
          <FingerprintScreen
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
          />
        </>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mode: {},
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
    flex: 0.6,
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

export default SignUp;
