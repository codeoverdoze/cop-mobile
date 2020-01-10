import React from 'react';
import SvgUri from 'expo-svg-uri';
import Colors from '../constants/Colors';

export default function MembershipIcon(props) {
    return (
        <SvgUri
            width="33"
            height="33"
            source={props.source}
            fill={props.color ? props.color : "green"}
            {...props}
        />
    );
}
