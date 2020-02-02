import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar
} from "react-native";
import { StyledHeader, StyledText } from "../../components/Typography";
import { homeItemsList } from "./data";
import ParentScreenHeader from "../../components/ParentScreenHeader";

const BodyItem = props => (
  <View style={[styles.bodyItem]}>
    <View style={[styles.bodyImage]}>
      <Image
        source={props.image}
        style={{ width: 60, height: 60, borderRadius: 30, padding: 0 }}
      />
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
    StatusBar.setBarStyle("light-content");
  }

  navigate(screen) {
    this.props.navigation.navigate(screen);
  }

  render() {
    return (
      <View style={styles.container}>
        <ParentScreenHeader title="That They All May Be One" />

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
    backgroundColor: "#FFFFFF"
  },

  body: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 40,
    paddingBottom: 100,
    backgroundColor: "#FFFFFF"
  },

  bodyItem: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center"
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
