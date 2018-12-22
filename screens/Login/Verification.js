import React from 'react';
import {View, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import {Button, FormInput, FormLabel, Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {StyledText, StyledHeader, StyledSubtitle} from "../../components/Typography";
import TimerCountdown from 'react-native-timer-countdown';
import {verifySMSCode} from "../../requests";
import Color from '../../constants/Colors';
import Margin from '../../components/Margin';
import AuthInformation from "../../store/AuthInformation";

class SMSVerifyScreen extends React.Component {
    constructor(props) {
        super(props);
        this.telephone = this.props.navigation.getParam("telephone");
        this.state = {SMSCode: '', loading: false, showResendButton: false};
    }

    _navigateToMain() {
        this.props.navigation.navigate('Main');
    }

    _showResendButtonOrLoading() {
        if (!this.state.loading) {
            return (
                <TouchableOpacity onPress={() => {
                    this.setState({loading: true})
                }}>
                    <StyledText style={{color: Color.tintColor}}>Resend code</StyledText>
                </TouchableOpacity>
            )
        }

        return (
            <View>
                <ActivityIndicator animating size={'large'}/>
            </View>
        )

    }

    async _toggleResendButtonShow() {
        await this.setState({showResendButton: true})
    }


    _showTimerCountdown() {
        // Assigning this to new variable to allow this be available in scope of nested function
        const self = this;

        return (
            <TimerCountdown
                initialSecondsRemaining={1000 * 30}
                onTimeElapsed={async function () {
                    await self._toggleResendButtonShow();
                }}
                allowFontScaling={true}
                style={{fontSize: 20}}
            />
        )
    }

    async _handleSMSCodeInput(value) {
        await this.setState({SMSCode: value});
        if (this.state.SMSCode.length >= 6) {
            await this.setState({loading: true});
            try {
                const response = await verifySMSCode(this.telephone, this.state.SMSCode);
                if (response.success) {
                    console.log("Setting auth information");
                    await AuthInformation.setAuthInformation({telephone: this.telephone});
                    this.props.navigation.navigate("Main");
                }
            } catch (e) {
                throw new Error(e);
            }
        }
    }


    render() {
        console.log(this.state.showResendButton);
        return (
            <KeyboardAwareScrollView style={styles.root}>
                <View style={styles.header}>
                    <Image source={require('../../assets/images/sms-verify.png')} style={{width: 150, height: 140}}/>
                </View>

                <Margin/>

                <View style={[styles.header, {marginTop: 5}]}>
                    <StyledHeader>Enter SMS Code</StyledHeader>
                </View>


                <View style={[styles.header, {marginTop: 5, paddingLeft: 25, paddingRight: 25}]}>
                    <StyledText>
                        Code has been sent to {this.telephone} via SMS. Enter the provided code. If code has not been
                        sent,
                        wait for the timeout and retry
                    </StyledText>
                </View>

                <Margin/>
                <Margin/>
                <Margin/>

                <View style={{marginLeft: 70, marginRight: 70}}>
                    <FormInput
                        keyboardType={'numeric'}
                        onChangeText={value => this._handleSMSCodeInput(value)}
                        value={this.state.SMSCode}
                        maxLength={6}
                    />
                </View>


                <Margin/>
                <Margin/>
                <Margin/>

                <View style={{marginLeft: 40, marginRight: 40, alignSelf: 'center'}}>
                    {this.state.showResendButton ? this._showResendButtonOrLoading() : this._showTimerCountdown()}
                </View>
            </KeyboardAwareScrollView>
        )
    }
}

const styles = {
    root: {
        flex: 1,
        marginTop: 40,
        backgroundColor: '#FFFFFF',
    },
    header: {
        marginTop: 30,
        marginLeft: 17,
        marginRight: 17,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    forgotPassword: {
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginRight: 17
    },
    newUser: {
        justifyContent: 'center',
        alignSelf: 'center'
    }
};

export default SMSVerifyScreen;