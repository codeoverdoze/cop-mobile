import React, { Component } from "react";
import {View, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import {StyledHeader, StyledText, StyledTextInverse} from "../../components/Typography";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {Ionicons} from "@expo/vector-icons";

import Payment from "../../store/Payment";
import {Button} from "react-native-elements";



export default class extends Component {
    constructor(props){
        super(props);
        this.package = this.props.navigation.getParam("package");
        this.state = { amount: "" };
    }

    render(){
        console.log(Payment.getPayment());
        return (
            <View style={[styles.container]}>
                <View style={[styles.header]}>
                    <View style={{paddingLeft: 20}}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Ionicons name={"ios-arrow-back"} size={30} color="#FFFFFF"
                                      style={{justifyContent: "center"}}/>
                        </TouchableOpacity>
                    </View>

                    <StyledTextInverse style={{fontSize: 20, alignSelf: "center"}}>Make Payment For {this.package.name}</StyledTextInverse>

                    <View style={{paddingRight: 20}}/>
                </View>

                <KeyboardAwareScrollView style={[styles.body]}>
                    <View style={[styles.bodyItem]}>
                        <View style={[styles.amountBar]}>
                            <StyledText style={{ fontSize: 40 }}>GHS</StyledText>

                            <TextInput
                                style={{ width: 150, fontSize: 40, fontFamily: "regular", alignSelf: "flex-end", color: '#3E4E5B', textAlign: "right" }}
                                placeholder={"0.00"}
                                keyboardType={"numeric"}
                                value={this.state.amount}
                                onChangeText={value => console.log(value)}
                            />
                        </View>

                        <View style={[styles.packageBar]}>
                            <StyledHeader style={{ fontSize: 15, color: "#424242", marginBottom: 10}}>PACKAGE</StyledHeader>

                            <StyledText style={{ fontSize: 30, color: "#eaa15d" }}>{this.package.name}</StyledText>

                        </View>

                        <View style={[styles.packageBar]}>
                            <StyledHeader style={{ fontSize: 15, color: "#424242", marginBottom: 10}}>DESCRIPTION</StyledHeader>

                            <TextInput
                                style={{ fontSize: 20, fontFamily: "regular", color: '#3E4E5B' }}
                                placeholder={"Enter a description"}
                                multiline={true}
                                value={this.state.amount}
                                onChangeText={value => console.log(value)}
                            />

                        </View>

                        <View style={[styles.packageBar]}>
                            <StyledHeader style={{ fontSize: 15, color: "#424242", marginBottom: 10}}>TELEPHONE NUMBER</StyledHeader>

                            <TextInput
                                style={{ fontSize: 20, fontFamily: "regular", color: '#3E4E5B' }}
                                placeholder={"Enter your telephone number"}
                                keyboardType={"numeric"}
                                value={this.state.amount}
                                onChangeText={value => console.log(value)}
                            />

                        </View>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("PaymentCheckout")}>
                            <View style={[styles.buttonBar]}>
                                <StyledText style={{ color: "#FFFFFF", fontSize: 20}}>Make Payment</StyledText>
                            </View>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )
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
        paddingTop: 40
    },

    body: {
        margin: 20
    },

    amountBar: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 0.3,
        borderBottomColor: "#cecece"
    },

    packageBar: {
        padding: 20,
        borderBottomWidth: 0.3,
        borderBottomColor: "#cecece"
    },

    buttonBar: {
        flex: 1,
        marginTop: 20,
        backgroundColor: "#387ecb",
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        borderRadius: 5
    },

};