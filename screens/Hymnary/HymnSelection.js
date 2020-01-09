import React, { useState } from 'react';
import {
    StyleSheet, TextInput, TouchableOpacity, View, Keyboard,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RFValue } from 'react-native-responsive-fontsize';
import {StyledText, StyledSubtitle, StyledHeader} from '../../components/Typography';
import Colors from '../../constants/Colors';
import PinView from "react-native-pin-view";

import AnimatedItem from '../../components/AnimatedItem';
import Layout from '../../constants/NewLayout';

const { heightPercentageToDP, widthPercentageToDP } = Layout;

const HymnSelection = ({ navigation }) => {


    const handleOTPChange = (otp) => {
        setOTP(otp);
        if (otp.length === 5) {
            Keyboard.dismiss();
        }
    };

    return (
        <KeyboardAwareScrollView enableOnAndroid>
            <View style={styles.container}>
                        <View style={{ alignItems: 'center' }}>
                            <AnimatedItem
                                animation={require('../../assets/animations/verification')}
                                style={{ width: widthPercentageToDP('30%') }}
                                loop={false}
                            />
                            <StyledHeader>English Hymnary</StyledHeader>
                        </View>
                        <View style={{ justifyContent: 'center', marginBottom: 10, paddingHorizontal: 50 }}>
                            <StyledSubtitle style={[styles.StyledSubtitle, { marginBottom: 5 }]}>
                                Enter Hymn Number
                            </StyledSubtitle>
                        </View>


                        <PinView
                            pinLength={3}
                            showInputs
                            inputActiveBgColor='#23D17A'
                            deleteText={<Ionicons name='ios-backspace' size={25} />}
                            buttonTextColor="#ffffff"
                            onComplete={(value) => navigation.navigate('Hymnary', {HymnNumber: value})}
                            buttonBgColor={Colors.tintColor}
                        />
                    </View>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: heightPercentageToDP('10%'),
    },

    main: {
        padding: 20,
    },

    headerText: {
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: RFValue(15),
        color: Colors.tintColor,
    },

    StyledSubtitle: {
        fontSize: RFValue(20),
        marginTop: 5,
        color: '#333333',
        textAlign: 'center',
    },

    smallText: {
        color: '#fff',
        fontSize: RFValue(12),
        marginTop: 2,
        textAlign: 'center',
    },

    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: heightPercentageToDP('2%'),
        borderBottomWidth: 1,
        borderBottomColor: Colors.supportingColor,
        borderRadius: 5,
        height: 40,
        marginHorizontal: 50,
    },


    textInput: {
        width: '100%',
        padding: 5,
        fontSize: RFValue(12),
        fontFamily: 'regular',
        color: '#FFFFFF',
        textAlign: 'center',
    },

    buttonContainer: {
        backgroundColor: Colors.supportingColor,
        marginTop: 20,
        borderRadius: 4,
        marginHorizontal: 50,
        height: heightPercentageToDP('6%'),
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        padding: 12,
        alignItems: 'center',
        width: '100%',
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: RFValue(12),
    },

    termsOfServiceContainer: {
        justifyContent: 'center',
        marginTop: 10,
        padding: 30,
    },

    termsOfServiceText: {
        color: '#666666',
        textAlign: 'center',
    },

});


export default HymnSelection;
