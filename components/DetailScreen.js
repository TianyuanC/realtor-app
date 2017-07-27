import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';

export default class DetailScreen extends Component {
    static navigationOptions = {
        title: 'Detail Screen',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Details</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
});
