import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { StyledHeader, StyledText } from '../../components/Typography';
import { useQuery, gql } from '@apollo/client';
import LoadingState from '../../components/LoadingState';
import ParentScreenHeader from '../../components/ParentScreenHeader';
import styled from 'styled-components';
import SVGIcon from '../../components/SVGIcon';
import { forwardIcon } from '../../assets/icons';

const userProfileImage = require('../../assets/images/placeholder-image.png');
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

      <ScrollView style={{ flex: 1, paddingBottom: 30 }}>
        <View style={[styles.header, { marginBottom: 20 }]}>
          <View style={{ alignSelf: 'center' }}>
            <View style={{ alignItems: 'center' }}>
              <Image source={userProfileImage} style={{ height: 90, width: 90 }} />
            </View>
            <View style={{ alignItems: 'center' }}>
              <StyledHeader style={{ fontSize: 16 }}>
                {`${memberProfile.firstName} ${memberProfile.surname}`}
              </StyledHeader>
              <StyledText>{memberProfile.contact.primaryTelephone}</StyledText>
            </View>
          </View>
        </View>

        <View style={[styles.main]}>
          <View style={{ marginBottom: 40 }}>
            <ListBlock>
              <TouchableOpacity onPress={() => navigation.navigate('MembershipDetails')}>
                <ListItem style={{ borderBottomWidth: 0.5, borderBottomColor: '#e3e3e3' }}>
                  <View
                    style={{
                      paddingHorizontal: 20,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                      alignItems: 'center',
                    }}
                  >
                    <StyledText style={{ fontSize: 16 }}>Membership Details</StyledText>

                    <SVGIcon source={forwardIcon} width={15} />
                  </View>
                </ListItem>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('ChurchSelection')}>
                <ListItem>
                  <View
                    style={{
                      paddingHorizontal: 20,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                      alignItems: 'center',
                    }}
                  >
                    <StyledText style={{ fontSize: 16 }}>Congregation Selection</StyledText>

                    <SVGIcon source={forwardIcon} width={15} />
                  </View>
                </ListItem>
              </TouchableOpacity>
            </ListBlock>

            <ListBlock>
              <TouchableOpacity>
                <ListItem style={{ borderBottomWidth: 0.5, borderBottomColor: '#e3e3e3' }}>
                  <View
                    style={{
                      paddingHorizontal: 20,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                      alignItems: 'center',
                    }}
                  >
                    <StyledText style={{ fontSize: 16 }}>Payment Preferences</StyledText>

                    <SVGIcon source={forwardIcon} width={15} />
                  </View>
                </ListItem>
              </TouchableOpacity>

              <TouchableOpacity>
                <ListItem style={{ borderBottomWidth: 0.5, borderBottomColor: '#e3e3e3' }}>
                  <View
                    style={{
                      paddingHorizontal: 20,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                      alignItems: 'center',
                    }}
                  >
                    <StyledText style={{ fontSize: 16 }}>Help & Support</StyledText>

                    <SVGIcon source={forwardIcon} width={15} />
                  </View>
                </ListItem>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Credits')}>
                <ListItem>
                  <View
                    style={{
                      paddingHorizontal: 20,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                      alignItems: 'center',
                    }}
                  >
                    <StyledText style={{ fontSize: 16 }}>Credits</StyledText>

                    <SVGIcon source={forwardIcon} width={15} />
                  </View>
                </ListItem>
              </TouchableOpacity>
            </ListBlock>
          </View>
        </View>
      </ScrollView>
    </View>
  );
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

const ListBlock = styled.View`
  background-color: #ffffff;
  padding-vertical: 5px;
  margin-bottom: 30px;
`;

const ListItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 10px;
`;
