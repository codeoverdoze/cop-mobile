import React from 'react';
import {Image, View,} from 'react-native';
import {StyledHeader, StyledText} from "../../components/Typography";
import Color from '../../constants/Colors';
import PinView from "react-native-pin-view";
import {useMutation} from "@apollo/client";
import {validateLoginMember as validateLoginMemberMutation} from "../../graphql/mutations";
import { showMessage } from 'react-native-flash-message';
import MessageImage from '../../assets/images/message.png'
import { saveAuthToken } from '../../utils'

function VerifyScreen({ navigation }) {
    const phone = navigation.getParam('phone');
    const [validateLoginMember, { loading }] = useMutation(validateLoginMemberMutation, {
        onError: ({ graphqlErrors }) => {
            showMessage({
                type: 'warning',
                message: 'Invalid PIN'
            })
        },
        onCompleted: async ({ validateLoginMember }) => {
            await saveAuthToken(validateLoginMember.mobileToken);
            navigation.navigate('LoadData')
        }
    });
    return (
        <View style={{flex: 1}}>

            <View style={{alignItems: "center", marginTop: 40}}>
                <View>
                    <StyledHeader style={{fontSize: 25, color: "#434A59"}}>Verify Phone</StyledHeader>
                </View>

                <Image source={MessageImage} style={{ width: 250, height: 200}}/>
            </View>

            <View style={[styles.header, {marginTop: 10}]}>
                <StyledHeader style={{fontSize: 25}}>Enter your verification pin</StyledHeader>
            </View>


            <View style={[styles.header, {marginTop: 5, paddingHorizontal: 20}]}>
                <StyledText style={{textAlign: "center"}}>We have sent a code to {phone}</StyledText>
            </View>

            <View style={{paddingHorizontal: 10, alignSelf: "center", marginTop: 5}}>
                <PinView
                    pinLength={5}
                    showInputs
                    inputActiveBgColor={Color.buttonColor}
                    inputViewStyle={{backgroundColor: Color.tintColor}}
                    buttonTextColor={Color.tintColor}
                    buttonBgColor="#fff"
                    onComplete={otp => {
                        validateLoginMember({
                            variables: {
                              phone, otp
                            }
                        })
                    }}
                />
            </View>
        </View>
    )
}

const styles = {
    root: {
        marginTop: 40,
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'flex-start'
    },
    header: {
        marginTop: 30,
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

export default VerifyScreen;

