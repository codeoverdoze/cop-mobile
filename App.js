import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppLoading, Asset, Font, Icon} from 'expo';
import AppNavigator from './navigation/AppNavigator';
import FlashMessage from "react-native-flash-message";


export default class App extends React.Component {
    state = {
        isLoadingComplete: false,
    };



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
                <View style={styles.container}>
                    <AppNavigator/>
                    <FlashMessage position="top"/>
                </View>
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
                'regular': require('./assets/fonts/lato.ttf'),
                'bold': require('./assets/fonts/lato-bold.ttf'),
                'light': require('./assets/fonts/lato-light.ttf'),
                'bible': require('./assets/fonts/zila-slab.ttf'),
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
