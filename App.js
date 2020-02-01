import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import loadAppNavigation from "./navigation/AppNavigator";
import FlashMessage from "react-native-flash-message";
import apolloClient from "./graphql/client";
import { retrieveAuthToken } from "./utils";
import { ApolloProvider } from "@apollo/client";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingComplete: false,
      mobiletoken: null,
      client: null
    };
  }

  render() {
    if (
      (!this.state.isLoadingComplete || !this.state.client) &&
      !this.props.skipLoadingScreen
    ) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      const AppNavigator = loadAppNavigation(this.state.mobiletoken);
      return (
        <ApolloProvider client={this.state.client}>
          <View style={styles.container}>
            <AppNavigator />
            <FlashMessage position="bottom" />
          </View>
        </ApolloProvider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/announcement-bg.jpg"),
        require("./assets/images/news-bg.png"),
        require("./assets/images/bible-study-guide.png"),
        require("./assets/images/payment-bg.jpg"),
        require("./assets/images/almanac.jpg"),
        require("./assets/images/hymnal-bg.gif"),
        require("./assets/images/liturgical-order.jpg"),
        require("./assets/images/sermon.png")
      ]),
      Font.loadAsync({
        regular:
          Platform.OS === "ios"
            ? require("./assets/fonts/Cereal-Book.ttf")
            : require("./assets/fonts/CircularPro-Book.ttf"),
        bold:
          Platform.OS === "ios"
            ? require("./assets/fonts/Cereal-Bold.ttf")
            : require("./assets/fonts/Cereal-Bold.ttf"),
        light:
          Platform.OS === "ios"
            ? require("./assets/fonts/Cereal-Book.ttf")
            : require("./assets/fonts/Cereal-Book.ttf"),
        bible:
          Platform.OS === "ios"
            ? require("./assets/fonts/Cereal-Book.ttf")
            : require("./assets/fonts/Cereal-Book.ttf"),
        "bible-italic": require("./assets/fonts/zila-slab-italic.ttf")
      }),
      retrieveAuthToken().then(token => this.setState({ mobiletoken: token })),
      apolloClient().then(client => {
        this.setState({ client });
      })
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
