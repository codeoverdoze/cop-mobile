// Simple Margin
import React from 'react';
import { View } from 'react-native';

const Margin = ({ margin }) => {
    if(!margin){
        return(
            <View style={{ marginTop: 10, marginBottom: 10}}>

            </View>
        )
    }

    return(
        <View style={{ marginTop: margin, marginBottom: margin}}>

        </View>
    )
};

export default Margin;