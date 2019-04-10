import React, { Component } from 'react';
import {createStackNavigator, createAppContainer } from 'react-navigation';
import Index from './src/index';

const MainNavigator = createStackNavigator({
  Index: {screen: Index},
}, {
  headerMode: 'none',
  initialRouteName: 'Index'
});

const App = createAppContainer(MainNavigator);

export default App;