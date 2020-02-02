import React from "react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { StyledText, StyledTextInverse } from "../../components/Typography";
import { useQuery, gql } from "@apollo/client";
import ChildScreenHeader from "../../components/ChildScreenHeader";
import LoadingState from "../../components/LoadingState";
import SVGIcon from "../../components/SVGIcon";
import { forwardIcon } from "../../assets/icons";

const query = gql`
  query {
    bibleStudyGuides {
      year
      theme
      scripture
      introduction
      wordFromModerator
      acknowledgement
      sections {
        title
        lessons {
          scriptures
          application
          assignment
          exploration
          content
          objectives
          remember
          scriptures
        }
      }
    }
  }
`;

export default function StudyGuideIndex({ navigation }) {
  const { data, loading, error } = useQuery(query);

  function navigateToStudyGuideHome(bibleStudyGuide) {
    navigation.navigate("StudyGuideHome", { bibleStudyGuide });
  }

  function renderTableOfContent({ item: bsg }) {
    return (
      <TouchableOpacity onPress={() => navigateToStudyGuideHome(bsg)}>
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
                {bsg.scripture.substring(0, 1)}
              </StyledTextInverse>
            </View>
            <View style={{ justifyContent: "center" }}>
              <StyledText style={{ fontSize: 16 }}>{bsg.year}</StyledText>

              <StyledText style={{ fontSize: 14 }}>{bsg.theme}</StyledText>
            </View>
          </View>

          <View>
            <SVGIcon source={forwardIcon} width={15} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  if (loading) {
    return <LoadingState />;
  }

  if (data) {
    const { bibleStudyGuides } = data;
    return (
      <View style={[styles.container]}>
        <ChildScreenHeader title="Bible Study Year Selection" />
        <View style={{ paddingBottom: 70 }}>
          <FlatList
            data={bibleStudyGuides}
            renderItem={renderTableOfContent}
            keyExtractor={item => item.year}
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
