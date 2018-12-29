import React, { Component } from 'react';
import {View, StyleSheet, StatusBar, TouchableOpacity, Image, ScrollView, FlatList, ActivityIndicator} from "react-native";
import {StyledHeader, StyledText, StyledTextInverse} from "../../components/Typography";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {EvilIcons, Ionicons} from "@expo/vector-icons";
import PersonalInformation from "../../store/PersonalInformation";

const userProfileImage = require("../../assets/images/user-settings.png");

const settings = [
    {title: "Surname", value: "Ahiable", link: "Surname", key: "0", dbKey: "surname"},
    {title: "Other Names", value: "Raaj", link: "OtherNames", key: "1", dbKey: "otherNames"},
    {title: "Gender", value: "Male", link: "OtherNames", key: "2", dbKey: "gender"},
    {title: "Phone", value: "0558691496", link: "OtherNames", key: "3", dbKey: "phone"},
    {title: "Email", value: "raaj.polymorph@gmail.com", link: "OtherNames", key: "4", dbKey: "email"},
];

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
        this.personalInformation = {};
        this.renderSettingsItem = this.renderSettingsItem.bind(this);
        StatusBar.setBarStyle("light-content");

        // Listener to reload changes from personal information store
        const focusSubscription = this.props.navigation.addListener('willFocus', async () => {
            await this.componentWillMount();
        })
    }

    async componentWillMount() {
        try{
            await this.setState({ loading: true });
            this.personalInformation = await PersonalInformation.getPersonalInfo();
            await this.setState({ loading: false });
        }catch (e) {
            throw new Error(e);
        }
    }

    renderSettingsItem(setting){
        return(
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate("PersonalInformationForm", {
                    setting,
                    currentValue: this.personalInformation[setting.item.dbKey] })
                }
            >
                <View style={[styles.listItem]}>
                    <View style={[{ flexDirection: "row" }]}>
                        <View style={{ justifyContent: "center"}}>
                            <StyledText style={{ fontSize: 16}}>{setting.item.title}</StyledText>
                            <StyledHeader style={{ fontSize: 16}}>
                                {this.personalInformation[setting.item.dbKey] ? this.personalInformation[setting.item.dbKey]: "Not set"}
                            </StyledHeader>
                        </View>
                    </View>

                    <View style={{ height: 50, alignSelf: "center", justifyContent: "center"}}>
                        <TouchableOpacity>
                            <EvilIcons name={"chevron-right"} size={30} color="#757575"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        // It may look weird that we are passing the same view to loading, but its because we
        // want to avoid a flash when state changes
        if(this.state.loading){
            return (
                <View style={[styles.container]}>
                    <View style={[styles.headerBar]}>
                        <View style={{ paddingLeft: 20}}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Ionicons name={"ios-arrow-back"} size={30} color="#FFFFFF" style={{ justifyContent: "center"}}/>
                            </TouchableOpacity>
                        </View>

                        <StyledTextInverse style={{ fontSize: 20, alignSelf: "center"}}>Personal Information</StyledTextInverse>

                        <View style={{ paddingRight: 20}}/>
                    </View>

                    <KeyboardAwareScrollView>
                        <View style={{ flex: 1, paddingTop: 20}}>
                            <View style={[styles.header, { alignSelf: "center", flexDirection: "column", marginBottom: 60}]}>
                                <View style={{ alignItems: "center"}}>
                                    <Image
                                        source={userProfileImage}
                                        style={{ height: 90, width: 90}}
                                    />
                                </View>
                                <View style={{ alignItems: "center"}}>
                                    <TouchableOpacity>
                                        <StyledHeader style={{ fontSize: 16}}>Change Image</StyledHeader>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={[styles.main, styles.list]}>
                                <ActivityIndicator/>
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
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

                    <StyledTextInverse style={{ fontSize: 20, alignSelf: "center"}}>Personal Information</StyledTextInverse>

                    <View style={{ paddingRight: 20}}/>
                </View>

                <KeyboardAwareScrollView>
                    <View style={{ flex: 1, paddingTop: 20}}>
                        <View style={[styles.header, { alignSelf: "center", flexDirection: "column", marginBottom: 60}]}>
                            <View style={{ alignItems: "center"}}>
                                <Image
                                    source={userProfileImage}
                                    style={{ height: 90, width: 90}}
                                />
                            </View>
                            <View style={{ alignItems: "center"}}>
                                <TouchableOpacity>
                                    <StyledHeader style={{ fontSize: 16}}>Change Image</StyledHeader>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={[styles.main, styles.list]}>
                            <FlatList
                                data={settings}
                                renderItem={this.renderSettingsItem}
                            />
                        </View>
                    </View>
                </KeyboardAwareScrollView>
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
        paddingTop: 5,
        paddingBottom: 5,
        borderBottomWidth: 0.3,
        borderBottomColor: "#cecece",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF"
    },
});