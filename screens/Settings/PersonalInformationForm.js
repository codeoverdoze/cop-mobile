import React, { Component } from 'react';
import {View, StyleSheet, StatusBar, TouchableOpacity, TextInput} from "react-native";
import {StyledText, StyledTextInverse} from "../../components/Typography";
import {Ionicons} from "@expo/vector-icons";
import PersonalInformation from "../../store/PersonalInformation";
import Colors from "../../constants/Colors";


export default class extends Component {
    constructor(props) {
        super(props);
        this.setting = this.props.navigation.getParam('setting');
        this.currentValue = this.props.navigation.getParam('currentValue');
        this.state = { value: this.currentValue };
        StatusBar.setBarStyle("light-content");
    }


    async onSubmit(){
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


    renderCheckMark(checkValue, checkBox){
        if(checkBox === checkValue){
            return <Ionicons name="ios-checkmark" size={25} color={Colors.tintColor}/>
        }
    }


    async onGenderSelect(value){
          await this.setState({ value });
          await this.onSubmit();
    }

    render() {
        if(this.setting.item.dbKey === "gender"){
            return(
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

                    <View style={{ justifyContent: "center", width: "100%"}}>
                        <TouchableOpacity onPress={() => this.onGenderSelect("Male")}>
                            <View style={[styles.listItem]}>
                                <View style={[{ flexDirection: "row" }]}>
                                    <View style={{ justifyContent: "center"}}>
                                        <StyledText style={{ fontSize: 16}}>Male</StyledText>
                                    </View>
                                </View>

                                <View style={{ height: 50, alignSelf: "center", justifyContent: "center"}}>
                                    {this.renderCheckMark(this.state.value, "Male")}
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onGenderSelect("Female")}>
                            <View style={[styles.listItem]}>
                                <View style={[{ flexDirection: "row" }]}>
                                    <View style={{ justifyContent: "center"}}>
                                        <StyledText style={{ fontSize: 16}}>Female</StyledText>
                                    </View>
                                </View>

                                <View style={{ height: 50, alignSelf: "center", justifyContent: "center"}}>
                                    {this.renderCheckMark(this.state.value, "Female")}
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
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

                <View style={{ height: "30%", justifyContent: "center", alignItems: "center"}}>
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
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: 0.3,
        borderBottomColor: "#cecece",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF"
    },

});