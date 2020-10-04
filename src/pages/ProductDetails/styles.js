import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
    flex: 1;
    background: #FFF;
    /* padding-top: ${Constants.statusBarHeight}px;   */
`;

export const ProductImgContainer = styled.View`
    width: 100%;
    height: 350px;
    align-items: center;
    background: #FFEE9D;
    padding: 50px 0 0;
`;

export const ProductImg = styled.Image`
    flex: 1;
    background: #FFEE9D;
`;

export const Content = styled.View`
    flex: 1;
    background: #FFF;
    top: -40px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    padding: 50px 25px 0;
`;

export const Title = styled.Text`
   font-family: NunitoSans_800ExtraBold;
   font-size: 34px;
   color: #312C24;
   max-width: 90%;
   line-height: 36px;
   margin-bottom: 10px;
`;

export const Price = styled.Text`
    font-family: NunitoSans_400Regular;
    font-size: 30px;
    color: #312C24;
    margin-bottom: 15px;
`;

export const Description = styled.Text`
    font-family: NunitoSans_400Regular;
    font-size: 15px;
    color: #312C24;
    margin-bottom: 30px;
`;

export const CharacteristicsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

export const CharacteristicTitle = styled.Text`
    font-family: NunitoSans_700Bold;
    color: #ADACA8;
    margin-bottom: 7px;
`;

export const CharacteristicContent = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const CharacteristicText = styled.Text`
    font-family: NunitoSans_600SemiBold;
    color: #312D24;
    margin-left: 7px;
`;

export const SessionTitle = styled.Text`
    font-family: NunitoSans_800ExtraBold;
    font-size: 23px;
    color: #312C24;
    margin-bottom: 10px;
`;

export const Option = styled.TouchableOpacity`
    width: 55px;
    height: 55px;
    margin: 0 5px;
    border: 2px solid ${props => props.selected ? '#FFC80A' : '#ECECEC'} ;
    border-radius: 14px;
    justify-content: center;
    align-items: center;
    background: ${props => props.selected ? '#FEFBEA' : '#FFF'};
`;

export const Footer = styled.View`
    margin-top: 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const CounterContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #F7F7F7;
    width: 35%;
    padding: 5px;
    border-radius: 16px;
`;

export const CounterBtn = styled(RectButton)`
    background: #FFF;
    flex: 1;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
`;

export const CounterText = styled.Text`
    font-family: NunitoSans_600SemiBold;
    font-size: 16px;
    margin: 0 10px;
`;

export const AddToCartBtn = styled(RectButton)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #54D308;
    width: 60%;
    height: 60px;
    border-radius: 16px;
`;

export const AddToCartBtnText = styled.Text`
    font-family: NunitoSans_800ExtraBold;
    color: #FFF;
    font-size: 17px;
    margin-left: 10px;
`;