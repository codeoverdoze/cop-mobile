import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { StyledHeader, StyledText } from '../../components/Typography';

import Bible from '../../store/Bible';
import BibleBar from './components/BibleBar';

import bible from '../../sample-data/bible-kjv-shell.json';

export default class extends Component {
  setBibleBook(book) {
    Bible.setBook(book);
    this.props.navigation.navigate('BibleChapter');
  }

  navigateToBibleBookScreen() {
    this.props.navigation.navigate('BibleBook');
  }

  navigateToBibleChapterScreen() {
    this.props.navigation.navigate('BibleChapter');
  }

  render() {
    return (
      <View style={[styles.container]}>
        <BibleBar
          navigateToBibleBookScreen={this.navigateToBibleBookScreen.bind(this)}
          navigateToBibleChapterScreen={this.navigateToBibleChapterScreen.bind(this)}
        />
        <ScrollView style={[styles.gridContainer]}>
          <View style={{ alignItems: 'center' }}>
            <StyledHeader style={{ fontSize: 20, marginTop: 5, paddingHorizontal: 5 }}>
              Bible Books - King James Version
            </StyledHeader>
            <StyledText style={{ marginBottom: 10, paddingHorizontal: 5 }}>
              Select the book followed by the chapter.
            </StyledText>
          </View>
          <View style={[styles.grid, { flexDirection: 'row', flexWrap: 'wrap' }]}>
            {bible.map((book, index) => {
              return (
                // We make use of key to set bible name because we made changes to some values for name. 2Kings, etc
                <View style={{ margin: 4 }} key={book.name}>
                  <TouchableOpacity onPress={() => this.setBibleBook(book.name)} key={book.key}>
                    {index < 39 ? (
                      <View style={[styles.gridItemOldTestament, { alignItems: 'center' }]}>
                        <StyledText
                          style={{
                            fontSize: 15,
                            color: '#FFFFFF',
                            fontWeight: 'bold',
                            width: 35,
                          }}
                        >
                          {book.key.substring(0, 3)}
                        </StyledText>
                      </View>
                    ) : (
                      <View style={[styles.gridItemNewTestament, { alignItems: 'center' }]}>
                        <StyledText
                          style={{
                            fontSize: 15,
                            color: '#FFFFFF',
                            fontWeight: 'bold',
                            width: 35,
                          }}
                        >
                          {book.key.substring(0, 3)}
                        </StyledText>
                      </View>
                    )}
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
    backgroundColor: '#ffffff',
  },

  gridContainer: {
    padding: 10,
  },

  grid: {
    backgroundColor: '#FFFFFF',
    margin: 0,
    marginBottom: 20,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  gridItemOldTestament: {
    borderWidth: 1,
    borderColor: '#F0F0F0',
    padding: 10,
    backgroundColor: '#387ecb',
  },

  gridItemNewTestament: {
    borderWidth: 1,
    borderColor: '#F0F0F0',
    padding: 10,
    backgroundColor: '#db7238',
  },
});
