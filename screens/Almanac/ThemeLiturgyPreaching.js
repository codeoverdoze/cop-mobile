import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  SafeAreaView
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import SVGIcon from "../../components/SVGIcon";
import {
  StyledHeader,
  StyledSubtitle,
  StyledText,
  SubtitleText
} from "../../components/Typography";
import { NavigationActions } from "react-navigation";
import Layout from "../../constants/NewLayout";
import ChildScreenHeader from "../../components/ChildScreenHeader";

import { chiefComplaintIcon, closeIcon } from "../../assets/icons";

function ThemeLiturgyPreaching({ navigation }) {
  const serviceTheme = navigation.getParam("theme");
  const serviceDate = navigation.getParam("date");
  const theme = {
    tintColor: "#1565c0",
    tintColorlight: "#ffffff",
    supportingColor: "#e3e3e3",
    borderColor: "#e3e3e3"
  };

  function goBack() {
    navigation.dispatch(NavigationActions.back());
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.tintColorlight
      }}
    >
      <ChildScreenHeader title={"Theme, Lithurgy & Preaching"} />
      <View style={{ padding: Layout.paddingHorizontal }}>
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
              Theme
            </StyledText>
          </View>
          <View style={{ marginTop: 15 }}>
            <StyledText>{serviceTheme}</StyledText>
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
              Liturgy:
            </StyledText>
          </View>
          <View style={{ marginTop: 15 }}>
            <StyledText>1st Service : Catechist Bright Adofo Anim</StyledText>
            <StyledText>2nd Service: Dennis Danso</StyledText>
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
              Preacher:
            </StyledText>
          </View>
          <View style={{ marginTop: 15 }}>
            <StyledText>1st Service : Mr. Vincent Odjaho</StyledText>
            <StyledText>2nd Service: Rev. Joshua Bbossman</StyledText>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

ThemeLiturgyPreaching.navigationOptions = {
  headerMode: "none"
};

export default ThemeLiturgyPreaching;
