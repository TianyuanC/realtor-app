import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet
} from 'react-native';
import MapScreen from './components/MapScreen'

import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
    MapScreen: { screen: MapScreen }
});

AppRegistry.registerComponent('realtor', () => App);