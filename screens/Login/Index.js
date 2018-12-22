import React from 'react';
import {View, TouchableOpacity, Image, TextInput, ActivityIndicator} from 'react-native';
import { Button, FormInput, FormLabel, Icon } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StyledText, StyledHeader, StyledSubtitle } from "../../components/Typography"
import Color from '../../constants/Colors';
import Margin from '../../components/Margin';
import { login } from "../../requests";


class LoginScreen extends React.Component{
    static navigationOptions = {
        title: 'Please sign in',
    };

    constructor(props) {
        super(props);
        this.state = { telephone: "", loading: false };
    }


    _navigateToSMSVerify(){
        this.props.navigation.navigate('SMSVerify');
    }


    async onPhoneNumberChange(value){
        await this.setState({ telephone: value });
        console.log(this.state.telephone);
    }

    async login(){
        await this.setState({ loading: true });
        try{
            const response = await login(this.state.telephone);
            await this.setState({ loading: false });
            this.props.navigation.navigate("Verification", { telephone: response.payload.telephone})
        }catch (e) {
            await this.setState({ loading: false })
        }
    }

    renderLoginButtonOrLoading(){
        return this.state.loading ?
            <ActivityIndicator size="small" color={Color.tintColor}/>
            :
            <Button
                title="Login"
                backgroundColor={Color.tintColor} borderRadius={5}
                onPress={() => this.login()}
            />
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

                <View style={{ marginLeft: 60, marginRight: 60, flexDirection: "row"}}>
                    <StyledText style={{ fontSize: 40}}>+233</StyledText>
                    <TextInput
                        style={{ fontSize: 40, fontFamily: "regular", color: '#3E4E5B', width: "100%" }}
                        keyboardType={"numeric"}
                        onChangeText={value => this.onPhoneNumberChange(value)}
                        maxLength={10}
                    />
                </View>


                <Margin/>
                <Margin/>
                <Margin/>

                <View style={{ marginLeft: 40, marginRight: 40}}>
                    {this.renderLoginButtonOrLoading()}
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