import React from 'react';
import { Image, Text, View } from 'react-native';


const FamilyCardAvatar = ({imageURI, profileName}) => (
  <View style={{
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }}
  >
    <Image
      source={{ uri: imageURI }}
      style={{
        height: 70, width: 70, borderRadius: 35, borderWidth: 3, borderColor: '#ED5DB7',
      }}
    />
    <Text style={{ fontSize: 11 }}>{profileName}</Text>
  </View>
);

export default FamilyCardAvatar;
