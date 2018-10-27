import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {ScrollView, TouchableOpacity, View} from "react-native";
import {StyledHeader, StyledText, StyledTextInverse} from "../components/Typography";
import Card from "../components/CustomCard";
import Header from "../components/CustomHeader";

export default class BibleDashboardScreen extends React.Component {
    static navigationOptions = {
        header: null
    };


    render() {
        return (
            <View style={styles.container}>
                <Header title={'Bible'}/>


                <ScrollView style={styles.main}>

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

    top: {
        backgroundColor: '#F6F6F7',
        padding: 20,
        paddingTop: 50,
        height : 100,
        justifyContent: 'center',
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 1,
    },

    main: {
        flex: 1,
        flexDirection: 'row',
    }
};
