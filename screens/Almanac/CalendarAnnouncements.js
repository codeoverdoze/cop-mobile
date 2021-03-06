import React from "react";
import { View, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import SvgUri from "expo-svg-uri";
import { StyledHeader, StyledText } from "../../components/Typography";
import Layout from "../../constants/NewLayout";
import { NavigationActions } from "react-navigation";

function CalendarAnnouncements({ navigation }) {
  function goBack() {
    navigation.dispatch(NavigationActions.back());
  }

  const serviceDate = navigation.getParam("date");

  const theme = {
    tintColor: "#1565c0",
    tintColorlight: "#ffffff",
    supportingColor: "#e3e3e3",
    borderColor: "#e3e3e3"
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.tintColorlight
      }}
    >
      <View style={{ padding: Layout.paddingHorizontal }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ justifyContent: "center", marginRight: 5 }}>
              <SvgUri
                width={RFValue(14)}
                height={RFValue(14)}
                source={require("../../assets/icons/chief-complaint")}
                fill={theme.tintColor}
              />
            </View>
            <StyledHeader style={{ fontSize: RFValue(14) }}>
              Announcements for {new Date(serviceDate).toDateString()}
            </StyledHeader>
          </View>

          <TouchableOpacity onPress={goBack}>
            <View style={{ justifyContent: "center" }}>
              <SvgUri
                width={23}
                height={23}
                source={require("../../assets/icons/close")}
              />
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={{ marginTop: 10, paddingVertical: 10, height: "100%" }}
        >
          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: theme.borderColor,
              paddingBottom: 10
            }}
          >
            <StyledText style={{ fontWeight: "bold", color: "#333333" }}>
              Announcement Heading 1
            </StyledText>
          </View>
          <View style={{ marginTop: 15 }}>
            <StyledText>
              The message for announcement goes here. The quick brown fox jumps
              over the lazy dog
            </StyledText>
          </View>

          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: theme.borderColor,
              paddingBottom: 10,
              marginTop: 40
            }}
          >
            <StyledText style={{ fontWeight: "bold", color: "#333333" }}>
              Announcement Heading 2:
            </StyledText>
          </View>
          <View style={{ marginTop: 15 }}>
            <StyledText>The message for announcement goes here</StyledText>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

CalendarAnnouncements.navigationOptions = {
  header: null
};

export default CalendarAnnouncements;
