import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'

import TabBarIcon from '../components/TabBarIcon';



// Home screen stack
import HomeIndex from '../screens/Home/Index';

// Bible screen stack
import BibleIndex from '../screens/Bible/Index';
import BibleBook from '../screens/Bible/BibleBook';
import BibleChapter from '../screens/Bible/BibleChapter';


// Hymnary Screen stack
import HymnaryIndex from '../screens/Hymnary/Index';
import HymnSelection from "../screens/Hymnary/HymnSelection";


// Almanac Screen Stack
import YearSelection from "../screens/Almanac/Index";
import MonthSelection from "../screens/Almanac/MonthSelection";
import AlmanacCalendar from "../screens/Almanac/Calendar";
import ThemeLiturgyPreaching from "../screens/Almanac/ThemeLiturgyPreaching";
import CalendarAnnouncements from "../screens/Almanac/CalendarAnnouncements";
import ScriptureReadings from "../screens/Almanac/ScriptureReadings";


// Payments Screen Stack
import PaymentDashboard from "../screens/Payments/Index"
import PaymentPackages from "../screens/Payments/Packages";
import PaymentOrder from "../screens/Payments/Order";
import PaymentCheckout from "../screens/Payments/Checkout";



// Settings Screen Stack
import SettingsDashboard from "../screens/Settings/Index";
import Credits from "../screens/Settings/Credits";
import PersonalInformation from "../screens/Settings/PersonalInformation";
import PersonalInformationForm from "../screens/Settings/PersonalInformationForm";
import ChurchSelection from "../screens/Settings/ChurchSelection";
import DistrictSelection from "../screens/Settings/DistrictSelection";
import CongregationSelection from "../screens/Settings/CongregationSelection";

import Colors from "../constants/Colors";

// Announcements Screen Stack
import Announcements from "../screens/Announcements/Index"

const ChurchServiceStack = createStackNavigator({
    ThemeLiturgyPreaching,
    CalendarAnnouncements,
    ScriptureReadings,
}, {
    mode: 'modal',
    headerMode: 'none',
    defaultNavigationOptions: {
        gestureEnabled: true,
        cardOverlayEnabled: true,
    },

});


const AlmanacStack = createStackNavigator({
    AlmanacDashboard: YearSelection,
    MonthSelection,
    AlmanacCalendar,
    ChurchServiceStack
}, { headerMode: "none" });


const HomeStack = createStackNavigator({
    Home: HomeIndex, Announcements, Almanac: AlmanacStack,
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
    HymnSelection,
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
    SettingsDashboard, Credits,
    PersonalInformation,
    ChurchSelection,
    PersonalInformationForm,
    DistrictSelection,
    CongregationSelection

}, {
    headerMode: "null"
});

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
