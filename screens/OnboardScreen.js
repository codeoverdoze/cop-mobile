import React from 'react';
import { StyledText, StyledHeader } from "../components/Typography";
import AppIntro from 'react-native-app-intro-slider';

const styles = {
    image: {
        width: 250,
        height: 320
    }
};

const IntroScreens = [
    {
        key: '1',
        title: <StyledHeader>PCG Mobile</StyledHeader>,
        text: <StyledText>Welcome to Presbyterian Church of Ghana Mobile App</StyledText>,
        image: require('../assets/images/logo.png'),
        backgroundColor: '#e6b31e',
        fontColor: '#fff',
        imageStyle: styles.image
    },
    {
        key: '2',
        title: <StyledHeader>Read bible scriptures</StyledHeader>,
        text: <StyledText>Keep track of bible scriptures and quotations at church</StyledText>,
        image: require('../assets/images/bible.png'),
        imageStyle: styles.image,
        backgroundColor: '#53cde2',
        fontColor: '#fff',
    },
    {
        key: '3',
        title: <StyledHeader>Never miss an event</StyledHeader>,
        text: <StyledText>Keep track of bible scriptures and quotations at church</StyledText>,
        image: require('../assets/images/calendar.png'),
        imageStyle: styles.image,
        backgroundColor: '#73dbc4',
        fontColor: '#fff',
    },
    {
        key: '4',
        title: <StyledHeader>Pay your tithes</StyledHeader>,
        text: <StyledText>Be reminded of tithes and pay them quickly and easily</StyledText>,
        image: require('../assets/images/coins.png'),
        imageStyle: {
            width: 300,
            height: 300
        },
        backgroundColor: '#fb929e',
        fontColor: '#fff',
    }
];

class OnboardScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = { };
    }

    render() {
        return (
            <AppIntro slides={IntroScreens} onDone={() => this.props.navigation.navigate('Login')}/>
        );
    }
}


export default OnboardScreen;