import React from "react";
import SvgUri from "expo-svg-uri";
import propTypes from "prop-types";
import Colors from "../constants/Colors";

function SVGIcon({ source, color, ...otherProps }) {
  return (
    <SvgUri
      width="33"
      height="33"
      svgXmlData={source}
      fill={color ? color : Colors.tintColor}
      {...otherProps}
    />
  );
}

SVGIcon.propTypes = {
    source: propTypes.string.isRequired
};

export default SVGIcon;
