import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const Onboarding = () => {
   const { navigate } = useNavigation();

   return (
      <View>
         <TouchableOpacity onPress={() => navigate('Home')}>
            <Text>Navigate to home</Text>
         </TouchableOpacity>
      </View>
   );
}

export default Onboarding;