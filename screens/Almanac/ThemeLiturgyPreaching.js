import React from 'react';
import { View, ScrollView } from 'react-native';
import { StyledText } from '../../components/Typography';
import Layout from '../../constants/NewLayout';
import ChildScreenHeader from '../../components/ChildScreenHeader';
import SVGIcon from '../../components/SVGIcon';
import { preacherIcon, userAccountIcon } from '../../assets/icons';
import numberToWords from 'number-to-words';

function ThemeLiturgyPreaching({ navigation }) {
  const serviceTheme = navigation.getParam('theme');
  const liturgists = navigation.getParam('liturgists');
  const preachers = navigation.getParam('preachers');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <ChildScreenHeader title={'Theme, Lithurgy & Preaching'} />
      <View style={{ padding: Layout.paddingHorizontal }}>
        <ScrollView style={{ marginTop: 10 }}>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: '#e3e3e3',
              paddingBottom: 10,
            }}
          >
            <StyledText style={{ fontWeight: 'bold', color: '#333333' }}>Theme</StyledText>
          </View>
          <View style={{ marginTop: 15 }}>
            <StyledText>{serviceTheme}</StyledText>
          </View>

          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: '#e3e3e3',
              paddingBottom: 10,
              marginTop: 40,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <StyledText style={{ fontWeight: 'bold', color: '#333333' }}>Liturgy</StyledText>
            <View style={{ fontWeight: 'bold', color: '#333333' }}>
              <SVGIcon source={userAccountIcon} />
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            {!liturgists ? (
              <StyledText>No Liturgy available</StyledText>
            ) : (
              liturgists.map(liturgist => <StyledText>{liturgist}</StyledText>)
            )}
          </View>

          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: '#e3e3e3',
              paddingBottom: 10,
              marginTop: 40,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <StyledText style={{ fontWeight: 'bold', color: '#333333' }}>Preachers</StyledText>
            <View style={{ fontWeight: 'bold', color: '#333333' }}>
              <SVGIcon source={preacherIcon} />
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            {!preachers ? (
              <StyledText>No Preachers available</StyledText>
            ) : (
              preachers.map((preacher, i) => (
                <View style={{ marginBottom: 10}}>
                  <StyledText>{numberToWords.toOrdinal(i + 1)} service</StyledText>
                  <StyledText>{preacher}</StyledText>
                </View>
              ))
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

ThemeLiturgyPreaching.navigationOptions = {
  headerMode: 'none',
};

export default ThemeLiturgyPreaching;
