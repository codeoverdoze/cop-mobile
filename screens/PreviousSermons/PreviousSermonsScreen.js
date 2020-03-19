import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { EvilIcons } from '@expo/vector-icons';
// components
import { StyledText } from '../../components/Typography';
import ChildScreenHeader from '../../components/ChildScreenHeader';
import { audioIcon, circlePlayIcon, videoIcon } from '../../assets/icons';
import SVGIcon from '../../components/SVGIcon';
import { RFValue } from 'react-native-responsive-fontsize';
import Colors from '../../constants/Colors';
import { gql, useQuery } from '@apollo/client';
import LoadingState from '../../components/LoadingState';

const sermonsQuery = gql`
  query {
    userSermons {
      title
      url
      effectiveDate
      type
    }
  }
`;

export default function PreviousSermons({ navigation }) {
  const { loading, data, error } = useQuery(sermonsQuery);

  if (loading && !data) {
    return (
      <LoadingState>
        <StyledText>Loading sermons..</StyledText>
      </LoadingState>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <StyledText>Failed to load sermons</StyledText>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ChildScreenHeader title="Sermons" />
      <View
        style={{
          marginTop: 10,
          flex: 0.35,
        }}
      >
        <StyledText style={{ marginLeft: 20, fontFamily: 'bold' }}> Favourite Sermons</StyledText>
        <FlatList
          data={data.userSermons}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={FavouriteSermonCard}
          keyExtractor={item => item._id}
        />
      </View>
      <View
        style={{
          marginTop: 5,
          flex: 1.2,
        }}
      >
        <StyledText style={{ marginLeft: 20, fontFamily: 'bold' }}> All Sermons</StyledText>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.userSermons}
          renderItem={SermonCard}
          keyExtractor={item => item._id}
        />
      </View>
    </View>
  );

  function SermonCard({ item }) {
    return (
      <TouchableOpacity
        activeOpacity={0.55}
        onPress={() => navigation.navigate('SermonPlayer', { sermon: item })}
      >
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
              {item.type === 'audio' ? (
                <SVGIcon source={audioIcon} height={30} width={30} />
              ) : (
                <SVGIcon source={videoIcon} height={30} width={30} />
              )}
            </View>
          </View>
          <View style={{ flex: 0.6, justifyContent: 'center', paddingLeft: 5 }}>
            <StyledText
              style={{
                fontFamily: 'bold',
                fontSize: RFValue(14),
                marginBottom: 0,
                color: Colors.tintColor,
              }}
            >
              {item.title}
            </StyledText>
            <StyledText
              style={{ fontSize: RFValue(11), marginBottom: 5, color: '#aeaeae' }}
              numberOfLines={1}
            >
              Some details for the sermon, that could scroll
            </StyledText>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              <EvilIcons name="calendar" size={25} color="#9d9d9d" />
              <StyledText style={{ color: '#9d9d9d' }}>
                {new Date(item.effectiveDate).toDateString()}
              </StyledText>
            </View>
          </View>
          <View style={{ flex: 0.2, justifyContent: 'center' }}>
            <StyledText style={{ fontSize: 12, marginBottom: 0, textAlign: 'center' }}>
              {new Date(item.effectiveDate).toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              })}
            </StyledText>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <SVGIcon source={circlePlayIcon} height={40} width={40} />
            </View>
          </View>
        </SermonContainer>
      </TouchableOpacity>
    );
  }
  function FavouriteSermonCard({ item }) {
    return (
      <TouchableOpacity
        activeOpacity={0.55}
        onPress={() => navigation.navigate('SermonPlayer', { item })}
      >
        <FavouriteSermonContainer>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#e3e3e3',
              width: 60,
              height: 60,
              borderRadius: 35,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 5,
            }}
          >
            <SVGIcon source={audioIcon} height={30} width={30} />
          </View>
          <StyledText style={{ textAlign: 'center', fontSize: 12 }}>{item.title}</StyledText>
        </FavouriteSermonContainer>
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
