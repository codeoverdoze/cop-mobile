import React, { Component } from "react";
import {View, StyleSheet, TouchableOpacity, TextInput, StatusBar} from "react-native";
import {StyledHeader, StyledText, StyledTextInverse} from "../../components/Typography";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {Ionicons} from "@expo/vector-icons";

import Payment from "../../store/Payment";


export default class Checkout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.container]}>
                <StatusBar
                    backgroundColor="#387ecb"
                    barStyle="light-content"
                />
                <View style={[styles.header]}>
                    <View style={{paddingLeft: 20, paddingRight: 20}}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Ionicons name={"ios-arrow-back"} size={30} color="#FFFFFF"
                                      style={{justifyContent: "center"}}/>
                        </TouchableOpacity>
                    </View>

                    <StyledTextInverse style={{fontSize: 20, paddingTop: 5}}>Checkout</StyledTextInverse>

                    <View style={{paddingRight: 20}}/>
                </View>

                <View style={[styles.amount]}>
                    <StyledText style={{ fontSize: 40 }}>GHS 50.00</StyledText>
                </View>
                <View style={[styles.amountBody]}>
                    <View style={[styles.amountBodyItem]}>
                        <StyledText style={{ fontSize: 20 }}>Amount</StyledText>
                        <StyledText style={{ fontSize: 20 }}>GHS 50.00</StyledText>
                    </View>
                    <View style={[styles.amountBodyItem]}>
                        <StyledText style={{ fontSize: 20 }}>Fee</StyledText>
                        <StyledText style={{ fontSize: 20 }}>GHS 1.00</StyledText>
                    </View>
                </View>
                <View style={[styles.accountBody]}>
                    <View>
                        <StyledText>Account</StyledText>
                        <StyledText>GHS 50.00</StyledText>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },

    header: {
        backgroundColor: "#387ecb",
        height: 80,
        justifyContent: "space-between",
        flexDirection: "row",
        paddingTop: 40,
        alignContent: "flex-start"
    },

    amount: {
        flexDirection: "row",
        justifyContent: "center",
        margin: 20,
        padding: 30,
        paddingBottom: 50,
        borderBottomWidth: 0.3,
        borderBottomColor: "#cecece"
    },

    amountBody: {
        margin: 20,
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        borderBottomWidth: 0.3,
        borderBottomColor: "#cecece"
    },

    amountBodyItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },

    accountBody: {
        margin: 20,
        marginTop: 5,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        borderBottomWidth: 0.3,
        borderBottomColor: "#cecece"
    }
};