import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  useFonts, 
  NunitoSans_400Regular, 
  NunitoSans_600SemiBold,
  NunitoSans_700Bold,
  NunitoSans_800ExtraBold,
} from '@expo-google-fonts/dev';

import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_600SemiBold,
    NunitoSans_700Bold,
    NunitoSans_800ExtraBold,
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