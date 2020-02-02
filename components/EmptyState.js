import React from "react";
import { View } from "react-native";
import SVGIcon from "./SVGIcon";

const EmptyState = ({ children }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SVGIcon source={require("../assets/icons/empty.svg")} />
      {children}
    </View>
  );
};

export default EmptyState;
