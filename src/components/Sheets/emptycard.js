import {View, Text, Image, StyleSheet} from 'react-native';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import {useSelector} from 'react-redux';
import {cardf, sucess} from '../../utils/images';
import {
  BoldText,
  ButtonText,
  CancelButton,
  Column,
  Row,
  StyledButton,
} from '../StyledComponents';
export const emptycard = props => {
  const {langArabic} = useSelector(state => state.lang);
  return (
    <ActionSheet id={props.sheetId} containerStyle={styles.contianer}>
      <Column
        style={{
          justifyContent: 'space-between',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={cardf} />
        <Row arabic={langArabic}>
          <BoldText style={{fontSize: 20, color: 'red'}}>
            {langArabic ? 'احية' : 'Ooops'}
          </BoldText>
          <Text style={{fontSize: 20, color: 'red'}}>...</Text>
        </Row>

        <Text>
          {langArabic
            ? 'عملية الدفع غير ناجحة'
            : 'Your payment didn’t go through'}
        </Text>
        <Row style={{marginTop: '5%'}}>
          <CancelButton
            style={{width: '60%', height: '100%'}}
            onPress={() => {
              SheetManager.hide('emptycard');
            }}>
            <ButtonText style={{color: '#EB001B'}}>
              {langArabic ? 'الغاء' : 'Cancel'}
            </ButtonText>
          </CancelButton>
        </Row>
      </Column>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  contianer: {
    flex: 0.5,

    color: 'red',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 150,
    height: 150,
  },
});

export default emptycard;
