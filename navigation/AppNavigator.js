import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';

import MainTabNavigator from "./MainTabNavigator";

// OnBoard
import Index from "../screens/Login/Index";
import SignUp from '../screens/Login/SignUp';
import Verification from "../screens/Login/Verification";

// Permissions
import NotificationsPermission from "../screens/Permissions/Notifications";

import LoadData from "../screens/Login/LoadData";
import Presbytery from '../screens/Login/CongregationSelection/Presbytery';
import District from '../screens/Login/CongregationSelection/District';
import Local from '../screens/Login/CongregationSelection/Local';


const CongregationSelectionStack = createStackNavigator({
  Presbytery,
  District,
  Local,
}, {
  mode: 'modal',
  headerMode: 'none',
  defaultNavigationOptions: {
    gestureEnabled: true,
    cardOverlayEnabled: true,
  },
});


const Login = createStackNavigator(
  {
    OnBoard: Index,
    Verification,
    SignUp,
    SignUpCS: CongregationSelectionStack
  },
  { headerMode: "none" }
);

const Permissions = createStackNavigator(
  {
    NotificationsPermission
  },
  { headerMode: "none" }
);

const loadAppNavigation = isLoggedIn =>
  createAppContainer(
    createSwitchNavigator(
      {
        Login,
        LoadData,
        Main: MainTabNavigator,
        Permissions
      },
      { initialRouteName: isLoggedIn ? "Main" : "Login" }
    )
  );

export default loadAppNavigation;
