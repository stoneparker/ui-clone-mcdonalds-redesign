import styled from 'styled-components/native';
import Constants from 'expo-constants';

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