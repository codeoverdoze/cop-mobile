import React from "react";
import {View, Image, Dimensions, StyleSheet, TouchableOpacity} from "react-native";
import {StyledHeader, StyledText, StyledSubtitle} from "../../components/Typography";
import { Ionicons } from "@expo/vector-icons";

import onboardImage from "../../assets/images/onboard_1.png"
import Colors from "../../constants/Colors";

const window = Dimensions.get("window");

export default () => (
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
            <StyledHeader>Presby Companion</StyledHeader>
            <StyledSubtitle style={{ fontSize: 17, marginTop: 10}}>Worship just got better with Presby Companion. All your resources in one place - Almanac, Bible, Hymnary,
                Payment Platform and many more.</StyledSubtitle>
        </View>
    </View>
)


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }

});
