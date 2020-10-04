import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const AuxScreen = () => {
  const { goBack, navigate } = useNavigation();

  // alert('kkkkkkkkkkkkkkkkkkkkkk')
  
  
  // useEffect(() => {
  //   goBack();
    
  // }, []);

  return <View />;
}

export default AuxScreen;