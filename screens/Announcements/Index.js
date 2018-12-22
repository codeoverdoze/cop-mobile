import React from 'react';
import {StyleSheet, FlatList, SafeAreaView, View, TouchableOpacity} from 'react-native';
import {StyledText, StyledTextInverse} from "../../components/Typography";
import { Ionicons, EvilIcons } from "@expo/vector-icons";

const months = [
    {title: "Raaj Ahiable weds Daya Polanka", sender: "Ernest Acheampong", content: "Lorem Ipsum Dolor Sit Amet Lorem Lorem Lorem", key: "January", color: "#474f85"},
    {title: "Raaj Ahiable weds Daya Polanka", sender: "Ernest Acheampong", content: "Lorem Ipsum Dolor Sit Amet Lorem Lorem Lorem", key: "January", color: "#474f85"},
    {title: "Raaj Ahiable weds Daya Polanka", sender: "Ernest Acheampong", content: "Lorem Ipsum Dolor Sit Amet Lorem Lorem Lorem", key: "January", color: "#474f85"},
    {title: "Raaj Ahiable weds Daya Polanka", sender: "Ernest Acheampong", content: "Lorem Ipsum Dolor Sit Amet Lorem Lorem Lorem", key: "January", color: "#474f85"},
    {title: "Raaj Ahiable weds Daya Polanka", sender: "Ernest Acheampong", content: "Lorem Ipsum Dolor Sit Amet Lorem Lorem Lorem", key: "January", color: "#474f85"},
    {title: "Raaj Ahiable weds Daya Polanka", sender: "Ernest Acheampong", content: "Lorem Ipsum Dolor Sit Amet Lorem Lorem Lorem", key: "January", color: "#474f85"},
    {title: "Raaj Ahiable weds Daya Polanka", sender: "Ernest Acheampong", content: "Lorem Ipsum Dolor Sit Amet Lorem Lorem Lorem", key: "January", color: "#474f85"},
    {title: "Raaj Ahiable weds Daya Polanka", sender: "Ernest Acheampong", content: "Lorem Ipsum Dolor Sit Amet Lorem Lorem Lorem", key: "January", color: "#474f85"},
];



export default class extends React.Component {
    constructor(props){
        super(props);
        this.navigateToCalendar = this.navigateToCalendar.bind(this);
        this.renderAnnouncement = this.renderAnnouncement.bind(this);
    }

    navigateToCalendar(monthName, monthIndex){
        this.props.navigation.navigate("AlmanacCalendar", { monthName, monthIndex });
    }

    renderAnnouncement(announcement){
        return(
            <TouchableOpacity>
                <View style={[styles.listItem]}>
                    <View style={[{ flexDirection: "row" }]}>
                        <View style={[styles.circleShapeView, { backgroundColor: announcement.item.color, alignSelf: "center"}]}>
                            <StyledTextInverse style={{ fontSize: 20 }}>{announcement.item.sender.substring(0, 1)}</StyledTextInverse>
                        </View>
                        <View style={{ justifyContent: "center"}}>
                            <StyledText style={{ fontSize: 20, marginBottom: 5}}>{announcement.item.sender}</StyledText>
                            <StyledText style={{ fontSize: 16}}>{announcement.item.title}</StyledText>
                            <StyledText style={{ fontSize: 13}}>{announcement.item.content}</StyledText>
                        </View>
                    </View>

                    <View style={{ justifyContent: "space-between", height: 50, alignItems: "center"}}>
                        <StyledText style={{ fontSize: 10}}>2:20 PM</StyledText>
                        <TouchableOpacity>
                            <EvilIcons name={"star"} size={20} color="#757575"/>
                        </TouchableOpacity>
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

                    <StyledTextInverse style={{ fontSize: 20, alignSelf: "center"}}>Announcements</StyledTextInverse>

                    <View style={{ paddingRight: 20}}/>
                </View>

                <View style={[styles.list]}>
                    <FlatList
                        data={months}
                        renderItem={this.renderAnnouncement}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20
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