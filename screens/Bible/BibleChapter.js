import React from 'react';
import { View } from 'react-native';
import Header from '../../components/CustomHeader';

export default class BibleChapter extends React.Component{
    render(){
        return(
            <View>
                <Header title={'Chpter'}/>
            </View>
        )
    }
}