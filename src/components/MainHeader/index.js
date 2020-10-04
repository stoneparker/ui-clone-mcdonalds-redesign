import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Feather } from '@expo/vector-icons';

import { Container, Logo, RightBtn, HelpText } from './styles';

const MainHeader = ({ backgroundColor }) => {
   const { navigate } = useNavigation();

   return (
      <Container color={backgroundColor === 'yellow' ? '#FFCC00' : '#F9F9F9'}>
         <Logo 
            source={{ uri: backgroundColor === 'yellow' ?
               'https://www.evokad.com/wp-content/uploads/2015/12/McDonalds-logo-470x470.png' :
               'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/877px-McDonald%27s_Golden_Arches.svg.png'
            }}
            resizeMode={backgroundColor === 'yellow' ? 'cover' : 'contain'}
         />
         <RightBtn 
            color={backgroundColor === 'yellow' ? '#FFCC00' : '#FFF'}
         >
            {backgroundColor !== 'yellow' ?  
               <Feather name="shopping-cart" color="#312C24" size={17} />
            : 
               <HelpText>?</HelpText>
            } 
         </RightBtn>
      </Container>
   );
}

export default MainHeader;