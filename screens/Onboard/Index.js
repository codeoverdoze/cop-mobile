import React, { Component } from "react";
import { ActivityIndicator, View, StatusBar } from "react-native";
import SwipeableViews from "react-native-swiper";
import AuthInfo from "../../store/AuthInformation";

import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";


export default class extends Component{
    constructor(props) {
        super(props);
        this.state = { loading: true };
        StatusBar.setBarStyle("dark-content")
    }


    async checkAuthInfoValidity(){
        const authInfoValid = await AuthInfo.checkAuthInfoValidity();

        if(authInfoValid){
            this._navigateToMain()
        }else{
            await this.setState({ loading: false })
        }
    }

    _navigateToLogin(){
        this.props.navigation.navigate('Login');
    }


    _navigateToMain(){
        this.props.navigation.navigate('Main');
    }

    componentDidMount() {
        const self = this;
        (async function () {
            await self.checkAuthInfoValidity()
        })()
    }

    render() {
        if(this.state.loading){
            return (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <ActivityIndicator/>
                </View>
            )
        }else{
            return (
                <SwipeableViews
                    dotColor={'#bdbdbd'}
                    activeDotColor={'#3E4E5B'}
                    automaticallyAdjustContentInsets={true}
                    bounces={true}
                    loop={false}
                >
                    <FirstPage/>
                    <SecondPage/>
                    <ThirdPage navigateToLogin={this._navigateToLogin.bind(this)}/>
                </SwipeableViews>
            );
        }
    }
}