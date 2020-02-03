import React, { Component } from "react";
import { View, StyleSheet, FlatList, StatusBar } from "react-native";
import { StyledText, StyledTextInverse } from "../../components/Typography";
import ActionSheet from "react-native-actionsheet";
import XDate from "xdate";
import BibleBar from "./components/BibleBar";

import bible from "../../sample-data/bible-kjv.json";
import Bible from "../../store/Bible";
import almanac from "../../sample-data/almanac-2019";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export default class extends Component {
  constructor(props) {
    super(props);
    // Event listener to reload changes in bible
    const focusSubscription = this.props.navigation.addListener(
      "willFocus",
      () => {
        this.forceUpdate();
      }
    );
    this.currentDate = new XDate();

    this.currentMonth = monthNames[this.currentDate.getMonth()];
    this.currentDay = this.currentDate.getDate();
    this.almanac = almanac[this.currentMonth][this.currentDay - 1];

    this.state = {
      almanacModalOpen: false
    };
  }

  renderVerses = verse => {
    if (verse) {
      return (
        <View style={[styles.gridItem]}>
          <View style={{ alignSelf: "flex-start", paddingRight: 10 }}>
            <StyledText style={{ color: "#ef5350" }}>
              {verse.index + 1}
            </StyledText>
          </View>
          <View style={{ width: "90%" }}>
            <StyledText bible style={{ fontSize: 18 }}>
              {verse.item}
            </StyledText>
          </View>
        </View>
      );
    }
  };

  navigateToBibleBookScreen() {
    this.props.navigation.navigate("BibleBook");
  }

  navigateToBibleChapterScreen() {
    this.props.navigation.navigate("BibleChapter");
  }

  openAlmanacModal() {
    this.ActionSheet.show();
  }

  render() {
    // Finding bible book from data structure
    let selectedBook = Bible.getBook();
    let selectedChapter = Bible.getChapter();
    let book = {};
    bible.map(bookCandidate => {
      if (bookCandidate.name === selectedBook) {
        book = bookCandidate;
      }
    });

    return (
      <View style={[styles.container]}>
        <BibleBar
          navigateToBibleBookScreen={this.navigateToBibleBookScreen.bind(this)}
          navigateToBibleChapterScreen={this.navigateToBibleChapterScreen.bind(
            this
          )}
          openAlmanacModal={this.openAlmanacModal.bind(this)}
        />
        <ActionSheet
          ref={o => (this.ActionSheet = o)}
          title={"Today's reading"}
          options={this.almanac.readings}
          onPress={index => {
            /* do something */
          }}
        />
        <View style={[styles.gridContainer]}>
          <FlatList
            data={book.chapters[selectedChapter - 1]}
            renderItem={this.renderVerses}
            keyExtractor={verse => verse}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingBottom: 60
  },

  gridContainer: {
    shadowColor: "#000",
    paddingBottom: 20
  },

  grid: {
    backgroundColor: "#FFFFFF",
  },

  gridItem: {
    flexDirection: "row",
    padding: 10
  }
});
