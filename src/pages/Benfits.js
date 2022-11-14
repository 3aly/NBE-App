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
  categoryview,
  add,
  call,
  dollar,
  more,
} from '../utils/images';
import {useState} from 'react';
import {SheetManager} from 'react-native-actions-sheet';

const Benfits = () => {
  const {langArabic} = useSelector(state => state.lang);
  const [categoryView, setCategoryView] = useState(false);

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
      image: p1,
      name: 'Ali',
      date: '+20 102 675 9186',
      price: '$494,472.95',
      id: 1,
    },
    {
      image: p2,
      name: '3elwa',
      date: '+20 123 456 7890',
      price: '$64,175.82',
      id: 2,
    },
    {
      image: p1,
      name: 'Ali',
      date: '+20 102 675 9186',
      price: '$494,472.95',
      id: 1,
    },
    {
      image: p2,
      name: '3elwa',
      date: '+20 123 456 7890',
      price: '$64,175.82',
      id: 2,
    },
    {
      image: p1,
      name: 'Ali',
      date: '+20 102 675 9186',
      price: '$494,472.95',
      id: 1,
    },
    {
      image: p2,
      name: '3elwa',
      date: '+20 123 456 7890',
      price: '$64,175.82',
      id: 2,
    },
    {
      image: p1,
      name: 'Ali',
      date: '+20 102 675 9186',
      price: '$494,472.95',
      id: 1,
    },
    {
      image: p2,
      name: '3elwa',
      date: '+20 123 456 7890',
      price: '$64,175.82',
      id: 2,
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: darkmode ? '#1f2933' : '#f1f3fb',
        alignItems: 'center',
      }}>
      <Row
        style={{width: '95%', justifyContent: 'space-between', marginTop: 10}}
        arabic={langArabic}>
        <BoldText style={{fontSize: 20}} dark={darkmode}>
          {langArabic ? 'المستفيدين' : 'Beneficiaries'}
        </BoldText>
        <Row>
          <TouchableOpacity
            onPress={() => {
              setCategoryView(!categoryView);
            }}>
            <Image source={categoryview} />
          </TouchableOpacity>
          <Image source={add} />
        </Row>
      </Row>
      {categoryView ? (
        <Row
          style={{
            height: '90%',
            alignItems: 'flex-start',
          }}>
          <FlatList
            data={people}
            numColumns={4}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={{
                  backgroundColor: darkmode ? '#151a21' : 'white',
                  margin: 10,
                  width: 80,
                  height: 85,
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
                <BoldText dark={darkmode}>{item.name}</BoldText>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </Row>
      ) : (
        <Column>
          <FlatList
            data={History}
            renderItem={({item, index}) => (
              <Row
                style={{
                  justifyContent: 'space-between',
                  backgroundColor: darkmode ? '#151a21' : 'white',
                  borderRadius: 18,
                  height: 90,
                  width: '100%',
                }}
                arabic={langArabic}>
                <Row arabic={langArabic}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'white',
                      margin: 5,
                      width: 60,
                      height: 60,
                      borderRadius: 10,
                      alignContent: 'space-between',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      alignContent: 'center',
                    }}>
                    <Image
                      style={{
                        borderRadius: 10,
                        width: '90%',
                        height: '90%',
                      }}
                      source={item.image}
                    />
                  </TouchableOpacity>
                  <Column>
                    <BoldText
                      style={{
                        alignSelf: langArabic ? 'flex-end' : 'flex-start',
                      }}
                      dark={darkmode}>
                      {item.name}
                    </BoldText>
                    <Row>
                      <Image source={call} />
                      <CommonText dark={darkmode}>{item.date}</CommonText>
                    </Row>
                    <Row>
                      <Image source={dollar} />
                      <CommonText dark={darkmode}>{item.date}</CommonText>
                    </Row>
                  </Column>
                </Row>

                <TouchableOpacity style={{alignSelf: 'flex-start'}}>
                  <Image
                    style={{
                      margin: 10,
                      backgroundColor: 'black',
                      borderRadius: 20,
                    }}
                    source={more}
                  />
                </TouchableOpacity>
              </Row>
            )}
            keyExtractor={item => item.id}
          />
        </Column>
      )}
    </View>
  );
};

export default Benfits;
