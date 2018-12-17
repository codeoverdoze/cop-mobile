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
        // Event listener to reload changes in bible
        const focusSubscription = this.props.navigation.addListener('willFocus', () => {
            this.forceUpdate();
        });

        emitter.on("hymn-change", async () => {
            console.log('Change in screen', Hymnary.getHymnNumber());
            if(Hymnary.getHymnNumber() > hymnBook.length || Hymnary.getHymnNumber() == 0){
                await this.setState({ invalidHymnNumber: true })
            }else{
                await this.setState({ invalidHymnNumber: false })
            }
        });
    }


    renderVerses = (verse) => {
        if (verse) {
            const hymn = hymnBook[Hymnary.getHymnNumber() - 1];
            return(
                <View style={[styles.gridItem]} key={verse.item}>
                    <View style={{ alignSelf: "flex-start", paddingRight: 10}}>
                        <StyledText style={{ color: "#ef5350"}}>{verse.index + 1}</StyledText>
                    </View>
                    <View style={{ width: "90%", flexDirection: "column"}}>
                        <StyledText bible style={{ fontSize: 18}}>{verse.item}</StyledText>

                        {
                            verse.index + 1 === hymnBook[Hymnary.getHymnNumber() - 1].verses.length
                                ?
                                <View style={{ marginTop: 10}}>
                                    <StyledText bibleItalic>Scripture - {hymn.scripture}</StyledText>
                                    <StyledText bibleItalic>Authored by {hymn.author}</StyledText>
                                    {
                                        hymn.translator.length > 0 ?
                                            <StyledText bibleItalic>Transalated by {hymn.translator}</StyledText>
                                            :
                                            null
                                    }
                                </View>
                                :
                                null
                        }
                    </View>
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
        console.log(Hymnary.getHymnNumber(), 'Current hymn number');
        return (
            <View style={[styles.container]}>
                <HymnaryBar
                    navigateToBibleBookScreen={this.navigateToBibleBookScreen.bind(this)}
                    navigateToBibleChapterScreen={this.navigateToBibleChapterScreen.bind(this)}
                />
                {
                    this.state.invalidHymnNumber ?
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
                            <StyledText style={{ fontSize: 20, fontStyle: "italic"}}>Ooops, Invalid Hymn Number</StyledText>
                        </View>
                        :
                        <View style={[styles.gridContainer]}>
                            <FlatList
                                data={hymnBook[Hymnary.getHymnNumber() - 1].verses}
                                renderItem={this.renderVerses}
                            />
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
        paddingBottom: 100
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