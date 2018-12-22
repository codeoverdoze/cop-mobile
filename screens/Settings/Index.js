import React, { Component } from 'react';
import {View, StyleSheet, StatusBar, TouchableOpacity, Image, ScrollView} from "react-native";
import {StyledHeader, StyledText} from "../../components/Typography";
import {Ionicons} from "@expo/vector-icons";


const userProfileImage = require("../../assets/images/user-settings.png");

export default class SettingsScreen extends Component {
    constructor(props) {
        super(props);
        StatusBar.setBarStyle("dark-content")
    }

    render() {
        return (
            <View style={[styles.container]}>
                <StatusBar
                    backgroundColor="#387ecb"
                    barStyle="dark-content"
                />

               <ScrollView contentContainerStyle={{ flex: 1, paddingBottom: 150}}>
                   <View style={[styles.header]}>
                       <View>

                       </View>

                       <View style={{ alignSelf: "center", marginBottom: 20}}>
                           <View style={{ alignItems: "center"}}>
                               <Image
                                   source={userProfileImage}
                                   style={{ height: 100, width: 100}}
                               />
                           </View>
                           <View style={{ alignItems: "center"}}>
                               <StyledText style={{ fontSize: 30}}>Michael Soli</StyledText>
                           </View>
                       </View>


                       <View>

                       </View>
                   </View>

                   <View style={[styles.main]}>
                       <View style={{ marginBottom: 20}}>
                           <TouchableOpacity>
                               <View style={[styles.mainItem]}>
                                   <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
                                       <View style={{ flexDirection: "row"}}>
                                           <Ionicons name="ios-contact" size={20} style={{ paddingRight: 10}} color="#3E4E5B"/>
                                           <StyledText style={{ fontSize: 20 }}>Personal Information</StyledText>
                                       </View>

                                       <Ionicons name={"ios-arrow-forward"} size={20} color="#3E4E5B"/>
                                   </View>
                               </View>
                           </TouchableOpacity>
                       </View>


                       <View style={{ marginBottom: 20 }}>
                           <TouchableOpacity>
                               <View style={[styles.mainItem, { borderBottomWidth: 0.3, borderBottomColor: "#cecece"}]}>
                                   <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
                                       <View style={{ flexDirection: "row"}}>
                                           <Ionicons name="ios-home" size={20} style={{ paddingRight: 10}} color="#3E4E5B"/>
                                           <StyledText style={{ fontSize: 20 }}>Church Selection</StyledText>
                                       </View>

                                       <Ionicons name={"ios-arrow-forward"} size={20} color="#3E4E5B"/>
                                   </View>
                               </View>
                           </TouchableOpacity>

                           <TouchableOpacity>
                               <View style={[styles.mainItem]}>
                                   <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
                                       <View style={{ flexDirection: "row"}}>
                                           <Ionicons name="ios-person" size={20} style={{ paddingRight: 10}} color="#3E4E5B"/>
                                           <StyledText style={{ fontSize: 20 }}>Membership Details</StyledText>
                                       </View>

                                       <Ionicons name={"ios-arrow-forward"} size={20} color="#3E4E5B"/>
                                   </View>
                               </View>
                           </TouchableOpacity>
                       </View>


                       <View style={{ marginBottom: 20 }}>
                           <TouchableOpacity>
                               <View style={[styles.mainItem]}>
                                   <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
                                       <View style={{ flexDirection: "row"}}>
                                           <Ionicons name="ios-card" size={20} style={{ paddingRight: 10}} color="#3E4E5B"/>
                                           <StyledText style={{ fontSize: 20 }}>Payment Preferences</StyledText>
                                       </View>

                                       <Ionicons name={"ios-arrow-forward"} size={20} color="#3E4E5B"/>
                                   </View>
                               </View>
                           </TouchableOpacity>
                       </View>

                       <View style={{ marginBottom: 20 }}>
                           <TouchableOpacity>
                               <View style={[styles.mainItem, { borderBottomWidth: 0.3, borderBottomColor: "#cecece"}]}>
                                   <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
                                       <View style={{ flexDirection: "row"}}>
                                           <Ionicons name="ios-help-circle-outline" size={20} style={{ paddingRight: 10}} color="#3E4E5B"/>
                                           <StyledText style={{ fontSize: 20 }}>Help & Support</StyledText>
                                       </View>

                                       <Ionicons name={"ios-arrow-forward"} size={20} color="#3E4E5B"/>
                                   </View>
                               </View>
                           </TouchableOpacity>

                           <TouchableOpacity>
                               <View style={[styles.mainItem]}>
                                   <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
                                       <View style={{ flexDirection: "row"}}>
                                           <Ionicons name="ios-information-circle-outline" size={20} style={{ paddingRight: 10}} color="#3E4E5B"/>
                                           <StyledText style={{ fontSize: 20 }}>Credits</StyledText>
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
        flex: 2
    },

    mainItem: {
        backgroundColor: "#FFFFFF",
        padding: 20
    }
});