import React from 'react';
import SvgUri from 'expo-svg-uri';
import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
      <SvgUri
          width="28"
          height="28"
          source={props.icon}
          fill={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
  );
}
