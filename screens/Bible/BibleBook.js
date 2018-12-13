import React from 'react';
import { View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal'
import {StyledText, StyledHeader, StyledSubtitle} from "../../components/Typography";
import {Entypo} from "@expo/vector-icons";
import Color from "../../constants/Colors";
import Margin from '../../components/Margin';
import GridLayout from 'react-native-layout-grid';

const bible = require('../../sample-data/bible-kjv-shell');


export default class BibleBook extends React.Component{
    constructor(props){
        super(props);
        this.state = { activeBook: {}, chapterModalOpen: false };

        this.navigateToBibleVerse = this.navigateToBibleVerse.bind(this);
    }


    async setActiveBook(book){
        await this.setState({ activeBook: book, chapterModalOpen: true });
        console.log(this.state);
    }

    renderHeader = book => {
        return(
           <TouchableOpacity onPress={() => this.setActiveBook(book)}>
               <View style={{flex: 1}}>
                   <View style={styles.root}>
                       <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                           <View style={{flexDirection: 'row'}}>
                               <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                                   <View>
                                       <View><StyledText
                                           style={{fontSize: 20}}>{book.name}</StyledText></View>
                                   </View>
                               </View>
                           </View>

                           <View style={{margin: 5}}>
                               <View style={{
                                   flex: 1,
                                   flexDirection: 'row',
                                   alignSelf: 'flex-end',
                                   alignItems: 'center'
                               }}>
                                   <Entypo name='chevron-thin-down' color={Color.tintColor}/>
                               </View>
                           </View>
                       </View>
                   </View>
               </View>
           </TouchableOpacity>
        )
    };

    navigateToBibleVerse(){
        console.log('Props', this.props);

        this.props.navigation.navigate('BibleVerse')
    }

    renderSingleChapterSelect(chapter){
        // Building chapter array from chapter object
        // There is an issue with the gridview library where it keeps rendering the component till the row is exhausted
        // I am conditionally rendering if there is a chapter to render. It's a bug in the lib and we don't have the time
        // to fix it


        if(chapter){
            return(
                <TouchableOpacity
                    style={{ backgroundColor: '#F6F6F7', borderRadius: 15 }}
                    onPress={this.navigateToBibleVerse}
                >
                    <StyledSubtitle
                        style= {{ flex: 1, fontSize: 20, alignSelf: 'center', justifyContent: 'center', margin: 5}}
                    >
                        {chapter}
                    </StyledSubtitle>
                </TouchableOpacity>
            )
        }
    }


    render(){
        return (
            <View style={{ flex: 1}}>
                <FlatList
                    data={bible}
                    renderItem={({ item }) => this.renderHeader(item)}
                />

                {/*Optionally render modal to show chapters*/}

                <Modal
                    isVisible={this.state.chapterModalOpen}
                    useNativeDriver={true}
                    hideModalContentWhileAnimating={true}
                    onBackdropPress={() => this.setState({ chapterModalOpen: false })}
                >
                    <View style={{ minHeight: '40%', maxHeight: '80%', borderRadius: 10}}>
                        <View style={{ backgroundColor: '#FFFFFF', borderRadius: 12, padding: 15 }}>
                            <View>
                                <StyledHeader style={{ marginLeft: 5}}>{this.state.activeBook.name}</StyledHeader>
                            </View>

                            <ScrollView style={{ paddingBottom: 10 }}>
                                <GridLayout
                                    itemsPerRow={5}
                                    renderItem={chapter => this.renderSingleChapterSelect(chapter)}
                                    items={this.state.activeBook.chapters}
                                />
                            </ScrollView>
                        </View>

                        <Margin/>
                    </View>
                </Modal>
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
        height: 40
    }
};