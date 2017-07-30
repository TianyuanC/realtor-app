import React, {Component} from 'react';
import { StyleSheet, LayoutAnimation } from 'react-native';
import { Container, Badge, Text} from 'native-base';
import MapView from 'react-native-maps';
import SearchBar from './SearchBar';
import PeekView from './PeekView';
import { locations } from '../data/listingInfo';

export default class MapScreen extends Component {
    static navigationOptions = {
        title: 'Map Screen',
        header: <SearchBar />
    };

    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 49.246292,
                longitude: -123.116226,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            showPeekView: false,
            markers: locations
        }
    }

    openPeekView() {
        LayoutAnimation.easeInEaseOut();
        this.setState({
            showPeekView: true
        });
    }

    closePeekView() {
        this.setState({
            showPeekView: false
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container style={styles.container}>
                <MapView
                    onPress={this.closePeekView.bind(this)}
                    style={styles.map}
                    region={this.state.region}
                    >
                    {this.state.markers.map(({latlng, listings}, index) => {
                        return (
                            <MapView.Marker
                                key={index}
                                onSelect={this.openPeekView.bind(this)}
                                coordinate={latlng}>
                                <Badge primary>
                                    <Text>{
                                        `${listings} listings`
                                    }</Text>
                                </Badge>
                            </MapView.Marker>
                        );
                    })}
                </MapView>
                <PeekView style={styles.footer}
                    visible={this.state.showPeekView}
                    navigation={{navigate}}/>
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
