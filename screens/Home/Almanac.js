import React from 'react';
import {StyleSheet, FlatList, SafeAreaView, View} from 'react-native';
import {StyledHeader} from "../../components/Typography";

export default class extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StyledHeader>Hello World</StyledHeader>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
});