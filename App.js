import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading, Notifications } from 'expo';
import * as Font from 'expo-font';
import CustomStatusBar from './components/StatusBar';
import loadAppNavigation from './navigation/AppNavigator';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import apolloClient from './graphql/client';
import { retrieveAuthToken } from './utils';
import { ApolloProvider } from '@apollo/client';
import Colors from './constants/Colors';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoadingComplete: false, mobiletoken: null, client: null };
    StatusBar.setBarStyle('light-content');
  }

  componentDidMount() {
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  render() {
    if ((!this.state.isLoadingComplete || !this.state.client) && !this.props.skipLoadingScreen) {
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
          <CustomStatusBar />
          <AppNavigator />
          <FlashMessage position="bottom" />
        </ApolloProvider>
      );
    }
  }

  _handleNotification = notification => {
    console.log('This is notification', notification);
    showMessage({
      message: 'You have received a new notification',
      position: 'bottom',
      backgroundColor: Colors.tintColor,
    });
  };

  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        regular: require('./assets/fonts/Cereal-Book.ttf'),
        bold: require('./assets/fonts/Cereal-Bold.ttf'),
        light: require('./assets/fonts/Cereal-Book.ttf'),
        bible: require('./assets/fonts/Quattrocento-Regular.ttf'),
        'bible-italic': require('./assets/fonts/zila-slab-italic.ttf'),
      }),
      retrieveAuthToken().then(token => this.setState({ mobiletoken: token })),
      apolloClient().then(client => {
        this.setState({ client });
      }),
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}
