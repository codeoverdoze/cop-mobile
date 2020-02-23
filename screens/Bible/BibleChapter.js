import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { StyledHeader, StyledText } from '../../components/Typography';

import Bible from '../../store/Bible';
import BibleBar from './components/BibleBar';

import bible from '../../sample-data/bible-kjv-shell.json';
import { ScrollView } from 'react-navigation';
import ChildScreenHeader from '../../components/ChildScreenHeader';

export default class extends Component {
  setBibleChapter(chapter) {
    Bible.setChapter(chapter);
    this.props.navigation.navigate('BibleDashboard');
  }

  navigateToBibleBookScreen() {
    this.props.navigation.navigate('BibleBook');
  }

  navigateToBibleChapterScreen() {
    this.props.navigation.navigate('BibleChapter');
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
        <ChildScreenHeader title="Select Chapter" />
        <BibleBar
          navigateToBibleBookScreen={this.navigateToBibleBookScreen.bind(this)}
          navigateToBibleChapterScreen={this.navigateToBibleChapterScreen.bind(this)}
        />
        <ScrollView>
          <View style={[styles.gridContainer]}>
            <View style={{ alignItems: 'center' }}>
              <StyledHeader style={{ fontSize: 20, marginTop: 5, paddingHorizontal: 5 }}>
                {book.name}
              </StyledHeader>
              <StyledText style={{ marginBottom: 10, paddingHorizontal: 5 }}>
                Please select appropriate chapter.
              </StyledText>
            </View>
            <View style={[styles.grid, { flexDirection: 'row', flexWrap: 'wrap' }]}>
              {book.chapters.map(chapter => {
                return (
                  <View style={{ margin: 5 }} key={chapter}>
                    <TouchableOpacity onPress={() => this.setBibleChapter(chapter)}>
                      <View
                        style={[
                          styles.gridItem,
                          { alignItems: 'center', width: 60, height: 60, justifyContent: 'center' },
                        ]}
                      >
                        <StyledText style={{ fontSize: 16, color: '#FFFFFF' }}>
                          {chapter}
                        </StyledText>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  gridContainer: {
    padding: 20,
    shadowColor: '#000',
  },

  grid: {
    backgroundColor: '#FFFFFF',
    margin: 0,
    color: '#FFFFFF',
    marginBottom: 20,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  gridItem: {
    borderWidth: 1,
    backgroundColor: '#387ecb',
    borderColor: '#F0F0F0',
    color: '#FFFFFF',
    padding: 10,
    borderRadius: 30,
  },
});
