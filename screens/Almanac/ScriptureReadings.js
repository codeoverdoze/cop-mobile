import React from "react";
import { View, ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import SVGIcon from "../../components/SVGIcon";
import { StyledHeader, StyledText } from "../../components/Typography";
import Layout from "../../constants/NewLayout";
import ChildScreenHeader from "../../components/ChildScreenHeader";

import { communicateIcon, forwardIcon } from '../../assets/icons';

function ScriptureReadings({ navigation }) {
  const scriptureReadings = navigation.getParam("readings");
  const theme = {
    tintColor: "#1565c0",
    tintColorlight: "#ffffff",
    supportingColor: "#e3e3e3",
    borderColor: "#e3e3e3"
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.tintColorlight
      }}
    >
      <ChildScreenHeader title="Scripture Readings" />

      <View style={{ padding: Layout.paddingHorizontal }}>
        <ScrollView>
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
                  <SVGIcon
                    width={RFValue(30)}
                    height={RFValue(30)}
                    source={communicateIcon}
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
                <SVGIcon
                  width={20}
                  height={20}
                  source={forwardIcon}
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
                  <SVGIcon
                    width={RFValue(30)}
                    height={RFValue(30)}
                    source={communicateIcon}
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
                <SVGIcon
                  width={20}
                  height={20}
                  source={forwardIcon}
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
                  <SVGIcon
                    width={RFValue(30)}
                    height={RFValue(30)}
                    source={communicateIcon}
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
                <SVGIcon
                  width={20}
                  height={20}
                  source={forwardIcon}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

ScriptureReadings.navigationOptions = {
  header: null
};

export default ScriptureReadings;
