import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import {
  StyledHeader,
  StyledHeaderInverse,
  StyledText
} from "../../components/Typography";
import { Ionicons } from "@expo/vector-icons";
import { useQuery, gql } from "@apollo/client";

const userProfileImage = require("../../assets/images/placeholder-image.png");
const query = gql`
  query {
    memberProfile @client{
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

  if (data) {
    console.log(data);
  }

  if (loading) {
    console.log("Loading", loading);
  }

  if (error) {
    console.log("Error", error);
  }

  if (loading) {
    return <View />;
  }

  const { memberProfile } = data;
  return (
    <View style={[styles.container]}>
      <View style={[styles.headerBar]}>
        <StyledHeaderInverse style={{ fontSize: 20, alignSelf: "flex-start" }}>
          Settings
        </StyledHeaderInverse>
      </View>

      <ScrollView style={{ flex: 1, paddingBottom: 30 }}>
        <View style={[styles.header, { marginBottom: 20 }]}>
            <View>

            </View>

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
              <StyledText>{`(${memberProfile.folio}/${memberProfile.contact.primaryTelephone})`}</StyledText>
            </View>
          </View>

          <View></View>
        </View>

        <View style={[styles.main]}>
          <View style={{ marginLeft: 20, marginBottom: 5 }}>
            <StyledHeader style={{ fontSize: 13 }}>
              Membership Settings
            </StyledHeader>
          </View>
          <View style={{ marginBottom: 40 }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PersonalInformation")
              }
            >
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
                      Personal Information
                    </StyledText>
                  </View>

                  <Ionicons
                    name={"ios-arrow-forward"}
                    size={16}
                    color="#3E4E5B"
                  />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("ChurchSelection")}
            >
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
                      Congregation Selection
                    </StyledText>
                  </View>

                  <Ionicons
                    name={"ios-arrow-forward"}
                    size={16}
                    color="#3E4E5B"
                  />
                </View>
              </View>
            </TouchableOpacity>
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
                    paddingBottom: 15
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <StyledText style={{ fontSize: 16 }}>
                      Payment Preferences
                    </StyledText>
                  </View>

                  <Ionicons
                    name={"ios-arrow-forward"}
                    size={16}
                    color="#3E4E5B"
                  />
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

                  <Ionicons
                    name={"ios-arrow-forward"}
                    size={16}
                    color="#3E4E5B"
                  />
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
                      Prayer Requests
                    </StyledText>
                  </View>

                  <Ionicons
                    name={"ios-arrow-forward"}
                    size={16}
                    color="#3E4E5B"
                  />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Credits")}
            >
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
                  <View style={{ flexDirection: "row" }}>
                    <StyledText style={{ fontSize: 16 }}>Credits</StyledText>
                  </View>
                  <Ionicons
                    name={"ios-arrow-forward"}
                    size={16}
                    color="#3E4E5B"
                  />
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
    flexDirection: "row",
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between"
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
