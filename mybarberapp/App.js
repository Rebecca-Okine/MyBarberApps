import { StatusBar } from "expo-status-bar";
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer}from'@react-navigation/native';
import {createStackNavigator}from'@react-navigation/stack';

import Splash from "./Screens/Splash";
import Login from "./Screens/Login";
import Barbers from "./Screens/Barbers";
import Booking from "./Screens/Booking";
import Gallery from "./Screens/Gallery";
import Notifications from "./Screens/Notifications";
import Rating from "./Screens/Rating";
import Home from "./Screens/Home";


import { Provider } from 'react-native-paper'



export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View style ={{flex: 1}}>
   
      <NavigationContainer>
         <MainNavigator.Navigator screenOptions={{ headerShown: false }} >

          <MainNavigator.Screen name="Splash" component={Splash} />
          <MainNavigator.Screen name="Login" component={Login} />
          <MainNavigator.Screen name="Home" component={Home} />
          <MainNavigator.Screen name="Barbers" component={Barbers}/>
          <MainNavigator.Screen name="Gallery" component={Gallery} />
          <MainNavigator.Screen name="Rating" component={Rating} />
          <MainNavigator.Screen name="Booking" component={Booking} />
          <MainNavigator.Screen name="Notifications" component={Notifications} />
          
          


        

         </MainNavigator.Navigator>
      </NavigationContainer> 
      
      
    </View>
  );
}
