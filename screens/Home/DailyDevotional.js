import React from 'react';
import {View, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
import {Button, Icon, ListItem} from 'react-native-elements';
import Card from '../../components/CustomCard';
import Header from '../../components/CustomHeader';
import {StyledHeader, StyledHeaderInverse, StyledText, StyledTextInverse} from "../../components/Typography";
import Colors from "../../constants/Colors";



export default class DailyDevotional extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <Header title={'Daily Devotional'}/>

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
        height: 100,
        justifyContent: 'center',
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 1,
    },

    main: {
        flex: 1,
        flexDirection: 'row',
    }
};
