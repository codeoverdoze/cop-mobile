import React from 'react';
import { View } from 'react-native';
import {StyledHeader} from "../../../components/Typography";

export default class CustomHeader extends React.Component{
    render() {
        return (
            <View style={[styles.top]}>
                <StyledHeader>{this.props.title}</StyledHeader>
            </View>
        );
    }
}


const styles = {
    top: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        paddingTop: 50,
        height: 100,
        justifyContent: 'center',
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 0.2,
    }
};