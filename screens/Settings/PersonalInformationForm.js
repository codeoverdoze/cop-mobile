import React, { Component } from 'react';
import {View, StyleSheet, StatusBar, TouchableOpacity, TextInput} from "react-native";
import {StyledTextInverse} from "../../components/Typography";
import {Ionicons} from "@expo/vector-icons";
import PersonalInformation from "../../store/PersonalInformation";


export default class extends Component {
    constructor(props) {
        super(props);
        this.setting = this.props.navigation.getParam('setting');
        this.state = { value: "" };
        StatusBar.setBarStyle("light-content");
    }




    async onSubmit(){
        // await PersonalInformation.removePersonalInformation();
        // Saving value
        // Extracting key for value
        const key = this.setting.item.dbKey;

        console.log("key", key);

        const object = {};

        object[key] = this.state.value;

        console.log(object);

        try{
            await PersonalInformation.savePersonalInfo(object);
            const personalInfo = await PersonalInformation.getPersonalInfo();

            console.log(personalInfo);
            console.log("Saved successfully");
            this.props.navigation.goBack();
        }catch (e) {
            throw new Error(e);
        }
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

                    <StyledTextInverse style={{ fontSize: 20, alignSelf: "center"}}>Set {this.setting.item.title}</StyledTextInverse>

                    <View style={{ paddingRight: 20}}/>
                </View>

                <View style={{ height: "60%", justifyContent: "center", alignItems: "center"}}>
                    <TextInput
                        placeholder={`Enter your ${this.setting.item.title}`}
                        style={{ fontSize: 40}}
                        autoFocus
                        returnKeyType="done"
                        onChangeText={value => this.setState({ value })}
                        value={this.state.value}
                        onSubmitEditing={() => this.onSubmit()}
                    />
                </View>
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
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#FFFFFF",
        height: "500%"
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

    list: {
        marginBottom: 70,
    },

    listItem: {
        padding: 15,
        borderBottomWidth: 0.3,
        borderBottomColor: "#cecece",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

});