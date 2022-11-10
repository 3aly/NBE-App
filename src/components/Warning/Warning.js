import {View, Text, Image} from 'react-native';
import ActionSheet, {SheetProps} from 'react-native-actions-sheet';
import {Paragraph} from 'react-native-paper';
import {x} from '../../utils/images';
import {Column, HeadLine} from '../StyledComponents';
import {warning} from './Warning.styles';
export const ExampleSheet = props => {
  return (
    <ActionSheet id={props.sheetId} containerStyle={warning.contianer}>
      <Column style={warning.contianer}>
        <Image style={warning.image} source={x} />
        <Text style={{color: 'black', fontSize: 20}}>
          Wrong email or password
        </Text>
      </Column>
    </ActionSheet>
  );
};

export default ExampleSheet;
