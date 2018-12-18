import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, View, Image} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {StyledTextInverse} from "../../components/Typography";

export default class extends Component {
    render() {
        return(
            <View style={[styles.container]}>
                <View style={[styles.header]}>
                    <View style={{ paddingLeft: 20}}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Ionicons name={"ios-arrow-back"} size={30} color="#FFFFFF" style={{ justifyContent: "center"}}/>
                        </TouchableOpacity>
                    </View>

                    <StyledTextInverse style={{ fontSize: 20, alignSelf: "center"}}>Select Package</StyledTextInverse>

                    <View style={{ paddingRight: 20}}/>
                </View>
            </View>
        )
    }
};


const styles = {
    container: {
        flex: 1
    },

    header: {
        backgroundColor: "#387ecb",
        height: 80,
        justifyContent: "space-between",
        flexDirection: "row",
        paddingTop: 40
    },
};
