import React, { Component } from 'react';
import {View, StyleSheet, StatusBar, TouchableOpacity, Image, ScrollView} from "react-native";
import {StyledHeader, StyledHeaderInverse, StyledText, StyledTextInverse} from "../../components/Typography";
import {Ionicons} from "@expo/vector-icons";
import AuthInformation from "../../store/AuthInformation";
import { showMessage } from "react-native-flash-message";


const userProfileImage = require("../../assets/images/user-settings.png");

export default class extends Component {
    constructor(props) {
        super(props);
        StatusBar.setBarStyle("light-content")
    }

    async nukeApp(){
        await AuthInformation.nukeAuthInformation();
        showMessage({
            message: "Great",
            description: "Nuked app, please restart",
            type: "success",
            duration: 5000
        });
    }

    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.headerBar]}>
                    <View style={{ paddingLeft: 20}}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Ionicons name={"ios-arrow-back"} size={30} color="#FFFFFF" style={{ justifyContent: "center"}}/>
                        </TouchableOpacity>
                    </View>

                    <StyledTextInverse style={{ fontSize: 20, alignSelf: "center"}}>Credits</StyledTextInverse>

                    <View style={{ paddingRight: 20}}/>
                </View>

                <ScrollView style={{ flex: 1, paddingBottom: 300, marginTop: 20}}>
                    <View style={[styles.header, {marginBottom: 60}]}>
                        <View>

                        </View>

                        <View style={{ alignSelf: "center"}}>
                            <View style={{ alignItems: "center"}}>
                                <Image
                                    source={userProfileImage}
                                    style={{ height: 100, width: 100}}
                                />
                            </View>
                            <View style={{ alignItems: "center"}}>
                                <StyledText style={{ fontSize: 30}}>Polymorph Advanced</StyledText>
                            </View>
                        </View>


                        <View>

                        </View>
                    </View>

                    <View style={[styles.main]}>
                        <View style={{ marginBottom: 20}}>
                            <TouchableOpacity onPress={() => this.nukeApp()}>
                                <View style={[styles.mainItem]}>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
                                        <View style={{ flexDirection: "row"}}>
                                            <Ionicons name="ios-contact" size={20} style={{ paddingRight: 10}} color="#3E4E5B"/>
                                            <StyledText style={{ fontSize: 20 }}>Nuke App</StyledText>
                                        </View>

                                        <Ionicons name={"ios-arrow-forward"} size={20} color="#3E4E5B"/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F6F8"
    },

    header: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: "space-between"
    },

    main: {
        flex: 3
    },

    mainItem: {
        backgroundColor: "#FFFFFF",
        padding: 20
    },

    headerBar: {
        backgroundColor: "#387ecb",
        height: 80,
        justifyContent: "space-between",
        flexDirection: "row",
        paddingTop: 40
    },
});