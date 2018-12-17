import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import GridLayout from "react-native-layout-grid";
import {StyledHeader, StyledText} from "../../components/Typography";

import Bible from "../../store/Bible";
import BibleBar from "./components/BibleBar";


import bible from "../../sample-data/bible-kjv-shell.json";

export default class extends Component{
    setBibleBook(book){
        Bible.setBook(book);
        this.props.navigation.navigate("BibleChapter");
    }

    renderGridItem = (item) => {
        if (item) {
            return(
                // We make use of key to set bible name because we made changes to some values for name. 2Kings, etc
                <TouchableOpacity onPress={() => this.setBibleBook(item.name)} key={item.key}>
                    <View style={[styles.gridItem, { alignItems: "center"}]}>
                        <StyledText style={{ fontSize: 18, color: "#FFFFFF", fontWeight: "bold"}}>{item.key.substring(0, 3)}</StyledText>
                    </View>
                </TouchableOpacity>
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
        return (
            <View style={[styles.container]}>
                <BibleBar
                    navigateToBibleBookScreen={this.navigateToBibleBookScreen.bind(this)}
                    navigateToBibleChapterScreen={this.navigateToBibleChapterScreen.bind(this)}
                />
                <ScrollView style={[styles.gridContainer]}>
                    <StyledText style={{ fontSize: 20, margin: 5}}>Old Testament</StyledText>
                    <View style={[styles.grid]}>
                        <GridLayout
                            items={bible.slice(0, 38)}
                            itemsPerRow={5}
                            renderItem={this.renderGridItem}
                            removeClippedSubviews={false}
                        />
                    </View>

                    <StyledText style={{ fontSize: 20, margin: 5}}>New Testament</StyledText>
                    <View style={[styles.grid]}>
                        <GridLayout
                            items={bible.slice(39)}
                            itemsPerRow={5}
                            renderItem={this.renderGridItem}
                            removeClippedSubviews={false}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8FAF9"
    },

    gridContainer: {
        margin: 20,
        /*shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,*/
    },

    grid: {
        backgroundColor: "#FFFFFF",
        margin: 0,
        marginBottom: 20,
        padding: 0
    },

    gridItem: {
        borderWidth: 1,
        borderColor: "#F0F0F0",
        padding: 10,
        backgroundColor: "#387ecb"
    }
});