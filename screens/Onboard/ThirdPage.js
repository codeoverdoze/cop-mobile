import React from "react";
import {View, Image, Dimensions, StyleSheet, TouchableOpacity} from "react-native";
import {StyledHeader, StyledText, StyledSubtitle} from "../../components/Typography";
import { Ionicons } from "@expo/vector-icons";

import onboardImage from "../../assets/images/slide_3.png"
import Colors from "../../constants/Colors";
import {Button} from "react-native-elements";

const window = Dimensions.get("window");

export default (props) => (
    <View style={styles.container}>
        <View style={[{paddingTop: 50}]}>
            <TouchableOpacity>
                <View style={{ flexDirection: "row", alignSelf: "flex-end", padding: 10}}>
                    <Ionicons
                        name="ios-information-circle-outline"
                        size={25}
                        color={Colors.tintColor}
                    />
                </View>
            </TouchableOpacity>
            <Image source={onboardImage} resizeMode="contain" style={{height: 300, width: window.width}}/>
        </View>


        <View style={{ alignItems: "center", padding: 20}}>
            <StyledHeader>Payment Platform</StyledHeader>
            <StyledSubtitle style={{ fontSize: 17, marginTop: 10}}>Pay your tithe, offertory and donations</StyledSubtitle>
            <Button title="Join Presby Companion"
                    borderRadius={5}
                    backgroundColor={'#FFFFFF'}
                    color={Colors.tintColor}
                    buttonStyle={{width:"100%"}}
                    onPress={() => props.navigateToLogin()}
            />
        </View>

    </View>
)


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }

});
