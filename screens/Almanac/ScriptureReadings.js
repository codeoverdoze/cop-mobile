import React from 'react';
import { View, ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import SVGIcon from '../../components/SVGIcon';
import { StyledHeader, StyledText } from '../../components/Typography';
import Layout from '../../constants/NewLayout';
import ChildScreenHeader from '../../components/ChildScreenHeader';

import { bibleIcon, communicateIcon, userAccountIcon } from '../../assets/icons';
import numberToWords from 'number-to-words';

function ScriptureReadings({ navigation }) {
  const scriptureReadings = navigation.getParam('readings');
  const readers = navigation.getParam('readers');
  const theme = {
    tintColor: '#1565c0',
    tintColorlight: '#ffffff',
    supportingColor: '#e3e3e3',
    borderColor: '#e3e3e3',
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.tintColorlight,
      }}
    >
      <ChildScreenHeader title="Scripture Readings" />

      <View style={{ padding: Layout.paddingHorizontal }}>
        <ScrollView>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: theme.borderColor,
              paddingBottom: 10,
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <StyledText style={{ fontWeight: 'bold', color: '#333333' }}>Text</StyledText>
            <SVGIcon source={bibleIcon} />
          </View>
          <View
            style={{
              marginTop: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            {scriptureReadings.map(reading => {
              return <StyledHeader style={{ fontSize: 13 }}>{reading}</StyledHeader>;
            })}
          </View>

          <View style={{ marginTop: 0 }}>
            <View style={{ paddingBottom: 10, marginTop: 20 }}>
              <View
                style={{
                  borderBottomWidth: 0.5,
                  borderBottomColor: theme.borderColor,
                  paddingBottom: 10,
                  marginTop: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <StyledText style={{ fontWeight: 'bold', color: '#333333' }}>Readers</StyledText>
                <SVGIcon source={userAccountIcon} />
              </View>
            </View>
            {!readers ? (
              <StyledText>No Readers</StyledText>
            ) : (
              readers.map((reader, i) => (
                <View
                  key={reader}
                  style={{
                    borderColor: theme.borderColor,
                    backgroundColor: theme.thirdCardColor,
                    borderWidth: 0.5,
                    borderRadius: 4,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    flexDirection: 'row',
                    marginBottom: 20,
                  }}
                >
                  <View style={{ flexDirection: 'row', flex: 12 }}>
                    <View>
                      <SVGIcon width={RFValue(30)} height={RFValue(30)} source={communicateIcon} />
                    </View>

                    <View style={{ marginLeft: 10 }}>
                      <View>
                        <StyledHeader style={{ fontSize: 13 }}>
                          {numberToWords.toOrdinal(i + 1)} service
                        </StyledHeader>
                        <StyledHeader style={{ fontSize: 13 }}>{reader}</StyledHeader>
                      </View>
                    </View>
                  </View>
                </View>
              ))
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

ScriptureReadings.navigationOptions = {
  header: null,
};

export default ScriptureReadings;
