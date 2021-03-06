import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { StyledTextInverse } from '../../../components/Typography';
import Bible from '../../../store/Bible';
import { EvilIcons } from '@expo/vector-icons';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  getCurrentBook() {
    return Bible.getBook();
  }

  getCurrentChapter() {
    return Bible.getChapter();
  }

  render() {
    return (
      <View style={[styles.container]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigateToBibleBookScreen()}>
            <View style={[styles.barItem]}>
              <StyledTextInverse style={[styles.barItemText]}>
                {this.getCurrentBook()}
              </StyledTextInverse>
              <EvilIcons
                name="chevron-down"
                style={{ alignSelf: 'center' }}
                size={25}
                color="#FFFFFF"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigateToBibleChapterScreen()}>
            <View style={[styles.barItem]}>
              <StyledTextInverse style={[styles.barItemText]}>
                {this.getCurrentChapter()}
              </StyledTextInverse>
              <EvilIcons
                name="chevron-down"
                style={{ alignSelf: 'center' }}
                size={25}
                color="#FFFFFF"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={[styles.barItem]}>
              <StyledTextInverse style={[styles.barItemText]}>KJV</StyledTextInverse>
              <EvilIcons
                name="chevron-down"
                style={{ alignSelf: 'center' }}
                size={25}
                color="#FFFFFF"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.openAlmanacModal()}>
            <View style={[styles.barItem]}>
              <EvilIcons name="eye" style={{ alignSelf: 'center' }} size={25} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25569c',
    paddingHorizontal: 40,
    paddingVertical: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },

  barItem: {
    flexDirection: 'row',
  },

  barItemText: {
    fontSize: 20,
  },
});
