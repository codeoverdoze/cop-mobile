import React, { Component } from 'react';
import { View } from "react-native";
import {StyledText} from "../components/Typography";


export default class SettingsScreen extends Component {
  render() {
    return (
        <View>
          <StyledText>Hello Settings</StyledText>
        </View>
    );
  }
}
