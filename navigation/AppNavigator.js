import React from 'react';
import {createSwitchNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import OnboardScreen from '../screens/OnboardScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

export default createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Onboard: OnboardScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Main: MainTabNavigator
});