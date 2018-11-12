import React from 'react';
import { View, ScrollView } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import {StyledText} from "../../components/Typography";
import {Entypo} from "@expo/vector-icons";
import Color from "../../constants/Colors";
import GridLayout from 'react-native-layout-grid';

const bible = require('../../sample-data/bible-kjv');


export default class BibleBook extends React.Component{
    constructor(props){
        super(props);
        this.state = { activeSections: [] }
    }

    renderHeader = book => {
        return(
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
        )
    };


    renderContent = book => {
        // Pulling out chapters
        let chapters = [];

        book.chapters.map((chapter, index) => { chapters.push(index + 1)});

        return(
            <View>
                <GridLayout
                    items={chapters}
                    itemsPerRow={3}
                    renderItem={chapter => <StyledText>{chapter}</StyledText>}
                />
            </View>
        )
    };


    updateSections = activeSections => {
        this.setState({ activeSections });
    };


    render(){
        return (
            <View style={{ flex: 1}}>
                <Accordion
                    sections={bible}
                    renderHeader={book => this.renderHeader(book)}
                    renderContent={book => this.renderContent(book)}
                    activeSections={this.state.activeSections}
                    onChange={activeSections => this.updateSections(activeSections)}
                />
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