import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
   width: 100%;
   height: ${props => props.background === 'transparent' ? 110 : 80}px;
   justify-content: space-between;
   align-items: center;
   background-color: ${props => props.background};
   flex-direction: row;
   padding: 0 30px;
   padding-top: ${Constants.statusBarHeight}px;  
   z-index: 100;
   position: absolute;
`;

export const GoBackBtn = styled(RectButton)`
   width: 45px;
   height: 45px;
   background: #fff;
   border-radius: 10px;
   justify-content: center;
   align-items: center;
`;

export const RightBtns = styled.View`
   flex-direction: row;
   align-items: center;
`;

export const LikeBtn = styled(RectButton)`
   width: 45px;
   height: 45px;
   background: #fff;
   border-radius: 10px;
   justify-content: center;
   align-items: center;
   margin-right: 15px;
`;

export const ShoppingCartBtn = styled(RectButton)`
   width: 45px;
   height: 45px;
   background: #fff;
   border-radius: 10px;
   justify-content: center;
   align-items: center;
`;