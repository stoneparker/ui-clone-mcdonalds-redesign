import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
   flex: 1;
   background: #FFCC00;
   align-items: center;
   padding: 0 25px 20px;
`;

export const RonaldImg = styled.Image`
   width: 100%;
   height: 320px;
   /* background: #f00; */
`;

export const Title = styled.Text`
   font-size: 24px;
   font-family: NunitoSans_800ExtraBold;
   color: #312C24;
   margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
   text-align: center;
   font-size: 17px;
   font-family: NunitoSans_400Regular;
   color: #312C2497;
   margin-bottom: 20px;
`;

export const Button = styled(RectButton)`
   padding: 20px 0;
   width: 90%;
   background: #312C24;
   border-radius: 20px;
   align-items: center;
`;

export const ButtonText = styled.Text`
   color: #FFF;
   font-size: 18px;
   font-family: NunitoSans_700Bold;
`;