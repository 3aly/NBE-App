import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import React, {Component} from 'react';
import styled from 'styled-components';
import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';

const StyledInput = styled(TextInput)`
  background-color: red;
  width: 85%;
  margin: 3%;
  padding: 4%;
  border: 1.5px solid;
  border-radius: 10px;
`;
const Column = styled(View)`
  display: flex;
  flex-direction: column;
  margin: 2%;
  align-items: center;
`;
const StyledButton = styled(TouchableOpacity)`
  background-color: #007236;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 80%;
  border-radius: 12.5px;
  align-items: center;
  justify-content: center;
`;
const Row = styled(View)`
  display: flex;
  flex-direction: row;
  margin: 2%;
  justify-content: space-between;
`;
const ButtonContianer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0% 10%;
  text-align: end;
`;
const SignIn = () => {
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
            }}
            placeholder={'Username'}
            placeholderTextColor="#ffff"
          />
          <StyledInput
            style={{
              backgroundColor: 'white',
              borderColor: '#007236',
            }}
            placeholder={'Password'}
            placeholderTextColor="#007236"
          />
          <Row style={{width: 320, color: 'white', alignItems: 'center'}}>
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
        </Column>
        <ButtonContianer>
          <StyledButton>
            <Text style={styles.buttontext}>Log In</Text>
          </StyledButton>
          <Image source={require('../assets/register.png')} />
        </ButtonContianer>
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
