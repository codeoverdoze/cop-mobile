import React from "react";
import { gql, useQuery } from "@apollo/client";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import {
  StyledHeader,
  StyledText,
  StyledTextInverse
} from "../../components/Typography";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import LoadingState from "../../components/LoadingState";
import ChildScreenHeader from "../../components/ChildScreenHeader";

const prayerRequests = gql`
  query {
    memberPrayerRequests {
      _id
      request
      createdAt
      status
      anonymous
    }
  }
`;

function PrayerRequest({ request, status, date }) {
  return (
    <>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#e3e3e3",
          backgroundColor: "#fff"
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 5
          }}
        >
          <StyledHeader>{new Date(date).toDateString()}</StyledHeader>

          {status === "pending" ? (
            <StyledText
              style={{
                backgroundColor: "#F6AD55",
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 20,
                color: "#fff"
              }}
            >
              Pending
            </StyledText>
          ) : (
            <StyledText
              style={{
                backgroundColor: "#9AE6B4",
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 20,
                color: "#fff"
              }}
            >
              Seen
            </StyledText>
          )}
        </View>

        <StyledText>{request}</StyledText>
      </View>
    </>
  );
}

export default function PrayerRequests({ navigation }) {
  const { loading, data, error } = useQuery(prayerRequests);

  if (loading) {
    return (
      <LoadingState>
        <StyledText>Please wait while we load your prayer requests</StyledText>
      </LoadingState>
    );
  }

  const { memberPrayerRequests } = data;
  return (
    <View style={[styles.container]}>
      <ChildScreenHeader title="Prayer Requests" />

      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 30,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff"
        }}
      >
        <StyledText style={{ textAlign: "center" }}>
          Prayer requests are a way of gaining support from the church during
          trials and tribulations
        </StyledText>

        <TouchableOpacity
          onPress={() => navigation.navigate("MakePrayerRequest")}
        >
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              borderWidth: 0.5,
              borderColor: Colors.tintColor,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 3,
              borderStyle: "dashed"
            }}
          >
            <Ionicons
              name="ios-add"
              size={15}
              style={{ color: Colors.tintColor, marginRight: 5 }}
            />
            <StyledText style={{ color: Colors.tintColor }}>
              New Prayer Request
            </StyledText>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10
        }}
      >
        <StyledHeader style={{ fontSize: 20 }}>
          Prayer Request History
        </StyledHeader>
      </View>
      {memberPrayerRequests.length ? (
        <FlatList
          data={memberPrayerRequests}
          renderItem={({ item }) => {
            return (
              <PrayerRequest
                request={item.request}
                status={item.status}
                date={item.createdAt}
              />
            );
          }}
          keyExtractor={item => item._id}
        />
      ) : (
        <View
          style={{
            marginHorizontal: 20,
            padding: 10,
            backgroundColor: "#fff",
            flexDirection: "row",
            borderRadius: 5,
            borderWidth: 0.3,
            borderColor: "#e3e3e3"
          }}
        >
          <Ionicons
            name="ios-information-circle-outline"
            size={15}
            style={{ marginRight: 5, color: "orange" }}
          />
          <StyledText>You have not made any prayer requests yet</StyledText>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8"
  },

  headerBar: {
    backgroundColor: "#387ecb",
    height: 80,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 40
  },

  list: {
    marginBottom: 70
  },

  listItem: {
    padding: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: "#cecece",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
