import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {StyledHeader, StyledSubtitle, StyledText} from '../components/Typography'


import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/CalendarScreen';
import SettingsScreen from '../screens/SettingsScreen';
import BibleDashboardScreen from '../screens/BibleDashboardScreen';
import TitheScreen from '../screens/TitheScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name='home'
            type='octicon'
        />
    ),
};

const LinksStack = createStackNavigator({
    Links: LinksScreen,
});

LinksStack.navigationOptions = {
    tabBarLabel: 'Calendar',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            type='octicon'
            name='calendar'
        />
    ),
};


const BibleDashboard = createStackNavigator({
    BibleDashboard: BibleDashboardScreen,
});

BibleDashboard.navigationOptions = {
    tabBarLabel: 'Bible',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            type='octicon'
            name='book'
        />
    ),
};


const Tithe = createStackNavigator({
    Tithe: TitheScreen,
});

Tithe.navigationOptions = {
    tabBarLabel: 'Tithe',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            type='material-community'
            name='coins'
        />
    ),
};

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name='settings'
            type='octicon'
        />
    ),
};

export default createBottomTabNavigator({
    HomeStack,
    BibleDashboard,
    LinksStack,
    Tithe,
    SettingsStack,
});
