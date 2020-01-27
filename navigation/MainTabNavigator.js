import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import TabBarIcon from "../components/TabBarIcon";

import homeIcon from "../assets/icons/circled-menu.svg";
import bibleIcon from "../assets/icons/bible.svg";
import hymnaryIcon from "../assets/icons/music-playlist.svg";
import paymentIcon from "../assets/icons/payment.svg";
import settingsIcon from "../assets/icons/settings.svg";

// Home screen stack
import HomeIndex from "../screens/Home/Index";

// Bible screen stack
import BibleIndex from "../screens/Bible/Index";
import BibleBook from "../screens/Bible/BibleBook";
import BibleChapter from "../screens/Bible/BibleChapter";

// Hymnary Screen stack
import HymnaryIndex from "../screens/Hymnary/Index";
import HymnSelection from "../screens/Hymnary/HymnSelection";

// Almanac Screen Stack
import YearSelection from "../screens/Almanac/Index";
import MonthSelection from "../screens/Almanac/MonthSelection";
import AlmanacCalendar from "../screens/Almanac/Calendar";
import ThemeLiturgyPreaching from "../screens/Almanac/ThemeLiturgyPreaching";
import CalendarAnnouncements from "../screens/Almanac/CalendarAnnouncements";
import ScriptureReadings from "../screens/Almanac/ScriptureReadings";


// Bible Study Guide Stack
import BibleStudyYearSelection from "../screens/BibleStudy/Index";
import ViewBibleStudyGuide from "../screens/BibleStudy/ViewBibleStudyGuide";



// Payments Screen Stack
import PaymentDashboard from "../screens/Payments/Index";
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
import MembershipDetails from "../screens/Settings/MembershipDetails";
import PrayerRequests from "../screens/Settings/PrayerRequests";
import MakePrayerRequest from "../screens/Settings/MakePrayerRequest";

import Colors from "../constants/Colors";

// Announcements Screen Stack
import Announcements from "../screens/Announcements/Index";

// Events Screen Stack
import Events from "../screens/Events/Index";

const AlmanacStack = createStackNavigator(
  {
    AlmanacDashboard: YearSelection,
    MonthSelection,
    AlmanacCalendar,
    ThemeLiturgyPreaching,
    CalendarAnnouncements,
    ScriptureReadings
  },
  {
    mode: "modal",
    headerMode: "none",
    defaultNavigationOptions: {
      gestureEnabled: true,
      cardOverlayEnabled: true
    }
  }
);

const BibleStudyStack = createStackNavigator({
    BibleStudyYearSelection,
    StudyGuideHome: ViewBibleStudyGuide,
},{ headerMode: "none" });

const HomeStack = createStackNavigator(
  {
    Home: HomeIndex,
    Announcements,
    Almanac: AlmanacStack,
    BibleStudyStack,
    Events
  },
  { headerMode: "none" }
);

HomeStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: "Home",
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name="home"
        type="feather"
        icon={homeIcon}
      />
    ),
    tabBarVisible: navigation.state.index <= 0
  };
};

const HymnaryStack = createStackNavigator(
  {
    HymnSelection,
    Hymnary: HymnaryIndex
  },
  { headerMode: "none" }
);

HymnaryStack.navigationOptions = {
  tabBarLabel: "Hymnary",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      type="feather"
      name="book-open"
      icon={hymnaryIcon}
    />
  )
};

const BibleStack = createStackNavigator(
  {
    BibleDashboard: BibleIndex,
    BibleBook,
    BibleChapter
  },
  { headerMode: "none" }
);

BibleStack.navigationOptions = {
  tabBarLabel: "Bible",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} type="feather" name="book" icon={bibleIcon} />
  )
};

const PaymentStack = createStackNavigator(
  {
    PaymentDashboard,
    PaymentPackages,
    PaymentOrder,
    PaymentCheckout
  },
  {
    headerMode: "null"
  }
);

PaymentStack.navigationOptions = {
  tabBarLabel: "Payments",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      type="feather"
      name="credit-card"
      icon={paymentIcon}
    />
  )
};

const MakePrayerRequestStack = createStackNavigator(
  {
    MakePrayerRequest
  },
  {
    headerMode: "none",
    mode: "modal",
    gestureEnabled: true
  }
);

const SettingsStack = createStackNavigator(
  {
    SettingsDashboard,
    Credits,
    PersonalInformation,
    ChurchSelection,
    PersonalInformationForm,
    DistrictSelection,
    CongregationSelection,
    MembershipDetails,
    PrayerRequests,
    MakePrayerRequest: MakePrayerRequestStack
  },
  {
    headerMode: "null"
  }
);

SettingsStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: "Settings",
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name="settings"
        type="feather"
        icon={settingsIcon}
      />
    ),
    tabBarVisible: navigation.state.index <= 0
  };
};

export default createBottomTabNavigator(
  {
    HomeStack,
    BibleStack,
    HymnaryStack,
    PaymentStack,
    SettingsStack
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.tintColor,
      style: { backgroundColor: "#f6f6f7" },
      animationEnabled: true
    }
  }
);
