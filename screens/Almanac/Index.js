import React from 'react';
import {StyleSheet, FlatList, SafeAreaView, View, TouchableOpacity} from 'react-native';
import {StyledHeader, StyledHeaderInverse, StyledText, StyledTextInverse} from "../../components/Typography";
import { Ionicons, EvilIcons } from "@expo/vector-icons";

const years = [
    {name: "2019", key: "2019", color: "#474f85"},
    {name: "2020", key: "2020", color: "#75cac3"},
];

class YearSelection extends React.Component {
    constructor(props){
        super(props);
        this.navigateToMonthSelection = this.navigateToMonthSelection.bind(this);
        this.renderYear = this.renderYear.bind(this);
    }

    navigateToMonthSelection(yearName, yearIndex){
        this.props.navigation.navigate("MonthSelection", { yearName, yearIndex });
    }

    renderYear(year){
        return(
            <TouchableOpacity onPress={() => this.navigateToMonthSelection(year.item.name, year.index)}>
                <View style={[styles.listItem]}>
                    <View style={[{ flexDirection: "row" }]}>
                        <View style={[styles.circleShapeView, { backgroundColor: year.item.color}]}>
                            <StyledTextInverse style={{ fontSize: 20 }}>YR</StyledTextInverse>
                        </View>
                        <View style={{ justifyContent: "center"}}>
                            <StyledText style={{ fontSize: 20}}>{year.item.name}</StyledText>
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
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
                            <Ionicons name={"ios-arrow-back"} size={25} color="#FFFFFF" style={{ justifyContent: "center"}}/>
                        </TouchableOpacity>
                    </View>

                    <StyledTextInverse style={{ fontSize: 20, alignSelf: "center"}}>Study Guide by Year</StyledTextInverse>

                    <View style={{ paddingRight: 20}}/>
                </View>

                <View style={[styles.list]}>
                    <FlatList
                        data={years}
                        renderItem={this.renderYear}
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

export default YearSelection;
