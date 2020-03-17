import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import styled from 'styled-components';
import Banner from '../../components/shared/Banner';
import Button from '../../components/FormInput/Button';
import Input from '../../components/FormInput/Input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Colors from '../../constants/Colors';
import { useActionSheet, ActionSheetProvider } from '@expo/react-native-action-sheet';
import { gql, useQuery } from '@apollo/client';
import LoadingState from '../../components/LoadingState';
import RNPickerSelect from 'react-native-picker-select';
import { useMutation } from '@apollo/client';

// mutations
import { onboardNewUser as onboardNewUserMutation } from '../../graphql/mutations';
import { showMessage } from 'react-native-flash-message';

const imgPlaceholder = require('../../assets/images/placeholder-image.png');

const query = gql`
  query {
    congregations {
      name
      _id
      district {
        _id
      }
    }

    districts {
      name
      _id
      presbytery {
        _id
      }
    }

    presbyteries {
      name
      _id
    }
  }
`;

const SignUp = ({ navigation }) => {
  const { showActionSheetWithOptions } = useActionSheet();

  let transformedPresbyteries = [];
  const { data, loading, error } = useQuery(query);
  const [surname, setSurname] = useState('');
  const [othernames, setOthernames] = useState('');
  const [presbytery, setSelectedPresbytery] = useState('');
  const [district, setSelectedDistrict] = useState('');
  const [congregation, setSelectedCongregation] = useState('');
  const [transformedDistricts, setTransformedDistricts] = useState([]);
  const [transformedCongregations, setTransformedCongregations] = useState([]);
  const [displayImage, setDisplayImage] = useState(imgPlaceholder);
  const [isComplete, setIsComplete] = useState(false);

  const [onboardNewUser, { loading: onboardLoading, error: onboardError }] = useMutation(
    onboardNewUserMutation,
    {
      variables: {
        surname,
        firstName: othernames,
        congregation,
      },
      onCompleted: () => {
        navigation.navigate('LoadData');
      },
      onError: ({ graphqlErrors }) => {
        showMessage({
          type: 'warning',
          message: 'Error occurred while setting up your account',
          description: 'Please try again'
        });
      },
    },
  );

  useEffect(() => {
    if (presbytery) {
      let transformedDistricts = data?.districts?.map(d => {
        if (d.presbytery._id === presbytery) {
          return {
            label: d.name,
            value: d._id,
          };
        }
      });
      setTransformedDistricts(transformedDistricts);
    } else {
      setTransformedDistricts([]);
    }
  }, [presbytery]);

  useEffect(() => {
    if (district) {
      console.log('Selected district', district);
      let transformedCongregations = data?.congregations?.map(c => {
        if (c.district._id === district) {
          return {
            label: c.name,
            value: c._id,
          };
        }
      });
      console.log('Our trnsformed congs', transformedCongregations);
      setTransformedCongregations(transformedCongregations);
    } else {
      setTransformedCongregations([]);
    }
  }, [district]);

  if (!data && loading) {
    return <LoadingState />;
  }

  if (error) {
    console.log(error);
  }

  // Transforming data to label and value
  transformedPresbyteries = data.presbyteries.map(p => {
    return {
      label: p.name,
      value: p._id,
    };
  });

  const phone = navigation.getParam('phone');
  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, backgroundColor: '#f2f4f6' }}>
      <MainContainer>
        <Banner
          top=""
          middle="Sign Up & Registration"
          bottom="User registration - Presby Companion"
        />
        <View style={{ paddingHorizontal: 20, flex: 1, justifyContent: 'center' }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <SectionContainer>
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
                    <Ionicons name="ios-camera" size={30} color={Colors.tintColor} />
                  </View>
                </View>
              </TouchableOpacity>
              <View style={{ marginTop: 10 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    borderWidth: 0.8,
                    borderColor: '#e3e3e3',
                    paddingRight: 10,
                    paddingLeft: 20,
                    backgroundColor: '#ffffff',
                    paddingVertical: 13,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                  }}
                >
                  <RNPickerSelect
                    textInputProps={{
                      style: {
                        fontFamily: 'regular',
                      },
                    }}
                    onValueChange={setSelectedPresbytery}
                    items={transformedPresbyteries}
                    placeholder={{ value: null, label: 'Select your presbytery', color: '#eeeeee' }}
                  />
                  <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                    <EvilIcons name="chevron-down" size={20} color="black" />
                  </View>
                </View>
              </View>
              <View style={{ marginTop: 10 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    borderWidth: 0.8,
                    borderColor: '#e3e3e3',
                    paddingRight: 10,
                    paddingLeft: 20,
                    backgroundColor: '#ffffff',
                    paddingVertical: 13,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                  }}
                >
                  <RNPickerSelect
                    textInputProps={{
                      style: {
                        fontFamily: 'regular',
                      },
                    }}
                    onValueChange={setSelectedDistrict}
                    items={
                      transformedDistricts.length > 0
                        ? transformedDistricts
                        : [{ label: 'Select district', value: '' }]
                    }
                    placeholder={{ value: null, label: 'Select your district', color: '#eeeeee' }}
                  />
                  <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                    <EvilIcons name="chevron-down" size={20} color="black" />
                  </View>
                </View>
              </View>
              <View style={{ marginTop: 10 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    borderWidth: 0.8,
                    borderColor: '#e3e3e3',
                    paddingRight: 10,
                    paddingLeft: 20,
                    backgroundColor: '#ffffff',
                    paddingVertical: 13,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                  }}
                >
                  <RNPickerSelect
                    textInputProps={{
                      style: {
                        fontFamily: 'regular',
                      },
                    }}
                    onValueChange={setPresbytery => {}}
                    items={
                      transformedCongregations.length > 0
                        ? transformedCongregations
                        : [{ label: 'Select your congregation', value: '' }]
                    }
                    placeholder={{
                      value: null,
                      label: 'Select your congregation',
                      color: '#eeeeee',
                    }}
                  />
                  <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                    <EvilIcons name="chevron-down" size={20} color="black" />
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'row', flex: 1, marginTop: 0 }}>
                <View style={{ flex: 0.45, marginRight: 5 }}>
                  <Input value={surname} onChangeText={setSurname} placeholder="Surname" />
                </View>
                <View style={{ flex: 0.55, marginLeft: 5 }}>
                  <Input value={othernames} onChangeText={setOthernames} placeholder="Othernames" />
                </View>
              </View>
              <View>
                <Input placeholderLabel="Phone Number" value={phone} editable={false} />
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate('OTPVerification')}
                disabled={!isComplete}
              >
                <Button
                  style={{
                    marginHorizontal: 0,
                    marginBottom: 10,
                    backgroundColor: isComplete ? Colors.tintColor : '#afafaf',
                  }}
                >
                  <Text style={{ color: '#ffffff', fontFamily: 'bold' }}>
                    Joint Presby Companion
                  </Text>
                </Button>
              </TouchableOpacity>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 12,
                  marginVertical: 15,
                  marginHorizontal: 20,
                  fontFamily: 'regular',
                }}
              >
                Join our community of dedicated presbyterians using this app to improve their
                spiritual life.
              </Text>
            </SectionContainer>
          </ScrollView>
        </View>
      </MainContainer>
    </KeyboardAwareScrollView>
  );

  function onPresbyteryChange(presbytery) {
    setSelectedPresbytery(presbytery);
  }

  function onDistrictChange(district) {
    setSelectedDistrict(district);
  }

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
};

const SectionContainer = styled.View`
  justify-content: center;
`;

const ProfileView = styled.View`
  box-shadow: 0px 12px 5px rgba(183, 183, 183, 0.5);
  border: 1px solid #acacac;
`;

const MainContainer = styled.View`
  background-color: #f2f4f6;
  flex: 1;
  padding-top: 0px;
`;

export default SignUp;
