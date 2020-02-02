import React from "react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { StyledText, StyledTextInverse } from "../../components/Typography";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { useQuery, gql } from "@apollo/client";
import LoadingState from "../../components/LoadingState";

const query = gql`
  query {
    presbyteries {
      name
      zone
      _id
    }
  }
`;

export default function PresbyterySelection({ navigation }) {
  const { data, loading, error } = useQuery(query);

  function navigateToDistrictSelection(presbytery) {
    navigation.navigate("DistrictSelection", { presbytery });
  }

  function renderPresbytery(presbytery) {
    return (
      <TouchableOpacity
        onPress={() => navigateToDistrictSelection(presbytery.item)}
      >
        <View style={[styles.listItem]}>
          <View style={[{ flexDirection: "row" }]}>
            <View
              style={[
                styles.circleShapeView,
                {
                  backgroundColor: `rgb(${Math.floor(
                    Math.random() * 255
                  )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
                    Math.random() * 255
                  )})`,
                  borderRadius: 50
                }
              ]}
            >
              <StyledTextInverse style={{ fontSize: 16 }}>
                {presbytery.item.name.substring(0, 1)}
              </StyledTextInverse>
            </View>
            <View style={{ justifyContent: "center" }}>
              <StyledText style={{ fontSize: 16 }}>
                {presbytery.item.name}
              </StyledText>
              <StyledText style={{ fontSize: 14 }}>
                {presbytery.item.zone}
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
    return <LoadingState />;
  }

  if (data) {
    const { presbyteries } = data;
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
            Presbytery Selection
          </StyledTextInverse>
          <View style={{ paddingRight: 20 }} />
        </View>
        <View style={{ paddingBottom: 70 }}>
          <FlatList
            data={presbyteries}
            renderItem={renderPresbytery}
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
    paddingRight: 20
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
  },

  circleShapeView: {
    width: 40,
    height: 40,
    borderRadius: 150 / 2,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});
