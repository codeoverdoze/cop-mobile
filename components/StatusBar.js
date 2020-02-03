import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Colors from '../constants/Colors';


const StatusBar = () => {
  if (Platform.OS === 'ios') {
    return (
      <View style={styles.statusBar} />
    );
  }

  return null;
};

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: Colors.tintColor,
    height: Constants.statusBarHeight,
  },
});

export default StatusBar;
