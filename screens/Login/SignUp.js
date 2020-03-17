import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import styled from 'styled-components';
import Banner from '../../components/shared/Banner';
import Button from '../../components/FormInput/Button';
import Input from '../../components/FormInput/Input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Colors from '../../constants/Colors';
import { useActionSheet } from '@expo/react-native-action-sheet';
import LoadingState from '../../components/LoadingState';
import { useMutation } from '@apollo/client';

// mutations
import { onboardNewUser as onboardNewUserMutation } from '../../graphql/mutations';
import { showMessage } from 'react-native-flash-message';

const imgPlaceholder = require('../../assets/images/placeholder-image.png');

const SignUp = ({ navigation }) => {
  const { showActionSheetWithOptions } = useActionSheet();

  const [surname, setSurname] = useState('');
  const [othernames, setOthernames] = useState('');
  const [displayImage, setDisplayImage] = useState(imgPlaceholder);
  const [isComplete, setIsComplete] = useState(false);

  const [onboardNewUser, { loading: onboardLoading }] = useMutation(onboardNewUserMutation, {
    variables: {
      surname,
      firstName: othernames,
    },
    onCompleted: () => {
      navigation.navigate('SignUpCS');
    },
    onError: () => {
      showMessage({
        type: 'warning',
        message: 'Error occurred while setting up your account',
        description: 'Please try again',
      });
    },
  });


  useEffect(() => {
    if (!surname.length || !othernames.length) {
      setIsComplete(false);
    } else {
      setIsComplete(true);
    }
  }, [surname, othernames]);


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
                onPress={onboardNewUser}
                disabled={!isComplete}
              >
                <Button
                  style={{
                    marginHorizontal: 0,
                    marginBottom: 10,
                    backgroundColor: isComplete ? Colors.tintColor : '#afafaf',
                  }}
                >
                  {onboardLoading ? (
                    <ActivityIndicator />
                  ) : (
                    <Text style={{ color: '#ffffff', fontFamily: 'bold' }}>Next</Text>
                  )}
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
