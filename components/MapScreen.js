import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { Container, Badge, Text} from 'native-base';
import MapView from 'react-native-maps';
import SearchBar from './SearchBar'
import PeekView from './PeekView'

export default class MapScreen extends Component {
    static navigationOptions = {
        title: 'Map Screen',
        header: <SearchBar />
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
            <Container tyle={styles.container}>
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
                <PeekView style={styles.footer} />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    map: {
        flex: 2
    },
    footer: {
        flex: 1
    }
});