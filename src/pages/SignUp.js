import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';

import {
  StyledButton,
  StyledInput,
  ButtonContianer,
  Row,
  Column,
  WhiteText,
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
  greendot,
  lady,
  lock,
  logo,
  whitedot,
} from '../utils/images';
import {Formik} from 'formik';
import {SheetManager} from 'react-native-actions-sheet';

import * as yup from 'yup';
import {Chekcer} from '../utils/Redux/store/PassValid';

const SignupSchema = yup.object().shape({
  displayName: yup.string().required('Userame Adress is required'),
  email: yup
    .string()
    .email('Please Enter a valid email')
    .required('Email Adress is required'),
  // password: yup.string().required().min(8, 'must be 8'),

  // confirmPassword: yup
  //   .string()
  //   .required()
  //   .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const SignUp = ({navigation}) => {
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

  const {match, all, min8, specialchar, lowercase, onenumber, uppercase} =
    useSelector(state => state.passval);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validatepass = (pass, confirmPass) => {
    console.log(pass);

    const min = pass.length <= 8 ? false : true;
    console.log(min);
    up = pass.match(/[A-Z]/g);
    down = pass.match(/[a-z]/g);
    spec = pass.match(/[!`@#$%^&*()_+><>?":}]/g);
    num = pass.match(/[0-9]/g);
    console.log(spec, 'spec', num, 'num');
    console.log(pass, confirmPass, pass === confirmPass, 'passm confpass');
    dispatch(
      Chekcer({
        min8: min,
        uppercase: up ? true : false,
        lowercase: down ? true : false,
        specialchar: spec ? true : false,
        onenumber: num ? true : false,
        match: pass === '' ? false : pass === confirmPass ? true : false,
      }),
    );
  };

  validatepass(password, confirmPassword);
  return (
    <ImageBackground source={lady} style={styles.image}>
      <View style={styles.contianer}>
        <Row
          style={{
            justifyContent: 'space-between',
            width: '85%',
            marginTop: '5%',
            marginBottom: '5%',
            alignContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => dispatch(toggler())}>
            {lang.langArabic ? <Image source={en} /> : <Image source={ar} />}
          </TouchableOpacity>
          <Image source={logo} />
        </Row>
        <Formik
          initialValues={{
            displayName: '',
            email: '',
            pohtoURL: '',
            password: password,
            confirmPassword: confirmPassword,
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            console.log(all, 'all');
            if (!all) {
              SheetManager.show('WeakPassSheet');
              return;
            }
            Register(
              values.displayName,
              values.email,
              password,
              values.phoneNumber,
              values.photoURL,
            );
          }}>
          {props => {
            return (
              <Column
                style={{
                  justifyContent: 'space-between',
                  alignContent: 'space-between',
                  width: '85%',
                  height: '85%',
                }}>
                <Row
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    borderWidth: 1.5,

                    width: '100%',
                    height: 65,
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
                    onChangeText={props.handleChange('displayName')}
                    value={props.values.displayName}
                  />
                </Row>
                {props.errors.displayName && props.touched.displayName && (
                  <Row style={{backgroundColor: 'white', borderRadius: 5}}>
                    <Text style={styles.errors}>
                      {props.errors.displayName}
                    </Text>
                  </Row>
                )}
                <Row
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    borderWidth: 1.5,

                    width: '100%',
                    height: 65,
                    border: 1.5,
                    borderRadius: 10,
                    alignItems: 'center',
                  }}
                  arabic={lang.langArabic}>
                  <Image
                    source={at}
                    style={
                      lang.langArabic ? {marginEnd: 15} : {marginStart: 15}
                    }
                  />

                  <StyledInput
                    placeholder={
                      lang.langArabic ? 'البريد الالكتورني' : 'Email'
                    }
                    textAlign={lang.langArabic ? 'right' : 'left'}
                    placeholderTextColor="#ffff"
                    color={'white'}
                    name="email"
                    ب
                    value={props.values.email}
                  />
                </Row>
                {props.errors.email && props.touched.email && (
                  <Row style={{backgroundColor: 'white', borderRadius: 5}}>
                    <Text style={styles.errors}>{props.errors.email}</Text>
                  </Row>
                )}

                <Row
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    borderWidth: 1.5,

                    width: '100%',
                    height: 65,
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
                    onChangeText={props.handleChange('photoURL')}
                    value={props.values.photoURL}
                  />
                </Row>

                <Row
                  style={{
                    border: 1.5,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    borderWidth: 1.5,
                    borderColor: '#007236',
                    width: '100%',
                    height: 65,
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
                    name="password"
                    textAlign={lang.langArabic ? 'right' : 'left'}
                    onChangeText={text => setPassword(text)}
                    value={password}
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
                    border: 1.5,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    borderWidth: 1.5,
                    borderColor: '#007236',
                    width: '100%',
                    height: 65,
                  }}
                  arabic={lang.langArabic}>
                  <Image
                    source={lock}
                    style={
                      lang.langArabic ? {marginEnd: 15} : {marginStart: 15}
                    }
                  />

                  <StyledInput
                    placeholder={
                      lang.langArabic ? 'تأكيد كلمة السر' : 'Confirm Password'
                    }
                    placeholderTextColor="#007236"
                    color={'black'}
                    secureTextEntry={isSecure}
                    name="confirmPassword"
                    onChangeText={text => setConfirmPassword(text)}
                    value={confirmPassword}
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
                {props.errors.confirmPassword && props.touched.confirmPassword && (
                  <Row style={{backgroundColor: 'white', borderRadius: 5}}>
                    <Text style={styles.errors}>
                      {props.errors.confirmPassword}
                    </Text>
                  </Row>
                )}
                <Row
                  style={{
                    alignItems: 'flex-start',
                    width: '100%',
                  }}>
                  <Column
                    style={{
                      width: '50%',
                      justifyContent: 'space-between',
                    }}
                    arabic={lang.langArabic}>
                    <Row arabic={lang.langArabic}>
                      <Image source={lowercase ? greendot : whitedot} />
                      <WhiteText style={{color: 'white'}}>
                        {lang.langArabic ? 'حرف صغير' : 'Lower case letter'}
                      </WhiteText>
                    </Row>
                    <Row arabic={lang.langArabic}>
                      <Image source={min8 ? greendot : whitedot} />
                      <WhiteText style={{color: 'white'}}>
                        {lang.langArabic
                          ? 'علي الأقل 8 احرف'
                          : 'Minimum 8 characters'}
                      </WhiteText>
                    </Row>
                    <Row arabic={lang.langArabic}>
                      <Image source={specialchar ? greendot : whitedot} />
                      <WhiteText style={{color: 'white'}}>
                        {lang.langArabic ? 'حرف مميز' : 'Special character'}
                      </WhiteText>
                    </Row>
                  </Column>
                  <Column
                    arabic={lang.langArabic}
                    style={{
                      width: '43%',
                      justifyContent: 'space-between',
                    }}>
                    <Row arabic={lang.langArabic}>
                      <Image source={uppercase ? greendot : whitedot} />
                      <WhiteText style={{color: 'white'}}>
                        {lang.langArabic ? 'حرف كبير' : 'Upper case letter'}
                      </WhiteText>
                    </Row>
                    <Row arabic={lang.langArabic}>
                      <Image source={onenumber ? greendot : whitedot} />
                      <WhiteText style={{color: 'white'}}>
                        {lang.langArabic ? 'رقم' : 'Number'}
                      </WhiteText>
                    </Row>
                    <Row arabic={lang.langArabic}>
                      <Image source={match ? greendot : whitedot} />
                      <WhiteText style={{color: 'white'}}>
                        {lang.langArabic ? 'رقم سري متطابق' : 'Password Match'}
                      </WhiteText>
                    </Row>
                  </Column>
                </Row>

                <ButtonContianer arabic={lang.langArabic}>
                  <StyledButton onPress={props.handleSubmit}>
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
                    width: '60%',
                    justifyContent: 'space-evenly',
                    alignSelf: 'center',
                  }}
                  arabic={lang.langArabic}>
                  <Text
                    style={{fontSize: 14, color: 'white'}}
                    onPress={() => {
                      navigation.navigate('signin');
                    }}>
                    {lang.langArabic ? 'عندك حساب ؟' : 'You have an account?'}
                  </Text>

                  <Text
                    style={{color: '#F6A721', textDecorationLine: 'underline'}}
                    onPress={() => {
                      navigation.navigate('signin');
                    }}>
                    {lang.langArabic ? 'سجل دخول' : 'Sign In'}
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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  errors: {
    color: 'red',
    fontWeightL: 'bold',
    marginHorizontal: 5,
  },
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
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
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

export default SignUp;
