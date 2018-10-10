import React from 'react';
import { Text } from 'react-native-elements';

const StyledText = (props) => {
    return <Text {...props} style={[{ fontFamily: 'regular', color: '#3E4E5B' }, props.style ]} />;
};

const StyledHeader = (props) => {
    return <Text {...props} h3 style={[{ fontFamily: 'regular', color: '#3E4E5B' }, props.style ]} />;
};

const StyledSubtitle = (props) => {
    return <Text {...props} h4 style={[{ fontFamily: 'regular', color: '#3E4E5B' }, props.style ]} />;
};

const StyledSubtitleColored = (props) => {
    return <Text {...props} h4 style={[{ fontFamily: 'regular', color: '#B1BBC5' }, props.style ]} />;
};

export { StyledHeader, StyledText, StyledSubtitle, StyledSubtitleColored };
