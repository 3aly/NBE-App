import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';

export const StyledInput = styled(TextInput)`
  background-color: red;
  display: flex;
  width: 100%;
  margin: 3%;
  padding: 4%;
  border: 1.5px solid;
  border-radius: 10px;
`;
export const Column = styled(View)`
  display: flex;
  flex-direction: column;
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
export const Row = styled(View)`
  display: flex;
  flex-direction: row;
  margin: 2%;
  align-items: center;
`;
export const ButtonContianer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0% 10%;
  text-align: end;
`;
export const HeadLine = styled(Text)`
  color: #ffff;
  font-weight: 700;
  font-size: 30px;
`;
export const Paragraph = styled(Text)`
  color: #ffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;
