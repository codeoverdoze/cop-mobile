import React, { Component } from 'react';
import {View, StyleSheet, StatusBar, TouchableOpacity, Image, ScrollView} from "react-native";
import {StyledHeader, StyledHeaderInverse, StyledText} from "../../components/Typography";
import {Ionicons} from "@expo/vector-icons";


const userProfileImage = require("../../assets/images/user-settings.png");

export default class SettingsScreen extends Component {
    constructor(props) {
        super(props);
        StatusBar.setBarStyle("light-content")
    }

    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.headerBar]}>
                    <StyledHeaderInverse style={{ fontSize: 20, alignSelf: "flex-start"}}>Settings</StyledHeaderInverse>
                </View>

               <ScrollView style={{ flex: 1, paddingBottom: 300, paddingTop: 20}}>
                   <View style={[styles.header, {marginBottom: 60}]}>
                       <View>

                       </View>

                       <View style={{ alignSelf: "center"}}>
                           <View style={{ alignItems: "center"}}>
                               <Image
                                   source={userProfileImage}
                                   style={{ height: 90, width: 90}}
                               />
                           </View>
                           <View style={{ alignItems: "center"}}>
                               <StyledHeader style={{ fontSize: 16}}>Michael Agbo Tettey Soli</StyledHeader>
                               <StyledText>(0558691496)</StyledText>
                           </View>
                       </View>


                       <View>

                       </View>
                   </View>

                   <View style={[styles.main]}>
                       <View style={{ marginBottom: 20 }}>
                           <TouchableOpacity onPress={() => this.props.navigation.navigate("PersonalInformation")}>
                               <View style={[styles.mainItem]}>
                                   <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 20, marginRight: 20, borderBottomWidth: 0.3, borderBottomColor: "#cecece", paddingTop: 15, paddingBottom: 15}}>
                                       <View style={{ flexDirection: "row"}}>
                                           <StyledText style={{ fontSize: 16 }}>Personal Information</StyledText>
                                       </View>

                                       <Ionicons name={"ios-arrow-forward"} size={16} color="#3E4E5B"/>
                                   </View>
                               </View>
                           </TouchableOpacity>

                           <TouchableOpacity onPress={() => this.props.navigation.navigate("ChurchSelection")}>
                               <View style={[styles.mainItem]}>
                                   <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 20, marginRight: 20, borderBottomWidth: 0.3, borderBottomColor: "#cecece", paddingTop: 15, paddingBottom: 15}}>
                                       <View style={{ flexDirection: "row"}}>
                                           <StyledText style={{ fontSize: 16 }}>Congregation Selection</StyledText>
                                       </View>

                                       <Ionicons name={"ios-arrow-forward"} size={16} color="#3E4E5B"/>
                                   </View>
                               </View>
                           </TouchableOpacity>

                           <TouchableOpacity>
                               <View style={[styles.mainItem]}>
                                   <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 20, marginRight: 20, paddingTop: 15, paddingBottom: 15}}>
                                       <View style={{ flexDirection: "row"}}>
                                           <StyledText style={{ fontSize: 16 }}>Membership Details</StyledText>
                                       </View>

                                       <Ionicons name={"ios-arrow-forward"} size={16} color="#3E4E5B"/>
                                   </View>
                               </View>
                           </TouchableOpacity>
                       </View>


                       <View style={{ marginBottom: 20 }}>
                           <TouchableOpacity>
                               <View style={[styles.mainItem]}>
                                   <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 20, marginRight: 20, borderBottomWidth: 0.3, borderBottomColor: "#cecece", paddingTop: 15, paddingBottom: 15}}>
                                       <View style={{ flexDirection: "row"}}>
                                           <StyledText style={{ fontSize: 16 }}>Payment Preferences</StyledText>
                                       </View>

                                       <Ionicons name={"ios-arrow-forward"} size={16} color="#3E4E5B"/>
                                   </View>
                               </View>
                           </TouchableOpacity>


                           <TouchableOpacity>
                               <View style={[styles.mainItem]}>
                                   <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 20, marginRight: 20, borderBottomWidth: 0.3, borderBottomColor: "#cecece", paddingTop: 15, paddingBottom: 15}}>
                                       <View style={{ flexDirection: "row"}}>
                                           <StyledText style={{ fontSize: 16 }}>Help & Support</StyledText>
                                       </View>

                                       <Ionicons name={"ios-arrow-forward"} size={16} color="#3E4E5B"/>
                                   </View>
                               </View>
                           </TouchableOpacity>

                           <TouchableOpacity onPress={() => this.props.navigation.navigate("Credits")}>
                               <View style={[styles.mainItem]}>
                                   <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 20, marginRight: 20, paddingTop: 15, paddingBottom: 15}}>
                                       <View style={{ flexDirection: "row"}}>
                                           <StyledText style={{ fontSize: 16 }}>Credits</StyledText>
                                       </View>
                                       <Ionicons name={"ios-arrow-forward"} size={16} color="#3E4E5B"/>
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
    },

    headerBar: {
        backgroundColor: "#387ecb",
        height: 80,
        justifyContent: "center",
        flexDirection: "row",
        paddingTop: 40,
    },
});