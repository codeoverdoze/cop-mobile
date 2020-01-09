import React, { Component } from 'react';
import { TouchableOpacity, View, Image, StatusBar, FlatList} from "react-native";
import Grid from 'react-native-grid-component';

import {StyledText, StyledHeader, StyledHeaderInverse, StyledTextInverse} from "../../components/Typography";

// Payment class for payment transactions
import Payment from "../../store/Payment";

// Images
import mtnMoneyImage from "../../assets/images/mtn-money.jpeg";
import airtelMoneyImage from "../../assets/images/airtel-money.jpg";
import tigoMoneyImage from "../../assets/images/tigo-money.png";
import vodafoneMoneyImage from "../../assets/images/vodafone-money.png";
import visaMoneyImage from "../../assets/images/visa-money.jpg";
import mastercardMoneyImage from "../../assets/images/mastercard-money.png";

const paymentItems = [
    {
        name: "MTN Money",
        image: mtnMoneyImage,
        key: "0",
        id: "mtn",
        color: "#FFCB30"
    },
    {
        name: "Airtel Money",
        image: airtelMoneyImage,
        key: "1",
        id: "airtel",
        color: "#FF001E"
    },
    {
        name: "Tigo Cash",
        image: tigoMoneyImage,
        key: "2",
        id: "tigo",
        color: "#204174"
    },
    {
        name: "Vodafone Cash",
        image: vodafoneMoneyImage,
        key: "3",
        id: "vodafone",
        color: "#ED1930"
    },
    {
        name: "Visa",
        image: visaMoneyImage,
        key: "4",
        id: "visa",
        color: "#273472"
    },
    {
        name: "MasterCard",
        image: mastercardMoneyImage,
        key: "5",
        id: "mastercard",
        color: "#000000"
    },
];

export default class extends Component {
    constructor(props){
        super(props);
        StatusBar.setBarStyle("light-content", true);
        this.navigateToPackageSelectionScreen = this.navigateToPackageSelectionScreen.bind(this);
    }

    selectPaymentProvider(provider){
        Payment.setProvider(provider);
    }

    navigateToPackageSelectionScreen(provider){
        this.selectPaymentProvider(provider.id);
        this.props.navigation.navigate("PaymentPackages", { provider })
    }



    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.header]}>
                    <StyledHeaderInverse style={{ fontSize: 20, alignSelf: "flex-start"}}>Payments</StyledHeaderInverse>
                </View>

                <View style={[styles.main]}>
                    <View>
                        <StyledHeader style={{ fontSize: 25, textAlign: "center"}}>Where would you like to send funds from?</StyledHeader>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {
                        paymentItems.map(provider => {
                            return (
                                <View style={{ marginRight: 20}}>
                                    <TouchableOpacity onPress={() => this.navigateToPackageSelectionScreen(provider)}>
                                        <View style={{ alignSelf: "center"}}>
                                            <Image
                                                source={provider.image}
                                                style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 5 }}
                                            />
                                            <StyledTextInverse style={{ alignSelf: "center"}}>{provider.name}</StyledTextInverse>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </View>
            </View>

        );
    }
}


const styles = {
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },

    main: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: "center"
    },

    header: {
        backgroundColor: "#387ecb",
        height: 80,
        justifyContent: "center",
        flexDirection: "row",
        paddingTop: 40,
    },
};
