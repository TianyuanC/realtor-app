import React, {Component} from 'react';
import { StyleSheet, Image} from 'react-native';
import { View, Text } from 'native-base';

export default class DetailScreen extends Component {
    render() {
        const { uri } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Image source={{uri}}
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
