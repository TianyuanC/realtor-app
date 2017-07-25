import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet
} from 'react-native';
import MapView from 'react-native-maps';

export default class App extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <MapView
                style={ styles.map }
                initialRegion={{
                    latitude: 49.246292,
                    longitude: -123.116226,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});

AppRegistry.registerComponent('realtor', () => App);