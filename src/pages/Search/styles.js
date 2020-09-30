import styled from 'styled-components/native';

export const Container = styled.ScrollView`
   flex: 1;
   background: #F9F9F9;
   padding: 10px 30px;
`;

export const Title = styled.Text`
   font-family: NunitoSans_800ExtraBold;
   font-size: 30px;
   color: #312C24;
   max-width: 60%;
   line-height: 33px;
   margin-bottom: 20px;
`;

export const SearchContainer = styled.View`
   flex-direction: row;
   width: 100%;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 30px;
`;

export const InputBox = styled.View`
   flex: 1;
   background: #F1F1EF;
   flex-direction: row;
   align-items: center;
   padding: 12px;
   border-radius: 14px;
`;

export const TextInput = styled.TextInput`
   font-family: NunitoSans_400Regular;
   font-size: 16px;
   padding-left: 20px;
   flex: 1;
`;

export const OptionsContainer = styled.View`
   margin-left: 15px;
   background: #ffffff;
   height: 50px;
   width: 50px;
   justify-content: center;
   align-items: center;
   border-radius: 14px;
`;

export const Subtitle = styled.Text`
   font-family: NunitoSans_800ExtraBold;
   text-transform: uppercase;
   color: #BEBDBA;
   margin-bottom: 15px;
`;

export const Category = styled.View`
   width: 100%;
   height: 120px;
   background: ${props => props.color};
   border: 3px solid #F9F9F9;
   margin-bottom: -20px;
   border-top-left-radius: 34px;
   border-top-right-radius: 34px;
   flex-direction: row;
   justify-content: space-between;
   padding: 25px;
`;

export const CategoryTitle = styled.Text`
   font-family: NunitoSans_800ExtraBold;
   font-size: 20px;
   color: #FFF;
`;

export const CategoryImg = styled.Image`
   width: 160px;
   height: 120px;
   margin-top: -10px;
   /* background: #f0f; */
`;