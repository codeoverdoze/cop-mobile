import React from 'react';
import {
    View, Text, Image, StyleSheet,
} from 'react-native';
import {Feather} from '@expo/vector-icons';
import PropTypes from 'prop-types';
import Colors from '../constants/Colors';
import {StyledText} from './Typography';
import {RFValue} from 'react-native-responsive-fontsize';
import Layout from '../constants/Layout';

const {heightPercentageToDP, widthPercentageToDP} = Layout;


const EventCard = ({
                       eventImage, eventName, eventDescription, eventDate, eventTime, ticketCategory,
                   }) => (
    <View>
        <View style={styles.container}>
            <View style={{borderTopLeftRadius: 10, borderTopRightRadius: 10, overflow: 'hidden'}}>
                <Image source={eventImage} style={{ height: 500 }} resizeMode="cover"/>
            </View>
            <View style={styles.detailsStyle}>
                <View
                    style={{
                        padding: 15,
                    }}
                >
                    <View style={{marginBottom: 1, paddingVertical: 5, alignItems: 'center'}}>
                        <StyledText
                            style={{
                                fontWeight: 'bold',
                                fontSize: RFValue(20),
                            }}
                        >
                            {eventName}
                        </StyledText>
                        <StyledText
                            style={{
                                fontWeight: 'bold',
                            }}
                        >
                            {eventDescription}
                        </StyledText>
                    </View>
                </View>
            </View>
        </View>
    </View>
);

EventCard.defaultProps = {
    eventImage: PropTypes.string.isRequired,
    eventName: PropTypes.string.isRequired,
    eventVenue: PropTypes.string.isRequired,
    eventDate: PropTypes.string.isRequired,
    eventTime: PropTypes.string.isRequired,
    ticketCategory: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'column',
        borderRadius: 10,
        marginTop: 20,
    },

    dot: {
        backgroundColor: Colors.supportingColor,
        borderRadius: 20,
        height: 10,
        width: 10,
    },

    horizontalIcons: {
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    textStyle: {
        color: 'white',
    },
    fab: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.tintColorlight,
        borderRadius: 25,
        height: 50,
        width: 50,
    },

    eventDetails: {
        flexDirection: 'row',
        paddingVertical: 3,
    },
    detailsStyle: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: Colors.tintColorlight,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },

    title: {
        height: heightPercentageToDP('20%'),
    },
});

export default EventCard;
