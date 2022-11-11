import {View, Text, Image} from 'react-native';
import ActionSheet, {SheetProps} from 'react-native-actions-sheet';
import {Paragraph} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {x} from '../../utils/images';
import {Column, HeadLine} from '../StyledComponents';
import {warning} from './Warning.styles';
export const ExampleSheet = props => {
  const {langArabic} = useSelector(state => state.lang);
  return (
    <ActionSheet id={props.sheetId} containerStyle={warning.contianer}>
      <Column style={warning.contianer}>
        <Image style={warning.image} source={x} />
        <Text style={{color: 'black', fontSize: 20}}>
          {langArabic
            ? 'اسم مستخدم او رقم سري خاطئ'
            : 'Wrong email or password'}
        </Text>
      </Column>
    </ActionSheet>
  );
};

export default ExampleSheet;
