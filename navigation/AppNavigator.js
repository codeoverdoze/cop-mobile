import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MainTabNavigator from "./MainTabNavigator";

// OnBoard
import Index from "../screens/Login/Index";
import Verification from "../screens/Login/Verification";

// Permissions
import NotificationsPermission from "../screens/Permissions/Notifications";

import LoadData from "../screens/Login/LoadData";

const Login = createStackNavigator(
  {
    OnBoard: Index,
    Verification
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
