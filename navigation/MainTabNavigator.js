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
import BibleBook from '../screens/Bible/BibleBook';
import BibleChapter from '../screens/Bible/BibleChapter';


// Hymnary Screen stack
import HymnaryIndex from '../screens/Hymnary/Index';
import SettingsScreen from '../screens/SettingsScreen';
import TitheScreen from '../screens/TitheScreen';


// Almanac Screen Stack
import Almanac from "../screens/Almanac/Index";
import AlmanacCalendar from "../screens/Almanac/Calendar"

const AlmanacStack = createStackNavigator({
    AlmanacDashboard: Almanac,
    AlmanacCalendar
}, { headerMode: "none" });


const HomeStack = createStackNavigator({
    Home: HomeIndex,
    Announcements: Announcements,
    ChurchNews, DailyDevotional, Hymnal, Almanac: AlmanacStack
}, { headerMode: "none"});

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

const HymnaryStack = createStackNavigator({
    Hymnary: HymnaryIndex,
}, { headerMode: "none"});

HymnaryStack.navigationOptions = {
    tabBarLabel: 'Hymnary',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            type='octicon'
            name='book'
        />
    ),
};


const BibleStack = createStackNavigator({
    BibleDashboard: BibleIndex,
    BibleBook, BibleChapter
}, { headerMode: "none"});


BibleStack.navigationOptions = {
    tabBarLabel: 'Bible',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            type='material-community'
            name='book'
        />
    ),
};

const TitheStack = createStackNavigator({
    Tithe: TitheScreen,
});

TitheStack.navigationOptions = {
    tabBarLabel: 'Payments',
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
    HymnaryStack,
    TitheStack,
    SettingsStack,
}, { tabBarOptions: { activeTintColor: '#000000', style: { backgroundColor: '#f6f6f7', }, animationEnabled: true} });
