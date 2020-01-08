import React, { Component } from 'react';
import {View, StyleSheet, StatusBar, TouchableOpacity, Image, ScrollView, FlatList} from "react-native";
import {StyledHeader, StyledHeaderInverse, StyledText, StyledTextInverse} from "../../components/Typography";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {EvilIcons, Ionicons} from "@expo/vector-icons";

const userProfileImage = require("../../assets/images/user-settings.png");

const presbyteries = [
    {name: "Ga Presbytery", zone: "Southern Zone", key: "Ga Presbytery", color: "#474f85"},
    {name: "Asante Presbytery", zone: "Northern Zone", key: "Asante Presbytery", color: "#474f85"},
    {name: "Asante Akyem Presbytery", zone: "Northern Zone", key: "Asante Akyem Presbytery", color: "#474f85"},
    {name: "Kwahu Presbytery", zone: "Northern Zone", key: "Kwahu Presbytery", color: "#474f85"},
    {name: "Brong Ahafo Presbytery", zone: "Northern Zone", key: "Brong Ahafo Presbytery", color: "#474f85"},
    {name: "Brong Ahafo Presbytery", zone: "Northern Zone", key: "Brong Ahafo Presbytery", color: "#474f85"},
    {name: "Asante South Presbytery", zone: "Northern Zone", key: "Asante South Presbytery", color: "#474f85"},
    {name: "Sekyere Presbytery", zone: "Northern Zone", key: "Sekyere Presbytery", color: "#474f85"},
    {name: "Upper Presbytery", zone: "Northern Zone", key: "Upper Presbytery", color: "#474f85"},
    {name: "Sefwi Presbytery", zone: "Northern Zone", key: "Sefwi Presbytery", color: "#474f85"},
    {name: "West Brong Presbytery", zone: "Northern Zone", key: "West Brong Presbytery", color: "#474f85"},
    {name: "Northern Presbytery", zone: "Northern Zone", key: "Northern Presbytery", color: "#474f85"},
    {name: "West Akyem Presbytery", zone: "Southern Zone", key: "West Akyem Presbytery", color: "#474f85"},
    {name: "Akwuapem Presbytery", zone: "Southern Zone", key: "Akwuapem Presbytery", color: "#474f85"},
    {name: "Akyem Abuakwa Presbytery", zone: "Southern Zone", key: "Akyem Abuakwa Presbytery", color: "#474f85"},
    {name: "Volta Presbytery", zone: "Southern Zone", key: "Volta Presbytery", color: "#474f85"},
    {name: "Dangme Tongu Presbytery", zone: "Southern Zone", key: "Dangme Tongu Presbytery", color: "#474f85"},
    {name: "Western Presbytery", zone: "Southern Zone", key: "Western Presbytery", color: "#474f85"},
    {name: "Central Presbytery", zone: "Southern Zone", key: "Central Presbytery", color: "#474f85"},
    {name: "Ga West Presbytery", zone: "Southern Zone", key: "Ga West Presbytery", color: "#474f85"},
];

export default class extends Component {
    constructor(props) {
        super(props);
        StatusBar.setBarStyle("light-content");
        this.navigateToDistrictSelection = this.navigateToDistrictSelection.bind(this);
        this.renderPresbytery = this.renderPresbytery.bind(this);
    }

    navigateToDistrictSelection(presbyteryKey){
        this.props.navigation.navigate('DistrictSelection', {presbyteryKey})
    }


    renderPresbytery(presbytery){
        return(
            <TouchableOpacity onPress={() => this.navigateToDistrictSelection(presbytery.item.key)}>
                <View style={[styles.listItem]}>
                    <View style={[{ flexDirection: "row" }]}>
                        <View style={[styles.circleShapeView, { backgroundColor: presbytery.item.color}]}>
                            <StyledTextInverse style={{ fontSize: 16 }}>{presbytery.item.name.substring(0, 1)}</StyledTextInverse>
                        </View>
                        <View style={{ justifyContent: "center"}}>
                            <StyledText style={{ fontSize: 16}}>{presbytery.item.name}</StyledText>
                            <StyledText style={{ fontSize: 14}}>{presbytery.item.zone}</StyledText>
                        </View>
                    </View>

                    <View>
                        <EvilIcons name={"chevron-right"} size={20}/>
                    </View>
                </View>
            </TouchableOpacity>
        )
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
                    <StyledTextInverse style={{ fontSize: 20, alignSelf: "center"}}>Presbytery Selection</StyledTextInverse>
                    <View style={{ paddingRight: 20}}/>
                </View>
                <View style={{ paddingBottom: 70}}>
                    <FlatList
                        data={presbyteries}
                        renderItem={this.renderPresbytery}
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
        paddingRight: 20
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

    circleShapeView: {
        width: 40,
        height: 40,
        borderRadius: 150 / 2,
        backgroundColor: '#00BCD4',
        marginRight: 20,
        justifyContent: "center",
        alignItems: "center"
    },
});
