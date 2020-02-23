import React from 'react';
import almanacData from '../../sample-data/almanac';
import { ScrollView, StyleSheet, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import ChildScreenHeader from '../../components/ChildScreenHeader';
import { Calendar } from 'react-native-calendars';
import Layout from '../../constants/NewLayout';
import { StyledHeader, StyledSubtitle, StyledText } from '../../components/Typography';
import SVGIcon from '../../components/SVGIcon';
import { bibleIcon, profileIcon, thinkingBubbleIcon } from '../../assets/icons';
import { useLazyQuery, gql } from '@apollo/client';
import { showMessage } from 'react-native-flash-message';

const query = gql`
  query($effectiveDate: Date!) {
    preachingPlanForMember(effectiveDate: $effectiveDate) {
      liturgists
      preachers
      readers
      readings
      theme
    }
  }
`;

function Almanac({ navigation }) {
  const monthName = navigation.getParam('monthName');
  const monthIndex = navigation.getParam('monthIndex');
  const yearName = navigation.getParam('yearName');

  const resolvedMonth = String(monthIndex + 1).padStart(2, '0');

  const [almanac, setAlmanac] = React.useState({
    selectedDate: `${yearName}-${resolvedMonth}-01`,
    selectedDay: 1,
    selectedMonth: monthName,
    selectedAlmanac: almanacData[yearName][monthName][0],
  });

  const markedDate = {};
  markedDate[almanac.selectedDate] = {
    selected: true,
    selectedColor: '#387ecb',
  };

  const [fetchPreachingPlan, { loading, data, error }] = useLazyQuery(query);

  if (error) {
    showMessage({
      type: 'error',
      message: 'Oops, we failed to fetch preaching plan',
      description: 'Please check your network connection',
    });
  }

  return (
    <View style={[styles.container]}>
      <ChildScreenHeader title={`${yearName} PCG Almanac`} />

      <View>
        <Calendar
          markedDates={markedDate}
          current={almanac.selectedDate}
          minDate={`2019-01-01`}
          maxDate={`2020-12-31`}
          onDayPress={onDayPress}
          monthFormat={'MMMM yyyy'}
          onMonthChange={onDayPress}
          hideExtraDays={true}
          disableMonthChange={true}
          firstDay={1}
          onPressArrowLeft={substractMonth => substractMonth()}
          onPressArrowRight={addMonth => addMonth()}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: 'black',
            dayTextColor: 'black',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: 'blue',
            arrowColor: '#387ecb',
            monthTextColor: 'black',
            textDayFontFamily: 'bible',
            textMonthFontFamily: 'bible',
            textDayHeaderFontFamily: 'bible',
            textMonthFontWeight: 'bold',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 14,
          }}
        />
      </View>
      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: Layout.paddingHorizontal,
          marginBottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View>
          <StyledHeader style={{ fontSize: 15 }}>Occasion</StyledHeader>
          <StyledSubtitle style={{ fontSize: 13 }}>
            {resolveAlmanacData(almanac.selectedAlmanac.occasion, 'occasion')}
          </StyledSubtitle>
        </View>

        <View>{loading ? <ActivityIndicator /> : null}</View>
      </View>
      <ScrollView style={{ marginTop: 0 }}>
        <View style={{ paddingTop: 0 }}>
          <View style={{ backgroundColor: '#fff' }}>
            <TouchableOpacity
              disabled={loading}
              onPress={() =>
                navigation.navigate('ThemeLiturgyPreaching', {
                  date: almanac.selectedDate,
                  theme: resolveAlmanacData(almanac.selectedAlmanac.theme, 'theme'),
                  liturgists: data.preachingPlanForMember.liturgists,
                  preachers: data.preachingPlanForMember.preachers,
                })
              }
            >
              <View
                style={{
                  paddingHorizontal: Layout.paddingHorizontal,
                  paddingTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                  marginHorizontal: 20,
                }}
              >
                <View style={{ paddingRight: 30 }}>
                  <SVGIcon width="30" height="30" source={thinkingBubbleIcon} />
                  <View style={{ height: 6 }} />
                </View>
                <View
                  style={{
                    width: '80%',
                    borderBottomWidth: 0.5,
                    borderBottomColor: '#e3e3e3',
                    paddingBottom: 10,
                  }}
                >
                  <StyledHeader style={{ fontSize: 13 }}>
                    Theme, Liturgy &amp; Preaching
                  </StyledHeader>
                  <StyledText style={{ fontSize: 12 }}>
                    Liturgical order/ Order of Service lead
                  </StyledText>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={loading}
              onPress={() =>
                navigation.navigate('ScriptureReadings', {
                  date: almanac.selectedDate,
                  readings: resolveAlmanacData(almanac.selectedAlmanac.readings, 'readings'),
                  readers: data.preachingPlanForMember.readers,
                })
              }
            >
              <View
                style={{
                  paddingHorizontal: Layout.paddingHorizontal,
                  paddingTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                  marginHorizontal: 20,
                }}
              >
                <View style={{ paddingRight: 30 }}>
                  <SVGIcon width="30" height="30" source={bibleIcon} />
                  <View style={{ height: 6 }} />
                </View>
                <View
                  style={{
                    width: '80%',
                    borderBottomWidth: 0.5,
                    borderBottomColor: '#e3e3e3',
                    paddingBottom: 10,
                  }}
                >
                  <StyledHeader style={{ fontSize: 13 }}>Scripture Readings</StyledHeader>
                  <StyledText style={{ fontSize: 12 }}>
                    The text/passage for the day as captured by the Almanac
                  </StyledText>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CalendarAnnouncements', {
                  date: almanac.selectedDate,
                })
              }
            >
              <View
                style={{
                  paddingHorizontal: Layout.paddingHorizontal,
                  paddingTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                  marginHorizontal: 20,
                }}
              >
                <View style={{ paddingRight: 30 }}>
                  <SVGIcon width="30" height="30" source={profileIcon} />
                  <View style={{ height: 6 }} />
                </View>
                <View
                  style={{
                    width: '80%',
                    borderBottomWidth: 0.5,
                    borderBottomColor: '#e3e3e3',
                    paddingBottom: 10,
                  }}
                >
                  <StyledHeader style={{ fontSize: 13 }}>Announcements</StyledHeader>
                  <StyledText style={{ fontSize: 12 }}>
                    Daily announcements and information dissemination hub
                  </StyledText>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );

  async function onDayPress(day) {
    const resolvedMonth = resolveMonthNameWithIndex(day.month);
    await setAlmanac({
      selectedDate: day.dateString,
      selectedDay: day.day,
      selectedMonth: day.month,
      selectedAlmanac: almanacData[yearName][resolvedMonth][Number(day.day) - 1],
    });
    fetchPreachingPlan({
      variables: {
        effectiveDate: almanac.selectedDate,
      },
    });
  }

  function resolveMonthNameWithIndex(index) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    index = index - 1;
    return months[index];
  }

  function resolveAlmanacData(data, type) {
    if (type === 'occasion') {
      if (data.length === 0) {
        return 'No occasion';
      }
    } else if (type === 'theme') {
      if (data.length === 0) {
        return 'No theme';
      }
    } else if (type === 'readings') {
      if (data.length === 0) {
        return ['No scripture readings'];
      }
    }
    return data;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },
});

export default Almanac;
