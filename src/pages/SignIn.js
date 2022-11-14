import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import * as yup from 'yup';

import {
  StyledButton,
  StyledInput,
  ButtonContianer,
  Row,
  Column,
} from '../components/StyledComponents';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';
import FingerprintScreen from './FingerprintScreen';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentUser} from '../utils/Redux/store//UserSlice';
import {toggler} from '../utils/Redux/store//LangSlice';

import Warning from '../components/Warning';
import {getIn} from '../utils/FireBase/firebase.config';
import {ar, at, en, lady, logo, lock, eye, register} from '../utils/images';
import {SheetManager} from 'react-native-actions-sheet';
import {Formik} from 'formik';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {lang} = useSelector(state => state);
  const [isSelected, setSelection] = useState(false);
  const [isSecure, setIsSecure] = useState(true);
  const {isLoggedIn} = useSelector(state => state.user);

  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [warningVisible, setWarningVisible] = useState(false);

  const SigninSchema = yup.object().shape({
    email: yup.string().required('Email Adress is required'),
    password: yup.string().required(),
  });

  const login = async (email, password) => {
    const {user} = await getIn(email, password);
    console.log(user, 'user');
    if (user === undefined) {
      SheetManager.show('example-sheet');
      return;
    } else {
      dispatch(
        setCurrentUser({
          displayName: user.displayName,
          email: user.email,
          isLoggedIn: !isLoggedIn,
          photoURL: user.photoURL,
          phoneNumber: user.phoneNumber,
        }),
      );

      navigation.navigate('finish');
    }
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
          <Column>
            {lang.langArabic ? (
              <Text style={styles.text}>اهلا بيك في البنك الأهلي المصري</Text>
            ) : (
              <Text style={styles.text}>
                Welcome to The National Bank of Egypt
              </Text>
            )}
          </Column>
        </Column>

        <Formik
          initialValues={{
            email: '',
            password: password,
          }}
          validationSchema={SigninSchema}
          onSubmit={values => {
            login(values.email, values.password);
          }}>
          {props => {
            return (
              <Column
                style={{
                  justifyContent: 'space-between',
                  width: '90%',
                  height: '45%',
                }}>
                <Row
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    borderWidth: 1.5,

                    width: 350,
                    border: 1.5,
                    borderRadius: 10,
                    height: 70,
                  }}
                  arabic={lang.langArabic}>
                  <Image
                    source={at}
                    style={
                      lang.langArabic ? {marginEnd: 15} : {marginStart: 15}
                    }
                  />

                  <StyledInput
                    placeholder={lang.langArabic ? 'اسم المستخدم' : 'Username'}
                    placeholderTextColor="#ffff"
                    color={'white'}
                    value={props.values.email}
                    name="email"
                    onChangeText={props.handleChange('email')}
                    textAlign={lang.langArabic ? 'right' : 'left'}
                  />
                </Row>
                {props.errors.email && props.touched.email && (
                  <Row style={{backgroundColor: 'white', borderRadius: 5}}>
                    <Text style={styles.errors}>{props.errors.email}</Text>
                  </Row>
                )}
                <Row
                  style={{
                    border: 1.5,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    borderWidth: 1.5,
                    borderColor: '#007236',
                    width: 350,
                    height: 70,
                  }}
                  arabic={lang.langArabic}>
                  <Image
                    source={lock}
                    style={
                      lang.langArabic ? {marginEnd: 15} : {marginStart: 15}
                    }
                  />

                  <StyledInput
                    placeholder={lang.langArabic ? 'كلمة السر' : 'Password'}
                    placeholderTextColor="#007236"
                    color={'black'}
                    secureTextEntry={isSecure}
                    value={props.values.password}
                    name="password"
                    onChangeText={props.handleChange('password')}
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
                {props.errors.password && props.touched.password && (
                  <Row style={{backgroundColor: 'white', borderRadius: 5}}>
                    <Text style={styles.errors}>{props.errors.password}</Text>
                  </Row>
                )}
                <Row
                  style={{
                    width: '100%',
                    color: 'white',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                  arabic={lang.langArabic}>
                  <Row arabic={lang.langArabic}>
                    <CheckBox
                      value={isSelected}
                      onValueChange={setSelection}
                      tintColors={{true: 'white', false: '#007236'}}
                    />

                    <Text style={styles.label}>
                      {lang.langArabic ? 'تذكرني' : 'Remember me'}
                    </Text>
                  </Row>
                  {lang.langArabic ? (
                    <Text style={styles.label}>مش فاكر كلمة المرور ؟</Text>
                  ) : (
                    <Text style={styles.label}>Forgot password?</Text>
                  )}
                </Row>

                <ButtonContianer arabic={lang.langArabic}>
                  <StyledButton onPress={props.handleSubmit}>
                    {lang.langArabic ? (
                      <Text style={styles.buttontext}>تسجيل دخول</Text>
                    ) : (
                      <Text style={styles.buttontext}>Log in</Text>
                    )}
                  </StyledButton>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Image source={register} />
                  </TouchableOpacity>
                </ButtonContianer>
                <Row
                  style={{
                    justifyContent: 'space-between',
                    padding: 10,
                    width: '55%',
                    alignSelf: 'center',
                  }}
                  arabic={lang.langArabic}>
                  <Text
                    style={{fontSize: 14, color: 'white'}}
                    onPress={() => {
                      navigation.navigate('signin');
                    }}>
                    {lang.langArabic
                      ? 'معندكش حساب ؟'
                      : "Don't have an account?"}
                  </Text>

                  <Text
                    style={{color: '#F6A721', textDecorationLine: 'underline'}}
                    onPress={() => {
                      navigation.navigate('signup');
                    }}>
                    {lang.langArabic ? 'سجل دلوقتي' : 'Sign Up'}
                  </Text>
                </Row>
              </Column>
            );
          }}
        </Formik>
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
  errors: {
    color: 'red',
    fontWeightL: 'bold',
    marginHorizontal: 5,
  },
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
    flex: 0.8,
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
