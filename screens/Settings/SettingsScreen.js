import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import { StyledHeader, StyledText } from '../../components/Typography';
import { useQuery, gql } from '@apollo/client';
import LoadingState from '../../components/LoadingState';
import ParentScreenHeader from '../../components/ParentScreenHeader';
import styled from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { useActionSheet } from '@expo/react-native-action-sheet';
import SVGIcon from '../../components/SVGIcon';
import {
  activeNotificationIcon, adminSettingsMaleIcon,
  announceIcon, downloadIcon,
  forwardIcon,
  inviteFriends,
  notificationIcon, paymentIcon,
  preacherIcon,
  userAccountIcon,
} from '../../assets/icons';
import Colors from '../../constants/Colors';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const settings = [
  {
    _id: 1,
    title: 'Follow and Invite Friends',
    subtitle: "Share Worship Companion with loved ones",
    icon: userAccountIcon,
    url: 'https://res.cloudinary.com/demo-live/video/upload/whfikltyyajry8bfejya.mp4',
    effectiveDate: new Date(),
    type: "audio",
    coverPhoto: ""
  },
  {
    _id: 2,
    title: 'Notifications',
    subtitle: "Notifications from your congregation",
    icon: notificationIcon,
    url: 'https://res.cloudinary.com/demo-live/video/upload/whfikltyyajry8bfejya.mp4',
    effectiveDate: new Date(),
    type: "audio",
    coverPhoto: ""
  },
  {
    _id: 3,
    title: 'Privacy and Security',
    subtitle: "Read our Privacy Policy Document",
    icon: preacherIcon,
    url: 'https://res.cloudinary.com/demo-live/video/upload/whfikltyyajry8bfejya.mp4',
    effectiveDate: new Date(),
    type: "audio",
    coverPhoto: ""
  },
  {
    _id: 4,
    title: 'Payments & Seed',
    subtitle: "Pay your tithes, offertories, etc",
    icon: paymentIcon,
    url: 'https://res.cloudinary.com/demo-live/video/upload/whfikltyyajry8bfejya.mp4',
    effectiveDate: new Date(),
    type: "audio",
    coverPhoto: ""
  },
  {
    _id: 5,
    title: 'Help & Support',
    subtitle: "Pay your tithes, offertories, etc",
    icon: downloadIcon,
    url: 'https://res.cloudinary.com/demo-live/video/upload/whfikltyyajry8bfejya.mp4',
    effectiveDate: new Date(),
    type: "audio",
    coverPhoto: ""
  },
  {
    _id: 6,
    title: 'About Worship Companion',
    subtitle: "Pay your tithes, offertories, etc",
    icon: adminSettingsMaleIcon,
    url: 'https://res.cloudinary.com/demo-live/video/upload/whfikltyyajry8bfejya.mp4',
    effectiveDate: new Date(),
    type: "audio",
    coverPhoto: ""
  },
];

const imgPlaceholder = require('../../assets/images/placeholder-image.png');
const query = gql`
  query {
    memberProfile {
      _id
      firstName
      middleName
      surname
      communicant
      gender
      group
      address
      hometown
      maritalStatus
      contact {
        primaryTelephone
        secondaryTelephone
        email
        nextOfKin {
          name
          telephone
        }
      }
      congregation {
        _id
        name
        location
        catechist
        phone
        residentPastor
        district {
          name
          presbytery {
            name
          }
        }
      }
    }
    presbyteries {
      _id
      name
      zone
    }
    districts {
      _id
      name
    }
    congregations {
      _id
      name
      catechist
      location
      residentPastor
    }
  }
`;

export default function SettingsScreen({ navigation }) {
  const { showActionSheetWithOptions } = useActionSheet();
  const [displayImage, setDisplayImage] = useState(imgPlaceholder);

  const { data, loading, error } = useQuery(query);

  if (!data && loading) {
    return <LoadingState />;
  }

  if (error) {
    console.log('Error', error);
  }

  const { memberProfile } = data;
  return (
    <View style={[styles.container]}>
      <ParentScreenHeader title="Settings" />

      <ScrollView style={{ flex: 1, paddingBottom: 30 }} showsVerticalScrollIndicator={false}>
        <View style={[styles.header, { marginBottom: 0 }]}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.35 }}>
              <TouchableOpacity
                activeOpacity={0.2}
                onPress={() =>
                  showActionSheetWithOptions(
                    {
                      options: ['Delete Photo', 'Take Photo', 'Choose Photo', 'Cancel'],
                      destructiveButtonIndex: 0,
                      cancelButtonIndex: 3,
                    },
                    async buttonIndex => {
                      await handleSheetAction(buttonIndex);
                    },
                  )
                }
              >
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                  <ProfileView
                    style={{
                      height: 90,
                      width: 90,
                      borderRadius: 45,
                      borderWidth: 1,
                      borderColor: '#aeaeae',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image
                      source={displayImage}
                      style={{ height: 90, width: 90, borderRadius: 45 }}
                    />
                  </ProfileView>
                  <View style={{ position: 'absolute', paddingTop: 70, paddingLeft: 55 }}>
                    <Ionicons name="ios-camera" size={30} color="#efefef" />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 0.65, justifyContent: "center" }}>
              <StyledHeader style={{ fontSize: 16 }}>{`${memberProfile.firstName} ${memberProfile?.surname}`}</StyledHeader>
              <StyledText style={{ fontSize: RFValue(11)}}>{memberProfile?.congregation?.name}</StyledText>
              <StyledText>{memberProfile.contact.primaryTelephone}</StyledText>
            </View>
          </View>
        </View>

        <FlatList data={settings} renderItem={SettingsCard} keyExtractor={item => item._id} />

      </ScrollView>
    </View>
  );
  async function handleSheetAction(buttonIndex) {
    if (buttonIndex === 0) {
      setDisplayImage(imgPlaceholder);
    } else if (buttonIndex === 1) {
      const response = await ImagePicker.requestCameraPermissionsAsync();
      if (response.status === 'granted') {
        const imageResponseData = await ImagePicker.launchCameraAsync({ allowsEditing: false });
        if (imageResponseData.cancelled === false) {
          setDisplayImage({ uri: imageResponseData.uri });
        }
      }
    } else if (buttonIndex === 2) {
      const response = await ImagePicker.requestCameraRollPermissionsAsync();
      if (response.status === 'granted') {
        const imageResponseData = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
        });
        if (imageResponseData.cancelled === false) {
          setDisplayImage({ uri: imageResponseData.uri });
        }
      }
    }
  }

  function SettingsCard ({item}) {

    return (
      <TouchableOpacity activeOpacity={0.55} onPress={() => navigation.navigate("Credits", { item })}>
        <SettingsContainer
          style={{
            flexDirection: 'row',
          }}
        >
          <View style={{ flex: 0.15 }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <SVGIcon source={item.icon} height={40} width={40} noFill color={Colors.tintColor} />
            </View>
          </View>
          <View style={{ flex: 0.78, justifyContent: 'center', paddingLeft: 5 }}>
            <StyledText style={{ fontFamily: 'regular', fontSize: RFValue(14), marginBottom: 0, color: Colors.tintColor }}>
              { item.title }
            </StyledText>
            <StyledText style={{ fontSize: RFValue(11)}} numberOfLines={1}>
              { item.subtitle }
            </StyledText>
          </View>
          <View style={{ flex: 0.07, justifyContent: 'center', alignItems: "center" }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <EvilIcons name="chevron-right" size={25} />
            </View>
          </View>
        </SettingsContainer>
      </TouchableOpacity>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },

  header: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
  },

  main: {
    flex: 3,
  },

  mainItem: {
    backgroundColor: '#FFFFFF',
  },

  headerBar: {
    backgroundColor: '#387ecb',
    height: 80,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 40,
  },
});




const SettingsContainer = styled.View`
  box-shadow: 0px 3px 5px rgba(213, 213, 213, 0.5);
  background-color: #fefefe;
  border-radius: 5px;
  margin: 5px 20px;
  padding: 15px 10px;
`;

const ProfileView = styled.View`
  box-shadow: 0px 12px 5px rgba(183, 183, 183, 0.5);
  border: 1px solid #acacac;
`;

