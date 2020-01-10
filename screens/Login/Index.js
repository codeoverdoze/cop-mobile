import React, {useState} from "react";
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Image, ScrollView, View, TouchableOpacity, StatusBar, ActivityIndicator} from "react-native";
import Layout from '../../constants/NewLayout';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {StyledHeader, StyledText} from "../../components/Typography";
import Slider1 from "../../assets/images/slider_image_1.png"
import Slider2 from "../../assets/images/slider_image_2.png"
import Slider3 from "../../assets/images/slider_image_3.png"
import Slider4 from "../../assets/images/slider_image_4.png"
import Slider5 from "../../assets/images/slider_image_1.png"
import Button from "../../components/FormInput/Button";
import Input from "../../components/FormInput/Input";
import {RFValue} from "react-native-responsive-fontsize";
import {useMutation} from "@apollo/client";
import {loginMember as loginMemberMutation} from "../../graphql/mutations";
import { showMessage, hideMessage } from 'react-native-flash-message';


const sliders = [
    {
        imageURI: Slider1,
        caption: 'Pay your tithe with just one click',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        imageURI: Slider2,
        caption: 'Pay your tithe with just one click',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        imageURI: Slider3,
        caption: 'Pay your tithe with just one click',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        imageURI: Slider4,
        caption: 'Pay your tithe with just one click',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        imageURI: Slider5,
        caption: 'Pay your tithe with just one click',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
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
        <View style={{justifyContent: 'center', marginTop: 20}}>
            <StyledHeader
                style={{fontSize: 32, textAlign: 'center', paddingHorizontal: 15}}>{item.caption}</StyledHeader>
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
