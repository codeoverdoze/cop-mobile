import React, { useState } from 'react';
import { Switch, TextInput, TouchableOpacity, View } from 'react-native';
import { StyledHeader, StyledText } from '../../components/Typography';
import { gql, useMutation } from '@apollo/client';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Colors from '../../constants/Colors';
import Button from '../../components/FormInput/Button';
import ChildScreenHeader from '../../components/ChildScreenHeader';

const makePrayerRequestMutation = gql`
  mutation($request: String!, $anonymous: Boolean!) {
    makePrayerRequest(input: { anonymous: $anonymous, request: $request }) {
      _id
      request
      createdAt
      status
      anonymous
    }
  }
`;

const prayerRequests = gql`
  query {
    memberPrayerRequests {
      _id
      request
      createdAt
      status
      anonymous
    }
  }
`;

function MakePrayerRequest({ navigation }) {
  const [request, setRequest] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [makePrayerRequest, { loading, data, error }] = useMutation(makePrayerRequestMutation, {
    refetchQueries: [{ query: prayerRequests }],
    awaitRefetchQueries: true,
    variables: {
      request,
      anonymous,
    },
    onCompleted: () => {
      navigation.goBack(null);
    },
  });
  return (
    <KeyboardAwareScrollView>
      <ChildScreenHeader title="Make Prayer Request" />
      <View style={{ padding: 20 }}>
        <StyledHeader>Enter request</StyledHeader>
        <View>
          <TextInput
            onChangeText={setRequest}
            value={request}
            style={{
              borderWidth: 1,
              marginTop: 10,
              textAlignVertical: 'top',
              borderColor: '#e3e3e3',
              padding: 10
            }}
            multiline
            numberOfLines={5}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}
        >
          <StyledText>Anonymous request</StyledText>
          <Switch thumbColor={Colors.tintColor} onValueChange={setAnonymous} value={anonymous} />
        </View>

        <TouchableOpacity onPress={makePrayerRequest} disabled={false}>
          <Button loading={loading}>
            <StyledHeader style={{ color: '#fff' }}>Make prayer request</StyledHeader>
          </Button>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default MakePrayerRequest;
