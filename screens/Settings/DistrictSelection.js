import React from "react";
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { StyledText, StyledTextInverse } from "../../components/Typography";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import { useQuery, gql } from "@apollo/client";

const query = gql`
  query($presbytery: ID!) {
    districts(filter: { presbytery: $presbytery }) {
      _id
      name
    }
  }
`;

function DistrictSelection({ navigation }) {
  const presbytery = navigation.getParam("presbytery");
  const { data, loading, error } = useQuery(query, {
    variables: {
      presbytery: presbytery._id
    }
  });

  function navigateToCongregationSelection(district) {
    navigation.navigate("CongregationSelection", { district });
  }

  function renderDistrict(district) {
    return (
      <TouchableOpacity
        onPress={() => navigateToCongregationSelection(district.item)}
      >
        <View style={[styles.listItem]}>
          <View style={[{ flexDirection: "row" }]}>
            <View
              style={[
                styles.circleShapeView,
                { backgroundColor: district.item.color }
              ]}
            >
              <StyledTextInverse style={{ fontSize: 16 }}>
                {district.item.name.substring(0, 1)}
              </StyledTextInverse>
            </View>
            <View style={{ justifyContent: "center" }}>
              <StyledText style={{ fontSize: 16 }}>
                {district.item.name}
              </StyledText>
            </View>
          </View>

          <View>
            <EvilIcons name={"chevron-right"} size={20} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  if (data) {
    const { districts } = data;
    return (
      <View style={[styles.container]}>
        <View style={[styles.header]}>
          <View style={{ paddingLeft: 20 }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <Ionicons
                name={"ios-arrow-back"}
                size={25}
                color="#FFFFFF"
                style={{ justifyContent: "center" }}
              />
            </TouchableOpacity>
          </View>

          <StyledTextInverse style={{ fontSize: 20, alignSelf: "center" }}>
            {presbytery.name} Districts
          </StyledTextInverse>

          <View style={{ paddingRight: 20 }} />
        </View>

        <View style={[styles.list]}>
          <FlatList
            data={districts}
            renderItem={renderDistrict}
            keyExtractor={item => item._id}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: "#FFFFFF"
  },

  header: {
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
  },

  circleShapeView: {
    width: 40,
    height: 40,
    borderRadius: 150 / 2,
    backgroundColor: "#00BCD4",
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default DistrictSelection;
