import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import TimeAgo from 'react-native-timeago';
import { Entypo } from '@expo/vector-icons';
import { StyledText } from "./Typography";
import Color from '../constants/Colors';


class ListItem extends Component{
    constructor(props){
        super(props);
        this.state = { new: true };
    }


    render(){
        return(
           <View style={{ flex: 1}}>
               <TouchableOpacity onPress={() => this.props.moveToNextScreen(this.props.item)}>
                   <View style={styles.root}>
                       <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                           <View style={{ flexDirection: 'row'}}>
                               <View style={{ justifyContent: 'center', margin: 5}}>
                                   <Avatar source={{ uri: this.props.item.image }} rounded medium/>
                               </View>

                               <View style={{ flexDirection: 'column', justifyContent: 'center'}}>
                                   <View>
                                       <View><StyledText style={{ fontSize: 20 }}>{this.props.item.heading}</StyledText></View>
                                   </View>

                                   <View>
                                       <View><StyledText>{this.props.item.additionalNotes}</StyledText></View>
                                   </View>
                               </View>
                           </View>

                           { /* TODO: Format date properly */ }
                           <View style={{ margin: 5}}>
                               <View>
                                   <StyledText><TimeAgo time={this.props.item.updatedAt}/></StyledText>
                               </View>

                               <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center'}}>
                                   <Entypo name='chevron-thin-right' color={Color.tintColor}/>
                               </View>
                           </View>
                       </View>
                   </View>
               </TouchableOpacity>
           </View>
        )
    }
}


const styles = {
    root: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 10,
        padding: 5,
        height: 80
    }
};
export default ListItem;

