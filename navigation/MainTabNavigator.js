import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';


// Home screen stack
import HomeIndex from '../screens/Home/Index';
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


// Almanac Screen Stack
import Almanac from "../screens/Almanac/Index";
import AlmanacCalendar from "../screens/Almanac/Calendar";


// Payments Screen Stack
import PaymentDashboard from "../screens/Payments/Index"
import PaymentPackages from "../screens/Payments/Packages";
import PaymentOrder from "../screens/Payments/Order";
import PaymentCheckout from "../screens/Payments/Checkout";



// Settings Screen Stack
import SettingsDashboard from "../screens/Settings/Index";


import Colors from "../constants/Colors";

// Announcements Screen Stack
import Announcements from "../screens/Announcements/Index"


const AlmanacStack = createStackNavigator({
    AlmanacDashboard: Almanac,
    AlmanacCalendar
}, { headerMode: "none" });


const HomeStack = createStackNavigator({
    Home: HomeIndex, Announcements,
    ChurchNews, DailyDevotional, Hymnal, Almanac: AlmanacStack
}, { headerMode: "none"});

HomeStack.navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name='home'
            type='feather'
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
            type='feather'
            name='book-open'
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
            type='feather'
            name='book'
        />
    ),
};

const PaymentStack = createStackNavigator({
    PaymentDashboard, PaymentPackages, PaymentOrder, PaymentCheckout
}, { headerMode: "null" });

PaymentStack.navigationOptions = {
    tabBarLabel: 'Payments',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            type='feather'
            name='credit-card'
        />
    ),
};

const SettingsStack = createStackNavigator({
    SettingsDashboard,
}, { headerMode: "null" });

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name='settings'
            type='feather'
        />
    ),
};

export default createBottomTabNavigator({
    HomeStack,
    BibleStack,
    HymnaryStack,
    PaymentStack,
    SettingsStack,
}, { tabBarOptions: { activeTintColor: Colors.tintColor, style: { backgroundColor: '#f6f6f7', }, animationEnabled: true} });
