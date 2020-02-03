import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { StyledHeader, StyledText } from "../../components/Typography";
import { useQuery, gql } from "@apollo/client";
import LoadingState from "../../components/LoadingState";
import ParentScreenHeader from "../../components/ParentScreenHeader";
import styled from "styled-components";
import SVGIcon from "../../components/SVGIcon";
import { forwardIcon } from "../../assets/icons";

const userProfileImage = require("../../assets/images/placeholder-image.png");
const query = gql`
  query {
    memberProfile {
      _id
      firstName
      middleName
      surname
      communicant
      contact {
        primaryTelephone
        secondaryTelephone
        email
        nextOfKin {
          name
          telephone
        }
      }
      congregation {
        name
        location
        catechist
        phone
        residentPastor
        district {
          name
          presbytery {
            name
          }
        }
      }
    }
  }
`;

export default function SettingsScreen({ navigation }) {
  const { data, loading, error } = useQuery(query);

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    console.log("Error", error);
  }

  const { memberProfile } = data;
  return (
    <View style={[styles.container]}>
      <ParentScreenHeader title="Settings" />

      <ScrollView style={{ flex: 1, paddingBottom: 30 }}>
        <View style={[styles.header, { marginBottom: 20 }]}>
          <View style={{ alignSelf: "center" }}>
            <View style={{ alignItems: "center" }}>
              <Image
                source={userProfileImage}
                style={{ height: 90, width: 90 }}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <StyledHeader style={{ fontSize: 16 }}>
                {`${memberProfile.firstName} ${memberProfile.surname}`}
              </StyledHeader>
              <StyledText>{memberProfile.contact.primaryTelephone}</StyledText>
            </View>
          </View>
        </View>

        <View style={[styles.main]}>
          <View style={{ marginLeft: 20, marginBottom: 5 }}>
            <StyledHeader style={{ fontSize: 13 }}>
              Membership Settings
            </StyledHeader>
          </View>
          <View style={{ marginBottom: 40 }}>
            <ListBlock>
              <TouchableOpacity
                onPress={() => navigation.navigate("MembershipDetails")}
              >
                <ListItem>
                  <StyledText style={{ fontSize: 16 }}>
                    Membership Details
                  </StyledText>

                  <SVGIcon source={forwardIcon} width={15} />
                </ListItem>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("ChurchSelection")}
              >
                <ListItem>
                  <StyledText style={{ fontSize: 16 }}>
                    Congregation Selection
                  </StyledText>

                  <SVGIcon source={forwardIcon} width={15} />
                </ListItem>
              </TouchableOpacity>
            </ListBlock>
          </View>
          <TouchableOpacity>
            <View style={[styles.mainItem]}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginLeft: 20,
                  marginRight: 20,
                  borderBottomWidth: 0.3,
                  borderBottomColor: "#cecece",
                  paddingTop: 15,
                  paddingBottom: 15,
                  alignItems: "center"
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <StyledText style={{ fontSize: 16 }}>
                    Payment Preferences
                  </StyledText>
                </View>

                <SVGIcon source={forwardIcon} width={15} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={[styles.mainItem]}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginLeft: 20,
                  marginRight: 20,
                  borderBottomWidth: 0.3,
                  borderBottomColor: "#cecece",
                  paddingTop: 15,
                  paddingBottom: 15
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <StyledText style={{ fontSize: 16 }}>
                    Help & Support
                  </StyledText>
                </View>

                <SVGIcon source={forwardIcon} width={15} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Credits")}>
            <View style={[styles.mainItem]}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginLeft: 20,
                  marginRight: 20,
                  paddingTop: 15,
                  paddingBottom: 15
                }}
              >
                <View
                  style={{ flexDirection: "row", justifyContent: "center" }}
                >
                  <StyledText style={{ fontSize: 16 }}>Credits</StyledText>
                </View>
                <SVGIcon source={forwardIcon} width={15} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8"
  },

  header: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center"
  },

  main: {
    flex: 3
  },

  mainItem: {
    backgroundColor: "#FFFFFF"
  },

  headerBar: {
    backgroundColor: "#387ecb",
    height: 80,
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 40
  }
});

const ListBlock = styled.View`
  background-color: #ffffff;
  padding-horizontal: 20px;
  padding-vertical: 5px;
`;

const ListItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: 10px;
  border-bottom-width: 0.5px;
  border-bottom-color: #e3e3e3;
`;