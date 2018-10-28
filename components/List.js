import React from "react";
import ListItem from './ListItem';
import { ScrollView, View } from 'react-native';


export default List = ({ items, moveToNextScreen, reverse }) => {
    if(reverse){
        items.reverse();
    }
    return (
        <View style={{ flex: 1}}>
            {items.map( item => <ListItem item={item} key={item.id} moveToNextScreen={moveToNextScreen}/>)}
        </View>
    )
}
