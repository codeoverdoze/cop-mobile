import React from "react";
import { Dimensions } from "react-native";
import { TabView, SceneMap, TabBar, ScrollPager } from "react-native-tab-view";
import Colors from "../../constants/Colors";

import EnglishHymnSelectionScreen from "./EnglishHymnSelectionScreen";
import TwiHymnSelectionScreen from "./GaHymnSelectionScreen";
import GaHymnSelectionScreen from "./TwiHymnSelectionScreen";
import EweHymnSelectionScreen from "./EweHymnSelectionScreen";
import DangmeHymnSelectionScreen from "./DangmeHymnSelectionScreen";
import { StyledText } from "../../components/Typography";
import ParentScreenHeader from "../../components/ParentScreenHeader";

const initialLayout = { width: Dimensions.get("window").width };

export default function Hymnary() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "English" },
    { key: "second", title: "Twi" },
    { key: "third", title: "Ga" },
    { key: "fourth", title: "Dangme" },
    { key: "fifth", title: "Ewe" }
  ]);

  const renderScene = SceneMap({
    first: EnglishHymnSelectionScreen,
    second: GaHymnSelectionScreen,
    third: TwiHymnSelectionScreen,
    fourth: DangmeHymnSelectionScreen,
    fifth: EweHymnSelectionScreen
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={{ backgroundColor: "white" }}
      style={{ backgroundColor: Colors.tintColor }}
      renderLabel={({ route, focused, color }) => (
        <StyledText style={{ color, margin: 8 }}>{route.title}</StyledText>
      )}
    />
  );

  return (
    <>
      <ParentScreenHeader title="Hymnary" />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </>
  );
}
