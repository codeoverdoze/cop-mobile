import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {AppLoading} from 'expo';
import { Asset } from "expo-asset";
import * as Font from 'expo-font'
import loadAppNavigation from './navigation/AppNavigator';
import FlashMessage from "react-native-flash-message";
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { retrieveAuthToken } from "./utils";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.client = new ApolloClient({
            cache: new InMemoryCache(),
            link: new HttpLink({
                uri: 'http://192.168.100.17:5000/graphql',
            })
        });

        this.state = {
            isLoadingComplete: false,
            mobiletoken: null
        };
    }


    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
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
                <ApolloProvider client={this.client}>
                <View style={styles.container}>
                    <AppNavigator/>
                    <FlashMessage position="bottom"/>
                </View>
                </ApolloProvider>
            );

        }
    }


    _loadResourcesAsync = async () => {
        return Promise.all([
            Asset.loadAsync([
                require('./assets/images/robot-dev.png'),
                require('./assets/images/robot-prod.png'),
            ]),
            Font.loadAsync({
                // This is the font that we are using for our tab bar
                'regular': Platform.OS === 'ios' ? require('./assets/fonts/Cereal-Book.ttf') : require('./assets/fonts/Graphik-Regular.ttf'),
                'bold': require('./assets/fonts/Cereal-Bold.ttf'),
                'light': Platform.OS === 'ios' ? require('./assets/fonts/Cereal-Book.ttf') : require('./assets/fonts/Graphik-Regular.ttf'),
                'bible': Platform.OS === 'ios' ? require('./assets/fonts/Cereal-Book.ttf') : require('./assets/fonts/Graphik-Regular.ttf'),
                'bible-italic': require('./assets/fonts/zila-slab-italic.ttf'),
            }),
            retrieveAuthToken().then(token => this.setState({ mobiletoken: token }))
        ]);
    };

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this.setState({isLoadingComplete: true});
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
