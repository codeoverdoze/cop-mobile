import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { StyledText } from "../../components/Typography";

import Bible from "../../store/Bible";
import BibleBar from "./components/BibleBar";

import bible from "../../sample-data/bible-kjv-shell.json";

export default class extends Component {
  setBibleBook(book) {
    Bible.setBook(book);
    this.props.navigation.navigate("BibleChapter");
  }

  navigateToBibleBookScreen() {
    this.props.navigation.navigate("BibleBook");
  }

  navigateToBibleChapterScreen() {
    this.props.navigation.navigate("BibleChapter");
  }

  render() {
    return (
      <View style={[styles.container]}>
        <BibleBar
          navigateToBibleBookScreen={this.navigateToBibleBookScreen.bind(this)}
          navigateToBibleChapterScreen={this.navigateToBibleChapterScreen.bind(
            this
          )}
        />
        <ScrollView style={[styles.gridContainer]}>
          <StyledText style={{ fontSize: 20, margin: 5 }}>
            Old Testament
          </StyledText>
          <View
            style={[styles.grid, { flexDirection: "row", flexWrap: "wrap" }]}
          >
            {bible.slice(0, 38).map(book => {
              return (
                // We make use of key to set bible name because we made changes to some values for name. 2Kings, etc
                <View style={{ margin: 5 }} key={book.name}>
                  <TouchableOpacity
                    onPress={() => this.setBibleBook(book.name)}
                    key={book.key}
                  >
                    <View style={[styles.gridItem, { alignItems: "center" }]}>
                      <StyledText
                        style={{
                          fontSize: 18,
                          color: "#FFFFFF",
                          fontWeight: "bold",
                          width: 40
                        }}
                      >
                        {book.key.substring(0, 3)}
                      </StyledText>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>

          <StyledText style={{ fontSize: 20, margin: 5 }}>
            New Testament
          </StyledText>
          <View
            style={[styles.grid, { flexDirection: "row", flexWrap: "wrap" }]}
          >
            {bible.slice(39).map(book => {
              return (
                // We make use of key to set bible name because we made changes to some values for name. 2Kings, etc
                <View style={{ margin: 5 }} key={book.name}>
                  <TouchableOpacity
                    onPress={() => this.setBibleBook(book.name)}
                    key={book.key}
                  >
                    <View style={[styles.gridItem, { alignItems: "center" }]}>
                      <StyledText
                        style={{
                          fontSize: 18,
                          color: "#FFFFFF",
                          fontWeight: "bold",
                          width: 40
                        }}
                      >
                        {book.key.substring(0, 3)}
                      </StyledText>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
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
    padding: 20
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
    padding: 10,
    backgroundColor: "#387ecb"
  }
});
