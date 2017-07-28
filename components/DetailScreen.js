import React, {Component} from 'react';
import { StyleSheet, Image} from 'react-native';
import { View, Text } from 'native-base';

export default class DetailScreen extends Component {
    static navigationOptions = {
        title: 'Detail Screen',
    };

    render() {
        const imageUrl = 'https://cdn.realtor.ca/listing/TS636333758485630000/reb89/highres/3/r2178653_16.jpg';
        return (
            <View style={styles.container}>
                <Image source={{uri: imageUrl}}
                    style={styles.image}/>
                <View style={styles.description}>
                    <Text>Descriptions</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    image:{
        flex:1
    },
    description: {
        flex:2,
        alignItems: 'center'
    }
});
