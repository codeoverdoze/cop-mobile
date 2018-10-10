import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import { Button, FormInput, FormLabel } from 'react-native-elements';
import { StyledText, StyledHeader } from "../components/Typography";
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

    render(){
        return(
            <View style={styles.root}>
                <View style={styles.header}>
                    <Image source={require('../assets/images/logo.png')} style={{ width: 55, height: 70}}/>
                </View>

                <Margin/>

                <View style={styles.header}>
                    <StyledHeader>Login to PCG Account</StyledHeader>
                </View>

                <Margin/>

                <View>
                    <FormLabel><StyledText>Telephone Number / Email</StyledText></FormLabel>
                    <FormInput/>
                </View>

                <Margin/>

                <View>
                    <FormLabel><StyledText>Password</StyledText></FormLabel>
                    <FormInput type='password'/>

                    <Margin/>

                    <View style={styles.forgotPassword}>
                        <StyledText style={{ color: Color.tintColor }}>Forgot Password</StyledText>
                    </View>
                </View>

                <Margin/><Margin/>

                <View><Button title='Login' raised backgroundColor={Color.tintColor} borderRadius={6} /></View>

                <Margin/>

                <View style={styles.newUser}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                        <StyledText style={{ color: Color.tintColor }}>Create an account</StyledText>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = {
    root: {
        flex: 1,
        marginTop: 40,
        backgroundColor: '#FFFFFF'
    },
    header: {
        marginLeft: 17,
        marginRight: 17,
        flexDirection: 'column',
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