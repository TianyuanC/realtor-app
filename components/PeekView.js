import React, {Component} from 'react';
import { StyleSheet, ListView, Image, TouchableHighlight } from 'react-native';
import { View } from 'native-base';

export default class PeekView extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'https://cdn.realtor.ca/listing/TS636360487172830000/reb89/highres/3/r2186873_13.jpg',
                'https://cdn.realtor.ca/listing/TS636360487172830000/reb89/highres/3/r2186873_14.jpg',
                'https://cdn.realtor.ca/listing/TS636333758485100000/reb89/highres/3/r2178653_13.jpg',
                'https://cdn.realtor.ca/listing/TS636333758485430000/reb89/highres/3/r2178653_15.jpg',
                'https://cdn.realtor.ca/listing/TS636333758485630000/reb89/highres/3/r2178653_16.jpg']
            )
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        const { visible } = this.props;
        let content = null;
        if (visible) {
            content = (
                <View style={styles.container}>
                    <ListView
                        horizontal={true}
                        dataSource={this.state.dataSource}
                        renderRow={(itemUrl) => (
                            <TouchableHighlight onPress={() => navigate('DetailScreen', { uri: itemUrl })}>
                                <Image source={{uri: itemUrl}}
                                    style={styles.cell}/>
                            </TouchableHighlight>
                            )
                        }
                      />
                </View>
            );
        }
        return content;
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