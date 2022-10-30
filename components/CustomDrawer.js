import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Column, HeadLine, Row} from './StyledComponents';
import {Paragraph} from 'react-native-paper';
const CustomDrawer = props => {
  console.log(props.navigation);
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
          marginTop: 10,
        }}>
        <Image source={require('../assets/fullogo.png')} />
        <Image source={require('../assets/ar.png')} />
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <Column style={{justifyContent: 'center'}}>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            width: 270,
            padding: 2,
            marginBottom: 5,
          }}
          onPress={() => {
            props.navigation.navigate('signin');
          }}>
          <Image source={require('../assets/logout.png')} />
          <Paragraph style={{color: '#EB001B', fontSize: 18, marginLeft: 10}}>
            Log Out
          </Paragraph>
        </TouchableOpacity>

        <Row
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',

            width: 270,
            height: 90,
            borderRadius: 30,
            marginBottom: 20,
            backgroundColor: 'white',

            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          }}>
          <Column>
            <Image
              source={require('../assets/profile.jpg')}
              style={{width: 50, height: 50, borderRadius: 12}}
            />
          </Column>
          <Column>
            <HeadLine style={{fontSize: 18, color: 'black'}}>
              Ali Hefny
            </HeadLine>
            <Paragraph style={{color: '#BABABA'}}>+20 128 539 2988</Paragraph>
          </Column>
          <Column>
            <TouchableOpacity>
              <Image
                style={{margin: 20}}
                resizeMode="contain"
                source={require('../assets/dotmenu.png')}
              />
            </TouchableOpacity>
          </Column>
        </Row>
      </Column>
    </View>
  );
};

export default CustomDrawer;
