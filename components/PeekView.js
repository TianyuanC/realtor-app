import React, {Component} from 'react';
import { StyleSheet, ListView, Image, TouchableHighlight } from 'react-native';
import { View } from 'native-base';

export default class PeekView extends Component {
    static navigationOptions = {
        title: 'Peek View',
    };

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'https://cdn.realtor.ca/listing/TS636360487172830000/reb89/highres/3/r2186873_13.jpg',
                'https://cdn.realtor.ca/listing/TS636360487172830000/reb89/highres/3/r2186873_14.jpg',
                'https://cdn.realtor.ca/listing/TS636316468516730000/reb89/highres/8/r2168298_1.jpg',
                'https://cdn.realtor.ca/listing/TS636316468517400000/reb89/highres/8/r2168298_4.jpg']
            )
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ListView
                    horizontal={true}
                    dataSource={this.state.dataSource}
                    renderRow={(item) => (
                        <TouchableHighlight onPress={() => navigate('DetailScreen')}>
                            <Image source={{uri: item}}
                                style={styles.cell}/>
                        </TouchableHighlight>
                        )
                    }
                  />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    cell: {
        width: 200,
        height: 200
    }
});