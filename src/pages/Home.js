import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  BoldText,
  Column,
  CommonText,
  HeadLine,
  Row,
} from '../components/StyledComponents';
import {useSelector, useDispatch} from 'react-redux';

import {
  balance,
  fpicon,
  accal,
  accel,
  utilsal,
  utilsel,
  cardsal,
  cardsel,
  historyal,
  historyel,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  carfor,
  jumia,
  amazon,
} from '../utils/images';
import {useState} from 'react';
import {SheetManager} from 'react-native-actions-sheet';

export default function Home({navigation}) {
  const {langArabic} = useSelector(state => state.lang);
  const {darkmode} = useSelector(state => state.theme);
  const people = [
    {image: p1, name: 'Hala', id: 1},
    {image: p2, name: 'Ayman', id: 2},
    {image: p2, name: 'Alex', id: 3},
    {image: p1, name: 'Soha', id: 4},
    {image: p2, name: 'Khaled', id: 5},
    {image: p1, name: 'Monica', id: 6},
    {image: p2, name: 'Charlet', id: 7},
    {image: p1, name: 'Soha', id: 8},
    {image: p2, name: 'Khaled', id: 9},
    {image: p1, name: 'Monica', id: 10},
    {image: p2, name: 'Charlet', id: 11},
  ];
  const History = [
    {
      image: carfor,
      name: 'Carrefour',
      date: '15-12-2021',
      price: '$250.21',
      id: 1,
    },
    {
      image: jumia,
      name: 'Jumia',
      date: '28-11-2021',
      price: '$2146.63',
      id: 2,
    },
    {
      image: amazon,
      name: 'Amazon',
      date: '02-12-2021',
      price: '$3004.21',
      id: 3,
    },
    {
      image: carfor,
      name: 'Carrefour',
      date: '15-12-2021',
      price: '$250.21',
      id: 4,
    },
    {
      image: jumia,
      name: 'Jumia',
      date: '28-11-2021',
      price: '$2146.63',
      id: 5,
    },
    {
      image: amazon,
      name: 'Amazon',
      date: '02-12-2021',
      price: '$3004.21',
      id: 6,
    },
    {
      image: carfor,
      name: 'Carrefour',
      date: '15-12-2021',
      price: '$250.21',
      id: 7,
    },
    {
      image: jumia,
      name: 'Jumia',
      date: '28-11-2021',
      price: '$2146.63',
      id: 8,
    },
    {
      image: amazon,
      name: 'Amazon',
      date: '02-12-2021',
      price: '$3004.21',
      id: 9,
    },
    {
      image: carfor,
      name: 'Carrefour',
      date: '15-12-2021',
      price: '$250.21',
      id: 10,
    },
    {
      image: jumia,
      name: 'Jumia',
      date: '28-11-2021',
      price: '$2146.63',
      id: 11,
    },
    {
      image: amazon,
      name: 'Amazon',
      date: '02-12-2021',
      price: '$3004.21',
      id: 12,
    },
  ];
  const [visible, setVisible] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: darkmode ? '#1f2933' : '#f1f3fb',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: '20%',

          width: '90%',
          backgroundColor: '#00421f',
          borderRadius: 20,
          alignItems: 'center',
        }}>
        <Row
          style={{
            justifyContent: 'space-between',
            width: '90%',
            alignItems: 'flex-start',
            paddingVertical: 18,
          }}>
          <CommonText style={{color: 'white'}}>Balance</CommonText>
          <TouchableOpacity
            onPress={() => {
              SheetManager.show('fpsheet');
            }}>
            <Image source={fpicon} />
          </TouchableOpacity>
        </Row>

        <Row>
          <TouchableOpacity
            onPress={() => {
              setVisible(!visible);
            }}>
            <HeadLine style={{fontSize: 25}}>
              {visible ? '$2,374,654.25' : 'Press here to show balance'}
            </HeadLine>
          </TouchableOpacity>
        </Row>
      </View>
      <Row
        arabic={langArabic}
        style={{
          width: '100%',
          justifyContent: 'space-evenly',
          paddingTop: 20,
        }}>
        <TouchableOpacity>
          <Image source={langArabic ? accal : accel} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={langArabic ? cardsal : cardsel} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={langArabic ? utilsal : utilsel} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={langArabic ? historyal : historyel} />
        </TouchableOpacity>
      </Row>
      <Row
        style={{width: '95%', justifyContent: 'space-between', marginTop: 10}}>
        <BoldText style={{fontSize: 20}}>Send money</BoldText>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Benfits');
          }}>
          <CommonText>View All</CommonText>
        </TouchableOpacity>
      </Row>
      <Row style={{height: '15%'}}>
        <FlatList
          horizontal={true}
          data={people}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                margin: 5,
                width: 70,
                height: 80,
                borderRadius: 10,
                alignContent: 'space-between',
                justifyContent: 'space-around',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <Image
                style={{
                  width: '50%',
                  height: '50%',
                  borderRadius: 10,
                }}
                source={item.image}
              />
              <BoldText>{item.name}</BoldText>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </Row>
      <Row
        style={{width: '95%', justifyContent: 'space-between', marginTop: 10}}>
        <BoldText style={{fontSize: 20}}>History</BoldText>
        <TouchableOpacity>
          <CommonText>View All</CommonText>
        </TouchableOpacity>
      </Row>
      <Column style={{height: '40%'}}>
        <FlatList
          data={History}
          renderItem={({item, index}) => (
            <>
              <Row
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  borderBottomWidth: 0.2,
                }}>
                <Row>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'white',
                      margin: 5,
                      width: 70,
                      height: 80,
                      borderRadius: 10,
                      alignContent: 'space-between',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      alignContent: 'center',
                    }}>
                    <Image
                      style={{
                        borderRadius: 10,
                      }}
                      source={item.image}
                    />
                  </TouchableOpacity>
                  <Column>
                    <BoldText>{item.name}</BoldText>
                    <CommonText>{item.date}</CommonText>
                  </Column>
                </Row>
                <BoldText>{item.price}</BoldText>
              </Row>
            </>
          )}
          keyExtractor={item => item.id}
        />
      </Column>
    </View>
  );
}

const styles = StyleSheet.create({});
