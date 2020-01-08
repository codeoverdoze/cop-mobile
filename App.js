import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppLoading, Icon} from 'expo';
import { Asset } from "expo-asset";
import * as Font from 'expo-font'
import AppNavigator from './navigation/AppNavigator';
import FlashMessage from "react-native-flash-message";
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.client = new ApolloClient({
            cache: new InMemoryCache(),
            link: new HttpLink({
                uri: 'http//192.168.100.17:5000/graphql',
            })
        });

        this.state = {
            isLoadingComplete: false,
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
            return (
                <ApolloProvider client={this.client}>
                <View style={styles.container}>
                    <AppNavigator/>
                    <FlashMessage position="top"/>
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
                ...Icon.Ionicons.font,
                'regular': require('./assets/fonts/Cereal-Book.ttf'),
                'bold': require('./assets/fonts/Cereal-Bold.ttf'),
                'light': require('./assets/fonts/lato-light.ttf'),
                'bible': require('./assets/fonts/Cereal-Book.ttf'),
                'bible-italic': require('./assets/fonts/zila-slab-italic.ttf'),
            }),
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
