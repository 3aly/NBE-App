import {View, Text, Image, StyleSheet} from 'react-native';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import {useDispatch, useSelector} from 'react-redux';
import {sucess} from '../../utils/images';
import {
  proceedairpaytoggler,
  proceedotptoggler,
} from '../../utils/Redux/store/router';
import {
  BoldText,
  ButtonText,
  Column,
  Row,
  StyledButton,
} from '../StyledComponents';
export const otpsucess = props => {
  const {langArabic} = useSelector(state => state.lang);

  const dispatch = useDispatch();
  return (
    <ActionSheet id={props.sheetId} containerStyle={styles.contianer}>
      <Column
        style={{
          justifyContent: 'space-between',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={sucess} />
        <BoldText style={{fontSize: 20}}>
          {langArabic ? 'عملية ناجحة' : 'Mission Complete'}
        </BoldText>
        <Row style={{width: '90%', height: '20%'}}>
          <StyledButton
            onPress={() => {
              SheetManager.hide('otpsucess');
            }}>
            <ButtonText>{langArabic ? 'انهاء' : 'Finish'}</ButtonText>
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

export default otpsucess;
