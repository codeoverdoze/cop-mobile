import React from 'react';
import { View, ScrollView } from 'react-native';
import {Icon, List, ListItem} from 'react-native-elements';
import Colors from "../../constants/Colors";


export default class BibleList extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        const bible = require('../../sample-data/bible-kjv');

        return (
            <View style={{ flex: 1}}>
                <ScrollView>
                    {
                        bible.map((section, i) => (
                            <ListItem
                                key={i}
                                title={section.name}
                            />
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}