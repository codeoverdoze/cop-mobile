const announcementImage = require("../../assets/images/announcement-bg.jpg");
const membershipRegistrationImage = require("../../assets/images/news-bg.png");
const bibleStudyGuideImage = require("../../assets/images/bible-study-guide.png");
const paymentImage = require("../../assets/images/payment-bg.jpg");
const almanacImage = require("../../assets/images/almanac.jpg");
const hymnalImage = require("../../assets/images/hymnal-bg.gif");
const liturgicalOrderImage = require("../../assets/images/liturgical-order.jpg");
const previousSermonsImage = require("../../assets/images/sermon.png");

const homeItemsList = [

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

export { homeItemsList }