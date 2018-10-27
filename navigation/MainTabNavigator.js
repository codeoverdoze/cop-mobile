import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';


// Home screen stack
import HomeIndex from '../screens/Home/Index';
import Announcements from '../screens/Home/Announcements';
import ChurchNews from '../screens/Home/ChurchNews';
import DailyDevotional from '../screens/Home/DailyDevotional';
import Hymnal from '../screens/Home/Hymnal';


import CalendarScreen from '../screens/CalendarScreen';
import SettingsScreen from '../screens/SettingsScreen';
import BibleDashboardScreen from '../screens/BibleDashboardScreen';
import TitheScreen from '../screens/TitheScreen';

const HomeStack = createStackNavigator({
    Home: HomeIndex,
    Announcements: Announcements,
    ChurchNews, DailyDevotional, Hymnal
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

const CalendarStack = createStackNavigator({
    Calendar: CalendarScreen,
});

CalendarStack.navigationOptions = {
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


const TitheStack = createStackNavigator({
    Tithe: TitheScreen,
});

TitheStack.navigationOptions = {
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
    CalendarStack,
    TitheStack,
    SettingsStack,
}, { tabBarOptions: { activeTintColor: '#000000', style: { backgroundColor: '#F6F6F7', }, animationEnabled: true} });
