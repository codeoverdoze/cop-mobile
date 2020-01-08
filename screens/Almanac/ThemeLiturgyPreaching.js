import React from 'react';
import {
  View, StyleSheet, TouchableOpacity, ScrollView, StatusBar, SafeAreaView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import SvgUri from 'expo-svg-uri';
import {StyledHeader, StyledSubtitle, StyledText, SubtitleText} from '../../components/Typography';
import Layout from '../../constants/NewLayout';


function ThemeLiturgyPreaching({ navigation }) {
  const theme = {
    tintColor: '#1565c0',
    tintColorlight: '#ffffff',
    supportingColor: '#e3e3e3',
    borderColor: '#e3e3e3'
  }

  return (

    <SafeAreaView style={{
      flex: 1,
      backgroundColor: theme.tintColorlight,
    }}
    >
      <View style={{ padding: Layout.paddingHorizontal }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', marginRight: 5 }}>
              <SvgUri
                width={RFValue(14)}
                height={RFValue(14)}
                source={require('../../assets/images/chief-complaint.svg')}
                fill={theme.tintColor}
              />
            </View>
            <StyledHeader style={{ fontSize: RFValue(14) }}>Service Details</StyledHeader>
          </View>

          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View style={{ justifyContent: 'center' }}>
              <SvgUri
                width={23}
                height={23}
                source={require('../../assets/images/close.svg')}
                fill="#000000"
              />
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView style={{ marginTop: 10, paddingVertical: 10, height: '100%' }}>
          <View style={{ borderBottomWidth: 0.5, borderBottomColor: theme.borderColor, paddingBottom: 10 }}>
            <StyledText style={{ fontWeight: 'bold', color: '#333333' }}>Theme</StyledText>
          </View>
          <View style={{ marginTop: 15 }}>
            <StyledText>
              Go ye therefore and make disciples of all nations
            </StyledText>
          </View>

          <View style={{ borderBottomWidth: 0.5, borderBottomColor: theme.borderColor, paddingBottom: 10, marginTop: 40 }}>
            <StyledText style={{ fontWeight: 'bold', color: '#333333' }}>Liturgy:</StyledText>
          </View>
          <View style={{ marginTop: 15 }}>
            <StyledText>1st Service : Catechist Bright Adofo Anim</StyledText>
            <StyledText>2nd Service: Dennis Danso</StyledText>
          </View>

          <View style={{ borderBottomWidth: 0.5, borderBottomColor: theme.borderColor, paddingBottom: 10, marginTop: 40 }}>
            <StyledText style={{ fontWeight: 'bold', color: '#333333' }}>Preacher:</StyledText>
          </View>
          <View style={{ marginTop: 15 }}>
            <StyledText>1st Service : Mr. Vincent Odjaho</StyledText>
            <StyledText>2nd Service: Rev. Joshua Bbossman</StyledText>
          </View>


        </ScrollView>

      </View>
    </SafeAreaView>
  );
}

ThemeLiturgyPreaching.navigationOptions = {
  header: null,
};

export default ThemeLiturgyPreaching;