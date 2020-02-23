import React from 'react';
import { View } from 'react-native';

// components
import { StyledText } from '../../components/Typography';
import AnimatedItem from '../../components/AnimatedItem';
import ChildScreenHeader from '../../components/ChildScreenHeader';

export default function Payments() {
  return (
    <View style={styles.container}>
      <ChildScreenHeader title="Previous Sermons" />

      <View
        style={{ justifyContent: 'center', alignItems: 'center', flex: 0.7, paddingHorizontal: 20 }}
      >
        <AnimatedItem
          animation={require('../../assets/animations/previousSermons.json')}
          style={{ width: 300, height: 300 }}
        />
        <StyledText style={{ textAlign: 'center' }}>
          Very soon, Presby Companion will show you all the previous sermons you love and cherish
        </StyledText>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
};
