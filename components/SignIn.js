import {Text, View, StyleSheet, ImageBackground, Image} from 'react-native';
import React, {Component} from 'react';
import {TextInput} from 'react-native-paper';

const SignIn = () => {
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

        <View style={styles.form}>
          <TextInput
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: 8,

              padding: 5,
            }}
            underlineColor="transparent"
            placeholder={'UserName'}
            Type={'outlined'}
          />
          <TextInput
            style={{
              backgroundColor: 'white',
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#007236',
              padding: 5,
            }}
            label="Password"
            Type={'outlined'}
            underlineColor="transparent"
          />
        </View>
        <View style={styles.buttons}>
          <Text>dasdsdsad</Text>
        </View>
        <View style={styles.buttons}>
          <Text>dasdsdsad</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  contianer: {
    textAlign: 'end',
    flex: 1,
  },
  title: {
    flex: 0.5,
    fontSize: 1,
    justifyContent: 'space-around',
    margin: 3,
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
});

export default SignIn;
