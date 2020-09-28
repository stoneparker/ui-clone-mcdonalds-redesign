import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import { 
  useFonts, 
  NunitoSans_400Regular, 
  NunitoSans_700Bold,
  NunitoSans_800ExtraBold,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/dev';

import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
    NunitoSans_800ExtraBold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return false;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}