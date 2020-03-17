import React from 'react';
import { TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { RFValue } from 'react-native-responsive-fontsize';
import { StyledText, StyledSubtitle } from '../Typography';


function Input({ placeholderLabel, placeholderPrefix, ...props }) {

  return (
    <View style={{
      flexDirection: 'row',
      borderWidth: 0.3,
      justifyContent: 'space-between',
      borderColor: '#ccc',
      backgroundColor: '#fff',
      paddingHorizontal: 15,
      borderRadius: 5,
      marginTop: 10,
    }}
    >
      <View style={{
        justifyContent: 'center',
        paddingVertical: 15,
      }}
      >
        {(placeholderPrefix)
          ? (
            <StyledSubtitle style={{ fontSize: RFValue(12), paddingRight: 1 }}>
              {placeholderPrefix}
            </StyledSubtitle>
          )
          : null}
      </View>
      <TextInput
        style={{
          flex: 5,
          fontFamily: 'regular',
          color: '#222222',
          paddingVertical: 12,
            fontSize: 14
        }}
        {...props}
      />
      {
        placeholderLabel ? (
          <View style={{
            justifyContent: 'center', paddingVertical: 12,
          }}
          >
            <StyledText style={{ fontSize: RFValue(13), color: "#dedede" }}>{placeholderLabel}</StyledText>
          </View>

        ) : null
      }
    </View>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
};

export default Input;
