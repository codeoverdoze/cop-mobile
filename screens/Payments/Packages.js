import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  Image,
  FlatList,
  StatusBar
} from "react-native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import {
  StyledTextInverse,
  StyledHeader,
  StyledHeaderInverse
} from "../../components/Typography";
import Payment from "../../store/Payment";
import ChildScreenHeader from "../../components/ChildScreenHeader";
import SVGIcon from "../../components/SVGIcon";
import { forwardIcon } from "../../assets/icons";

const packages = [
  { name: "Tithe", key: "0", id: "tithe", color: "#474f85" },
  { name: "Church Offering", key: "1", id: "offering", color: "#ff1f5a" },
  { name: "Thanksgiving", key: "2", id: "thanksgiving", color: "#1d5464" },
  { name: "Pledge", key: "3", id: "pledge", color: "#26baee" },
  { name: "Harvest", key: "4", id: "harvest", color: "#307672" },
  { name: "Donation", key: "5", id: "donation", color: "#fab95b" },
  { name: "Other", key: "6", id: "donation", color: "#c04d00" }
];

export default class extends Component {
  constructor(props) {
    super(props);
    this.renderPackages = this.renderPackages.bind(this);
    this.provider = this.props.navigation.getParam("provider");
  }

  setPackage(packageName) {
    Payment.setPackage(packageName);
  }

  navigateToOrderScreen(packageDetails) {
    this.setPackage(packageDetails.id);
    this.props.navigation.navigate("PaymentOrder", { package: packageDetails });
  }

  renderPackages(item) {
    return (
      <TouchableOpacity onPress={() => this.navigateToOrderScreen(item.item)}>
        <View style={[styles.listItem]}>
          <View style={[{ flexDirection: "row" }]}>
            <View
              style={[
                styles.circleShapeView,
                { backgroundColor: item.item.color }
              ]}
            >
              <StyledTextInverse style={{ fontSize: 20 }}>
                {item.item.name.substring(0, 1)}
              </StyledTextInverse>
            </View>
            <View style={{ justifyContent: "center" }}>
              <StyledHeader style={{ fontSize: 20 }}>
                {item.item.name}
              </StyledHeader>
            </View>
          </View>

          <View>
            <SVGIcon source={forwardIcon} width={15} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={[styles.container]}>
        <StatusBar backgroundColor="#387ecb" barStyle="light-content" />
        <ChildScreenHeader title="Select Package" />

        <View
          style={[
            styles.providerCard,
            { backgroundColor: this.provider.color }
          ]}
        >
          <Image
            source={this.provider.image}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
          <StyledHeaderInverse
            style={{
              fontSize: 20,
              alignSelf: "center",
              marginLeft: 10
            }}
          >
            {this.provider.name}
          </StyledHeaderInverse>
        </View>

        <FlatList data={packages} renderItem={this.renderPackages} />
      </View>
    );
  }
}

const styles = {
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

  packageItem: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: "#cecece"
  },

  providerCard: {
    flexDirection: "row",
    margin: 15,
    height: 70,
    padding: 20,
    paddingTop: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  },

  listItem: {
    padding: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: "#dedede",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  circleShapeView: {
    width: 40,
    height: 40,
    borderRadius: 150 / 2,
    backgroundColor: "#00BCD4",
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center"
  }
};
