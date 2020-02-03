import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image
} from "react-native";
import {
  StyledHeader,
  StyledHeaderInverse,
  StyledText,
  StyledTextInverse
} from "../../components/Typography";
import { homeItemsList } from "./data";
import ParentScreenHeader from "../../components/ParentScreenHeader";
import SVGIcon from "../../components/SVGIcon";
import styled from "styled-components";

const BodyItem = props => (
  <View style={[styles.bodyItem]}>
    <View style={[styles.bodyImage]}>
      <SVGIcon source={props.image} noFill width={50} height={50} />
    </View>

    <View style={styles.bodyContent}>
      <StyledHeader style={{ fontSize: 15 }}>{props.title}</StyledHeader>
      <StyledText>{props.content}</StyledText>
    </View>
  </View>
);

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  navigate(screen) {
    this.props.navigation.navigate(screen);
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderContainer>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={{ width: 30, height: 40, marginRight: 10 }}
            />
            <View>
              <StyledHeaderInverse>Presby Companion</StyledHeaderInverse>
            </View>
          </View>
        </HeaderContainer>

        <ScrollView contentContainerStyle={[styles.body]}>
          {homeItemsList.map(item => {
            return (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate(item.link)}
                key={item.title}
              >
                <BodyItem
                  image={item.image}
                  title={item.title}
                  content={item.content}
                  key={item.key}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8"
  },

  body: {},

  bodyItem: {
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 15
  },

  bodyImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  bodyContent: {
    flex: 3,
    justifyContent: "center"
  }
});

const HeaderContainer = styled.View`
  background-color: #387ecb;
  height: 60px;
  justify-content: center;
  padding-left: 50px;
`;
