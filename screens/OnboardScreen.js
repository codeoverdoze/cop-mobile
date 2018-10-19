import React from 'react';
import {Image, View} from 'react-native';
import {
    StyledTextInverse,
    StyledText,
    StyledHeaderInverse,
    StyledHeader,
    StyledSubtitle,
    StyledSubtitleInverse
} from "../components/Typography";
import {Icon, Button} from 'react-native-elements';
import Onboarding from 'react-native-onboarding-swiper';
import Colors from '../constants/Colors';


class OnboardScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Onboarding pages={ [
                {
                    title: (
                        <View style={{flex: 1, paddingBottom: 80, borderStyle: 'solid', borderColor: 'black'}}>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <StyledHeader>Welcome to PCG Mobile</StyledHeader>
                                <StyledSubtitle>Swipe to learn more</StyledSubtitle>
                            </View>
                        </View>
                    ),
                    subtitle: (
                        <View>
                            <StyledText>Hello World</StyledText>
                        </View>
                    ),
                    backgroundColor: '#FFFFFF',
                    image: (
                        <View style={{paddingTop: 90, flex: 1}}>
                            <Image source={require('../assets/images/logo.png')} style={{width: 125, height: 160}}/>
                        </View>
                    ),
                },
                {
                    title: <StyledHeaderInverse>Read the Bible</StyledHeaderInverse>,
                    subtitle: <StyledSubtitleInverse>Quick access to the bible to quotations</StyledSubtitleInverse>,
                    backgroundColor: '#5e92f3',
                    image: (
                        <Icon
                            name="bible"
                            type="material-community"
                            size={100}
                            color="white"
                        />
                    ),
                },
                {
                    title: <StyledHeaderInverse>View church schedule</StyledHeaderInverse>,
                    subtitle: <StyledTextInverse>Stay informed of church activities and plan ahead of time</StyledTextInverse>,
                    backgroundColor: '#003c8f',
                    image: (
                        <Icon name="calendar" type="font-awesome" size={100} color="white"/>
                    ),
                },
                {
                    title: <StyledHeaderInverse>Pay your tithe</StyledHeaderInverse>,
                    subtitle: (
                        <View>
                            <StyledTextInverse>Pay your tithe quickly, easily, directly from the app</StyledTextInverse>
                            <View style={{ marginTop: 20}}>
                                <View>
                                    <Button title={<StyledText style={{ color: '#1565c0'}}>Join Presby Companion</StyledText>}
                                            borderRadius={5}
                                            backgroundColor={'#FFFFFF'} containerViewStyle={{marginLeft: -36,marginRight:null,width:"125%"}}
                                            buttonStyle={{width:"100%"}}
                                            onPress={() => { this.props.navigation.navigate('Login')}}
                                    />
                                </View>


                            </View>
                        </View>
                    ),
                    backgroundColor: '#1565c0',
                    image: (
                        <Icon name="coins" type="material-community" size={100} color="white"/>
                    ),
                },
            ]} showDone={false}/>
        );
    }
}


export default OnboardScreen;