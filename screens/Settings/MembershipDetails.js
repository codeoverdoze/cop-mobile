import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { StyledHeader, StyledText } from '../../components/Typography';

import { useQuery, gql } from '@apollo/client';
import profileImage from '../../assets/images/profile.jpg';
import LoadingState from '../../components/LoadingState';
import ChildScreenHeader from '../../components/ChildScreenHeader';
import SVGIcon from '../../components/SVGIcon';
import * as icons from '../../assets/icons';

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
      folio
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
  }
`;

const MembershipDetails = () => {
  const { loading, data, error } = useQuery(query);

  if (!data && loading) {
    return <LoadingState />;
  }

  if (error) {
    console.error(error);
  }

  const { memberProfile } = data;
  return (
    <View style={[styles.container]}>
      <ChildScreenHeader title="Membership Details" />
      <View>
        <ScrollView>
          <View
            style={{
              backgroundColor: '#fff',
              paddingVertical: 10,
              borderBottomColor: '#c3c3c3',
              borderBottomWidth: 0.3,
            }}
          >
            <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
              <View style={{ flex: 3 }}>
                <Image source={profileImage} style={{ height: 90, width: 90, borderRadius: 45 }} />
              </View>
              <View style={{ flex: 7, justifyContent: 'center' }}>
                <StyledHeader style={{ textTransform: 'capitalize' }}>
                  {memberProfile.surname} {memberProfile.middleName} {memberProfile.firstName}
                </StyledHeader>
                <StyledText>{memberProfile.group}</StyledText>
                <StyledText>PCG/NLA/PXT/0273</StyledText>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                marginTop: 10,
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <SVGIcon source={icons.ringingPhoneIcon} height={20} width={20} />
                <StyledText style={{ marginLeft: 5 }}>
                  {memberProfile.contact.primaryTelephone}
                </StyledText>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <SVGIcon source={icons.phoneIcon} height={20} width={20} />
                <StyledText style={{ marginLeft: 5 }}>
                  {memberProfile.contact.secondaryTelephone || 'N/A'}
                </StyledText>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <SVGIcon source={icons.gmailIcon} height={20} width={20} />
                <StyledText style={{ marginLeft: 5 }}>{memberProfile.contact.email}</StyledText>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#ffff',
              marginTop: 10,
              borderBottomColor: '#c3c3c3',
              borderBottomWidth: 0.3,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                borderBottomColor: '#c3c3c3',
                borderBottomWidth: 0.3,
              }}
            >
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 20,
                  }}
                >
                  <SVGIcon source={icons.coupleIcon} />
                </View>
                <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                  <StyledText>Marital Status</StyledText>
                  <StyledHeader style={{ textTransform: 'capitalize' }}>
                    {memberProfile.maritalStatus}
                  </StyledHeader>
                </View>
              </View>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <SVGIcon source={icons.purposefulManIcon} />
                </View>
                <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                  <StyledText>Communicant Status</StyledText>
                  <StyledHeader>
                    {memberProfile.communicant ? 'Communicant' : 'Not Communicant'}
                  </StyledHeader>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                borderBottomColor: '#c3c3c3',
                borderBottomWidth: 0.3,
                paddingHorizontal: 20,
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <SVGIcon source={icons.userAccountIcon} />
                </View>
                <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                  <StyledText>Non Generational Group</StyledText>
                  <StyledHeader>Bible Study & Prayer Group (BSPG)</StyledHeader>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                borderBottomColor: '#c3c3c3',
                borderBottomWidth: 0.3,
              }}
            >
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 20,
                  }}
                >
                  <SVGIcon source={icons.adminSettingsMaleIcon} />
                </View>
                <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                  <StyledText>Session Member</StyledText>
                  <StyledHeader>No</StyledHeader>
                </View>
              </View>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <SVGIcon source={icons.thinkingMaleIcon} />
                </View>
                <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                  <StyledText>Baptism Status</StyledText>
                  <StyledHeader>Baptized</StyledHeader>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                borderBottomColor: '#c3c3c3',
                borderBottomWidth: 0.3,
                paddingHorizontal: 20,
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <SVGIcon source={icons.addressIcon} />
                </View>
                <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                  <StyledText>Residential Address</StyledText>
                  <StyledHeader style={{ textTransform: 'capitalize' }}>
                    {memberProfile.address}
                  </StyledHeader>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                borderBottomColor: '#c3c3c3',
                borderBottomWidth: 0.3,
                paddingHorizontal: 20,
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <SVGIcon source={icons.realEstateIcon} />
                </View>
                <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                  <StyledText>Home Town</StyledText>
                  <StyledHeader style={{ textTransform: 'capitalize' }}>
                    {memberProfile.hometown}
                  </StyledHeader>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                borderBottomColor: '#c3c3c3',
                borderBottomWidth: 0.3,
                paddingHorizontal: 20,
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <SVGIcon source={icons.landlordIcon} />
                </View>
                <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                  <StyledText>Next of Kin</StyledText>
                  <StyledHeader style={{ textTransform: 'capitalize' }}>
                    {memberProfile.contact.nextOfKin.name} |{' '}
                    {memberProfile.contact.nextOfKin.telephone}
                  </StyledHeader>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
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

export default MembershipDetails;
