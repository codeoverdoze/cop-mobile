import React from 'react';
import { ActivityIndicator, Image, TouchableOpacity, View } from 'react-native';
import { StyledHeader, StyledText } from '../../components/Typography';
import Colors from '../../constants/Colors';
import { gql, useQuery } from '@apollo/client';
import { SimpleAnimation } from 'react-native-simple-animations';
import Layout from '../../constants/Layout';
import { RFValue } from 'react-native-responsive-fontsize';

const queries = gql`
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

function LoadData({ navigation }) {
  const [doneLoading, setDoneLoading] = React.useState(false);
  const { data, error } = useQuery(queries, {
    onCompleted: () => {
      setTimeout(() => {
        setDoneLoading(true);
      }, 3000);
    },
  });

  if (error) {
    console.log('error', error);
  }

  if (doneLoading) {
    return (
      <View
        style={{
          flex: 1,
          marginTop: Layout.window.height / 4,
          alignItems: 'center',
        }}
      >
        <SimpleAnimation delay={500} duration={1000} slide direction="up" staticType="zoom">
          <Image
            source={require('../../assets/images/logo.png')}
            style={{ width: 115, height: 150, marginBottom: 50, opacity: 0.6 }}
          />
        </SimpleAnimation>

        <View style={{ alignItems: 'center' }}>
          <SimpleAnimation delay={1000} duration={3000} slide direction="up" staticType="zoom">
            <StyledHeader
              style={{ fontSize: RFValue(25), textTransform: 'capitalize' }}
            >{`Hi, ${data.memberProfile.firstName}!`}</StyledHeader>
          </SimpleAnimation>

          {data.memberProfile.group ? (
            <SimpleAnimation delay={1500} duration={3000} fade staticType="zoom">
              <StyledHeader
                style={{ fontSize: RFValue(25) }}
              >{`${data.memberProfile.group} Member`}</StyledHeader>
            </SimpleAnimation>
          ) : null}

          <SimpleAnimation delay={2000} duration={3000} fade staticType="zoom">
            <StyledHeader
              style={{ fontSize: RFValue(25) }}
            >{`${data.memberProfile.congregation.name} Congregation`}</StyledHeader>
          </SimpleAnimation>

          <SimpleAnimation delay={2500} duration={3000} fade staticType="zoom">
            <View style={{ marginTop: 20 }}>
              <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <View
                  style={{
                    borderColor: '#c3c3c3',
                    borderWidth: 1,
                    borderRadius: 5,
                    width: Layout.window.width - 50,
                    paddingVertical: 10,
                    alignItems: 'center',
                  }}
                >
                  <StyledText>Let's Begin . . .</StyledText>
                </View>
              </TouchableOpacity>
            </View>
          </SimpleAnimation>

          <SimpleAnimation delay={3000} duration={2000} fade staticType="zoom">
            <StyledText
              style={{
                fontSize: RFValue(12),
                textAlign: 'center',
                marginTop: 10,
              }}
            >
              Worship Companion &copy; 2020. Polymorph Labs
            </StyledText>
          </SimpleAnimation>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator color={Colors.tintColor} />
      <StyledHeader>Please wait</StyledHeader>
      <StyledText>We are setting up your companion...</StyledText>
    </View>
  );
}

export default LoadData;
