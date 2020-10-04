import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container } from './styles';

const TabBarIcon = ({ size, focused, color, icon }) => {
  return (
     <Container color={focused ? '#FFFAE5' : '#FFF'}>
        <Feather name={icon} size={size} color={focused ? '#F37713' : color} />
     </Container>
  );
}

export default TabBarIcon;