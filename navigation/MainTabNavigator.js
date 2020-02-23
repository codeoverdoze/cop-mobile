import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import TabBarIcon from '../components/TabBarIcon';
import Colors from '../constants/Colors';

// Icons
import { homeIcon, bibleIcon, hymnaryIcon, paymentIcon, settingsIcon } from '../assets/icons';

// Home screen stack
import HomeIndex from '../screens/Home/HomeScreen';
import PrayerRequests from '../screens/PrayerRequest/PrayerRequests';
import MakePrayerRequest from '../screens/PrayerRequest/MakePrayerRequest';
import PreviousSermons from '../screens/PreviousSermons/PreviousSermonsScreen';

// Bible screen stack
import BibleIndex from '../screens/Bible/Index';
import BibleBook from '../screens/Bible/BibleBook';
import BibleChapter from '../screens/Bible/BibleChapter';

// Hymnal Screen stack
import Hymn from '../screens/Hymnary/Hymn';
import HymnSelection from '../screens/Hymnary/HymnSelectionScreen';

// Almanac Screen Stack
import YearSelection from '../screens/Almanac/Index';
import MonthSelection from '../screens/Almanac/MonthSelection';
import AlmanacCalendar from '../screens/Almanac/Almanac';
import ThemeLiturgyPreaching from '../screens/Almanac/ThemeLiturgyPreaching';
import CalendarAnnouncements from '../screens/Almanac/CalendarAnnouncements';
import ScriptureReadings from '../screens/Almanac/ScriptureReadings';

// Bible Study Guide Stack
import BibleStudyYearSelection from '../screens/BibleStudy/Index';
import ViewBibleStudyGuide from '../screens/BibleStudy/ViewBibleStudyGuide';
import ContentDetail from '../screens/BibleStudy/ContentDetail';
import SectionDetail from '../screens/BibleStudy/SectionDetail';

// Liturgy Book Stack
import LiturgyTypeSelection from '../screens/Liturgy/Index';
import LiturgyType from '../screens/Liturgy/LiturgyType';
import LiturgyContent from '../screens/Liturgy/LiturgyContent';

// Payments Screen Stack
import PaymentDashboard from '../screens/Payments/Index';
import PaymentPackages from '../screens/Payments/Packages';
import PaymentOrder from '../screens/Payments/Order';
import PaymentCheckout from '../screens/Payments/Checkout';

// Settings Screen Stack
import SettingsDashboard from '../screens/Settings/SettingsScreen';
import Credits from '../screens/Settings/Credits';
import ChurchSelection from '../screens/Settings/ChurchSelection';
import DistrictSelection from '../screens/Settings/DistrictSelection';
import CongregationSelection from '../screens/Settings/CongregationSelection';
import MembershipDetails from '../screens/Settings/MembershipDetails';

// Announcements Screen Stack
import Announcements from '../screens/Announcements/Index';

// Events Screen Stack
import Events from '../screens/Events/Index';

const config = {
  headerMode: 'none',
  defaultNavigationOptions: {
    ...TransitionPresets.SlideFromRightIOS,
    cardOverlayEnabled: true,
    gestureEnabled: true,
  },
};

const AlmanacStack = createStackNavigator(
  {
    AlmanacDashboard: YearSelection,
    MonthSelection,
    AlmanacCalendar,
    ThemeLiturgyPreaching,
    CalendarAnnouncements,
    ScriptureReadings,
  },
  config,
);

const BibleStudyStack = createStackNavigator(
  {
    BibleStudyYearSelection,
    StudyGuideHome: ViewBibleStudyGuide,
    ContentDetail,
    SectionDetail,
  },
  config,
);

const LiturgyStack = createStackNavigator(
  {
    LiturgyTypeSelection,
    LiturgyType,
    LiturgyContent,
  },
  config,
);
const MakePrayerRequestStack = createStackNavigator(
  {
    MakePrayerRequest,
  },
  {
    headerMode: 'none',
    mode: 'modal',
    gestureEnabled: true,
  },
);

const HomeStack = createStackNavigator(
  {
    Home: HomeIndex,
    Announcements,
    Almanac: AlmanacStack,
    LiturgyStack,
    Events,
    BibleStudy: BibleStudyStack,
    PrayerRequests,
    MakePrayerRequest: MakePrayerRequestStack,
    PreviousSermons,
  },
  config,
);

HomeStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name="home" type="feather" icon={homeIcon} />
    ),
    tabBarVisible: navigation.state.index <= 0,
  };
};

const HymnaryStack = createStackNavigator(
  {
    HymnSelection,
    Hymn: Hymn,
  },
  config,
);

HymnaryStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Hymnary',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} type="feather" name="book-open" icon={hymnaryIcon} />
    ),
    tabBarVisible: navigation.state.index <= 0,
  };
};

const BibleStack = createStackNavigator(
  {
    BibleDashboard: BibleIndex,
    BibleBook,
    BibleChapter,
  },
  config,
);

BibleStack.navigationOptions = {
  tabBarLabel: 'Bible',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} type="feather" name="book" icon={bibleIcon} />
  ),
};

const PaymentStack = createStackNavigator(
  {
    PaymentDashboard,
    PaymentPackages,
    PaymentOrder,
    PaymentCheckout,
  },
  config,
);

PaymentStack.navigationOptions = {
  tabBarLabel: 'Payments',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} type="feather" name="credit-card" icon={paymentIcon} />
  ),
};

const SettingsStack = createStackNavigator(
  {
    SettingsDashboard,
    Credits,
    ChurchSelection,
    DistrictSelection,
    CongregationSelection,
    MembershipDetails,
  },
  config,
);

SettingsStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name="settings" type="feather" icon={settingsIcon} />
    ),
    tabBarVisible: navigation.state.index <= 0,
  };
};

export default createBottomTabNavigator(
  {
    HomeStack,
    BibleStack,
    HymnaryStack,
    PaymentStack,
    SettingsStack,
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.tintColor,
      labelStyle: { fontFamily: 'regular' },
      style: {
        backgroundColor: '#ffffff',
        borderTopColor: '#e3e3e3',
        height: 55,
        fontFamily: 'regular',
      },
    },
  },
);
