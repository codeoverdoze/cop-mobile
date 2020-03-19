import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ActivityIndicator
} from "react-native";
import {
  StyledHeader,
  StyledText,
  StyledTextInverse
} from "../../components/Typography";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { showMessage } from "react-native-flash-message";
import { Ionicons } from "@expo/vector-icons";
import ChildScreenHeader from "../../components/ChildScreenHeader";
import { RFValue } from 'react-native-responsive-fontsize';

export default class extends Component {
  constructor(props) {
    super(props);
    this.package = this.props.navigation.getParam("package");
    this.state = { amount: "", telephone: "", loading: false };
  }

  renderLoadingOrPayButton() {
    if (this.state.loading) {
      return (
        <View style={{ marginTop: 20 }}>
          <ActivityIndicator color="#387ecb" />
        </View>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => this.makePayment()}>
          <View style={[styles.buttonBar]}>
            <StyledText style={{ color: "#FFFFFF", fontSize: 20 }}>
              Make Payment
            </StyledText>
          </View>
        </TouchableOpacity>
      );
    }
  }

  async makePayment() {
    await this.setState({ loading: true });

    try {
      showMessage({
        message: "Great",
        description: "Payment has been made",
        type: "success",
        duration: 5000
      });
      await this.setState({ loading: false });
      this.props.navigation.goBack();
    } catch (e) {
      throw new Error(e);
    }
  }

  render() {
    return (
      <View style={[styles.container]}>
        <StatusBar backgroundColor="#387ecb" barStyle="light-content" />
        <ChildScreenHeader  title={`Make payment for ${this.package.name}`} />

        <KeyboardAwareScrollView style={[styles.body]}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              marginHorizontal: 20,
              padding: 10,
              backgroundColor: '#fff',
              flexDirection: 'row',
              borderRadius: 5,
              borderWidth: 0.3,
              borderColor: '#d7d7d7',
            }}
          >
            <View style={{ flex: 0.10}}>
              <Ionicons
                name="ios-information-circle-outline"
                size={25}
                style={{ marginRight: 5, color: 'orange' }}
              />
            </View>
            <View style={{ flex: 0.90}}>
              <StyledText>You may change your congregation in settings. Tap to change</StyledText>
            </View>
          </View>
          <View style={[styles.bodyItem]}>
            <View style={[styles.amountBar]}>
              <StyledText style={{ fontSize: 40 }}>GHS</StyledText>

              <TextInput
                style={{
                  width: 150,
                  fontSize: 40,
                  fontFamily: "regular",
                  alignSelf: "flex-end",
                  color: "#3E4E5B",
                  textAlign: "right"
                }}
                placeholder={"0.00"}
                keyboardType={"numeric"}
                value={this.state.amount}
                onChangeText={amount => this.setState({ amount })}
              />
            </View>

            <View style={[styles.packageBar]}>
              <StyledHeader
                style={{ fontSize: 15, color: "#424242", marginBottom: 10 }}
              >
                PACKAGE
              </StyledHeader>

              <StyledText style={{ fontSize: 20, color: "#eaa15d" }}>
                {this.package.name}
              </StyledText>
              <StyledText>Congregation Name Goes Here</StyledText>
            </View>

            <View style={[styles.packageBar]}>
              <StyledHeader
                style={{ fontSize: 15, color: "#424242", marginBottom: 10 }}
              >
                DESCRIPTION
              </StyledHeader>

              <TextInput
                style={{
                  fontSize: 20,
                  fontFamily: "regular",
                  color: "#3E4E5B"
                }}
                placeholder={"Enter a description"}
                multiline={true}
                onChangeText={value => console.log(value)}
              />
            </View>

            <View style={[styles.packageBar]}>
              <StyledHeader
                style={{ fontSize: 15, color: "#424242", marginBottom: 10 }}
              >
                TELEPHONE NUMBER
              </StyledHeader>

              <TextInput
                style={{
                  fontSize: 20,
                  fontFamily: "regular",
                  color: "#3E4E5B"
                }}
                placeholder={"Enter your telephone number"}
                keyboardType={"numeric"}
                value={this.state.telephone}
                onChangeText={telephone => this.setState({ telephone })}
              />
            </View>

            {this.renderLoadingOrPayButton()}
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA"
  },

  header: {
    backgroundColor: "#387ecb",
    height: 80,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 40,
    alignContent: "flex-start"
  },

  body: {
    margin: 20
  },

  amountBar: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.3,
    borderBottomColor: "#cecece"
  },

  packageBar: {
    padding: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: "#cecece"
  },

  buttonBar: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#387ecb",
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    borderRadius: 5
  }
});
