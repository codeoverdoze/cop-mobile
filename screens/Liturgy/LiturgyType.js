import React from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  View,
  TouchableOpacity
} from "react-native";
import { StyledText, StyledTextInverse } from "../../components/Typography";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import ChildScreenHeader from "../../components/ChildScreenHeader";
import SVGIcon from "../../components/SVGIcon";
import { backIcon, forwardIcon } from "../../assets/icons";

const LiturgyType = ({ navigation }) => {
  const heading = navigation.getParam("liturgyTypeName");
  const values = navigation.getParam("liturgyTypeValues");

  const navigateToLiturgyContent = (liturgyTitle, liturgyContent) => {
    navigation.navigate("LiturgyContent", { liturgyTitle, liturgyContent });
  };

  function renderValues(liturgyValue) {
    return (
      <TouchableOpacity
        onPress={() =>
          navigateToLiturgyContent(
            liturgyValue.item.title,
            liturgyValue.item.content
          )
        }
      >
        <View style={[styles.listItem]}>
          <View
            style={[styles.circleShapeView, { backgroundColor: "#4142cf" }]}
          >
            <StyledTextInverse style={{ fontSize: 20 }}>
              {liturgyValue.item.title.substr(0, 1)}
            </StyledTextInverse>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                justifyContent: "flex-start",
                paddingRight: 20,
                flex: 8
              }}
            >
              <StyledText
                style={{
                  fontSize: 14,
                  flexWrap: "wrap",
                  textTransform: "capitalize"
                }}
              >
                {liturgyValue.item.title}
              </StyledText>
            </View>
            <View style={{ alignSelf: "flex-end", flex: 2, paddingRight: 5 }}>
              <SVGIcon source={forwardIcon} width={15} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={[styles.container]}>
      <ChildScreenHeader title={heading} />

      <View style={[styles.list]}>
        <FlatList data={values} renderItem={renderValues} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    alignItems: "center"
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

export default LiturgyType;
