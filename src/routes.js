import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { View, Button } from 'react-native';

import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import Search from './pages/Search';
import ProductDetails from './pages/ProductDetails';
import AuxScreen from './pages/AuxScreen';

import MainHeader from './components/MainHeader';
import ProductDetailsHeader from './components/ProductDetailsHeader';

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
               ),
            }}
         />
         <AppStack.Screen 
            name="ProductDetails" 
            component={ProductDetails} 
            options={{
               header: () => <ProductDetailsHeader />
            }}
         />
      </AppStack.Navigator>
   </NavigationContainer>
);

const BottomRoutes = () => (
   <AppBottomTab.Navigator
      screenOptions={{
         cardStyle: { backgroundColor: '#F9F9F9' }
      }}
      tabBarOptions={{
         style: {
            elevation: 0,
            shadowOpacity: 0,
            height: 64,
         },
         tabStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
         },
         iconStyle: {
            flex: 0,
            width: 20,
            height: 20,
         },
         showLabel: false,
      }}
   >
      <AppBottomTab.Screen 
         name="Home" 
         component={Home} 
         options={{
            tabBarIcon: ({ color, size, focused }) => (
               <View style={{ backgroundColor: focused ? '#FFFAE5' : '#FFF', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 13 }}>
                  <Feather name="home" size={size} color={focused ? '#F37713' : color} />
               </View>
            )
         }}
      />
      <AppBottomTab.Screen 
         name="Search" 
         component={Search} 
         options={{
            tabBarIcon: ({ color, size, focused }) => (
               <View style={{ backgroundColor: focused ? '#FFFAE5' : '#FFF', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 13 }}>
                  <Feather name="search" size={size} color={focused ? '#F37713' : color} />
               </View>
            )
         }}
      />
      <AppBottomTab.Screen 
         name="Favorites" 
         component={AuxScreen} 
         options={{
            tabBarIcon: ({ color, size, focused }) => (
               <View style={{ backgroundColor: focused ? '#FFFAE5' : '#FFF', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 13 }}>
                  <Feather name="heart" size={size} color={focused ? '#F37713' : color} />
               </View>
            )
         }}
      />
      <AppBottomTab.Screen 
         name="Profile" 
         component={AuxScreen} 
         options={{
            tabBarIcon: ({ color, size, focused }) => (
               <View style={{ backgroundColor: focused ? '#FFFAE5' : '#FFF', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 13 }}>
                  <Feather name="user" size={size} color={focused ? '#F37713' : color} />
               </View>
            )
         }}
      />
   </AppBottomTab.Navigator>
)

export default StackRoutes;