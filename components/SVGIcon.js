import React from "react";
import SvgUri from "expo-svg-uri";
import propTypes from "prop-types";
import Colors from "../constants/Colors";

function SVGIcon(props) {
  return (
    <SvgUri
      width="33"
      height="33"
      source={props.source}
      fill={props.color ? props.color : Colors.tintColor}
      {...props}
    />
  );
}

SVGIcon.propTypes = {
    source: propTypes.object.isRequired
};

export default SVGIcon;
