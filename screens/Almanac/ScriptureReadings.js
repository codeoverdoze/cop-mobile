import React from "react";
import { View, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import SvgUri from "expo-svg-uri";
import { StyledHeader, StyledText } from "../../components/Typography";
import Layout from "../../constants/NewLayout";
import { NavigationActions } from "react-navigation";

function ScriptureReadings({ navigation }) {
  const scriptureReadings = navigation.getParam("readings");
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
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.tintColorlight,
        paddingTop: 30
      }}
    >
      <View style={{ padding: Layout.paddingHorizontal }}>
        <ScrollView>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ justifyContent: "center", marginRight: 5 }}>
                <SvgUri
                  width={RFValue(14)}
                  height={RFValue(14)}
                  source={require("../../assets/icons/labs.svg")}
                  fill="#000000"
                />
              </View>
              <StyledHeader style={{ fontSize: RFValue(14) }}>
                Scripture Readings for {new Date(serviceDate).toDateString()}
              </StyledHeader>
            </View>
            <TouchableOpacity onPress={goBack}>
              <View style={{ justifyContent: "center" }}>
                <SvgUri
                  width={23}
                  height={23}
                  source={require("../../assets/icons/close.svg")}
                  fill="#000000"
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: theme.borderColor,
              paddingBottom: 10,
              marginTop: 20
            }}
          >
            <StyledText style={{ fontWeight: "bold", color: "#333333" }}>
              Text:
            </StyledText>
          </View>
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            {scriptureReadings.map(reading => {
              return (
                <StyledHeader style={{ fontSize: 13 }}>{reading}</StyledHeader>
              );
            })}
          </View>

          <View style={{ marginTop: 0 }}>
            <View style={{ paddingBottom: 10, marginTop: 20 }}>
              <StyledText style={{ fontWeight: "bold", color: "#333333" }}>
                Bible Readers:
              </StyledText>
            </View>
            <View
              style={{
                borderColor: theme.borderColor,
                backgroundColor: theme.thirdCardColor,
                borderWidth: 0.5,
                borderRadius: 4,
                paddingHorizontal: 20,
                paddingVertical: 10,
                flexDirection: "row"
              }}
            >
              <View style={{ flexDirection: "row", flex: 12 }}>
                <View>
                  <SvgUri
                    width={RFValue(30)}
                    height={RFValue(30)}
                    source={require("../../assets/icons/communicate.svg")}
                    fill="#000000"
                  />
                </View>

                <View style={{ marginLeft: 10 }}>
                  <View>
                    <StyledHeader style={{ fontSize: 13 }}>
                      James Takyi-Appiah
                    </StyledHeader>
                    <StyledText style={{ fontSize: 12 }}>
                      English Reading
                    </StyledText>
                  </View>
                </View>
              </View>

              <View style={{ flex: 1, justifyContent: "center" }}>
                <SvgUri
                  width={20}
                  height={20}
                  source={require("../../assets/icons/forward.svg")}
                  fill="#000000"
                />
              </View>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <View
              style={{
                borderColor: theme.borderColor,
                backgroundColor: theme.tintColorlight,
                borderWidth: 0.5,
                borderRadius: 4,
                paddingHorizontal: 20,
                paddingVertical: 10,
                flexDirection: "row"
              }}
            >
              <View style={{ flexDirection: "row", flex: 12 }}>
                <View>
                  <SvgUri
                    width={RFValue(30)}
                    height={RFValue(30)}
                    source={require("../../assets/icons/communicate.svg")}
                    fill="#000000"
                  />
                </View>

                <View style={{ marginLeft: 10 }}>
                  <View>
                    <StyledHeader style={{ fontSize: 13 }}>
                      Kwaku Odonkosi-Acquaye
                    </StyledHeader>
                    <StyledText style={{ fontSize: 12 }}>
                      Twi Reading
                    </StyledText>
                  </View>
                </View>
              </View>

              <View style={{ flex: 1, justifyContent: "center" }}>
                <SvgUri
                  width={20}
                  height={20}
                  source={require("../../assets/icons/forward.svg")}
                  fill="#000000"
                />
              </View>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <View
              style={{
                borderColor: theme.borderColor,
                backgroundColor: theme.thirdCardColor,
                borderWidth: 0.5,
                borderRadius: 4,
                paddingHorizontal: 20,
                paddingVertical: 10,
                flexDirection: "row"
              }}
            >
              <View style={{ flexDirection: "row", flex: 12 }}>
                <View>
                  <SvgUri
                    width={RFValue(30)}
                    height={RFValue(30)}
                    source={require("../../assets/icons/communicate.svg")}
                    fill="#000000"
                  />
                </View>

                <View style={{ marginLeft: 10 }}>
                  <View>
                    <StyledHeader style={{ fontSize: 13 }}>
                      Michael Agbo Tettey Soli
                    </StyledHeader>
                    <StyledText style={{ fontSize: 12 }}>Ga Reading</StyledText>
                  </View>
                </View>
              </View>

              <View style={{ flex: 1, justifyContent: "center" }}>
                <SvgUri
                  width={20}
                  height={20}
                  source={require("../../assets/icons/forward.svg")}
                  fill="#000000"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

ScriptureReadings.navigationOptions = {
  header: null
};

export default ScriptureReadings;
