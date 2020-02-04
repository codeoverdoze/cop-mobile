import React, { Component } from "react";
import SVGIcon from "../../components/SVGIcon";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  StyledText,
  StyledHeader,
  StyledSubtitle
} from "../../components/Typography";
import { Calendar, LocaleConfig } from "react-native-calendars";
import Layout from "../../constants/NewLayout";

import { thinkingBubbleIcon, bibleIcon, profileIcon } from '../../assets/icons';

// Almanac data
import almanac_2019 from "../../sample-data/almanac-2019.json";
import almanac_2020 from "../../sample-data/almanac-2020.json";
import ChildScreenHeader from "../../components/ChildScreenHeader";

export default class extends Component {
  constructor(props) {
    super(props);
    this.monthName = this.props.navigation.getParam("monthName");
    this.monthIndex = this.props.navigation.getParam("monthIndex");
    this.yearName = this.props.navigation.getParam("yearName");
    this.yearIndex = this.props.navigation.getParam("yearIndex");
    this.selectAppropriateAlmanac = this.selectAppropriateAlmanac.bind(this);
    this.almanac = this.selectAppropriateAlmanac(this.yearName);

    console.log(this.yearName);

    // Padding month index
    this.monthIndex = (this.monthIndex + 1).toString().padStart(2, "0");

    // Screen state
    this.state = {
      selectedDate: `${this.yearName}-${this.monthIndex}-01`,
      selectedDay: 1,
      selectedMonth: this.monthName,
      selectedAlmanac: this.almanac[this.monthName][0]
    };

    // Setting LocaleConfig
    LocaleConfig.locales["en"] = {
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      monthNamesShort: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul.",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      dayNames: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    };

    LocaleConfig.defaultLocale = "en";

    // Binding private methods
    this.onDayPress = this.onDayPress.bind(this);
  }

  selectAppropriateAlmanac(year) {
    switch (year) {
      case 2019:
        return almanac_2019;
      case 2020:
        return almanac_2020;
      default:
        return almanac_2020;
    }
  }

  resolveMonthNameWithIndex(index) {
    // Don't want to create a new array so will use the data structure inside LocalConfig as my months
    // Subtracting 1 from index to fit array keys
    index = index - 1;
    return LocaleConfig.locales["en"].monthNames[index];
  }

  async onDayPress(day) {
    const resolvedMonth = this.resolveMonthNameWithIndex(day.month);
    await this.setState({
      selectedDate: day.dateString,
      selectedDay: day.day,
      selectedMonth: day.month,
      selectedAlmanac: this.almanac[resolvedMonth][Number(day.day) - 1]
    });
  }

  resolveAlmanacData(data, type) {
    if (type === "occasion") {
      if (data.length === 0) {
        return "No occasion";
      }
    } else if (type === "theme") {
      if (data.length === 0) {
        return "No theme";
      }
    } else if (type === "readings") {
      if (data.length === 0) {
        return ["No scripture readings"];
      }
    }
    return data;
  }

  render() {
    // Building new marked date object
    const markedDate = {};
    markedDate[this.state.selectedDate] = {
      selected: true,
      selectedColor: "#387ecb"
    };

    return (
      <View style={[styles.container]}>
        <ChildScreenHeader title={`${this.yearName} PCG Almanac`} />

        <View>
          <Calendar
            markedDates={markedDate}
            // Initially visible month. Default = Date()
            current={this.state.selectedDate}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={`${this.yearName}-01-01`}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={`${this.yearName}-12-31`}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={day => this.onDayPress(day)}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={day => {
              console.log("selected day", day);
            }}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={"MMMM yyyy"}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={async day => {
              await this.onDayPress(day);
            }}
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
              backgroundColor: "#ffffff",
              calendarBackground: "#ffffff",
              textSectionTitleColor: "#b6c1cd",
              selectedDayBackgroundColor: "#00adf5",
              selectedDayTextColor: "#ffffff",
              todayTextColor: "black",
              dayTextColor: "black",
              textDisabledColor: "#d9e1e8",
              dotColor: "#00adf5",
              selectedDotColor: "blue",
              arrowColor: "#387ecb",
              monthTextColor: "black",
              textDayFontFamily: "bible",
              textMonthFontFamily: "bible",
              textDayHeaderFontFamily: "bible",
              textMonthFontWeight: "bold",
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 14
            }}
          />
        </View>
        <View
          style={{
            paddingVertical: 20,
            paddingHorizontal: Layout.paddingHorizontal,
            marginBottom: 0,
          }}
        >
          <StyledHeader style={{ fontSize: 15 }}>Occasion</StyledHeader>
          <StyledSubtitle style={{ fontSize: 13 }}>
            {this.resolveAlmanacData(
              this.state.selectedAlmanac.occasion,
              "occasion"
            )}
          </StyledSubtitle>
        </View>
        <ScrollView style={{ marginTop: 0 }}>
          <View style={{ paddingTop: 0 }}>
            <View style={{ backgroundColor: "#fff" }}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("ThemeLiturgyPreaching", {
                    date: this.state.selectedDate,
                    theme: this.resolveAlmanacData(
                      this.state.selectedAlmanac.theme,
                      "theme"
                    )
                  })
                }
              >
                <View
                  style={{
                    paddingHorizontal: Layout.paddingHorizontal,
                    paddingTop: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 5,
                    marginHorizontal: 20
                  }}
                >
                  <View style={{ paddingRight: 30 }}>
                    <SVGIcon
                      width="30"
                      height="30"
                      source={thinkingBubbleIcon}
                    />
                    <View style={{ height: 6 }} />
                  </View>
                  <View
                    style={{
                      width: "80%",
                      borderBottomWidth: 0.5,
                      borderBottomColor: "#e3e3e3",
                      paddingBottom: 10
                    }}
                  >
                    <StyledHeader style={{ fontSize: 13 }}>
                      Theme, Liturgy &amp; Preaching
                    </StyledHeader>
                    <StyledText style={{ fontSize: 12 }}>
                      Liturgical order/ Order of Service lead
                    </StyledText>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("ScriptureReadings", {
                    date: this.state.selectedDate,
                    readings: this.resolveAlmanacData(
                      this.state.selectedAlmanac.readings,
                      "readings"
                    )
                  })
                }
              >
                <View
                  style={{
                    paddingHorizontal: Layout.paddingHorizontal,
                    paddingTop: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 5,
                    marginHorizontal: 20
                  }}
                >
                  <View style={{ paddingRight: 30 }}>
                    <SVGIcon
                      width="30"
                      height="30"
                      source={bibleIcon}
                    />
                    <View style={{ height: 6 }} />
                  </View>
                  <View
                    style={{
                      width: "80%",
                      borderBottomWidth: 0.5,
                      borderBottomColor: "#e3e3e3",
                      paddingBottom: 10
                    }}
                  >
                    <StyledHeader style={{ fontSize: 13 }}>
                      Scripture Readings
                    </StyledHeader>
                    <StyledText style={{ fontSize: 12 }}>
                      The text/passage for the day as captured by the Almanac
                    </StyledText>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("CalendarAnnouncements", {
                    date: this.state.selectedDate
                  })
                }
              >
                <View
                  style={{
                    paddingHorizontal: Layout.paddingHorizontal,
                    paddingTop: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 5,
                    marginHorizontal: 20
                  }}
                >
                  <View style={{ paddingRight: 30 }}>
                    <SVGIcon
                      width="30"
                      height="30"
                      source={profileIcon}
                    />
                    <View style={{ height: 6 }} />
                  </View>
                  <View
                    style={{
                      width: "80%",
                      borderBottomWidth: 0.5,
                      borderBottomColor: "#e3e3e3",
                      paddingBottom: 10
                    }}
                  >
                    <StyledHeader style={{ fontSize: 13 }}>
                      Announcements
                    </StyledHeader>
                    <StyledText style={{ fontSize: 12 }}>
                      Daily announcements and information dissemination hub
                    </StyledText>
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
    backgroundColor: "#387ecb",
    height: 80,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 40
  },

  body: {
    height: "100%",
    paddingBottom: 100
  },

  providerCard: {
    margin: 10,
    marginBottom: 0,
    padding: 10,
    paddingTop: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  },

  bodyItem: {
    marginBottom: 20
  }
});
