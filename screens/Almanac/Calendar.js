import React, { Component } from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import {StyledText, StyledTextInverse} from "../../components/Typography";
import {Ionicons} from "@expo/vector-icons";
import { Calendar, LocaleConfig } from "react-native-calendars";


export default class extends Component {
    constructor(props){
        super(props);
        this.monthName = this.props.navigation.getParam("monthName");
        this.monthIndex = this.props.navigation.getParam("monthIndex");

        // Padding month index
        this.monthIndex = (this.monthIndex + 1).toString().padStart(2, "0");

        console.log("Month name and index", this.monthName, this.monthIndex);

        // Setting LocaleConfig
        LocaleConfig.locales['en'] = {
            monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
            monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul.','Aug','Sep','Oct','Nov','Dec'],
            dayNames: ['Sunday','Monday','Tuesday','Mercredi','Jeudi','Vendredi','Samedi'],
            dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.']
        };

        LocaleConfig.defaultLocale = 'en';
    }


    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.header]}>
                    <View style={{ paddingLeft: 20}}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Ionicons name={"ios-arrow-round-back"} size={30} color="#FFFFFF" style={{ justifyContent: "center"}}/>
                        </TouchableOpacity>
                    </View>

                    <StyledTextInverse style={{ fontSize: 20, alignSelf: "center"}}>Almanac | 2019</StyledTextInverse>

                    <View style={{ paddingRight: 20}}/>
                </View>

                <View>
                    <Calendar
                        // Initially visible month. Default = Date()
                        current={`2019-${this.monthIndex}-01`}
                        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                        minDate={'2019-01-01'}
                        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                        maxDate={'2019-12-30'}
                        // Handler which gets executed on day press. Default = undefined
                        onDayPress={(day) => {console.log('selected day', day)}}
                        // Handler which gets executed on day long press. Default = undefined
                        onDayLongPress={(day) => {console.log('selected day', day)}}
                        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                        monthFormat={'yyyy MM'}
                        // Handler which gets executed when visible month changes in calendar. Default = undefined
                        onMonthChange={(month) => {console.log('month changed', month)}}
                        // Replace default arrows with custom ones (direction can be 'left' or 'right')
                        // Do not show days of other months in month page. Default = false
                        hideExtraDays={true}
                        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                        // day from another month that is visible in calendar page. Default = false
                        disableMonthChange={true}
                        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                        firstDay={1}
                        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                        onPressArrowLeft={substractMonth => substractMonth()}
                        // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                        onPressArrowRight={addMonth => addMonth()}
                        theme={{
                            backgroundColor: '#ffffff',
                            calendarBackground: '#ffffff',
                            textSectionTitleColor: '#b6c1cd',
                            selectedDayBackgroundColor: '#00adf5',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: 'black',
                            dayTextColor: 'black',
                            textDisabledColor: '#d9e1e8',
                            dotColor: '#00adf5',
                            selectedDotColor: 'blue',
                            arrowColor: '#387ecb',
                            monthTextColor: 'black',
                            textDayFontFamily: 'bible',
                            textMonthFontFamily: 'bible',
                            textDayHeaderFontFamily: 'bible',
                            textMonthFontWeight: 'bold',
                            textDayFontSize: 16,
                            textMonthFontSize: 16,
                            textDayHeaderFontSize: 16
                        }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        backgroundColor: "#387ecb",
        height: 80,
        justifyContent: "space-between",
        flexDirection: "row",
        paddingTop: 40
    }
});