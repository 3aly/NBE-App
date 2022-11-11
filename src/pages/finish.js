import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Column,
  HeadLine,
  Paragraph,
  WhiteText,
} from '../components/StyledComponents';
import React from 'react';
import {useSelector} from 'react-redux';
import {logo, man} from '../utils/images';
const Finish = ({navigation}) => {
  const {lang} = useSelector(state => state);

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMethod={'auto'}
        imageStyle={{
          resizeMode: 'cover',
          alignSelf: 'flex-end',
        }}
        source={man}
        style={styles.image}>
        <Column
          style={{
            justifyContent: 'flex-end',
            paddingHorizontal: 10,
          }}>
          <Image
            source={logo}
            style={{alignSelf: 'flex-end', marginVertical: 20}}
          />
          <Column arabic={lang.langArabic}>
            <>
              <HeadLine>
                {lang.langArabic ? 'مبروك' : 'Congratulations'}
              </HeadLine>
              <Text style={{color: 'white', fontSize: 16}}>
                {lang.langArabic
                  ? 'دلوقتي تقدر تستخدم الخدمات الالكترونية للبنك الأهلي المصري'
                  : 'You have successfully registered in NBE online banking service'}
              </Text>
            </>
          </Column>
        </Column>

        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate('all')}>
          {lang.langArabic ? (
            <Text style={styles.buttontext}>انهاء</Text>
          ) : (
            <Text style={styles.buttontext}>Finish</Text>
          )}
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
