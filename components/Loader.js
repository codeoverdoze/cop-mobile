import React from "react";
import AnimatedItem from "./AnimatedItem";
import { View } from "react-native";

function Loader() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AnimatedItem animation={require("../assets/animations/spinner")} style={{ width: 200 }}/>
    </View>
  );
}

export default Loader;
