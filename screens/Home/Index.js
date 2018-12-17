import React from 'react';
import {View, TouchableOpacity, StyleSheet, SafeAreaView, Image, ScrollView} from 'react-native';
import {StyledHeader, StyledText} from "../../components/Typography";

const announcementImage = require("../../assets/images/announcement-bg.jpg");
const membershipRegistrationImage = require("../../assets/images/news-bg.png");
const bibleStudyGuideImage = require("../../assets/images/bible-study-guide.png");
const paymentImage = require("../../assets/images/payment-bg.jpg");
const hymnalImage = require("../../assets/images/hymnal-bg.gif");
const liturgicalOrderImage = require("../../assets/images/liturgical-order.jpg");

const BodyItem = props => (
        <View style={[styles.bodyItem]}>
            <View style={[styles.bodyImage]}>
                <Image
                    source={props.image}
                    style={{width: 60, height: 60, borderRadius: 30, padding: 0}}
                />
            </View>

            <View style={styles.bodyContent}>
                <StyledHeader style={{fontSize: 15}}>{props.title}</StyledHeader>
                <StyledText>{props.content}</StyledText>
            </View>
        </View>
);


const list = [
    {
        image: announcementImage,
        title: "Announcements and Notifications",
        content: "Announcements from Presbytery, District and Local. Reminders on Bible reading and preaching.",
        key: "0",
        link: "Announcements"
    },
    {
        image: bibleStudyGuideImage,
        title: "Bible Study Guide",
        content: "The Presbyterian Church of Ghana daily devotional and bible study guide for everyday use.",
        key: "1",
        link: "BibleDashboard"
    },
    {
        image: hymnalImage,
        title: "Eng | Ga | Twi Hymnary",
        content: "English, Twi and Ga hymnaries all in one place. Join us in singing a hymn of praise unto the Lord.",
        key: "2",
        link: "Hymnary"
    },
    {
        image: liturgicalOrderImage,
        title: "Liturgical Order Book",
        content: "Easy access to order of service.",
        key: "3",
        link: "Payments"
    },
    {
        image: membershipRegistrationImage,
        title: "Membership Registration",
        content: "Complete a registration process and join the community instantly.",
        key: "4",
        link: "Payments"

    },
    {
        image: paymentImage,
        title: "Payment Platform",
        content: "Pay your tithes , redeem pledges, offertory, make donations to your community.",
        key: "5",
        link: "Tithe"
    },
    {
        image: paymentImage,
        title: "Almanac",
        content: "Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor.",
        key: "5",
        link: "Almanac"
    },
];

export default class Index extends React.Component {
    static navigationOptions = {
        header: null,
    };

    navigate(screen) {
        this.props.navigation.navigate(screen);
    }

    render() {
        return (
            <SafeAreaView style={[styles.container]}>
                <View style={[styles.headingContainer]}>
                    <View style={[styles.heading]}>
                        <StyledHeader style={{fontSize: 35, paddingBottom: 5, color: "blue"}} light>That They All May Be One</StyledHeader>
                    </View>
                </View>

                <ScrollView style={[styles.body]}>
                    {
                        list.map(item => {
                            return (
                                <TouchableOpacity onPress={() => this.props.navigation.navigate(item.link)}>
                                    <BodyItem
                                        image={item.image}
                                        title={item.title}
                                        content={item.content}
                                        key={item.key}
                                    />
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingLeft: 40,
        paddingRight: 40
    },

    headingContainer: {
        alignItems: "center",
        marginTop: 30,
        marginBottom: 30

    },

    heading: {

    },

    body: {
        paddingLeft: 20,
        paddingRight: 40,
    },

    bodyItem: {
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "center",
    },

    bodyImage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    bodyContent: {
        flex: 3,
        justifyContent: "center",
    }
});
