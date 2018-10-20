import React from 'react';
import {View, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import {Button, FormInput, FormLabel, Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {StyledText, StyledHeader, StyledSubtitle} from "../components/Typography";
import TimerCountdown from 'react-native-timer-countdown';
import Color from '../constants/Colors';
import Margin from '../components/Margin';

class SMSVerifyScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };

    constructor(props) {
        super(props);
        this.state = {SMSCode: '', loading: false, showResendButton: false};
    }

    _navigateToMain() {
        this.props.navigation.navigate('Main');
    }

    _showResendButtonOrLoading() {
        if (!this.state.loading) {
            return (
                <TouchableOpacity onPress={() => {this.setState({ loading: true })}}>
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
                initialSecondsRemaining={1000 * 3}
                onTick={secondsRemaining => console.log('tick', secondsRemaining)}
                onTimeElapsed={async function () {
                    await self._toggleResendButtonShow();
                }}
                allowFontScaling={true}
                style={{fontSize: 20}}
            />
        )
    }

    async _handleSMSCodeInput(value) {
        const self = this;


        await this.setState({SMSCode: value});


        if (this.state.SMSCode.length >= 6) {
            await this.setState({loading: true});
            setTimeout(function () {
                self.props.navigation.navigate('Main')
            }, 3000);
        }
    }


    render() {
        console.log(this.state.showResendButton);
        return (
            <KeyboardAwareScrollView style={styles.root}>
                <View style={styles.header}>
                    <Image source={require('../assets/images/sms-verify.png')} style={{width: 150, height: 140}}/>
                </View>

                <Margin/>

                <View style={[styles.header, {marginTop: 5}]}>
                    <StyledHeader>Enter SMS Code</StyledHeader>
                </View>


                <View style={[styles.header, {marginTop: 5, paddingLeft: 25, paddingRight: 25}]}>
                    <StyledText>
                        Code has been sent to +233558691496 via SMS. Enter the provided code. If code has not been sent,
                        wait for the timeout and retry
                    </StyledText>
                </View>

                <Margin/>
                <Margin/>
                <Margin/>

                <View style={{marginLeft: 70, marginRight: 70}}>
                    <FormInput keyboardType={'numeric'} onChangeText={value => this._handleSMSCodeInput(value)} value={this.state.SMSCode}/>
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