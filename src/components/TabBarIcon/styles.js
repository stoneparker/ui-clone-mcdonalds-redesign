import styled from 'styled-components/native';

export const Container = styled.View`
   background: ${props => props.color};
   width: 40px; 
   height: 40px; 
   justify-content: center;
   align-items: center;
   border-radius: 13px;
`;
