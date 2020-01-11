import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

import MainTabNavigator from './MainTabNavigator';

import Index from "../screens/Login/Index";
import Verification from "../screens/Login/Verification";
import LoadData from "../screens/Login/LoadData";

const Login = createStackNavigator({
    OnBoard: Index,
    Verification,
}, { headerMode: "none"} );

const loadAppNavigation = (isLoggedIn) => (
    createAppContainer(
        createSwitchNavigator({
            Login,
            LoadData,
            Main: MainTabNavigator,
        }, { initialRouteName: isLoggedIn ? 'LoadData' : 'Login'}),
    )
);

export default loadAppNavigation;
