import React from 'react';
import { View, FlatList, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components';
import { EvilIcons } from '@expo/vector-icons';
// components
import { StyledText } from '../../components/Typography';
import AnimatedItem from '../../components/AnimatedItem';
import ChildScreenHeader from '../../components/ChildScreenHeader';
import { announceIcon, audioIcon, circlePlayIcon } from '../../assets/icons';
import SVGIcon from '../../components/SVGIcon';
import { RFValue } from 'react-native-responsive-fontsize';
import Colors from '../../constants/Colors';
import RBSheet from "react-native-raw-bottom-sheet";

const sermons = [
  {
    _id: 1,
    title: 'The Holy Spirit and you',
    url: 'https://res.cloudinary.com/demo-live/video/upload/whfikltyyajry8bfejya.mp4',
    effectiveDate: new Date(),
    type: "audio",
    coverPhoto: ""
  },
  {
    _id: 2,
    title: 'The Holy Spirit and you',
    url: 'https://res.cloudinary.com/demo-live/video/upload/whfikltyyajry8bfejya.mp4',
    effectiveDate: new Date(),
    type: "audio",
    coverPhoto: ""
  },
  {
    _id: 3,
    title: 'The Holy Spirit and you',
    url: 'https://res.cloudinary.com/demo-live/video/upload/whfikltyyajry8bfejya.mp4',
    effectiveDate: new Date(),
    type: "audio",
    coverPhoto: ""
  },
];



export default function Payments({ navigation }) {
  return (
    <View style={styles.container}>
      <ChildScreenHeader title="Announcements" />
      <View
        style={{
          marginTop: 20,
          flex: 1,
        }}
      >
        <StyledText style={{ marginLeft: 20, fontFamily: "bold"}}> All Announcements</StyledText>
        <FlatList data={sermons} renderItem={AnnouncementCard} keyExtractor={item => item._id} />
      </View>
    </View>
  );

  function AnnouncementCard ({item}) {

    return (
      <TouchableOpacity activeOpacity={0.55} onPress={() => navigation.navigate("SermonPlayer", { item })}>
        <SermonContainer
          style={{
            flexDirection: 'row',
          }}
        >
          <View style={{ flex: 0.2 }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#e3e3e3',
                width: 60,
                height: 60,
                borderRadius: 35,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <SVGIcon source={announceIcon} height={30} width={30} noFill />
            </View>
          </View>
          <View style={{ flex: 0.60, justifyContent: 'center', paddingLeft: 5 }}>
            <StyledText style={{ fontFamily: 'bold', fontSize: RFValue(14), marginBottom: 0, color: Colors.tintColor }}>
              { item.title }
            </StyledText>
            <StyledText style={{ fontSize: RFValue(11), marginBottom: 5, color: "#aeaeae" }} numberOfLines={1}>Some details for the sermon, that could scroll</StyledText>
            <View style={{ flexDirection: "row", justifyContent: "flex-start"}}>
              <EvilIcons name="calendar" size={25} color="#9d9d9d" />
              <StyledText style={{ color: '#9d9d9d' }}>
                { item.effectiveDate.toDateString() }
              </StyledText>
            </View>
          </View>
          <View style={{ flex: 0.20, justifyContent: 'flex-start', alignItems: "flex-end" }}>
            <StyledText style={{ fontSize: 12, marginBottom: 0 }}>{ item.effectiveDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) }</StyledText>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>

            </View>
          </View>
        </SermonContainer>
      </TouchableOpacity>
    );
  }

}

const SermonContainer = styled.View`
  box-shadow: 0px 12px 5px rgba(213, 213, 213, 0.5);
  background-color: #fefefe;
  border-radius: 5px;
  margin: 10px 20px;
  padding: 15px 10px;
`;

const FavouriteSermonContainer = styled.View`
  box-shadow: 0px 12px 5px rgba(213, 213, 213, 0.5);
  background-color: #fefefe;
  height: 120px;
  width: 120px;
  border-radius: 5px;
  margin: 10px 0px 10px 20px;
  padding: 15px 10px;
  align-items: center;
`;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f2f4f6',
  },
};
