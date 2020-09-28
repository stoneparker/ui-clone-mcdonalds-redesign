import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import Search from './pages/Search';
import ShoppingCart from './pages/ShoppingCart';

const AppStack = createStackNavigator();
const AppBottomTab = createBottomTabNavigator();

const StackRoutes = () => (
   <NavigationContainer>
      <AppStack.Navigator>
         <AppStack.Screen name="Onboarding" component={Onboarding} />
         <AppStack.Screen name="Home" component={BottomRoutes} />
         <AppStack.Screen name="ShoppingCart" component={ShoppingCart} />
      </AppStack.Navigator>
   </NavigationContainer>
);

const BottomRoutes = () => (
   <AppBottomTab.Navigator>
      <AppBottomTab.Screen name="Home" component={Home} />
      <AppBottomTab.Screen name="Search" component={Search} />
   </AppBottomTab.Navigator>
)

export default StackRoutes;

