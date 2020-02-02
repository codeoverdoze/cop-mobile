import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { StyledText } from "../../components/Typography";

import Bible from "../../store/Bible";
import BibleBar from "./components/BibleBar";

import bible from "../../sample-data/bible-kjv-shell.json";

export default class extends Component {
  setBibleChapter(chapter) {
    Bible.setChapter(chapter);
    this.props.navigation.navigate("BibleDashboard");
  }

  navigateToBibleBookScreen() {
    this.props.navigation.navigate("BibleBook");
  }

  navigateToBibleChapterScreen() {
    this.props.navigation.navigate("BibleChapter");
  }

  render() {
    // Finding bible book from data structure
    let selectedBook = Bible.getBook();
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
        />
        <View style={[styles.gridContainer]}>
          <View
            style={[styles.grid, { flexDirection: "row", flexWrap: "wrap" }]}
          >
            {book.chapters.map(chapter => {
              return (
                <View style={{ margin: 5 }} key={chapter}>
                  <TouchableOpacity
                    onPress={() => this.setBibleChapter(chapter)}
                  >
                    <View
                      style={[
                        styles.gridItem,
                        { alignItems: "center", width: 50 }
                      ]}
                    >
                      <StyledText style={{ fontSize: 20 }}>
                        {chapter}
                      </StyledText>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },

  gridContainer: {
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },

  grid: {
    backgroundColor: "#FFFFFF",
    margin: 0,
    marginBottom: 20,
    padding: 0
  },

  gridItem: {
    borderWidth: 1,
    borderColor: "#F0F0F0",
    padding: 10
  }
});
