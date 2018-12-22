import React, { Component } from "react";
import {View, StyleSheet, SafeAreaView, FlatList, StatusBar} from "react-native";
import {StyledText } from "../../components/Typography";

import BibleBar from "./components/BibleBar";


import bible from "../../sample-data/bible-kjv.json";
import Bible from "../../store/Bible";

export default class extends Component{
    constructor(props){
        super(props);
        // Event listener to reload changes in bible
        const focusSubscription = this.props.navigation.addListener('willFocus', () => {
            this.forceUpdate();
        });
        StatusBar.setBarStyle("light-content")

    }


    renderVerses = (verse) => {
        console.log(verse);
        if (verse) {
            return(
                <View style={[styles.gridItem]}>
                    <View style={{ alignSelf: "flex-start", paddingRight: 10}}>
                        <StyledText style={{ color: "#ef5350"}}>{verse.index + 1}</StyledText>
                    </View>
                    <View style={{ width: "90%"}}>
                        <StyledText bible style={{ fontSize: 18}}>{verse.item}</StyledText>
                    </View>StyledTextInverse
                </View>
            )
        }
    };


    navigateToBibleBookScreen(){
        this.props.navigation.navigate("BibleBook");
    }

    navigateToBibleChapterScreen(){
        this.props.navigation.navigate("BibleChapter");
    }


    render() {
        // Finding bible book from data structure
        let selectedBook = Bible.getBook();
        let selectedChapter = Bible.getChapter();
        let book = {};
        bible.map(bookCandidate => {
            if(bookCandidate.name === selectedBook){
                book = bookCandidate;
            }
        });

        return (
            <View style={[styles.container]}>
                <BibleBar
                    navigateToBibleBookScreen={this.navigateToBibleBookScreen.bind(this)}
                    navigateToBibleChapterScreen={this.navigateToBibleChapterScreen.bind(this)}
                />
                <View style={[styles.gridContainer]}>
                    <FlatList
                        data={book.chapters[selectedChapter - 1]}
                        renderItem={this.renderVerses}
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingBottom: 60
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