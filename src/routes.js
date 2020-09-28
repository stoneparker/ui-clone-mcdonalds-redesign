import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import Search from './pages/Search';
import ShoppingCart from './pages/ShoppingCart';

import MainHeader from './components/MainHeader';

const AppStack = createStackNavigator();
const AppBottomTab = createBottomTabNavigator();

const StackRoutes = () => (
   <NavigationContainer>
      <AppStack.Navigator 
         screenOptions={{
            cardStyle: { backgroundColor: '#F9F9F9' }
         }}
      >
         <AppStack.Screen 
            name="Onboarding" 
            component={Onboarding} 
            options={{
               header: () => (
                  <MainHeader backgroundColor="yellow" />
               )
            }}
         />
         <AppStack.Screen 
            name="Home" 
            component={BottomRoutes} 
            options={{
               header: () => (
                  <MainHeader backgroundColor="white" />
               )
            }}
         />
         <AppStack.Screen name="ShoppingCart" component={ShoppingCart} />
      </AppStack.Navigator>
   </NavigationContainer>
);

const BottomRoutes = () => (
   <AppBottomTab.Navigator
      screenOptions={{
         cardStyle: { backgroundColor: '#F9F9F9' }
      }}
   >
      <AppBottomTab.Screen name="Home" component={Home} />
      <AppBottomTab.Screen name="Search" component={Search} />
   </AppBottomTab.Navigator>
)

export default StackRoutes;

