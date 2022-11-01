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
  Alert,
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
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentUser} from '../store/UserSlice';
import {toggler} from '../store/LangSlice';

import Warning from '../components/Warning';
import {getIn} from '../utils/firebase.config';
import {log} from 'react-native-reanimated';
const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {lang} = useSelector(state => state);
  const [isSelected, setSelection] = useState(false);
  const [isSecure, setIsSecure] = useState(true);
  const {user} = useSelector(state => state);

  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [warningVisible, setWarningVisible] = useState(false);
  const login = async (email, password) => {
    const {user} = await getIn(email, password);

    dispatch(
      setCurrentUser({
        displayName: user.displayName,
        email: user.email,
        isLoggedIn: true,
        pic: user.photoURL,
        phoneNumber: user.phoneNumber,
      }),
    );
    navigation.navigate('finish');
  };
  return (
    <ImageBackground
      source={require('../assets/lady.png')}
      style={styles.image}>
      <View style={styles.contianer}>
        <Column style={styles.title} lang={lang.langArabic}>
          <TouchableOpacity onPress={() => dispatch(toggler())}>
            <Image source={require('../assets/Topbar.png')} />
          </TouchableOpacity>
          {lang.langArabic ? (
            <Text style={styles.text}>اهلا بيك في الضحك</Text>
          ) : (
            <Text style={styles.text}>
              Welcome to The National Bank of Egypt
            </Text>
          )}
        </Column>

        <Column
          style={{
            flex: 0.3,
            justifyContent: 'space-between',
          }}>
          <KeyboardAvoidingView>
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
                value={email}
                name="email"
                onChangeText={text => setEmail(text)}
              />
            </Row>
          </KeyboardAvoidingView>
          <KeyboardAvoidingView>
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
                value={password}
                name="password"
                onChangeText={text => setPassword(text)}
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
          </KeyboardAvoidingView>
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
              tintColors={{true: 'white', false: '#007236'}}
            />
            <Text style={styles.label}>Remember me</Text>
          </View>
          <Text style={styles.label}>Forgot password?</Text>
        </Row>
        <ButtonContianer>
          <StyledButton
            onPress={() => {
              login(email, password);
              navigation.navigate('finish');
            }}>
            <Text style={styles.buttontext}>Log In</Text>
          </StyledButton>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Image source={require('../assets/register.png')} />
          </TouchableOpacity>
        </ButtonContianer>
        <Row
          style={{
            width: 200,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{fontSize: 14, color: 'white'}}
            onPress={() => {
              navigation.navigate('signin');
            }}>
            Don't have an account?
          </Text>
          <Text
            style={{color: '#F6A721', textDecorationLine: 'underline'}}
            onPress={() => {
              navigation.navigate('signup');
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={warningVisible}
        onRequestClose={() => {
          setWarningVisible(!warningVisible);
        }}
        style={{position: 'absolute', top: 150}}>
        <>
          <Warning
            setModalVisible={setWarningVisible}
            modalVisible={warningVisible}
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
