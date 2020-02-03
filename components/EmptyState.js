import React from "react";
import { View } from "react-native";
import SVGIcon from "./SVGIcon";
import { emptyIcon } from "../assets/icons";

const EmptyState = ({ children }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SVGIcon source={emptyIcon} width="100" height="100" />
      {children}
    </View>
  );
};

export default EmptyState;
