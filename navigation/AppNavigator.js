import React from 'react';
import {createSwitchNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import OnboardScreen from '../screens/OnboardScreen';
import LoginScreen from '../screens/LoginScreen';
import SMSVerify from '../screens/SMSVerifyScreen';



export default createSwitchNavigator({
    Onboard: OnboardScreen,
    Main: MainTabNavigator,
    Login: LoginScreen,
    SMSVerify: SMSVerify,
}, { initialRouteName: 'Main' });