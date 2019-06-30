import React from 'react';
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

// Onboard Screen Stack....
import OnboardScreen from '../screens/Onboard/Index';


// Login Screen Stack.....
import LoginDashboard from "../screens/Login/Index";
import Verification from "../screens/Login/Verification";

const Login = createStackNavigator({
    LoginDashboard, Verification
}, { headerMode: "none"} );

export default createAppContainer(createSwitchNavigator({
    Onboard: OnboardScreen,
    Login: Login,
    Main: MainTabNavigator,
}, { initialRouteName: 'Onboard' }));