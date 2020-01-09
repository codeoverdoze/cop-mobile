import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import {StyledHeader, StyledText, StyledTextInverse} from "../../components/Typography";
import emitter from "tiny-emitter/instance";
import HymnaryBar from "./components/HymnaryBar";
import debounce from "debounce";
import Hymnary from "../../store/Hymnary";
import hymnBook from "../../sample-data/hymnary";


export default class extends Component{
    constructor(props){
        super(props);
        this.state = { invalidHymnNumber: false };
        this.HymnNumber = Number(this.props.navigation.getParam('HymnNumber'));
        this.renderVerses = this.renderVerses.bind(this);
        console.log(this.HymnNumber);
    }


    renderVerses = (verse) => {
        console.log('render verse', verse);
        if (verse) {
            return(
                <View style={[styles.gridItem]} key={verse.item}>
                    <View style={{ alignSelf: "flex-start", paddingRight: 10}}>
                        <StyledText style={{ color: "#ef5350"}}>{verse.index + 1}</StyledText>
                    </View>
                    <View style={{ width: "90%", flexDirection: "column"}}>
                        <StyledText bible style={{ fontSize: 18}}>{verse.item}</StyledText>
                    </View>
                </View>
            )
        }
    };


    render() {
        console.log(this.HymnNumber, 'Current hymn number');
        const hymn = hymnBook[this.HymnNumber - 1];
        return (
            <View style={[styles.container]}>
                {
                    (hymn === undefined) ?
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
                            <StyledText style={{ fontSize: 18, fontStyle: "italic"}}>Ooops, Invalid Hymn Number</StyledText>
                        </View>
                        :
                        <View style={[styles.gridContainer]}>
                            <View style={{marginBottom: 73}}>
                                <FlatList
                                    data={hymn.verses}
                                    renderItem={this.renderVerses}
                                />
                            </View>
                            <View style={{ paddingTop: 10, position: 'absolute', bottom: 0, borderTopColor:'#949494', borderTopWidth: 0.3, paddingHorizontal: 15}}>
                                <StyledText bibleItalic style={{textAlign: 'center'}}>Scripture - {hymn.scripture}</StyledText>
                                <StyledText bibleItalic style={{textAlign: 'center'}}>Authored by {hymn.author}</StyledText>
                                {
                                    hymn.translator.length > 0 ?
                                        <StyledText bibleItalic style={{textAlign: 'center'}}>Translated by {hymn.translator}</StyledText>
                                        :
                                        null
                                }
                            </View>
                        </View>
                }
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8FAF9",
        paddingTop: 40
    },

    gridContainer: {
        shadowColor: "#000",
        margin: 20,
    },

    grid: {
        backgroundColor: "#FFFFFF",
        margin: 0,
        marginBottom: 20,
        padding: 0
    },

    gridItem: {
        flexDirection: "row",
        margin: 10
    }
});
