import React from 'react';
import { View } from 'react-native';

import { Container, Logo } from './styles';

const MainHeader = ({ backgroundColor }) => {
   return (
      <Container color={backgroundColor === 'yellow' ? '#FFCC00' : '#F9F9F9'}>
         <Logo 
            source={{ uri: backgroundColor === 'yellow' ?
               'https://www.evokad.com/wp-content/uploads/2015/12/McDonalds-logo-470x470.png' :
               'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/877px-McDonald%27s_Golden_Arches.svg.png'
            }}
            resizeMode={backgroundColor === 'yellow' ? 'cover' : 'contain'}
         />
      </Container>
   );
}

export default MainHeader;