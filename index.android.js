import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet
} from 'react-native';

import MapScreen from './components/MapScreen'
import DetailScreen from './components/DetailScreen'
import PeekView from './components/PeekView'

import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
    MapScreen: { screen: MapScreen },
    PeekView: { screen: PeekView},
    DetailScreen: {screen: DetailScreen}
});

AppRegistry.registerComponent('realtor', () => App);