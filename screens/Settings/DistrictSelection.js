import React from 'react';
import {StyleSheet, FlatList, SafeAreaView, View, TouchableOpacity} from 'react-native';
import { StyledText, StyledTextInverse} from "../../components/Typography";
import { Ionicons, EvilIcons } from "@expo/vector-icons";


const districts = [
    {name: "Haatso District", key: "Haatso District", color: "#75cac3"},
    {name: "Kaneshie District", key: "Kaneshie District", color: "#75cac3"},
    {name: "Madina District", key: "Madina District", color: "#75cac3"},
];


class DistrictSelection extends React.Component {
    constructor(props){
        super(props);
        this.presbyteryKey = this.props.navigation.getParam("presbyteryKey");
        this.navigateToCongregationSelection = this.navigateToCongregationSelection.bind(this);
        this.renderDistrict = this.renderDistrict.bind(this);
    }

    navigateToCongregationSelection(districtKey){
        this.props.navigation.navigate("CongregationSelection", { districtKey });
    }

    renderDistrict(district){
        return(
            <TouchableOpacity onPress={() => this.navigateToCongregationSelection(district.item.key)}>
                <View style={[styles.listItem]}>
                    <View style={[{ flexDirection: "row" }]}>
                        <View style={[styles.circleShapeView, { backgroundColor: district.item.color}]}>
                            <StyledTextInverse style={{ fontSize: 16 }}>{district.item.name.substring(0, 1)}</StyledTextInverse>
                        </View>
                        <View style={{ justifyContent: "center"}}>
                            <StyledText style={{ fontSize: 16}}>{district.item.name}</StyledText>
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
                <View style={[styles.header]}>
                    <View style={{ paddingLeft: 20}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("AlmanacDashboard")}>
                            <Ionicons name={"ios-arrow-back"} size={25} color="#FFFFFF" style={{ justifyContent: "center"}}/>
                        </TouchableOpacity>
                    </View>

                    <StyledTextInverse style={{ fontSize: 20, alignSelf: "center"}}>Almanac by month</StyledTextInverse>

                    <View style={{ paddingRight: 20}}/>
                </View>

                <View style={[styles.list]}>
                    <FlatList
                        data={districts}
                        renderItem={this.renderDistrict}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
        backgroundColor: "#FFFFFF",
    },

    header: {
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
    }
});

export default DistrictSelection;
