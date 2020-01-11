import React, {useState} from "react";
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Image, ScrollView, View, TouchableOpacity, StatusBar, ActivityIndicator} from "react-native";
import Layout from '../../constants/NewLayout';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {StyledHeader, StyledHeaderInverse, StyledText} from "../../components/Typography";
import Slider1 from "../../assets/images/slider_image_1.png"
import Slider2 from "../../assets/images/slider_image_2.png"
import Slider3 from "../../assets/images/slider_image_3.png"
import Slider4 from "../../assets/images/breeze-pricing.png"
import Slider5 from "../../assets/images/unlimited-people.png"
import Button from "../../components/FormInput/Button";
import Input from "../../components/FormInput/Input";
import {RFValue} from "react-native-responsive-fontsize";
import {useMutation} from "@apollo/client";
import {loginMember as loginMemberMutation} from "../../graphql/mutations";
import { showMessage, hideMessage } from 'react-native-flash-message';


const sliders = [
    {
        imageURI: Slider1,
        caption: 'Your Companion, your spiritual growth',
        description: 'Presby Companion is a free to download tool to streamline your worship as a presbyterian.'
    },
    {
        imageURI: Slider2,
        caption: 'Go ye therefore and make disciples of all nations',
        description: 'The Almanac, Previous Sermons, Hymnal, Bible Study Guide and a myriad of useful resources at your fingertips.'
    },
    {
        imageURI: Slider3,
        caption: 'Information Dissemination just got better',
        description: 'A hustle-free way to reach the congregation with important information. Messages, notifications, news, updates, you name it'
    },
    {
        imageURI: Slider4,
        caption: 'Pay tithe, redeem pledges with one click',
        description: "Do not be hindered by time and space. Pay tithe, redeem pledges, contribute financially the work in His vineyard."
    },
    {
        imageURI: Slider5,
        caption: 'Join us sing a hymn of praise unto our Lord',
        description: 'Enjoy your favourite hymns, anytime, anywhere with accompanying tunes with a pure worship experience.'
    }
];


function pagination(activeSlide) {
    return (
        <Pagination
            dotsLength={5}
            activeDotIndex={activeSlide}
            containerStyle={{}}
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
            }}
            inactiveDotStyle={{
                // Define styles for inactive dots here
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
        />
    );
}


const renderSlider = ({item, index}) => (
    <View style={{justifyContent: 'center'}}>
        <View style={{justifyContent: 'center', alignItems: 'center',}}>
            <Image source={item.imageURI} style={{height: 260, width: 260, resizeMode: 'contain'}}/>
        </View>
        <View style={{justifyContent: 'center', marginTop: 10}}>
            <StyledHeaderInverse
                style={{ fontSize: 32, textAlign: 'center', paddingHorizontal: 15, color: '#3E4E5B'}}>{item.caption}</StyledHeaderInverse>
            <StyledText style={{textAlign: 'center', paddingHorizontal: 30}}>{item.description}</StyledText>
        </View>
    </View>
);

const Index = ({navigation}) => {
    StatusBar.setBarStyle('dark-content');
    const [activeSlide, setActiveSlide] = useState(0);
    const [phone, setPhone] = useState('');
    const [loginMember, {loading}] = useMutation(loginMemberMutation, {
        variables: {
            phone
        },
        onCompleted: data => {
            navigation.navigate('Verification', { phone });
        },
        onError: ({ graphQLErrors }) => {
            if(graphQLErrors[0].message === 'MemberNotExist'){
                showMessage({
                    type: "warning",
                    message: 'You have not been registered',
                    description: 'Please register as a member at your local Presby church and login with the phone provided'
                })
            }
        }
    });


    return (
        <KeyboardAwareScrollView contentContainerStyle={{flex: 1}} enableOnAndroid>
            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 40}}>
                <ScrollView>
                    <Carousel
                        data={sliders}
                        renderItem={renderSlider}
                        sliderWidth={Layout.window.width}
                        itemWidth={Layout.window.width}
                        layout="default"
                        layoutCardOffset={0}
                        keyExtractor={(item, index) => item + index}
                        enableMomentum
                        removeClippedSubviews={false}
                        onSnapToItem={(index) => setActiveSlide(index)}
                    />
                    {pagination(activeSlide)}

                    <View style={{marginHorizontal: 20, marginVertical: 0}}>
                        <View>
                            <Input
                                placeholderLabel="Phone Number"
                                value={phone}
                                onChangeText={setPhone}
                            />
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={loginMember}>
                                <Button>
                                    {
                                        !loading
                                            ?
                                            <StyledHeader style={{color: '#fff'}}>Create Account</StyledHeader>
                                            :
                                            <ActivityIndicator/>
                                    }
                                </Button>
                            </TouchableOpacity>
                        </View>
                        <StyledText style={{fontSize: RFValue(11), textAlign: 'center', color: 'red'}}>By creating an
                            account, you accept the Terms & Conditions</StyledText>
                        <StyledText style={{textAlign: 'center', fontSize: RFValue(11)}}>Contrary to popular belief,
                            Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                            from 45 BC, making it over 2000 years old.</StyledText>
                    </View>
                </ScrollView>
            </View>
        </KeyboardAwareScrollView>
    )
};

export default Index;
