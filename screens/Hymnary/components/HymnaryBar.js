import React, {Component} from "react";
import {View, StyleSheet, SafeAreaView, TouchableOpacity, TextInput} from "react-native";
import {StyledText, StyledTextInverse} from "../../../components/Typography";
import Hymnary from "../../../store/Hymnary";
import {EvilIcons} from "@expo/vector-icons";
import emitter from "tiny-emitter/instance";


export default class extends Component {
    constructor(props) {
        super(props);
    }

    getCurrentLanguage() {
        return Hymnary.getHymLanguage()
    }

    getCurrentHymnNumber() {
        return Hymnary.getHymnNumber()
    }

    async setHymnNumber(number){
        Hymnary.setHymnNumber(number);
        emitter.emit("hymn-change");
    }

    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.barItem]}>
                    <StyledTextInverse style={[styles.barItemText]}>English</StyledTextInverse>
                    <EvilIcons name="chevron-down" style={{alignSelf: "center"}} size={25} color="#FFFFFF"/>
                </View>


                <View style={[styles.barItem]}>
                    <TextInput
                        style={[styles.barItemText, {color: "#FFFFFF", width: 20}]}
                        defaultValue={"1"}
                        keyboardType={"numeric"}
                        onChangeText={value => this.setHymnNumber(value)}
                    />
                    <EvilIcons name="chevron-down" style={{alignSelf: "center"}} size={25} color="#FFFFFF"/>
                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#387ecb",
        height: 80,
        justifyContent: "center",
        alignItems: "flex-end",
        flexDirection: "row"
    },

    barItem: {
        margin: 10,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: "row"
    },

    barItemText: {
        fontSize: 20,
    }
});