import React from 'react';
import {ScrollView, TouchableOpacity, View} from "react-native";
import Header from "../components/CustomHeader";
import { StyledText } from "../components/Typography";

export default class TitheScreen extends React.Component {
    static navigationOptions = {
        header: null
    };


    render() {
        return (
            <View style={styles.container}>
                <Header title={'Payments'}/>


                <View style={[styles.main, { justifyContent: "center", alignItems: "center"}]}>
                    <StyledText style={{ fontSize: 20 }}>Coming Soon</StyledText>
                </View>

            </View>

        );
    }
}


const styles = {
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
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
