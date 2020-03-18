import React, {useState} from 'react';
import {View, Image, ProgressViewIOS } from "react-native";
import { StyledText } from '../../components/Typography';
import styled from 'styled-components';
import SVGIcon from '../../components/SVGIcon';
import { fastForward, fastRewind, sermonPlay } from '../../assets/icons';
import { RFValue } from 'react-native-responsive-fontsize';
import Colors from '../../constants/Colors';
import { EvilIcons } from '@expo/vector-icons';

const albumArt = require("../../assets/images/album-artwork.png");

const SermonPlayer = ({ navigation }) => {
  const {title, effectiveDate} = navigation.getParam("item");
  return (
    <PlayerContainer>

      <View style={{ marginBottom: 20}}>
        <Image source={albumArt} style={{ height: 250, width: 250}} />
      </View>
      <View style={{ marginBottom: 40}}>
        <StyledText style={{ fontFamily: 'bold', fontSize: RFValue(14), marginBottom: 10, color: Colors.tintColor }}>
          {title}
        </StyledText>
        <View style={{ flexDirection: "row", justifyContent: "space-around"}}>
          <View style={{ flexDirection: "row", justifyContent: "flex-start"}}>
            <EvilIcons name="calendar" size={25} color="#9d9d9d" />
            <StyledText style={{ color: '#9d9d9d' }}>
              { effectiveDate.toDateString() }
            </StyledText>
          </View>
          <View>
            <StyledText>8:22 PM</StyledText>
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 40, flexDirection: "row", alignItems: "space-around", marginBottom: 20}}>
        <View style={{flex: 0.5}}>
          <StyledText>1:56</StyledText>
        </View>
        <View style={{flex: 0.5}}>
          <StyledText style={{ textAlign: "right"}}>17:44</StyledText>
        </View>
      </View>
      <View style={{ backgroundColor: "green", width: "80%", marginBottom: 20}} >
        <ProgressViewIOS
          progressViewStyle="bar"
          progress={0.4}
          trackTintColor="red"
        />
      </View>
      <FloatingControlBox>
        <View style={{ flex: 0.3, justifyContent: "center", alignItems: "center"}}>
          <FastRewindContainer>
            <SVGIcon source={fastRewind} height={25} width={25} />
          </FastRewindContainer>
        </View>
        <View style={{ flex: 0.4, justifyContent: "flex-start", alignItems: "center"}}>
            <PlayPauseContainer>
              <SVGIcon source={sermonPlay} height={50} width={50} />
            </PlayPauseContainer>
        </View>
        <View style={{ flex: 0.3, justifyContent: "center", alignItems: "center"}}>
          <FastForwardContainer>
            <SVGIcon source={fastForward} height={25} width={25} />
          </FastForwardContainer>
        </View>
      </FloatingControlBox>
    </PlayerContainer>
  );
};

const FastRewindContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px; 
  border-radius: 25px; 
  border: 1px solid #25569c;
    background-color: #f5f5f5;
`;

const FastForwardContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px; 
  border-radius: 25px; 
  border: 1px solid #25569c;
    background-color: #f5f5f5;
`;

const PlayPauseContainer = styled.View`
  height: 120px;
  width: 120px;
  border-radius: 60px;
  border: 1px solid #25569c;
  background-color: #f5f5f5;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 12px 5px rgba(203, 203, 203, 0.5);

`;

const ControlBox = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  background-color: #F8FAFB;
  height: 120px;
  width: 100%;
  bottom: 50px;
`;

const FloatingControlBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: #F8FAFB;
`;

const PlayerContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F8FAFB;
`;


export default SermonPlayer;
