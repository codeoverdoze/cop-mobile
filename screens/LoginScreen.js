import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import { Button, FormInput, FormLabel, Icon } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StyledText, StyledHeader, StyledSubtitle } from "../components/Typography";
import Color from '../constants/Colors';
import Margin from '../components/Margin';

class LoginScreen extends React.Component{
    static navigationOptions = {
        title: 'Please sign in',
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    _navigateToSMSVerify(){
        this.props.navigation.navigate('SMSVerify');
    }

    render(){
        return(
            <KeyboardAwareScrollView style={styles.root}>
                <View style={styles.header}>
                    <Icon name={'sms'} type='material' color={Color.tintColor} size={60}/>
                </View>

                <Margin/>

                <View style={[styles.header, { marginTop: 5}]}>
                    <StyledHeader>SMS Verification</StyledHeader>
                </View>


                <View style={[styles.header, { marginTop: 5, paddingLeft: 25, paddingRight: 25}]}>
                    <StyledText>Enter your telephone number. A code will be sent to your phone to verify that this number is yours.</StyledText>
                </View>

                <Margin/>
                <Margin/>
                <Margin/>

                <View style={{ marginLeft: 40, marginRight: 40}}>
                    <FormInput value={'+233'} keyboardType={'numeric'}/>
                </View>


                <Margin/>
                <Margin/>
                <Margin/>

                <View style={{ marginLeft: 40, marginRight: 40}}>
                    <Button
                        title={<Icon name={'angle-right'} type='font-awesome' color={'#FFFFFF'}/>}
                        backgroundColor={Color.tintColor} borderRadius={5}
                        onPress={() => this._navigateToSMSVerify()}
                    />
                </View>
            </KeyboardAwareScrollView>
        )
    }
}

const styles = {
    root: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#D3D3D3',
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

export default LoginScreen;