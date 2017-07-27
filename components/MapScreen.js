import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { Container, Badge, Text } from 'native-base';
import MapView from 'react-native-maps';
import SearchBar from './SearchBar'

export default class MapScreen extends Component {
    static navigationOptions = {
        title: 'Map Screen'
      };

    constructor() {
        super();
        this.state = {
            region: {
                latitude: 49.246292,
                longitude: -123.116226,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        }
    }

    componentDidMount() {
        //api data fetch goes here
    }

    render() {
        return (
            <Container>
                <SearchBar />
                <MapView
                    style={styles.map}
                    region={this.state.region}
                    >
                    <MapView.Marker
                        coordinate={{latitude: 49.24629,
                            longitude: -123.116226}}>
                        <Badge primary>
                            <Text>$123</Text>
                        </Badge>
                    </MapView.Marker>
                </MapView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 65,
        left: 0,
        right: 0,
        bottom: 0,
    }
});