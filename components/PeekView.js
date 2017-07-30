import React, {Component} from 'react';
import { StyleSheet, ListView, Image, TouchableHighlight } from 'react-native';
import { View } from 'native-base';
import { photoUrls } from '../data/listingInfo';

export default class PeekView extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            photoUrls,
            dataSource: ds.cloneWithRows(photoUrls)
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
