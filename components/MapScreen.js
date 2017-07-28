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

    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 49.246292,
                longitude: -123.116226,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            showPeekView: false
        }
    }

    componentDidMount() {
        //api data fetch goes here
    }

    openPeekView() {
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
        let peekView = null;
        if (this.state.showPeekView) {
            peekView = <PeekView style={styles.footer}
                    navigation={{navigate}}/>;
        }
        return (
            <Container tyle={styles.container}>
                <MapView
                    onPress={this.closePeekView.bind(this)}
                    style={styles.map}
                    region={this.state.region}
                    >
                    <MapView.Marker
                        onSelect={this.openPeekView.bind(this)}
                        coordinate={{latitude: 49.24629,
                            longitude: -123.116226}}>
                        <Badge primary>
                            <Text>5 listings</Text>
                        </Badge>
                    </MapView.Marker>
                </MapView>
                {peekView}
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