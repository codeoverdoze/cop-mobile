import {
  announcementIcon,
  almanacIcon,
  bibleStudyGuideIcon,
  hymnIcon,
  lithurgicalOrderIcon,
  eventIcon,
  prayerRequestIcon,
  previousSermonsIcon
} from "../../assets/icons";

const homeItemsList = [
  {
    image: almanacIcon,
    title: "Almanac",
    content:
      "Easy access to the almanac of the Presbyterian Church of Ghana. Preacher and Scripture Reader integration",
    key: "Almanac",
    link: "Almanac"
  },
  {
    image: announcementIcon,
    title: "Announcements and Notifications",
    content:
      "Announcements from Presbytery, District and Local. Reminders on Bible reading and preaching.",
    key: "Announcements and Notifications",
    link: "Announcements"
  },
  {
    image: bibleStudyGuideIcon,
    title: "Bible Study Guide",
    content:
      "The Presbyterian Church of Ghana daily devotional and bible study guide for everyday use.",
    key: "Bible Study Guide",
    link: "BibleStudy"
  },
  {
    image: hymnIcon,
    title: "Eng | Ga | Twi Hymnary",
    content:
      "English, Twi and Ga hymnaries all in one place. Join us in singing a hymn of praise unto the Lord.",
    key: "Eng | Ga | Twi Hymnary",
    link: "HymnSelection"
  },
  {
    image: lithurgicalOrderIcon,
    title: "Liturgical Order Book",
    content: "Easy access to order of service.",
    key: "Liturgical Order Book",
    link: "LiturgyTypeSelection"
  },
  {
    image: eventIcon,
    title: "Special Events",
    content: "View upcoming church events and be ready for them.",
    key: "Special Events",
    link: "Events"
  },
  {
    image: prayerRequestIcon,
    title: "Prayer Requests",
    content: "Ask for favours from the good Lord.",
    key: "Prayer Requests",
    link: "PrayerRequests"
  },
  {
    image: previousSermonsIcon,
    title: "Previous Sermons",
    content: "Refer to previous sermons.",
    key: "Previous Sermons",
    link: "Almanac"
  }
];

export { homeItemsList };
