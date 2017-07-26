import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, Badge } from 'native-base';
import MapView from 'react-native-maps';

export default class App extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <MapView
                    style={ styles.map }
                    initialRegion={{
                        latitude: 49.246292,
                        longitude: -123.116226,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}>
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
    },
});

AppRegistry.registerComponent('realtor', () => App);