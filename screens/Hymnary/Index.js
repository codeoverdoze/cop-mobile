import React, {Component} from "react";
import {View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity} from "react-native";
import {StyledHeader, StyledHeaderInverse, StyledText, StyledTextInverse} from "../../components/Typography";
import hymnBook from "../../sample-data/hymnary";
import {Ionicons} from "@expo/vector-icons";
import MembershipIcon from "../../components/MembershipIcons";
import {Audio} from 'expo-av';
import {showMessage} from "react-native-flash-message";
import Layout from "../../constants/NewLayout";
const { heightPercentageToDP, widthPercentageToDP } = Layout;



export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {invalidHymnNumber: false, isPlaying: false};
        this.HymnNumber = Number(this.props.navigation.getParam('HymnNumber'));
        this.renderVerses = this.renderVerses.bind(this);
        this.toggleHymn = this.toggleHymn.bind(this);
        this.soundObject = new Audio.Sound();
        console.log(this.HymnNumber);
    }

    async toggleHymn() {
        await Audio.requestPermissionsAsync();
        const permitAudio = await Audio.getPermissionsAsync();
        if (permitAudio.status === 'granted') {
            await Audio.setAudioModeAsync({
                playsInSilentModeIOS: true,
                playThroughEarpieceAndroid: false
            });

            try {

                if(this.state.isPlaying){
                    console.log("I am stopping");
                    await this.soundObject.stopAsync();
                    await this.soundObject.unloadAsync();
                    this.setState({ isPlaying: false })
                }else{
                    console.log("I am playing");
                    await this.soundObject.loadAsync(require('../../assets/hymns/001.mp3'));
                    await this.soundObject.playAsync();
                    this.setState({ isPlaying: true })
                }
            } catch (error) {
                console.error(error);
                showMessage({
                    type: 'error',
                    message: 'Failed to play hymn tune',
                })
            }

        } else {
            showMessage({
                type: 'warning',
                message: 'Cannot play hymn tune',
                description: 'Please allow audio permissions in settings to play hymn tune'
            })
        }

    }

    renderVerses = (verse) => {
        console.log('render verse', verse);
        if (verse) {
            return (
                <View style={[styles.gridItem]} key={verse.item}>
                    <View style={{alignSelf: "flex-start", paddingRight: 10}}>
                        <StyledText style={{color: "#ef5350"}}>{verse.index + 1}</StyledText>
                    </View>
                    <View style={{width: "90%", flexDirection: "column"}}>
                        <StyledText bible style={{fontSize: 18}}>{verse.item}</StyledText>
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
                <View style={[styles.headerBar, {paddingHorizontal: 20}]}>

                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name={"ios-arrow-back"} size={30} color="#FFFFFF"
                                  style={{justifyContent: "center"}}/>
                    </TouchableOpacity>
                    <StyledHeader h4 style={{alignSelf: "flex-start", color: '#fff'}}>PHB {this.HymnNumber}</StyledHeader>
                    {
                        this.state.isPlaying ?
                            <TouchableOpacity onPress={this.toggleHymn}>
                                <MembershipIcon
                                    color="#FFFFFF"
                                    height="25"
                                    width="25"
                                    style={{justifyContent: "center", alignItems: 'center'}}
                                    source={require('../../assets/icons/no-audio.svg')}
                                />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={this.toggleHymn}>
                                <MembershipIcon
                                    color="#FFFFFF"
                                    height="25"
                                    width="25"
                                    style={{justifyContent: "center", alignItems: 'center'}}
                                    source={require('../../assets/icons/voice.svg')}
                                />
                            </TouchableOpacity>
                    }
                </View>
                {
                    (hymn === undefined) ?
                        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                            <StyledText style={{fontSize: 18, fontStyle: "italic"}}>Ooops, Invalid Hymn
                                Number</StyledText>
                        </View>
                        :
                        <View style={[styles.gridContainer]}>
                            <View style={{marginBottom: 160, minHeight: heightPercentageToDP('70%')}}>
                                <FlatList
                                    data={hymn.verses}
                                    renderItem={this.renderVerses}
                                />
                            </View>
                            <View style={{
                                paddingTop: 10,
                                position: 'absolute',
                                bottom: 80,
                                borderTopColor: '#949494',
                                borderTopWidth: 0.3,
                                paddingHorizontal: 15,
                                width: '100%'
                            }}>
                                {/*<StyledText bibleItalic style={{textAlign: 'center'}}>Scripture
                                    - {hymn.scripture}</StyledText>
                                <StyledText bibleItalic style={{textAlign: 'center'}}>Authored
                                    by {hymn.author}</StyledText>
                                {
                                    hymn.translator.length > 0 ?
                                        <StyledText bibleItalic style={{textAlign: 'center'}}>Translated
                                            by {hymn.translator}</StyledText>
                                        :
                                        null
                                }*/}

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
    },

    gridContainer: {
        shadowColor: "#000",
        paddingHorizontal: 20,
    },

    grid: {
        backgroundColor: "#FFFFFF",
        margin: 0,
        marginBottom: 0,
        padding: 0
    },

    gridItem: {
        flexDirection: "row",
        margin: 10
    },
    headerBar: {
        backgroundColor: "#387ecb",
        height: 80,
        justifyContent: "space-between",
        flexDirection: "row",
        paddingTop: 40,
    },
});
