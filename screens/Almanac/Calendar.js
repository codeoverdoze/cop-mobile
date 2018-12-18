import React, { Component } from "react";
import {View, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import {StyledSubtitle, StyledText, StyledTextInverse, StyledHeader} from "../../components/Typography";
import {Ionicons} from "@expo/vector-icons";
import { Calendar, LocaleConfig } from "react-native-calendars";

// Almanac data
import almanac from "../../sample-data/almanac.json";


export default class extends Component {
    constructor(props){
        super(props);
        this.monthName = this.props.navigation.getParam("monthName");
        this.monthIndex = this.props.navigation.getParam("monthIndex");

        // Padding month index
        this.monthIndex = (this.monthIndex + 1).toString().padStart(2, "0");

        // Screen state
        this.state = {
            selectedDate: `2019-${this.monthIndex}-01`,
            selectedDay: 1,
            selectedMonth: this.monthName,
            selectedAlmanac: almanac[this.monthName][0]
        };

        // Setting LocaleConfig
        LocaleConfig.locales['en'] = {
            monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
            monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul.','Aug','Sep','Oct','Nov','Dec'],
            dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            dayNamesShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
        };

        LocaleConfig.defaultLocale = 'en';

        // Binding private methods
        this.onDayPress = this.onDayPress.bind(this);
    }

    resolveMonthNameWithIndex(index){
        // Don't want to create a new array so will use the data structure inside LocalConfig as my months
        // Subtracting 1 from index to fit array keys
        index = index - 1;
        return LocaleConfig.locales['en'].monthNames[index];
    }

    async onDayPress(day){
        const resolvedMonth = this.resolveMonthNameWithIndex(day.month);
        await this.setState({
            selectedDate: day.dateString,
            selectedDay: day.day,
            selectedMonth: day.month,
            selectedAlmanac: almanac[resolvedMonth][Number(day.day) - 1]
        });
    }

    resolveAlmanacData(data, type){
        if(type === "occasion"){
            if(data.length === 0){
                return "No occasion"
            }
        }else if(type === "theme"){
            if(data.length === 0){
                return "No theme"
            }
        }else if(type === "readings"){
            if(data.length === 0){
                return ["No scripture readings"]
            }
        }
        return data;
    }

    render() {
        // Building new marked date object
        const markedDate = {};
        markedDate[this.state.selectedDate] = {selected: true, selectedColor: '#387ecb'};

        return (
            <View style={[styles.container]}>
                <View style={[styles.header]}>
                    <View style={{ paddingLeft: 20}}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Ionicons name={"ios-arrow-back"} size={30} color="#FFFFFF" style={{ justifyContent: "center"}}/>
                        </TouchableOpacity>
                    </View>

                    <StyledTextInverse style={{ fontSize: 20, alignSelf: "center"}}>PCG Almanac</StyledTextInverse>

                    <View style={{ paddingRight: 20}}/>
                </View>

                <View>
                    <Calendar
                        markedDates={markedDate}
                        // Initially visible month. Default = Date()
                        current={this.state.selectedDate}
                        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                        minDate={'2019-01-01'}
                        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                        maxDate={'2019-12-31'}
                        // Handler which gets executed on day press. Default = undefined
                        onDayPress={day => this.onDayPress(day)}
                        // Handler which gets executed on day long press. Default = undefined
                        onDayLongPress={(day) => {console.log('selected day', day)}}
                        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                        monthFormat={'MMMM yyyy'}
                        // Handler which gets executed when visible month changes in calendar. Default = undefined
                        onMonthChange={async (day) => {await this.onDayPress(day)}}
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

                <ScrollView contentContainerStyle={[styles.body]}>
                    <View style={[styles.bodyItem]}>
                        <StyledHeader style={{ fontSize: 20, color: "#37474f"}}>Occasion</StyledHeader>
                        <StyledText>{this.resolveAlmanacData(this.state.selectedAlmanac.occasion, "occasion")}</StyledText>
                    </View>

                    <View style={[styles.bodyItem]}>
                        <StyledHeader style={{ fontSize: 20, color: "#37474f"}}>Theme</StyledHeader>
                        <StyledText>{this.resolveAlmanacData(this.state.selectedAlmanac.theme, "theme")}</StyledText>
                    </View>

                    <View style={[styles.bodyItem]}>
                        <StyledHeader style={{ fontSize: 20, color: "#37474f"}}>Scriptures</StyledHeader>
                        {
                            this.resolveAlmanacData(this.state.selectedAlmanac.readings, "readings").map(item => {
                                return(
                                    <StyledText>{item}</StyledText>
                                )
                            })
                        }
                    </View>
                </ScrollView>
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
    },

    body: {
        marginTop: 15,
        padding: 20,
        backgroundColor: "#fafafa",
        height: "100%"
    },

    bodyItem: {
        marginBottom: 10
    }
});