import {View, Text, Image} from 'react-native';
import ActionSheet, {SheetProps} from 'react-native-actions-sheet';
import {useSelector} from 'react-redux';
import {warning} from '../../utils/images';
import {Column} from '../StyledComponents';
import {weak} from './WeakPass.styles';
export const WeakPassSheet = props => {
  const {langArabic} = useSelector(state => state.lang);

  return (
    <ActionSheet id={props.sheetId} containerStyle={weak.contianer}>
      <Column style={weak.contianer}>
        <Image style={weak.image} source={warning} />
        <Text style={{color: 'black', fontSize: 20}}>
          {langArabic
            ? 'الرقم السري لا يتناسب مع معاير الامان'
            : 'The Password doenst meet all the requirements'}
        </Text>
      </Column>
    </ActionSheet>
  );
};

export default WeakPassSheet;
