import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../constants/Colors';


function Button({ children }) {
  return (
    <View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
        backgroundColor: '#387ecb',
        paddingVertical: 15,
        borderRadius: 5,
      }}
      >
        {children}
      </View>
    </View>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
