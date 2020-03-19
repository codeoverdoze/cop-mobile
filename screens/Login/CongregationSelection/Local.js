import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StyledText } from '../../../components/Typography';
import Colors from '../../../constants/Colors';
import { gql, useQuery, useMutation } from '@apollo/client';
import ChildScreenHeader from '../../../components/ChildScreenHeader';
import { showMessage } from 'react-native-flash-message';
import { onboardNewUser as onboardNewUserMutation } from '../../../graphql/mutations';
import LoadingState from '../../../components/LoadingState';

const query = gql`
  query($district: ID!) {
    congregations(filter: { district: $district }) {
      _id
      name
    }
  }
`;

function renderCheckMark(checkValue, checkBox) {
  if (checkBox === checkValue) {
    return <Ionicons name="ios-checkmark" size={25} color={Colors.tintColor} />;
  }
}

const Local = ({ navigation }) => {
  const district = navigation.getParam('district');
  const { loading, data, error } = useQuery(query, {
    variables: {
      district: district._id,
    },
  });
  const [onboardNewUser, { loading: setCongregationLoading }] = useMutation(
    onboardNewUserMutation,
    {
      onCompleted: () => {
        showMessage({
          backgroundColor: Colors.tintColor,
          message: 'Congregation has been set successfully',
        });
        navigation.navigate('Permissions');
      },
      onError: e => {
        console.error(e.graphQLErrors[0]);
        showMessage({
          type: 'danger',
          message: 'Ooops',
          description: `We failed to set your congregation. Please try later.`,
        });
      },
    },
  );

  if (!data && loading) {
    return <LoadingState />;
  }

  if (error) {
    console.log('Error', error);
  }

  const { congregations } = data;
  return (
    <View style={[styles.container]}>
      <ChildScreenHeader title="Set Congregation" />

      <View style={{ justifyContent: 'center', width: '100%' }}>
        <View style={[styles.list]}>
          <FlatList
            data={congregations}
            keyExtractor={item => item._id}
            renderItem={({ item }) => {
              const congregation = item;
              return (
                <TouchableOpacity
                  onPress={() =>
                    onboardNewUser({
                      variables: {
                        congregation: congregation._id,
                      },
                    })
                  }
                >
                  <View style={[styles.listItem]}>
                    <View style={[{ flexDirection: 'row' }]}>
                      <View style={{ justifyContent: 'center' }}>
                        <StyledText style={{ fontSize: 16 }}>{congregation.name}</StyledText>
                      </View>
                    </View>

                    <View
                      style={{
                        height: 50,
                        alignSelf: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {renderCheckMark(congregation._id)}
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
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
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FFFFFF',
    height: '500%',
  },

  mainItem: {
    backgroundColor: '#FFFFFF',
    padding: 20,
  },

  headerBar: {
    backgroundColor: '#387ecb',
    height: 80,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 40,
  },

  list: {
    marginBottom: 70,
  },
  listItem: {
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: '#cecece',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
});

export default Local;
