import React from "react";
import {Image, Text, View} from "react-native";
import styled from "styled-components";
import Colors from '../../constants/Colors';


const Banner = ({ top, middle, bottom }) => {
    return (
            <View style={{
              backgroundColor: Colors.tintColor,
              flexDirection: "row",
              borderBottomColor: "#e3e3e3",
              borderBottomWidth: 0.7,
              paddingVertical: 15,
              marginBottom: 15,
              paddingHorizontal: 10,
              alignItems: "flex-end"
            }}>
                <View style={{ flex: 0.20, justifyContent: "center", alignItems: "center"}}>
                    <Image source={require("../../assets/images/breeze-pricing.png")} style={{ height: 50, width: 50 }}/>
                </View>
                <View style={{ justifyContent: "center", flex: 0.80, }}>
                    <LightHeaderText style={{ fontFamily: "bold"}}>{ top }</LightHeaderText>
                    <LightHeaderText style={{ fontFamily: "bold"}}>{ middle }</LightHeaderText>
                    <LightHeaderText style={{ fontSize: 13}}>{ bottom }</LightHeaderText>
                </View>
            </View>
    );
};

const HeaderText = styled.Text`
	font-size: 24px;
	color: #f0f5ff;
	font-weight: bold;
	padding-left: 10px;
	text-align: center;
	font-family: "bold";
`;

const LightHeaderText = styled(HeaderText)`
	font-size: 16px;
	text-align: left;
	font-family: "regular";
	line-height: 16px;
`;

export default Banner;
