import React from 'react';
import {StyleSheet, FlatList, SafeAreaView, View, TouchableOpacity} from 'react-native';
import {StyledHeader, StyledHeaderInverse, StyledText, StyledTextInverse} from "../../components/Typography";
import { Ionicons, EvilIcons } from "@expo/vector-icons";


const months = [
    {name: "January", key: "January", color: "#474f85"},
    {name: "February", key: "February", color: "#75cac3"},
    {name: "March", key: "March", color: "#a8026f"},
    {name: "April", key: "April", color: "#fab95b"},
    {name: "May", key: "May", color: "#1d5464"},
    {name: "June", key: "June", color: "#6b76ff"},
    {name: "July", key: "July", color: "#26baee"},
    {name: "August", key: "August", color: "#ff1f5a"},
    {name: "September", key: "September", color: "#575151"},
    {name: "October", key: "October", color: "#307672"},
    {name: "November", key: "November", color: "#de3c3c"},
    {name: "December", key: "December", color: "#c04d00"},
];


class MonthSelection extends React.Component {
    constructor(props){
        super(props);
        this.yearName = this.props.navigation.getParam("yearName");
        this.yearIndex = this.props.navigation.getParam("yearIndex");
        this.navigateToCalendar = this.navigateToCalendar.bind(this);
        this.renderMonth = this.renderMonth.bind(this);
    }

    navigateToCalendar(monthName, monthIndex, yearName, yearIndex){
        this.props.navigation.navigate("AlmanacCalendar", { monthName, monthIndex, yearName, yearIndex });
    }

    renderMonth(month){
        return(
            <TouchableOpacity onPress={() => this.navigateToCalendar(month.item.name, month.index, this.yearName, this.yearIndex)}>
                <View style={[styles.listItem]}>
                    <View style={[{ flexDirection: "row" }]}>
                        <View style={[styles.circleShapeView, { backgroundColor: month.item.color}]}>
                            <StyledTextInverse style={{ fontSize: 20 }}>{month.item.name.substring(0, 1)}</StyledTextInverse>
                        </View>
                        <View style={{ justifyContent: "center"}}>
                            <StyledText style={{ fontSize: 20}}>{month.item.name}</StyledText>
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
                        data={months}
                        renderItem={this.renderMonth}
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

export default MonthSelection;
