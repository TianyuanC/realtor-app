import React, {Component} from 'react';
import { StyleSheet, ScrollView, Image, TouchableHighlight } from 'react-native';
import { View, Text, Button, Icon } from 'native-base';

export default class PeekView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        const { visible, photoUrls } = this.props;
        let content = null;
        if (visible) {
            content = (
                <View style={styles.container}>
                    <ScrollView
                        horizontal={true}>
                        {photoUrls.map((uri, index) => {
                            return (
                                <TouchableHighlight key={index}
                                    onPress={() => navigate('DetailScreen', { uri })}>
                                        <Image source={{uri}}
                                            style={styles.cell}/>
                                </TouchableHighlight>
                            );
                        })}
                    </ScrollView>
                    <Button transparent
                        onPress={() => this.props.onClose()}
                        style={styles.close}>
                        <Icon name="ios-close" />
                    </Button>
                </View>
            );
        }
        return content;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    cell: {
        width: 200,
        height: 220
    },
    close: {
        position: 'absolute',
        top: -12,
        right: -12
    }
});
