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
} from '../utils/images';
import {useState} from 'react';
import {SheetManager} from 'react-native-actions-sheet';

export default function Home() {
  const {langArabic} = useSelector(state => state.lang);
  const {darkmode} = useSelector(state => state.theme);

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
          flex: 0.25,
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
    </View>
  );
}

const styles = StyleSheet.create({});
