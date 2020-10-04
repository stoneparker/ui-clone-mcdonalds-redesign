import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
   flex: 1;
   background: #F9F9F9;
   padding-top: 10px;
`;

export const Content = styled.View`
   padding-left: 15px;
`;

export const Greenting = styled.Text`
   font-family: NunitoSans_600SemiBold;
   font-size: 20px;
   color: #B3B1AE;
   margin-bottom: 18px;
`;

export const GreetingText = styled.Text`
   font-family: NunitoSans_800ExtraBold;
`;

export const Title = styled.Text`
   font-family: NunitoSans_800ExtraBold;
   font-size: 30px;
   color: #312C24;
   max-width: 60%;
   line-height: 33px;
   margin-bottom: 20px;
`;

export const SubHeader = styled.View`
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   margin-right: 15px;
`;

export const Subtitle = styled.Text`
   font-family: NunitoSans_800ExtraBold;
   font-size: 24px;
   color: #312C24;
   margin: 20px 0;
`;

export const SubHeaderOptions = styled.View`
   flex-direction: row;
`;

export const SubHeaderOption = styled.Text`
   font-family: NunitoSans_800ExtraBold;
   font-size: 16px;
   color: ${props => props.selected ? '#312C24' : '#B3B1AE'};
   margin-left: 20px;
`;

export const SelectedIndicator = styled.Text``;

export const Category = styled.TouchableOpacity`
   width: 60px;
   height: 60px;
   margin: 5px;
   border-radius: 16px;
   border: 3px solid #E5E4E2;
   justify-content: center;
   align-items: center;
`;

export const Product = styled(RectButton)`
   width: 47%;
   background: #FFF;
   margin: 5px;
   border-radius: 20px;
   padding: 15px;
   align-items: center;
`;

export const ProductImg = styled.Image`
   width: 100%;
   height: 70px;
   margin-bottom: 10px;
`;

export const ProductName = styled.Text`
   text-align: center;
   font-family: NunitoSans_800ExtraBold;
   font-size: 17px;
   color: #312C24;
   line-height: 20px;
   margin-bottom: 10px;
`;

export const ProductFooter = styled.View`
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   width: 100%;
`;

export const ProductPrice = styled.Text`
   font-family: NunitoSans_400Regular;
   font-size: 15px;
   color: #312C24;
`;

export const BtnAddToCart = styled(RectButton)`
   width: 35px;
   height: 35px;
   border-radius: 10px;
   background: #EEFBE5;
   justify-content: center;
   align-items: center;
`;

export const styles = StyleSheet.create({
   categorySelected: {
      backgroundColor: '#FFCC00',
      borderWidth: 0,
   }
})