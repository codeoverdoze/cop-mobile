import React from "react";
import { StyleSheet, FlatList, View, TouchableOpacity } from "react-native";
import { StyledText, StyledTextInverse } from "../../components/Typography";
import ChildScreenHeader from "../../components/ChildScreenHeader";
import SVGIcon from '../../components/SVGIcon';

import { forwardIcon } from '../../assets/icons';

const years = [
  { name: "2019", key: "2019", color: "#474f85" },
  { name: "2020", key: "2020", color: "#75cac3" }
];

function YearSelection({ navigation }) {
  function goBack() {
    console.log("Going back");
    navigation.goBack();
  }

  return (
    <View style={[styles.container]}>
      <ChildScreenHeader title="Almanac by year" />

      <View style={[styles.list]}>
        <FlatList data={years} renderItem={renderYear} />
      </View>
    </View>
  );

  function navigateToMonthSelection(yearName, yearIndex) {
    navigation.navigate("MonthSelection", { yearName, yearIndex });
  }

  function renderYear(year) {
    return (
      <TouchableOpacity
        onPress={() => navigateToMonthSelection(year.item.name, year.index)}
      >
        <View style={[styles.listItem]}>
          <View style={[{ flexDirection: "row" }]}>
            <View
              style={[
                styles.circleShapeView,
                { backgroundColor: year.item.color }
              ]}
            >
              <StyledTextInverse style={{ fontSize: 20 }}>YR</StyledTextInverse>
            </View>
            <View style={{ justifyContent: "center" }}>
              <StyledText style={{ fontSize: 20 }}>{year.item.name}</StyledText>
            </View>
          </View>

          <View>
            <SVGIcon source={forwardIcon} width={15}/>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: "#FFFFFF"
  },

  header: {
    backgroundColor: "#387ecb",
    height: 80,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 40
  },

  list: {
    marginBottom: 70
  },

  listItem: {
    padding: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: "#cecece",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  circleShapeView: {
    width: 40,
    height: 40,
    borderRadius: 150 / 2,
    backgroundColor: "#00BCD4",
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default YearSelection;
