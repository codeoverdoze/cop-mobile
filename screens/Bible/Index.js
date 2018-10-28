import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {ScrollView, TouchableOpacity, View} from "react-native";
import { Button } from 'react-native-elements';
import { EvilIcons } from '@expo/vector-icons';
import {StyledHeader, StyledText, StyledTextInverse} from "../../components/Typography";
import Card from "../../components/CustomCard";

export default class Index extends React.Component {
    static navigationOptions = {
        // Header title holds button that use getParam and setParam to talk to the main screen...
        // Padding was added to the button to make them skinny. They were overwritten
        headerTitle: (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{ flex: 1, alignSelf: 'center'}}>
                    <Button backgroundColor='#F6F6F7' color='#000000' borderRadius={5}
                            title={<EvilIcons name='search' size={25}/>} onPress={() => { console.log('Pressed')}}
                            buttonStyle={{ padding: 5}}/>
                </View>

                <View style={{ flex: 3, alignSelf: 'center'}}>
                    <Button backgroundColor='#e0e0e0' color='#000000' borderRadius={5}
                            title={<StyledText>1 CORINTHIANS 3</StyledText>} onPress={() => { console.log('Pressed')}}
                            buttonStyle={{ padding: 5}}/>
                </View>

                <View style={{ flex: 1, alignSelf: 'center'}}>
                    <Button backgroundColor='#e0e0e0' color='#000000' borderRadius={5}
                            title={<StyledText>KJV</StyledText>} onPress={() => { console.log('Pressed')}}
                            buttonStyle={{ padding: 5}}/>
                </View>
            </View>
        ),
        headerStyle: {
            backgroundColor: '#F6F6F7'
        }

    };


    render() {
        const bible = require('../../sample-data/bible-kjv');
        return (
            <View style={styles.container}>
                <ScrollView style={styles.main}>
                    {}
                </ScrollView>
            </View>
        );
    }
}


const styles = {
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    main: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
    }
};
