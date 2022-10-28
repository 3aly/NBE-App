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
import {
  StyledButton,
  StyledInput,
  ButtonContianer,
  Row,
  Column,
  HeadLine,
  Paragraph,
} from '../components/StyledComponents';
import styled from 'styled-components';
import React from 'react';
const Finish = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMethod={'auto'}
        imageStyle={{
          resizeMode: 'cover',
          alignSelf: 'flex-end',
        }}
        source={require('../assets/man.png')}
        style={styles.image}>
        <Column style={{justifyContent: 'flex-end', paddingHorizontal: 10}}>
          <Image
            source={require('../assets/logo.png')}
            style={{alignSelf: 'flex-end', marginVertical: 20}}
          />

          <HeadLine>Congratulations</HeadLine>
          <Paragraph>
            You have successfully registered in NBE online banking service
          </Paragraph>
        </Column>

        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate('all')}>
          <Text style={styles.buttontext}>Finish</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    color: 'white',
    backgroundColor: '#007236',
    textAlign: 'end',
    justifyContent: 'space-between',
  },
  Button: {
    width: 350,
    height: 50,
    backgroundColor: '#ffff',

    flexDirection: 'row',

    borderRadius: 12.5,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#007236',
    alignSelf: 'center',
    marginBottom: 30,
  },
  buttontext: {
    margin: 2,
    color: '#007236',
    fontWeight: 'bold',
    fontSize: 18,
  },
  image: {
    flex: 1,
    color: 'white',
    height: 800,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default Finish;
