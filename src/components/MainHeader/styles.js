import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
   width: 100%;
   height: 110px;
   align-items: center;
   justify-content: center;
   background-color: ${props => props.color};
   flex-direction: row;
   padding: 0 30px;
   padding-top: ${Constants.statusBarHeight}px;
`;

export const Logo = styled.Image`
   width: 60px;
   height: 60px;
`;

export const RightBtn = styled.TouchableOpacity`
   width: 45px;
   height: 45px;
   background: ${props => props.color};
   position: absolute;
   right: 20px;
   border-radius: 10px;
   justify-content: center;
   align-items: center;
   border: ${props => props.color !== '#FFCC00' ? 'none' : '3px solid #E7BA07'};
`;

export const HelpText = styled.Text`
   font-family: NunitoSans_700Bold;
   font-size: 16px;
   color: #353028;
`;