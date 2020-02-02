import React from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StyledText, StyledTextInverse } from "../../components/Typography";
import Colors from "../../constants/Colors";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query($district: ID!) {
    congregations(filter: { district: $district }) {
      _id
      name
    }

    memberProfile {
      _id
      communicant
      congregation {
        name
        _id
      }
    }
  }
`;

function renderCheckMark(checkValue, checkBox) {
  if (checkBox === checkValue) {
    return <Ionicons name="ios-checkmark" size={25} color={Colors.tintColor} />;
  }
}

const CongregationSelection = ({ navigation }) => {
  const district = navigation.getParam("district");
  console.log("District", district);
  const { loading, data, error } = useQuery(query, {
    variables: {
      district: district._id
    }
  });

  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    console.log("Error", error);
  }

  const { congregations, memberProfile } = data;
  console.log("This is data", data);
  return (
    <View style={[styles.container]}>
      <View style={[styles.headerBar]}>
        <View style={{ paddingLeft: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name={"ios-arrow-back"}
              size={30}
              color="#FFFFFF"
              style={{ justifyContent: "center" }}
            />
          </TouchableOpacity>
        </View>

        <StyledTextInverse style={{ fontSize: 20, alignSelf: "center" }}>
          Set Congregation
        </StyledTextInverse>

        <View style={{ paddingRight: 20 }} />
      </View>

      <View style={{ justifyContent: "center", width: "100%" }}>
        <View style={[styles.list]}>
          <FlatList
            data={congregations}
            keyExtractor={item => item._id}
            renderItem={({ item }) => {
              const congregation = item;
              return (
                <TouchableOpacity>
                  <View style={[styles.listItem]}>
                    <View style={[{ flexDirection: "row" }]}>
                      <View style={{ justifyContent: "center" }}>
                        <StyledText style={{ fontSize: 16 }}>
                          {congregation.name}
                        </StyledText>
                      </View>
                    </View>

                    <View
                      style={{
                        height: 50,
                        alignSelf: "center",
                        justifyContent: "center"
                      }}
                    >
                      {renderCheckMark(
                        congregation._id,
                        memberProfile.congregation._id
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};
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
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#FFFFFF",
    height: "500%"
  },

  mainItem: {
    backgroundColor: "#FFFFFF",
    padding: 20
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
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: "#cecece",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF"
  }
});

export default CongregationSelection;
