import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components';

export const StyledInput = styled(TextInput)`
  display: flex;
  width: 75%;
`;
export const Column = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.arabic ? `flex-end` : `flex-start`)};

  margin: 2%;
`;
export const StyledButton = styled(TouchableOpacity)`
  background-color: #007236;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 80%;
  border-radius: 12.5px;
  align-items: center;
  justify-content: center;
`;
export const CancelButton = styled(TouchableOpacity)`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  border-radius: 12.5px;
  align-items: center;
  border: 1px solid #eb001b;
  justify-content: center;
  color: #eb001b;
`;
export const Row = styled(View)`
  display: flex;
  flex-direction: ${props => (props.arabic ? `row-reverse` : `row`)};
  margin: 0%;
  align-items: center;
`;
export const ButtonContianer = styled(View)`
  display: flex;
  flex-direction: ${props => (props.arabic ? `row-reverse` : `row`)};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: end;
`;
export const HeadLine = styled(Text)`
  color: #ffff;
  font-weight: 700;
  font-size: 30px;
`;
export const Paragraph = styled(Text)`
  color: '#ffff';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

export const WhiteText = styled(Text)`
  color: 'white';
  font-weight: 400;
  margin: 5%;
  font-size: 14px;
  line-height: 19px;
`;
export const CommonText = styled(Text)`
  font-weight: 400;
  font-size: 16px;
  color: ${props => (props.dark ? `white` : `black`)};
`;

export const ButtonText = styled(Text)`
  color: white;
  font-weight: bold;
  margin: 5%;
  font-size: 18px;
`;
export const BoldText = styled(Text)`
  color: ${props => (props.dark ? `white` : `black`)};
  font-weight: bold;
  font-size: 15px;
`;

export const BigText = styled(Text)`
  color: ${props => (props.dark ? `white` : `black`)};

  font-size: 20px;
`;
