import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

import MainTabNavigator from './MainTabNavigator';

import Index from "../screens/Login/Index";
import Verification from "../screens/Login/Verification";

const Login = createStackNavigator({
    OnBoard: Index,
    Verification
}, { headerMode: "none"} );

const loadAppNavigation = (isLoggedIn) => (
    createAppContainer(
        createSwitchNavigator({
            Login,
            Main: MainTabNavigator,
        }, { initialRouteName: isLoggedIn ? 'Main' : 'Login'}),
    )
);

export default loadAppNavigation;
