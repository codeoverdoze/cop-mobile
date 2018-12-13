import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';


// Home screen stack
import HomeIndex from '../screens/Home/Index';
import Announcements from '../screens/Home/Announcements';
import ChurchNews from '../screens/Home/ChurchNews';
import DailyDevotional from '../screens/Home/DailyDevotional';
import Hymnal from '../screens/Home/Hymnal';

// Bible screen stack
import BibleIndex from '../screens/Bible/Index';
import BibleVerse from '../screens/Bible/BibleVerse';


// Calendar Screen stack
import CalendarIndex from '../screens/Calendar/Index';


import SettingsScreen from '../screens/SettingsScreen';
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
    Calendar: CalendarIndex,
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


const BibleStack = createStackNavigator({
    BibleDashboard: BibleIndex,
    BibleVerse: BibleVerse
});

BibleStack.navigationOptions = {
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
    BibleStack,
    CalendarStack,
    TitheStack,
    SettingsStack,
}, { tabBarOptions: { activeTintColor: '#000000', style: { backgroundColor: '#F6F6F7', }, animationEnabled: true} });
