import {View, Text, Image, StyleSheet} from 'react-native';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import {useSelector} from 'react-redux';
import {cards, sucess} from '../../utils/images';
import {
  BoldText,
  ButtonText,
  Column,
  Row,
  StyledButton,
} from '../StyledComponents';
export const successcard = props => {
  const {langArabic} = useSelector(state => state.lang);
  return (
    <ActionSheet id={props.sheetId} containerStyle={styles.contianer}>
      <Column
        style={{
          justifyContent: 'space-between',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={cards} />
        <BoldText style={{fontSize: 20}}>
          {langArabic ? 'عملية ناجحة' : 'Mission Complete'}
        </BoldText>
        <Row style={{width: '90%', height: '20%'}}>
          <StyledButton
            onPress={() => {
              SheetManager.hide('successcard');
            }}>
            <ButtonText>{langArabic ? 'انهاء' : 'Done'}</ButtonText>
          </StyledButton>
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

export default successcard;
