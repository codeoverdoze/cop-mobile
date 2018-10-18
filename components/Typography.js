import React from 'react';
import { Text } from 'react-native-elements';

const StyledText = (props) => {
    return <Text {...props} style={[{ fontFamily: 'regular', color: '#3E4E5B' }, props.style ]} />;
};

const StyledHeader = (props) => {
    return <Text {...props} h3 style={[{ fontFamily: 'regular', color: '#3E4E5B' }, props.style ]} />;
};

const StyledSubtitle = (props) => {
    return <Text {...props} h6 style={[{ fontFamily: 'regular', color: '#465867' }, props.style ]} />;
};

const StyledTextInverse = (props) => {
    return <Text {...props} style={[{ fontFamily: 'regular', color: '#FFFFFF' }, props.style ]} />;
};

const StyledHeaderInverse = (props) => {
    return <Text {...props} h3 style={[{ fontFamily: 'regular', color: '#FFFFFF' }, props.style ]} />;
};

const StyledSubtitleInverse = (props) => {
    return <Text {...props} h6 style={[{ fontFamily: 'regular', color: '#FFFFFF' }, props.style ]} />;
};

export { StyledHeader, StyledText, StyledSubtitle, StyledHeaderInverse, StyledSubtitleInverse, StyledTextInverse };
