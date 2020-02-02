import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar
} from "react-native";
import {
  StyledHeader,
  StyledHeaderInverse,
  StyledText
} from "../../components/Typography";
import { deleteAuthToken } from "../../utils";
import LoadingState from "../../components/LoadingState";

const announcementImage = require("../../assets/images/announcement-bg.jpg");
const membershipRegistrationImage = require("../../assets/images/news-bg.png");
const bibleStudyGuideImage = require("../../assets/images/bible-study-guide.png");
const paymentImage = require("../../assets/images/payment-bg.jpg");
const almanacImage = require("../../assets/images/almanac.jpg");
const hymnalImage = require("../../assets/images/hymnal-bg.gif");
const liturgicalOrderImage = require("../../assets/images/liturgical-order.jpg");
const previousSermonsImage = require("../../assets/images/sermon.png");

const BodyItem = props => (
  <View style={[styles.bodyItem]}>
    <View style={[styles.bodyImage]}>
      <Image
        source={props.image}
        style={{ width: 60, height: 60, borderRadius: 30, padding: 0 }}
      />
    </View>

    <View style={styles.bodyContent}>
      <StyledHeader style={{ fontSize: 15 }}>{props.title}</StyledHeader>
      <StyledText>{props.content}</StyledText>
    </View>
  </View>
);

const list = [

  {
    image: almanacImage,
    title: "Almanac",
    content:
      "Easy access to the almanac of the Presbyterian Church of Ghana. Preacher and Scripture Reader integration",
    key: "Almanac",
    link: "Almanac"
  },
  {
    image: announcementImage,
    title: "Announcements and Notifications",
    content:
      "Announcements from Presbytery, District and Local. Reminders on Bible reading and preaching.",
    key: "Announcements and Notifications",
    link: "Announcements"
  },
  {
    image: bibleStudyGuideImage,
    title: "Bible Study Guide",
    content:
      "The Presbyterian Church of Ghana daily devotional and bible study guide for everyday use.",
    key: "Bible Study Guide",
    link: "BibleStudy"
  },
  {
    image: hymnalImage,
    title: "Eng | Ga | Twi Hymnary",
    content:
      "English, Twi and Ga hymnaries all in one place. Join us in singing a hymn of praise unto the Lord.",
    key: "Eng | Ga | Twi Hymnary",
    link: "HymnSelection"
  },
  {
    image: liturgicalOrderImage,
    title: "Liturgical Order Book",
    content: "Easy access to order of service.",
    key: "Liturgical Order Book",
    link: "Payments"
  },
  {
    image: membershipRegistrationImage,
    title: "Special Events",
    content: "View upcoming church events and be ready for them.",
    key: "Special Events",
    link: "Events"
  },
  {
    image: paymentImage,
    title: "Prayer Requests",
    content: "Ask for favours from the good Lord.",
    key: "Prayer Requests",
    link: "PrayerRequests"
  },
  {
    image: previousSermonsImage,
    title: "Previous Sermons",
    content: "Refer to previous sermons.",
    key: "Previous Sermons",
    link: "Almanac"
  }
];

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    StatusBar.setBarStyle("light-content");
  }

  navigate(screen) {
    this.props.navigation.navigate(screen);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.headerBar]}>
          <TouchableOpacity onPress={() => deleteAuthToken()}>
            <StyledHeaderInverse
              style={{ fontSize: 13, alignSelf: "flex-start" }}
            >
              That They All May Be One
            </StyledHeaderInverse>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={[styles.body]}>
          {list.map(item => {
            return (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate(item.link)}
                key={item.title}
              >
                <BodyItem
                  image={item.image}
                  title={item.title}
                  content={item.content}
                  key={item.key}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },

  headingContainer: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30
  },

  headerBar: {
    backgroundColor: "#387ecb",
    height: 80,
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 40
  },

  heading: {},

  body: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 40,
    paddingBottom: 100,
    backgroundColor: "#FFFFFF"
  },

  bodyItem: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center"
  },

  bodyImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  bodyContent: {
    flex: 3,
    justifyContent: "center"
  }
});
