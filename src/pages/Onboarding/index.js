import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { 
   Container,
   RonaldImg,
   Title,
   Subtitle,
   Button,
   ButtonText,
} from './styles';

const Onboarding = () => {
   const { navigate } = useNavigation();

   return (
      <ScrollView 
         showsVerticalScrollIndicator={false}
         style={{ backgroundColor: '#FFCC00' }}
      >
         <Container>
            <RonaldImg 
               source={require('../../assets/ronaldmc.png')}
               resizeMode="contain"
            />

            <Title>Are you hungry?</Title>
            <Subtitle>Ronald McDonald will deliver you a paradise for the palate</Subtitle>

            <Button onPress={() => navigate('Home')}>
               <ButtonText>Let's order a meal</ButtonText>
            </Button>
         </Container>
      </ScrollView>
   );
}

export default Onboarding;