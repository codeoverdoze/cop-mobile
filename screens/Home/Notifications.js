import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';
import ColorHash from 'color-hash';
import TimeAgo from 'react-native-timeago';

// components
import ChildScreenHeader from '../../components/ChildScreenHeader';
import LoadingState from '../../components/LoadingState';
import { StyledText, StyledTextInverse } from '../../components/Typography';
import Layout from '../../constants/Layout';
import { Ionicons } from '@expo/vector-icons';

const colorHash = new ColorHash();

const query = gql`
  query {
    memberNotifications {
      title
      message
      createdAt
        congregation{
            name
        }
    }
  }
`;

export default function Notifications() {
  const { loading, data } = useQuery(query);

  if (!data && loading) {
    return <LoadingState />;
  }

  return (
    <Container>
      <ChildScreenHeader title={`Notifications for ${data.memberNotifications.congregation?.name}`}/>
      {
        data.memberNotifications.length > 0 ?
          (<FlatList
            data={data.memberNotifications}
            renderItem={renderNotification}
            keyExtractor={item => item.createdAt}
          />)
          :
          (<View
            style={{
              height: 60,
              alignItems: "center",
              marginHorizontal: 20,
              marginVertical: 20,
              padding: 10,
              backgroundColor: '#fff',
              flexDirection: 'row',
              borderRadius: 5,
              borderWidth: 0.3,
              borderColor: '#d7d7d7',
            }}
          >
            <View style={{ flex: 0.10, justifyContent: "center", alignItems: "center"}}>
              <Ionicons
                name="ios-information-circle-outline"
                size={25}
                style={{ marginRight: 5, color: 'orange' }}
              />
            </View>
            <View style={{ flex: 0.90}}>
              <StyledText>Sorry, there are no announcements.</StyledText>
            </View>
          </View>)
      }

    </Container>
  );

  function renderNotification({ item }) {
    const startingLetterOfNotificationTitle = item.title.substring(0, 1);
    return (
      <View style={[styles.listItem]}>
        <View style={[{ flexDirection: 'row' }]}>
          <View style={{ width: '10%', alignSelf: 'center' }}>
            <View
              style={[
                styles.circleShapeView,
                {
                  backgroundColor: colorHash.hex(startingLetterOfNotificationTitle),
                  alignSelf: 'center',
                },
              ]}
            >
              <StyledTextInverse style={{ fontSize: 20 }}>
                {startingLetterOfNotificationTitle}
              </StyledTextInverse>
            </View>
          </View>

          <View style={{ justifyContent: 'center', width: '70%' }}>
            <StyledText style={{ fontSize: 20, marginBottom: 5 }}>{item.title}</StyledText>
            <StyledText style={{ fontSize: 16, flexWrap: 'wrap' }}>{item.message}</StyledText>
          </View>

          <View
            style={{
              alignItems: 'flex-end',
              width: '20%',
            }}
          >
            <StyledText style={{ fontSize: 10 }}>
              <TimeAgo time={item.createdAt} />
            </StyledText>
          </View>
        </View>
      </View>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: #f4f6f8;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
  },

  header: {
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
    paddingHorizontal: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: '#cecece',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Layout.window.width,
    paddingVertical: 15,
  },

  circleShapeView: {
    width: 40,
    height: 40,
    borderRadius: 150 / 2,
    backgroundColor: '#00BCD4',
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
