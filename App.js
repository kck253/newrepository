/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen  from './components/HomeScreen'
import Login from './components/Login'
import{createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Screen3 from './components/Screen3';

const App= createStackNavigator({
  
  Login:{
    screen:Login,
    navigationOptions:{
    headerShown:false
    }
  },
  HomeScreen:{
    screen:HomeScreen,
    navigationOptions:{
    headerShown:false
    }
  },
  Screen3:{
    screen:Screen3,
    navigationOptions:{
    headerShown:false
    }
  }
})
  
export default createAppContainer(App)
