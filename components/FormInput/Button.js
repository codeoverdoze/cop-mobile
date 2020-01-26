import React from "react";
import { View, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import Colors from "../../constants/Colors";

function Button({ children, loading }) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 10,
          backgroundColor: Colors.tintColor,
          paddingVertical: 15,
          borderRadius: 5
        }}
      >
        {loading ? <ActivityIndicator /> : children}
      </View>
    </View>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
