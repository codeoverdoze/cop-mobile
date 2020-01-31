import React from "react";
import {
  StyleSheet,
  View,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import {
  StyledSubtitle,
  StyledHeader
} from "../../components/Typography";
import Colors from "../../constants/Colors";
import PinView from "react-native-pin-view";
import Color from "../../constants/Colors";

import AnimatedItem from "../../components/AnimatedItem";
import Layout from "../../constants/NewLayout";

const { heightPercentageToDP } = Layout;

const HymnSelection = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <AnimatedItem
            animation={require("../../assets/animations/hymnary.json")}
            loop={true}
            style={{ width: 400, height: 200 }}
            speed={2}
          />
          <StyledHeader>English Hymnary</StyledHeader>
        </View>
        <View
          style={{
            justifyContent: "center",
            marginBottom: 10,
            paddingHorizontal: 50
          }}
        >
          <StyledSubtitle style={[styles.StyledSubtitle, { marginBottom: 5 }]}>
            Enter Hymn Number
          </StyledSubtitle>
        </View>

        <PinView
          pinLength={3}
          showInputs
          inputActiveBgColor={Color.buttonColor}
          inputViewStyle={{ backgroundColor: Color.tintColor }}
          buttonTextColor={Color.tintColor}
          inputTextStyle={{ color: "#fff" }}
          buttonBgColor="#fff"
          deleteText={<Ionicons name="ios-backspace" size={25} />}
          onComplete={value =>
            navigation.navigate("Hymnary", { HymnNumber: value })
          }
          keyboardViewStyle={{
            height: 60,
            width: 60,
            marginHorizontal: 10,
            marginVertical: 10
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: heightPercentageToDP("2%")
  },

  main: {
    padding: 20
  },

  headerText: {
    marginTop: 15,
    fontWeight: "bold",
    fontSize: RFValue(15),
    color: Colors.tintColor
  },

  StyledSubtitle: {
    fontSize: RFValue(20),
    marginTop: 5,
    color: "#333333",
    textAlign: "center"
  },

  smallText: {
    color: "#fff",
    fontSize: RFValue(12),
    marginTop: 2,
    textAlign: "center"
  },

  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: heightPercentageToDP("2%"),
    borderBottomWidth: 1,
    borderBottomColor: Colors.supportingColor,
    borderRadius: 5,
    height: 40,
    marginHorizontal: 50
  },

  textInput: {
    width: "100%",
    padding: 5,
    fontSize: RFValue(12),
    fontFamily: "regular",
    color: "#FFFFFF",
    textAlign: "center"
  },

  buttonContainer: {
    backgroundColor: Colors.supportingColor,
    marginTop: 20,
    borderRadius: 4,
    marginHorizontal: 50,
    height: heightPercentageToDP("6%"),
    justifyContent: "center",
    alignItems: "center"
  },

  button: {
    padding: 12,
    alignItems: "center",
    width: "100%"
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: RFValue(12)
  },

  termsOfServiceContainer: {
    justifyContent: "center",
    marginTop: 10,
    padding: 30
  },

  termsOfServiceText: {
    color: "#666666",
    textAlign: "center"
  }
});

export default HymnSelection;
