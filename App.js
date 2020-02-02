import React from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import loadAppNavigation from "./navigation/AppNavigator";
import FlashMessage from "react-native-flash-message";
import apolloClient from "./graphql/client";
import { retrieveAuthToken } from "./utils";
import { ApolloProvider } from "@apollo/client";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoadingComplete: false, mobiletoken: null, client: null };
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
          <AppNavigator />
          <FlashMessage position="bottom" />
        </ApolloProvider>
      );
    }
  }
  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        regular: require("./assets/fonts/Cereal-Book.ttf"),
        bold: require("./assets/fonts/Cereal-Bold.ttf"),
        light: require("./assets/fonts/Cereal-Book.ttf"),
        bible: require("./assets/fonts/Cereal-Book.ttf"),
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
