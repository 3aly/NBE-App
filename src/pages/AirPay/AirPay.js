import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {ButtonText, Row, StyledButton} from '../../components/StyledComponents';
import {card1, card1d, card2, card2d, card3, card3d} from '../../utils/images';
import {DraxProvider, DraxView} from 'react-native-drax';
import {useState} from 'react';

const AirPay = () => {
  const {langArabic} = useSelector(state => state.lang);
  const {darkmode} = useSelector(state => state.theme);

  const [received, setReceived] = useState([]);
  console.log(received, 'recived');
  return (
    <DraxProvider>
      <View
        style={[
          style.contianer,
          {backgroundColor: darkmode ? '#1f2933' : '#f1f3fb'},
        ]}>
        <Row>
          <ScrollView horizontal={true}>
            <FlatList
              horizontal={true}
              data={darkmode ? [card1d, card2d, card3d] : [card1, card2, card3]}
              renderItem={({item, index}) => (
                <DraxView
                  key={index}
                  draggingStyle={styles.dragging}
                  dragReleasedStyle={styles.dragging}
                  hoverDraggingStyle={styles.hoverDragging}
                  dragPayload={item}
                  longPressDelay={100}>
                  <Image style={{marginHorizontal: 4}} source={item} />
                </DraxView>
              )}
            />
          </ScrollView>
        </Row>
        <Row style={{height: '40%', alignItems: 'center'}}>
          <DraxView
            style={style.dargablecontainer}
            receivingStyle={style.draggableBox}
            renderContent={({viewState}) => {
              const receivingDrag = viewState && viewState.receivingDrag;
              const payload = receivingDrag && receivingDrag.payload;
              return (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      setReceived([]);
                    }}>
                    {received.length != 0 ? (
                      ''
                    ) : (
                      <Text style={{color: '#007236', fontSize: 15}}>
                        Touch & hold a card then drag it to this box
                      </Text>
                    )}

                    <Image source={received} />
                  </TouchableOpacity>
                </>
              );
            }}
            onReceiveDragDrop={({dragged: {payload}}) => {
              setReceived(payload);
            }}
            // onReceiveDragDrop={event => {
            //   setReceived([event.dragged.payload]);
            // }}
          />
        </Row>
        <Row style={{marginBottom: '5%'}}>
          <StyledButton
            onPress={() => {
              if (received.length != 0) {
                console.log('proceed');
              } else {
                console.log('please select a card');
              }
            }}>
            <ButtonText>{langArabic ? 'ادفع دلوقتي' : 'Pay Now'}</ButtonText>
          </StyledButton>
        </Row>
      </View>
    </DraxProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 40,
    justifyContent: 'space-evenly',
  },
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  receivingZone: {
    height: 200,
    borderRadius: 10,
  },
  receiving: {
    borderColor: 'red',
    borderWidth: 2,
  },
  incomingPayload: {
    marginTop: 10,
    fontSize: 24,
  },
  received: {
    marginTop: 10,
    fontSize: 18,
  },
  palette: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  draggableBox: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  green: {
    backgroundColor: '#aaffaa',
  },
  blue: {
    backgroundColor: '#aaaaff',
  },
  red: {
    backgroundColor: '#ffaaaa',
  },
  yellow: {
    backgroundColor: '#ffffaa',
  },
  cyan: {
    backgroundColor: '#aaffff',
  },
  magenta: {
    backgroundColor: '#ffaaff',
  },
  dragging: {
    opacity: 0.2,
  },

  stagedCount: {
    fontSize: 18,
  },
});

const style = StyleSheet.create({
  contianer: {
    flex: 0.9,
    width: '100%',
    alignSelf: 'center',

    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  dargablecontainertext: {},

  dargablecontainer: {
    borderColor: '#007236',
    borderStyle: 'dashed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderWidth: 2,
    borderRadius: 27,
    width: '95%',
    height: '100%',
  },
});

export default AirPay;
