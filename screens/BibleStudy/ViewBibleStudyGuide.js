import React from "react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import {
  StyledHeader,
  StyledText,
  StyledTextInverse
} from "../../components/Typography";
import { EvilIcons } from "@expo/vector-icons";
import TableContent from "./components/TableContent";
import ChildScreenHeader from "../../components/ChildScreenHeader";

export default function ViewBibleStudyGuide({ navigation }) {
  const bibleStudyGuide = navigation.getParam("bibleStudyGuide");

  function navigateToSectionDetails(bsgSection) {
    navigation.navigate("SectionDetail", { bsgSection });
  }

  function navigateToContentDetails(bsgContent) {
    navigation.navigate("ContentDetail", { bsgContent });
  }

  function renderTableOfContent({ item: bsgSection }) {
    return (
      <TouchableOpacity onPress={() => navigateToSectionDetails(bsgSection)}>
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
              <StyledTextInverse style={{ fontSize: 16 }}>S</StyledTextInverse>
            </View>
            <View style={{ justifyContent: "center" }}>
              <StyledText style={{ fontSize: 16 }}>Section {" 1 "}</StyledText>
              <StyledText style={{ fontSize: 16 }}>
                {bsgSection.title}
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

  return (
    <View style={[styles.container]}>
      <ChildScreenHeader title={`${bibleStudyGuide.year} Bible Study Guide`} />
      <View style={{ paddingBottom: 70 }}>
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <StyledHeader>Theme</StyledHeader>
          <StyledText>{bibleStudyGuide.theme}</StyledText>
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <StyledHeader>Scripture</StyledHeader>
          <StyledText>{bibleStudyGuide.scripture}</StyledText>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderBottomColor: "#c3c3c3",
            borderBottomWidth: 0.3,
            marginTop: 20
          }}
        >
          <StyledHeader>Table of Content</StyledHeader>
        </View>
        <View>
          <TouchableOpacity
            onPress={() =>
              navigateToContentDetails(bibleStudyGuide.introduction)
            }
          >
            <TableContent contentLabel="Introduction" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigateToContentDetails(bibleStudyGuide.acknowledgement)
            }
          >
            <TableContent contentLabel="Acknowledgement" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigateToContentDetails(bibleStudyGuide.wordFromModerator)
            }
          >
            <TableContent contentLabel="Word From Moderator" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={bibleStudyGuide.sections}
          renderItem={renderTableOfContent}
          keyExtractor={item => item.year}
        />
      </View>
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
