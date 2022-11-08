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
} from 'react-native';

import {
  StyledButton,
  StyledInput,
  ButtonContianer,
  Row,
  Column,
} from '../components/StyledComponents';
import React from 'react';
import {useState} from 'react';
import FingerprintScreen from './FingerprintScreen';
import {CreateAnAccount, updater} from '../utils/FireBase/firebase.config';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentUser} from '../utils/Redux/store//UserSlice';
import {toggler} from '../utils/Redux/store/LangSlice';
import {
  ar,
  at,
  beneficiaries,
  en,
  eye,
  google,
  lady,
  lock,
  logo,
} from '../utils/images';
const SignUp = ({navigation}) => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const {lang} = useSelector(state => state);

  const [isSecure, setIsSecure] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const Register = async (
    displayName,
    email,
    password,
    phoneNumber,
    photoURL,
  ) => {
    const {user} = await CreateAnAccount(email, password);
    await updater(displayName, phoneNumber, photoURL);
    console.log(user, 'AuthedUser');

    dispatch(
      setCurrentUser({
        displayName: user.displayName,
        email: user.email,
        isLoggedIn: true,
        photoURL: user.photoURL,
        phoneNumber: user.phoneNumber,
      }),
    );
    navigation.navigate('finish');
  };
  return (
    <ImageBackground source={lady} style={styles.image}>
      <View style={styles.contianer}>
        <Column style={styles.title} arabic={lang.langArabic}>
          <Row
            style={{
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={() => dispatch(toggler())}>
              {lang.langArabic ? <Image source={en} /> : <Image source={ar} />}
            </TouchableOpacity>
            <Image source={logo} />
          </Row>
        </Column>

        <Column
          style={{
            justifyContent: 'space-between',
            alignContent: 'space-between',
            height: 410,
          }}>
          <Row
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderColor: 'rgba(255, 255, 255, 0.5)',
              borderWidth: 1.5,

              width: 350,
              border: 1.5,
              borderRadius: 10,
              alignItems: 'center',
            }}
            arabic={lang.langArabic}>
            <Image
              source={beneficiaries}
              style={
                lang.langArabic
                  ? {marginEnd: 15, width: 20, height: 20}
                  : {marginStart: 15, width: 20, height: 20}
              }
            />

            <StyledInput
              placeholder={lang.langArabic ? 'اسم المستخدم' : 'Username'}
              textAlign={lang.langArabic ? 'right' : 'left'}
              placeholderTextColor="#ffff"
              color={'white'}
              name="displayName"
              value={displayName}
              onChangeText={text => setDisplayName(text)}
            />
          </Row>
          <Row
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderColor: 'rgba(255, 255, 255, 0.5)',
              borderWidth: 1.5,

              width: 350,
              border: 1.5,
              borderRadius: 10,
              alignItems: 'center',
            }}
            arabic={lang.langArabic}>
            <Image
              source={at}
              style={lang.langArabic ? {marginEnd: 15} : {marginStart: 15}}
            />

            <StyledInput
              placeholder={lang.langArabic ? 'البريد الالكتورني' : 'Email'}
              textAlign={lang.langArabic ? 'right' : 'left'}
              placeholderTextColor="#ffff"
              color={'white'}
              value={email}
              name="email"
              onChangeText={text => setEmail(text)}
            />
          </Row>
          <Row
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderColor: 'rgba(255, 255, 255, 0.5)',
              borderWidth: 1.5,

              width: 350,
              border: 1.5,
              borderRadius: 10,
              alignItems: 'center',
            }}
            arabic={lang.langArabic}>
            <Image
              source={beneficiaries}
              style={
                lang.langArabic
                  ? {marginEnd: 15, width: 20, height: 20}
                  : {marginStart: 15, width: 20, height: 20}
              }
            />

            <StyledInput
              placeholder={lang.langArabic ? 'رقم الموبايل' : 'Phone Number'}
              textAlign={lang.langArabic ? 'right' : 'left'}
              placeholderTextColor="#ffff"
              color={'white'}
              name="phoneNumber"
              value={phoneNumber}
              onChangeText={text => setPhoneNumber(text)}
            />
          </Row>
          <Row
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderColor: 'rgba(255, 255, 255, 0.5)',
              borderWidth: 1.5,

              width: 350,
              border: 1.5,
              borderRadius: 10,
              alignItems: 'center',
            }}
            arabic={lang.langArabic}>
            <Image
              source={beneficiaries}
              style={
                lang.langArabic
                  ? {marginEnd: 15, width: 20, height: 20}
                  : {marginStart: 15, width: 20, height: 20}
              }
            />

            <StyledInput
              placeholder={lang.langArabic ? 'لينك الصورة' : 'Image URL'}
              textAlign={lang.langArabic ? 'right' : 'left'}
              placeholderTextColor="#ffff"
              color={'white'}
              name="photoURL"
              value={photoURL}
              onChangeText={text => setPhotoURL(text)}
            />
          </Row>
          <Row
            style={{
              border: 1.5,
              borderRadius: 10,
              backgroundColor: 'white',
              borderWidth: 1.5,
              borderColor: '#007236',
              width: 350,
            }}
            arabic={lang.langArabic}>
            <Image
              source={lock}
              style={lang.langArabic ? {marginEnd: 15} : {marginStart: 15}}
            />

            <StyledInput
              placeholder={lang.langArabic ? 'كلمة السر' : 'Password'}
              placeholderTextColor="#007236"
              color={'black'}
              secureTextEntry={isSecure}
              value={password}
              name="password"
              onChangeText={text => setPassword(text)}
              textAlign={lang.langArabic ? 'right' : 'left'}
            />
            <TouchableOpacity
              onPress={() => {
                setIsSecure(!isSecure);
              }}
              style={{
                alignSelf: 'flex-end',
                marginBottom: 10,
              }}>
              <Image source={eye} />
            </TouchableOpacity>
          </Row>
        </Column>
        <ButtonContianer arabic={lang.langArabic}>
          <StyledButton
            onPress={() => {
              Register(displayName, email, password, phoneNumber, photoURL);
            }}>
            {lang.langArabic ? (
              <Text style={styles.buttontext}>سجل</Text>
            ) : (
              <Text style={styles.buttontext}>Sign Up</Text>
            )}
          </StyledButton>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: 2,
              width: 50,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={google} style={{width: 35, height: 35}} />
          </TouchableOpacity>
        </ButtonContianer>
        <Row
          style={{
            width: 220,
            justifyContent: 'space-evenly',
            padding: 10,
          }}
          arabic={lang.langArabic}>
          {lang.langArabic ? (
            <Text
              style={{fontSize: 14, color: 'white'}}
              onPress={() => {
                navigation.navigate('signin');
              }}>
              عندك حساب ؟
            </Text>
          ) : (
            <Text
              style={{fontSize: 14, color: 'white'}}
              onPress={() => {
                navigation.navigate('signin');
              }}>
              You have an account?
            </Text>
          )}
          {lang.langArabic ? (
            <Text
              style={{color: '#F6A721', textDecorationLine: 'underline'}}
              onPress={() => {
                navigation.navigate('signin');
              }}>
              سجل دخول
            </Text>
          ) : (
            <Text
              style={{color: '#F6A721', textDecorationLine: 'underline'}}
              onPress={() => {
                navigation.navigate('signin');
              }}>
              Sign In
            </Text>
          )}
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
    width: 350,
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
